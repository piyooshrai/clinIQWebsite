/* ────────────────────────────────────────────────────────────────────────────
   chat-intents.ts
   Scripted intent matcher for the floating chat widget.
   Replaces the LLM call in /api/chat with deterministic keyword routing.
   ──────────────────────────────────────────────────────────────────────────── */

export interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

export interface IntentContext {
  visitorName: string
  history: ChatMessage[]
}

interface Intent {
  id: string
  /** Higher priority intents win when multiple match the same message. */
  priority: number
  /** Returns true if the user message triggers this intent. */
  match: (text: string) => boolean
  /** Returns the reply (1-2 sentences, no em-dashes, casual tone). */
  reply: (ctx: IntentContext) => string
}

/* ────────────────────────────────────────────────────────────────────────────
   HELPERS
   ──────────────────────────────────────────────────────────────────────────── */

const normalize = (s: string) => s.toLowerCase().replace(/[^\w\s@.-]/g, ' ').replace(/\s+/g, ' ').trim()

const hasAny = (text: string, terms: string[]) => {
  const t = ` ${text} `
  return terms.some((term) => t.includes(` ${term} `) || t.includes(` ${term}s `) || t.includes(`${term},`) || t.includes(`${term}.`))
}

const hasPhrase = (text: string, phrases: string[]) => phrases.some((p) => text.includes(p))

/** Last assistant reply, if any. */
const lastAssistant = (history: ChatMessage[]): string =>
  [...history].reverse().find((m) => m.role === 'assistant')?.content ?? ''

const FALLBACK_MARKERS = [
  'not my area',
  'easiest way to get this answered',
  'want to dig into',
  'take your time',
]

const isFallbackReply = (text: string) => {
  const t = text.toLowerCase()
  return FALLBACK_MARKERS.some((m) => t.includes(m))
}

/** Count consecutive fallback assistant replies at the tail of the history. */
const consecutiveFallbacks = (history: ChatMessage[]): number => {
  let count = 0
  for (let i = history.length - 1; i >= 0; i--) {
    const m = history[i]
    if (m.role === 'assistant') {
      if (isFallbackReply(m.content)) count++
      else break
    }
  }
  return count
}

/* ────────────────────────────────────────────────────────────────────────────
   COMPETITOR / EHR COMPARE LINK MAP
   Each key maps a normalized alias to the slug under /compare/<slug>.
   ──────────────────────────────────────────────────────────────────────────── */

const COMPARE_MAP: Record<string, { slug: string; label: string }> = {
  athena: { slug: 'athenahealth', label: 'athenahealth' },
  athenahealth: { slug: 'athenahealth', label: 'athenahealth' },
  athenaone: { slug: 'athenahealth', label: 'athenahealth' },
  ecw: { slug: 'eclinicalworks', label: 'eClinicalWorks' },
  eclinicalworks: { slug: 'eclinicalworks', label: 'eClinicalWorks' },
  nextgen: { slug: 'nextgen', label: 'NextGen' },
  advancedmd: { slug: 'advancedmd', label: 'AdvancedMD' },
  tebra: { slug: 'tebra', label: 'Tebra' },
  kareo: { slug: 'tebra', label: 'Tebra' },
  simplepractice: { slug: 'simplepractice', label: 'SimplePractice' },
  phreesia: { slug: 'phreesia', label: 'Phreesia' },
  clearwave: { slug: 'clearwave', label: 'Clearwave' },
  qless: { slug: 'qless', label: 'QLess' },
  waitwhile: { slug: 'waitwhile', label: 'WaitWhile' },
  prevounce: { slug: 'prevounce', label: 'Prevounce' },
  timedoc: { slug: 'timedoc', label: 'TimeDoc' },
  chroniccareiq: { slug: 'chroniccareiq', label: 'ChronicCareIQ' },
  'optimize health': { slug: 'optimize-health', label: 'Optimize Health' },
  whiteboard: { slug: 'whiteboards', label: 'whiteboards' },
  whiteboards: { slug: 'whiteboards', label: 'whiteboards' },
  spreadsheet: { slug: 'spreadsheets', label: 'spreadsheets' },
  spreadsheets: { slug: 'spreadsheets', label: 'spreadsheets' },
  'paper signin': { slug: 'paper-signin', label: 'paper sign-in' },
  'paper sign-in': { slug: 'paper-signin', label: 'paper sign-in' },
}

