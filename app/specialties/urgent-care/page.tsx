import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import s from '@/app/specialties/specialty-full.module.css'

export const metadata: Metadata = {
  title: 'Clinic Management Software for Urgent Care | Cut LWBS & Wait Times | clinIQ',
  description:
    'Real-time patient flow for urgent care clinics. Stop capacity-blind check-in. Reduce LWBS. Give front desk a live board instead of a guessing game. Works with any EHR.',
  openGraph: {
    title: 'clinIQ for Urgent Care — Intelligent Patient Flow That Stops LWBS',
    description:
      'Urgent care clinics using clinIQ cut LWBS by 30%+, recover 20+ staff hours of overtime per month, and give front desk real visibility instead of chaos.',
    type: 'website',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cliniq.com' },
    { '@type': 'ListItem', position: 2, name: 'Specialties', item: 'https://cliniq.com/specialties' },
    { '@type': 'ListItem', position: 3, name: 'Urgent Care', item: 'https://cliniq.com/specialties/urgent-care' },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'clinIQ Patient Flow Software for Urgent Care',
  description:
    'Real-time patient tracking and clinic orchestration software built for urgent care. Reduces LWBS, cuts wait times, and eliminates capacity-blind walk-in check-in.',
  provider: { '@type': 'Organization', name: 'clinIQ', url: 'https://cliniq.com' },
  serviceType: 'Healthcare Operations Software',
  areaServed: 'US',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does clinIQ reduce left-without-being-seen (LWBS) rates in urgent care?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'clinIQ reduces LWBS by making wait times visible to patients via LobbyView before they decide to leave, and by giving front desk capacity-aware check-in rules so the queue never silently overflows. When patients can see an honest wait estimate, they make informed decisions — and fewer leave without telling anyone.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is capacity-blind check-in and why is it a problem for urgent care?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Capacity-blind check-in means accepting walk-in patients without any real-time signal of current queue depth or provider availability. Most urgent care check-in systems simply stamp a time and admit patients regardless of backlog — leading to overloaded providers, extended staff overtime, and lobbies where patients wait 90+ minutes before deciding to leave. clinIQ replaces this with configurable rules that tie check-in to actual capacity.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does clinIQ replace our EHR?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. clinIQ works alongside your existing EHR — it does not replace it. clinIQ adds the operational orchestration layer that most EHRs are not designed to provide: real-time patient location, status, and readiness signals across every stage of the visit.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does clinIQ take to implement in an urgent care clinic?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most urgent care clinics are fully operational on clinIQ within days. There is no lengthy EHR replacement process. Configuration is guided, and the interface is designed to be learned in a single shift.',
      },
    },
  ],
}