const matchCompare = (text: string): { slug: string; label: string } | null => {
  for (const [alias, target] of Object.entries(COMPARE_MAP)) {
    if (text.includes(alias)) return target
  }
  return null
}

/* ────────────────────────────────────────────────────────────────────────────
   PHI DETECTION
   Conservative: SSN-like, DOB-like, or "patient <Capitalized> <Capitalized>".
   ──────────────────────────────────────────────────────────────────────────── */

const PHI_PATTERNS = [
  /\b\d{3}-\d{2}-\d{4}\b/,                // SSN
  /\b\d{1,2}\/\d{1,2}\/\d{2,4}\b/,        // DOB / appointment date
  /\bpatient\s+[A-Z][a-z]+\s+[A-Z][a-z]+/, // "patient John Smith"
  /\bmrn[:\s#]+\d{4,}/i,                  // medical record number
]

const looksLikePHI = (rawText: string): boolean =>
  PHI_PATTERNS.some((p) => p.test(rawText))

/* ────────────────────────────────────────────────────────────────────────────
   INTENT LIBRARY
   priority hierarchy:
     90: hard rules (bot identity, PHI)
     80: pricing/demo (high commercial intent)
     70: core product features (RTM, pre-auth, patient-flow, check-in, etc.)
     60: EHR/competitor mentions
     50: specialty mentions
     40: about clinIQ
     30: greetings / goodbyes / acks
   ──────────────────────────────────────────────────────────────────────────── */

const INTENTS: Intent[] = [
  // ── Bot identity ────────────────────────────────────────────────────────
  {
    id: 'bot-identity',
    priority: 90,
    match: (t) =>
      hasPhrase(t, ['are you a bot', 'are you human', 'are you ai', 'are you real', 'real person', 'is this a bot', 'are you gpt', 'chatgpt', 'are you chatgpt', 'is this real']),
    reply: () =>
      "I am the clinIQ assistant. The real team replies from info@the-algo.com, usually same day.",
  },

  // ── Pricing ─────────────────────────────────────────────────────────────
  {
    id: 'pricing',
    priority: 82,
    match: (t) => hasAny(t, ['price', 'pricing', 'cost', 'pay', 'plans', 'plan', 'expensive', 'cheap', 'monthly', 'annual', 'subscription', 'quote', 'budget']) || hasPhrase(t, ['how much']),
    reply: () =>
      "For pricing and a walkthrough built around your workflow, shoot a note to info@the-algo.com and the team will get you set up.",
  },

  // ── Demo / walkthrough ──────────────────────────────────────────────────
  {
    id: 'demo',
    priority: 80,
    match: (t) => hasAny(t, ['demo', 'walkthrough', 'walk-through', 'trial', 'tour', 'sandbox']) || hasPhrase(t, ['see it', 'try it', 'try out', 'show me']),
    reply: () =>
      "Email info@the-algo.com and the team will set up a 15 minute walkthrough tailored to your specialty and EHR.",
  },

  // ── Core product: RTM ───────────────────────────────────────────────────
  {
    id: 'rtm',
    priority: 75,
    match: (t) =>
      hasAny(t, ['rtm', 'monitor', 'monitoring']) ||
      hasPhrase(t, ['98975', '98976', '98977', '98978', '98979', '98980', '98981', 'remote therapeutic', 'chronic care', 'post op', 'post-op', 'between visit']),
    reply: () =>
      "Perfect fit. CPT 98975 to 98981 runs about 120 to 150 dollars per enrolled patient per month, and clinIQ handles the compliance tracking automatically.",
  },

  // ── Core product: Pre-auth ──────────────────────────────────────────────
  {
    id: 'pre-auth',
    priority: 75,
    match: (t) =>
      hasAny(t, ['preauth', 'preauths', 'auth', 'auths', 'denial', 'denials', 'denied', 'appeal', 'appeals']) ||
      hasPhrase(t, ['prior auth', 'prior authorization', 'pre-auth', 'pre auth', 'p2p', 'peer to peer', 'lomn', 'letter of medical necessity']),
    reply: () =>
      "Yeah that one comes up a lot. clinIQ automates prior auth submission and tracking, most practices save 13 to 15 hours a week on it.",
  },

  // ── Core product: Patient flow / wait time ──────────────────────────────
  {
    id: 'patient-flow',
    priority: 72,
    match: (t) =>
      hasAny(t, ['flow', 'queue', 'queues', 'rooming', 'lobby', 'lobbyview', 'whiteboard', 'whiteboards', 'bottleneck', 'bottlenecks', 'throughput', 'lwbs']) ||
      hasPhrase(t, ['patient flow', 'wait time', 'wait times', 'waiting room', 'room status', 'real time', 'real-time']),
    reply: () =>
      "Live patient flow shows every patient and room status in real time, no more whiteboards or hallway walks. Practices typically see a 22 percent wait time drop in the first month.",
  },

  // ── Core product: Check-in ──────────────────────────────────────────────
  {
    id: 'check-in',
    priority: 70,
    match: (t) =>
      hasAny(t, ['kiosk', 'kiosks', 'intake', 'paperwork', 'forms', 'registration', 'clipboard', 'clipboards', 'copay', 'copays']) ||
      hasPhrase(t, ['check in', 'check-in', 'checkin', 'front desk', 'insurance verification']),
    reply: () =>
      "Digital check-in moves intake, insurance, consent, and copay to the patient's phone before they arrive, dropping check-in time from 7 minutes to under 3.",
  },

  // ── Core product: Scheduling / no-show ──────────────────────────────────
  {
    id: 'scheduling',
    priority: 68,
    match: (t) =>
      hasAny(t, ['schedule', 'scheduling', 'appointment', 'appointments', 'reminder', 'reminders', 'cancellation', 'cancellations', 'waitlist', 'template', 'templates']) ||
      hasPhrase(t, ['no show', 'no-show', 'no-shows', 'no shows', 'same day', 'same-day']),
    reply: () =>
      "Scheduling covers multi-provider templates, automated reminders, and same-day access. Most clinics cut no-show rates by a third within the first two months.",
  },

  // ── Core product: Analytics ─────────────────────────────────────────────
  {
    id: 'analytics',
    priority: 65,
    match: (t) =>
      hasAny(t, ['analytics', 'dashboard', 'dashboards', 'reports', 'reporting', 'metrics', 'kpi', 'kpis', 'benchmarks', 'utilization']),
    reply: () =>
      "Real time dashboards show wait times, room status, provider productivity, and no-show patterns from day one, with historical trends after a few weeks.",
  },

  // ── Core product: Telehealth ────────────────────────────────────────────
  {
    id: 'telehealth',
    priority: 65,
    match: (t) =>
      hasAny(t, ['telehealth', 'telemedicine']) || hasPhrase(t, ['video visit', 'virtual visit', 'video appointment']),
    reply: () =>
      "Telehealth is built into the same patient app, no separate logins or third-party apps. Patients tap to join, providers run it from the same dashboard.",
  },

  // ── Core product: Wearable ──────────────────────────────────────────────
  {
    id: 'wearable',
    priority: 63,
    match: (t) =>
      hasAny(t, ['wearable', 'wearables', 'oura', 'fitbit', 'garmin']) || hasPhrase(t, ['apple health', 'apple watch', 'health connect', 'patient generated']),
    reply: () =>
      "clinIQ pulls active data from Apple Health, Oura Ring, and Android Health Connect into the chart, which strengthens RTM programs without any patient data entry.",
  },

  // ── Core product: Secure messaging ──────────────────────────────────────
  {
    id: 'messaging',
    priority: 60,
    match: (t) =>
      hasAny(t, ['messaging', 'messages', 'chat', 'sms', 'texting', 'text']) || hasPhrase(t, ['secure message', 'secure messaging', 'patient messaging', 'hipaa message']),
    reply: () =>
      "HIPAA compliant patient messaging is in the same app as check-in and telehealth. Most clinics see phone volume drop by around 70 percent.",
  },

  // ── Core product: Patient app / portal ──────────────────────────────────
  {
    id: 'patient-app',
    priority: 60,
    match: (t) =>
      hasPhrase(t, ['patient app', 'patient portal', 'mobile app', 'mobile portal']) || hasAny(t, ['portal', 'app']),
    reply: () =>
      "The patient app handles check-in, appointments, messaging, forms, file exchange, telehealth, and wearables in one place. iOS, Android, and a full web portal.",
  },

  // ── EHR integration ─────────────────────────────────────────────────────
  {
    id: 'ehr-integration',
    priority: 62,
    match: (t) =>
      hasAny(t, ['ehr', 'emr', 'epic', 'cerner']) ||
      hasPhrase(t, ['replace our ehr', 'replace ehr', 'replace emr', 'rip and replace', 'integration', 'integrate', 'hl7', 'fhir', 'sit on top']),
    reply: () =>
      "clinIQ sits on top of your EHR, it does not replace it. We connect to athenahealth, eCW, NextGen, AdvancedMD, Tebra, SimplePractice, Epic, and Cerner in hours, not months.",
  },

  // ── About clinIQ ────────────────────────────────────────────────────────
  {
    id: 'about-cliniq',
    priority: 40,
    match: (t) =>
      hasPhrase(t, ['what is cliniq', 'who is cliniq', 'what does cliniq', 'tell me about cliniq', 'about cliniq', 'what do you do', 'what do you guys do', 'how does it work', 'how does cliniq work']),
    reply: () =>
      "clinIQ is the operational layer that sits on top of your EHR, adding real time patient flow, digital check-in, RTM billing, pre-auth automation, and analytics. Built for 5 to 50 provider outpatient clinics.",
  },

  // ── Specialty mentions ──────────────────────────────────────────────────
  {
    id: 'specialty',
    priority: 50,
    match: (t) =>
      hasAny(t, [
        'ortho', 'orthopedic', 'orthopedics', 'orthopaedic',
        'psych', 'psychiatry', 'psychiatric',
        'behavioral', 'mental',
        'cardio', 'cardiology', 'cardiologist',
        'derm', 'dermatology',
        'gastro', 'gi', 'gastroenterology',
        'urgent', 'urgentcare',
        'pt', 'physio', 'physical-therapy',
        'chiro', 'chiropractic', 'chiropractor',
        'pediatric', 'pediatrics', 'peds',
        'ent', 'otolaryngology',
        'ophthalmology', 'optometry', 'eye',
        'podiatry', 'podiatric', 'foot',
        'allergy', 'immunology',
        'neurology', 'neuro',
        'neurosurgery',
        'oncology', 'cancer',
        'nephrology', 'kidney', 'dialysis',
        'rheumatology', 'rheum',
        'pain',
        'mat', 'addiction', 'suboxone',
        'wound',
        'obgyn', 'ob-gyn', 'ob', 'gynecology',
        'vascular',
        'plastic', 'plastics',
        'pulmonology', 'pulm',
        'endocrine', 'endocrinology', 'diabetes',
        'infusion',
        'sports',
        'oral', 'dental',
        'primary care', 'family medicine', 'internal medicine',
      ]),
    reply: () =>
      "We support that specialty and a lot of practices like yours run on clinIQ. Want to dig into prior auth, RTM billing, or patient flow first?",
  },

  // ── Greetings ───────────────────────────────────────────────────────────
  {
    id: 'greeting',
    priority: 30,
    match: (t) => /^(hi|hello|hey|yo|sup|good (morning|afternoon|evening))[\s!.,]*$/.test(t),
    reply: ({ visitorName }) =>
      visitorName
        ? `Hey ${visitorName}. What is going on at your clinic?`
        : 'Hey there. What is going on at your clinic?',
  },

  // ── Thanks / acknowledgments ────────────────────────────────────────────
  {
    id: 'thanks',
    priority: 30,
    match: (t) => /^(thanks|thank you|ty|thx|appreciate it|cool|nice|got it|gotcha)[\s!.,]*$/.test(t),
    reply: () => 'Anytime. Anything else I can help with on the operations side?',
  },

  // ── Goodbye ─────────────────────────────────────────────────────────────
  {
    id: 'goodbye',
    priority: 30,
    match: (t) => /^(bye|goodbye|cya|see you|see ya|ttyl|talk later|gotta go|gtg)[\s!.,]*$/.test(t),
    reply: () =>
      "Take care. When you are ready, info@the-algo.com is the fastest way to reach the team.",
  },

  // ── Vague / single-word filler ──────────────────────────────────────────
  {
    id: 'vague-ack',
    priority: 25,
    match: (t) => /^(ok|okay|k|sure|yes|yeah|yep|maybe|idk|i don['']?t know|hmm+|um+|uh+)[\s!.,?]*$/.test(t),
    reply: () =>
      "Want to dig into prior auth, RTM billing, patient flow, or pricing first?",
  },

  // ── Email-as-message (visitor pasting their email mid-chat) ─────────────
  {
    id: 'email-shared',
    priority: 45,
    match: (t) => /\b[^\s@]+@[^\s@]+\.[^\s@]+\b/.test(t) && t.split(' ').length <= 4,
    reply: () =>
      "Got it. The team at info@the-algo.com will reach out, usually within the same business day.",
  },
]

/* ────────────────────────────────────────────────────────────────────────────
   MATCH ENTRY POINT
   Returns { reply, intentId, isFallback } based on:
     1. PHI detection (highest)
     2. Competitor / EHR vendor mention (with /compare link)
     3. Highest-priority matching intent
     4. Fallback tier (escalates on 2nd consecutive miss)
   ──────────────────────────────────────────────────────────────────────────── */

export interface MatchResult {
  reply: string
  intentId: string
  isFallback: boolean
}

export function matchIntent(rawText: string, ctx: IntentContext): MatchResult {
  // Empty input (shouldn't happen because client blocks it, defensive)
  if (!rawText || !rawText.trim()) {
    return {
      reply: 'Did not quite catch that. What is going on at your clinic?',
      intentId: 'empty',
      isFallback: true,
    }
  }

  // PHI guard runs against the RAW text (preserves casing/punctuation)
  if (looksLikePHI(rawText)) {
    return {
      reply:
        "Please do not share patient info here. Reach the team at info@the-algo.com on a secure channel and they will take it from there.",
      intentId: 'phi-detected',
      isFallback: false,
    }
  }

  const text = normalize(rawText)

  // Competitor / EHR compare page link
  const compare = matchCompare(text)
  if (
    compare &&
    (hasPhrase(text, ['vs', 'versus', 'compared', 'compare', 'instead of', 'switch from', 'we use', 'we have', 'currently on', 'currently use']) ||
      hasAny(text, ['better', 'difference', 'replace']))
  ) {
    return {
      reply: `Here is a side by side on clinIQ vs ${compare.label}: https://cliniqhealthcare.com/compare/${compare.slug}. Happy to answer specific questions on it.`,
      intentId: `compare-${compare.slug}`,
      isFallback: false,
    }
  }

  // Highest-priority matching intent
  const matches = INTENTS.filter((i) => i.match(text)).sort((a, b) => b.priority - a.priority)
  if (matches.length > 0) {
    const winner = matches[0]
    return {
      reply: winner.reply(ctx),
      intentId: winner.id,
      isFallback: false,
    }
  }

  // Fallback tier: escalate on consecutive misses
  const prior = consecutiveFallbacks(ctx.history)
  if (prior === 0) {
    return {
      reply:
        "Not my area. I help with clinic operations like patient flow, check-in, RTM billing, and pre-auth. What is slowing your team down?",
      intentId: 'fallback-1',
      isFallback: true,
    }
  }
  if (prior === 1) {
    return {
      reply:
        "Easiest way to get this answered is info@the-algo.com, the team will get back same day.",
      intentId: 'fallback-2',
      isFallback: true,
    }
  }
  return {
    reply:
      "Take your time. When you are ready, info@the-algo.com is the fastest way to reach the team.",
    intentId: 'fallback-3',
    isFallback: true,
  }
}