export default function UrgentCarePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <NavInner />
      <main>

        {/* ── HERO ── */}
        <section className={s.hero}>
          <div className={s.heroBg}>
            <div className={`${s.heroOrb} ${s.heroOrbTeal}`} />
            <div className={`${s.heroOrb} ${s.heroOrbBlue}`} />
            <div className={s.heroGrain} />
          </div>
          <div className={s.container}>
            <div className={s.heroContent}>
              <div className={s.badge}>Urgent Care</div>
              <h1 className={s.heroTitle}>
                Every capacity-blind decision<br />
                <em>costs you. In walkouts. In overtime.<br />In Google reviews.</em>
              </h1>
              <p className={s.heroSubtitle}>
                clinIQ gives urgent care clinics real-time patient orchestration from the first walk-in to the
                last discharge. Your front desk stops being a target board. Your staff stop working unpaid overtime.
                And your LWBS rate stops being a number nobody looks at until it&rsquo;s already a problem.
              </p>
              <div className={s.heroActions}>
                <a href="/contact" className={s.btnPrimary}>
                  See It Configured for Urgent Care
                  <svg className={s.btnIcon} viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10h12m-4-4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a href="/features/patient-flow" className={s.btnGhost}>
                  How Patient Flow Works
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── MARQUEE ── */}
        <div className={s.marquee} aria-hidden="true">
          <div className={s.marqueeTrack}>
            {[
              'Real-time walk-in queue visibility',
              'Capacity-aware check-in rules',
              'LobbyView for transparent wait times',
              'LWBS reduction built in',
              'Works with any EHR',
              'No "who\'s next?" huddles',
              'Provider-ready dashboard',
              'Staff overtime recovery',
              'Real-time walk-in queue visibility',
              'Capacity-aware check-in rules',
              'LobbyView for transparent wait times',
              'LWBS reduction built in',
              'Works with any EHR',
              'No "who\'s next?" huddles',
              'Provider-ready dashboard',
              'Staff overtime recovery',
            ].reduce<React.ReactNode[]>((acc, item, i) => {
              if (i > 0) acc.push(<span key={`dot-${i}`} className={s.marqueeDot} />)
              acc.push(<span key={item + i}>{item}</span>)
              return acc
            }, []).map((node, i) => (
              <span key={i} className={i % 2 === 0 ? undefined : undefined}>{node}</span>
            ))}
          </div>
        </div>

        {/* ── THE REALITY ── */}
        <section className={s.reality}>
          <div className={s.container}>
            <div className={s.realityGrid}>
              <div className={s.realityLeft}>
                <span className={s.sectionLabel}>The Reality</span>
                <h2 className={s.sectionTitle}>
                  It&rsquo;s 3:50pm.<br />
                  <em>Three walk-ins just hit the door.</em>
                </h2>
                <div className={s.realityNarrative}>
                  <p>
                    Your clinic officially closes at 4. Those three patients arrived before the door closed,
                    so they get checked in — because that&rsquo;s the policy. Your MA, who hasn&rsquo;t eaten
                    since 7am and has already seen 97 patients today, will now work until 6. The provider
                    will see three more patients than scheduled. Nobody asked if there was capacity.
                    The check-in system didn&rsquo;t ask. The front desk didn&rsquo;t ask — they&rsquo;re
                    not allowed to turn people away.
                  </p>
                  <p>
                    Meanwhile, the lobby fills. The wait climbs past 90 minutes. The patient who walked in
                    at 3:50 is now the angriest person in the room. They&rsquo;ve been sitting for 45 minutes
                    and have seen four people called ahead of them with no explanation. They walk out. They
                    leave a one-star review while standing in your parking lot. Your front desk, who absorbed
                    every second of it, goes home wondering how much longer they can do this.
                  </p>
                  <p>
                    The LWBS shows up in a spreadsheet the next morning. The review shows up on Google that night.
                    The overtime shows up on payroll. None of it had to happen. The walk-in was manageable.
                    The system was not.
                  </p>
                </div>
              </div>
              <div className={s.realityRight}>
                <ul className={s.painList} aria-label="Core urgent care pain points">
                  {[
                    'Walk-ins accepted without any signal of current queue depth — capacity-blind by design, every single shift.',
                    '"Who\'s next?" called out verbally between every patient. Providers interrupting front desk. Front desk interrupting MAs. Everyone interrupting everyone.',
                    'Your "no-wait" track takes patients off the lobby board but puts them in a hallway or back room for two hours. A vanity metric that burns out experienced nurses who are now being chased by three providers.',
                    'The last check-in cutoff is 1 minute before close. Staff routinely work 2 hours past their scheduled shift with no overtime policy and no end in sight.',
                    'LWBS is a lagging indicator — measured after the walkout, after the review, after the shift ends. By then it\'s too late to intervene.',
                    'Front desk absorbs every minute of patient anger for a system they didn\'t design and can\'t change. Burnout isn\'t a personality problem. It\'s a design problem.',
                  ].map((point, i) => (
                    <li key={i} className={s.painItem}>
                      <span className={s.painDot} aria-hidden="true" />
                      <span className={s.painText}>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHAT CHANGES ── */}
        <section className={s.changes}>
          <div className={s.container}>
            <div className={s.changesHeader}>
              <span className={s.sectionLabel}>What Changes</span>
              <h2 className={s.sectionTitle}>From reactive to orchestrated.<br />Three shifts that matter.</h2>
              <p className={s.sectionDesc}>
                clinIQ doesn&rsquo;t add software to a broken process. It replaces the broken assumptions
                underneath the process.
              </p>
            </div>
            <div className={s.changesGrid}>
              {[
                {
                  before: 'Patients accepted at the door regardless of queue depth, provider availability, or how many hours past close it will push staff.',
                  after: 'Capacity-aware check-in with configurable cutoff rules tied to real queue length — not clock time. Accept what you can actually serve.',
                },
                {
                  before: '"Who\'s next?" called out by providers every 8 minutes. Front desk interrupted constantly. Nobody has a live view of the board.',
                  after: 'Live provider dashboard shows every patient\'s real-time status: triaged, waiting, ready, in-room, ready for discharge. No interruptions needed.',
                },
                {
                  before: 'LWBS discovered as a number in a report at the end of the week. The patient is already gone, the review is already posted.',
                  after: 'LobbyView shows honest, real-time estimated wait. Patients make informed decisions. Front desk manages expectations before anyone walks — not after.',
                },
              ].map(({ before, after }, i) => (
                <div key={i} className={s.changeCard}>
                  <div className={s.changeBefore}>
                    <span className={`${s.changeLabel} ${s.changeLabelBefore}`}>Before</span>
                    <p className={s.changeText}>{before}</p>
                  </div>
                  <div className={s.changeAfter}>
                    <span className={`${s.changeLabel} ${s.changeLabelAfter}`}>After clinIQ</span>
                    <p className={s.changeText}>{after}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MODULES ── */}
        <section className={s.modules}>
          <div className={s.container}>
            <div className={s.modulesHeader}>
              <span className={s.sectionLabel}>Built For This</span>
              <h2 className={s.sectionTitle}>The four clinIQ modules urgent care actually needs.</h2>
              <p className={s.sectionDesc}>
                Not a generic feature list. These are the specific tools that address the structural problems
                in urgent care operations — in the order they matter.
              </p>
            </div>
            <div className={s.modulesGrid}>
              {[
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
                      <rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
                    </svg>
                  ),
                  title: 'Patient Flow — Live Command Center',
                  desc: 'At any moment, every patient in your clinic is visible on one board: arrival time, triage status, room assignment, provider status, and estimated discharge. You stop managing by memory and hallway walkthroughs. Providers stop interrupting front desk to ask who\'s next. MAs stop chasing signals. The whole clinic runs from one view — and when something is about to overflow, you see it before the lobby does.',
                  href: '/features/patient-flow',
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  ),
                  title: 'LobbyView — Transparent Wait Times',
                  desc: 'A HIPAA-safe public display showing real estimated wait times — no names, no chart details, no violations. Patients see where they stand. That one change reduces "how much longer?" questions by 60–80%, frees front desk to do actual work, and turns a hostile lobby into a tolerable one. When the wait is honest and visible, patients choose to stay. When it\'s hidden, they leave and post about it.',
                  href: '/features/lobbyview',
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  ),
                  title: 'Check-In — Capacity-Aware Rules',
                  desc: 'Configure check-in rules that reflect actual capacity, not just office hours. Late walk-in cutoffs tied to current queue depth. Visit type filtering for urgent versus non-urgent presentations. Acuity flags that surface to triage immediately. You decide the rules once — the system enforces them consistently, on every shift, without putting a front desk staff member in the position of having to personally tell an angry patient no.',
                  href: '/features/check-in',
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                    </svg>
                  ),
                  title: 'Analytics — The Numbers to Make the Case',
                  desc: 'Peak volume windows, provider utilization rates, LWBS by day and hour, average wait time trends, staff overtime accumulation. The data you need to show the C-suite why you\'re chronically understaffed — and the data to prove when a process change actually worked. Stop managing by gut and start managing by a dashboard that reflects what\'s actually happening in your clinic every day.',
                  href: '/features/analytics',
                },
              ].map(({ icon, title, desc, href }) => (
                <div key={title} className={s.moduleCard}>
                  <div className={s.moduleIcon}>{icon}</div>
                  <h3 className={s.moduleTitle}>{title}</h3>
                  <p className={s.moduleDesc}>{desc}</p>
                  <a href={href} className={s.moduleLink}>
                    Learn more
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <path d="M4 10h12m-4-4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WORKFLOW ── */}
        <section className={s.workflow}>
          <div className={s.container}>
            <div className={s.workflowHeader}>
              <span className={s.sectionLabel}>How It Flows</span>
              <h2 className={s.sectionTitle}>Every stage. Visible in real time.</h2>
              <p className={s.workflowDesc}>
                From the moment a patient arrives to the moment they walk out — every stage is tracked,
                every handoff is visible, and every bottleneck surfaces before it backs up the lobby.
              </p>
            </div>
            <div className={s.stageRow} role="list" aria-label="Urgent care patient flow stages">
              {[
                { label: 'Arrival', color: '#f59e0b' },
                { label: 'Triage', color: '#8b5cf6' },
                { label: 'Waiting', color: '#3b82f6' },
                { label: 'Provider', color: '#0d9488' },
                { label: 'Treatment', color: '#ec4899' },
                { label: 'Discharge', color: '#22c55e' },
              ].map(({ label, color }, i, arr) => (
                <span key={label} style={{ display: 'contents' }}>
                  <span className={s.stage} role="listitem">
                    <span className={s.stageDot} style={{ background: color }} aria-hidden="true" />
                    {label}
                  </span>
                  {i < arr.length - 1 && <span className={s.stageArrow} aria-hidden="true">→</span>}
                </span>
              ))}
            </div>
            <div className={s.workflowNote}>
              Each stage transition is triggered by staff action — no automatic assumptions, no false moves.
              When a patient is triaged, the board updates. When a provider finishes, the board updates.
              When a room is cleaned, the board updates. The whole clinic shares one truth — not six
              different mental models that diverge by lunchtime.
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className={s.stats}>
          <div className={s.container}>
            <div className={s.statsHeader}>
              <h2 className={s.statsHeaderTitle}>The numbers behind the decision.</h2>
              <p className={s.statsHeaderDesc}>
                Not aspirational. These are the operational realities of urgent care clinics that are
                currently running without real-time flow visibility.
              </p>
            </div>
            <div className={s.statsGrid}>
              {[
                { number: '$150–300', label: 'Lost per LWBS visit — before the Google review lands' },
                { number: '20h+', label: 'Monthly overtime per staff member absorbed silently during peak weeks' },
                { number: '30%+', label: 'Reduction in LWBS when wait times are visible and capacity rules are enforced' },
                { number: '90s', label: 'Saved per patient transition when providers have live readiness signals instead of verbal check-ins' },
              ].map(({ number, label }) => (
                <div key={label} className={s.stat}>
                  <span className={s.statNumber}>{number}</span>
                  <span className={s.statLabel}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIAL PLACEHOLDER ── */}
        {/* TESTIMONIAL PLACEHOLDER — DO NOT FABRICATE. Insert real client quote when available. */}

        {/* ── FAQ ── */}
        <section className={s.faq}>
          <div className={s.container}>
            <div className={s.faqHeader}>
              <span className={s.sectionLabel}>Common Questions</span>
              <h2 className={s.sectionTitle}>What urgent care teams ask before they buy.</h2>
            </div>
            <div className={s.faqList}>
              {[
                {
                  q: 'How does clinIQ reduce left-without-being-seen (LWBS) rates?',
                  a: 'Two ways. First, LobbyView shows patients honest estimated wait times — when they can see where they stand, fewer leave silently. Second, capacity-aware check-in rules prevent the lobby from overloading in the first place. The best LWBS intervention happens before the patient decides to walk, not after.',
                },
                {
                  q: 'Our front desk is already overwhelmed. Does this add to their workload?',
                  a: 'The opposite. clinIQ removes the mental tasks front desk currently holds in their heads: who\'s been waiting longest, which rooms are clean, which provider is free, who needs to move next. All of that moves to a board. Front desk manages exceptions, not the entire operational state of the clinic.',
                },
                {
                  q: 'What does "capacity-blind check-in" mean and why does it hurt us?',
                  a: 'Capacity-blind check-in means accepting walk-in patients without any signal of current queue depth or provider availability. Your system stamps a time and admits them regardless of backlog. The result is an overloaded provider, exhausted staff working past close, and a lobby of patients who were never told they\'d wait 2 hours. clinIQ replaces this with rules that tie check-in to actual real-time capacity.',
                },
                {
                  q: 'How quickly can we get clinIQ running?',
                  a: 'Most urgent care clinics are operational within days. There\'s no EHR replacement, no lengthy integration project. Configuration is guided, and the interface is designed to be learned in a single shift.',
                },
              ].map(({ q, a }) => (
                <div key={q} className={s.faqItem}>
                  <h3 className={s.faqQ}>{q}</h3>
                  <p className={s.faqA}>{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className={s.cta}>
          <div className={s.ctaBg}><div className={s.ctaOrb} aria-hidden="true" /></div>
          <div className={s.container}>
            <div className={s.ctaContent}>
              <h2 className={s.ctaTitle}>
                Your front desk is not<br />
                <em>a queue management system.</em>
              </h2>
              <p className={s.ctaDesc}>
                Stop expecting humans to absorb what software should handle. clinIQ gives your urgent care
                clinic the operational layer it was never built with — so your team can do the job they
                were actually hired for.
              </p>
              <div className={s.ctaActions}>
                <a href="/contact" className={s.btnPrimary}>
                  Get a Custom Walkthrough
                  <svg className={s.btnIcon} viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10h12m-4-4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a href="/resources/lwbs-reduction-playbook" className={s.btnGhost}>
                  Free: LWBS Reduction Playbook
                </a>
              </div>
              <span className={s.ctaNote}>No commitment. Configured for your clinic size and EHR.</span>
            </div>
          </div>
        </section>

        {/* ── RELATED ── */}
        <section className={s.related}>
          <div className={s.container}>
            <p className={s.relatedTitle}>Related resources and pages</p>
            <div className={s.relatedLinks}>
              {[
                { label: 'Patient Flow Feature', href: '/features/patient-flow' },
                { label: 'LobbyView Feature', href: '/features/lobbyview' },
                { label: 'LWBS Reduction Playbook', href: '/resources/lwbs-reduction-playbook' },
                { label: 'ROI Calculator', href: '/resources/roi-calculator' },
                { label: 'Urgent Care Flow Checklist', href: '/resources/urgent-care-flow-checklist' },
                { label: 'clinIQ vs Phreesia', href: '/compare/cliniq-vs-phreesia' },
                { label: 'All Specialties', href: '/specialties' },
              ].map(({ label, href }) => (
                <a key={href} href={href} className={s.relatedLink}>
                  {label}
                  <svg width="12" height="12" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10h12m-4-4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </section>

      </main>
      <FooterInner />
    </>
  )
}
