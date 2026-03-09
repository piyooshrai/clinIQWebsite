// ─────────────────────────────────────────────────────────────────────────────
// clinIQ feature × specialty page data
// All 840 pages (7 features × 120 specialties) are pre-rendered via
// generateStaticParams in app/features/[featureSlug]/[specialtySlug]/page.tsx
// ─────────────────────────────────────────────────────────────────────────────

export interface FeatureDef {
  slug: string
  name: string
  tagline: string
  problemVerb: string
  problemNoun: string
  solutionVerb: string
  solutionNoun: string
  ctaLabel: string
}

export interface SpecialtyDef {
  slug: string
  name: string
  category: string
  painA: string      // primary operational pain
  painB: string      // secondary operational pain
  context: string    // 1-2 words that flavor templates (e.g. "therapy sessions")
  volumeWord: string // e.g. "patients", "clients", "members"
}

export interface PageData {
  featureSlug: string
  featureName: string
  specialtySlug: string
  specialtyName: string
  h1: string
  metaTitle: string
  metaDescription: string
  problemHeading: string
  problemStatement: string
  solutionHeading: string
  solutionStatement: string
  breadcrumbs: { label: string; href: string }[]
}

// ─── 7 Features ───────────────────────────────────────────────────────────────

export const FEATURES: FeatureDef[] = [
  {
    slug: 'patient-flow',
    name: 'Patient Flow',
    tagline: 'Real-time queue visibility',
    problemVerb: 'track',
    problemNoun: 'queue chaos',
    solutionVerb: 'see',
    solutionNoun: 'real-time queue visibility',
    ctaLabel: 'See Patient Flow in action',
  },
  {
    slug: 'check-in',
    name: 'Check-In',
    tagline: 'Digital intake & verification',
    problemVerb: 'digitise',
    problemNoun: 'paper-based intake',
    solutionVerb: 'capture',
    solutionNoun: 'digital check-in',
    ctaLabel: 'See digital check-in in action',
  },
  {
    slug: 'scheduling',
    name: 'Scheduling',
    tagline: 'Multi-provider calendar',
    problemVerb: 'fill',
    problemNoun: 'scheduling gaps and no-shows',
    solutionVerb: 'optimise',
    solutionNoun: 'intelligent scheduling',
    ctaLabel: 'See scheduling in action',
  },
  {
    slug: 'rtm',
    name: 'RTM Billing',
    tagline: 'CPT 98975–98981 automation',
    problemVerb: 'capture',
    problemNoun: 'uncaptured RTM revenue',
    solutionVerb: 'automate',
    solutionNoun: 'RTM billing automation',
    ctaLabel: 'See RTM billing in action',
  },
  {
    slug: 'pre-auth',
    name: 'Pre-Authorization',
    tagline: 'Payer approval workflows',
    problemVerb: 'clear',
    problemNoun: 'prior auth delays',
    solutionVerb: 'track',
    solutionNoun: 'automated prior auth',
    ctaLabel: 'See pre-auth in action',
  },
  {
    slug: 'analytics',
    name: 'Analytics',
    tagline: 'Operational intelligence',
    problemVerb: 'surface',
    problemNoun: 'operational blind spots',
    solutionVerb: 'detect',
    solutionNoun: 'real-time analytics',
    ctaLabel: 'See analytics in action',
  },
  {
    slug: 'lobbyview',
    name: 'LobbyView',
    tagline: 'Patient-facing wait display',
    problemVerb: 'reduce',
    problemNoun: 'waiting-room anxiety and walkouts',
    solutionVerb: 'display',
    solutionNoun: 'transparent wait-time display',
    ctaLabel: 'See LobbyView in action',
  },
]

// ─── 120 Specialties ──────────────────────────────────────────────────────────

export const SPECIALTIES: SpecialtyDef[] = [
  // Behavioral Health (20)
  {
    slug: 'addiction-medicine',
    name: 'Addiction Medicine',
    category: 'Behavioral Health',
    painA: 'MAT protocol adherence tracking consumes manual staff hours',
    painB: 'High no-show rates disrupt group session scheduling',
    context: 'MAT appointments',
    volumeWord: 'patients',
  },
  {
    slug: 'psychiatry',
    name: 'Psychiatry',
    category: 'Behavioral Health',
    painA: 'Variable appointment lengths (15-min med checks to 60-min therapy) create daily scheduling puzzles',
    painB: 'Crisis walk-ins blow up the entire day with no visibility into ripple effects',
    context: 'psychiatric appointments',
    volumeWord: 'patients',
  },
  {
    slug: 'behavioral-health',
    name: 'Behavioral Health',
    category: 'Behavioral Health',
    painA: 'Therapeutic flow interruptions harm the clinical environment',
    painB: 'Consent and intake paperwork delays push sessions late',
    context: 'therapy sessions',
    volumeWord: 'clients',
  },
  {
    slug: 'psychology',
    name: 'Psychology',
    category: 'Behavioral Health',
    painA: 'Session overruns cascade into long lobby waits for subsequent patients',
    painB: 'Intake documentation errors delay treatment authorisation',
    context: 'therapy sessions',
    volumeWord: 'clients',
  },
  {
    slug: 'counseling',
    name: 'Counseling',
    category: 'Behavioral Health',
    painA: 'No-show rates above 20% leave revenue gaps impossible to fill same-day',
    painB: 'Intake forms collected on paper slow the first-session experience',
    context: 'counseling sessions',
    volumeWord: 'clients',
  },
  {
    slug: 'substance-abuse-treatment',
    name: 'Substance Abuse Treatment',
    category: 'Behavioral Health',
    painA: 'Group session headcounts change last minute with no real-time roster',
    painB: 'Medication dispensing workflows create lobby congestion',
    context: 'treatment sessions',
    volumeWord: 'patients',
  },
  {
    slug: 'eating-disorders',
    name: 'Eating Disorders',
    category: 'Behavioral Health',
    painA: 'Multi-disciplinary team coordination creates handoff gaps between dietitian and therapist',
    painB: 'Sensitive intake data requires careful, paperless workflows',
    context: 'multi-disciplinary appointments',
    volumeWord: 'patients',
  },
  {
    slug: 'child-psychiatry',
    name: 'Child Psychiatry',
    category: 'Behavioral Health',
    painA: 'Guardian check-in adds an extra layer to every intake workflow',
    painB: 'Appointment no-shows from minors are harder to reschedule without guardian contact',
    context: 'pediatric psychiatric appointments',
    volumeWord: 'patients',
  },
  {
    slug: 'geriatric-psychiatry',
    name: 'Geriatric Psychiatry',
    category: 'Behavioral Health',
    painA: 'Cognitive impairment means paper intake forms are routinely incomplete',
    painB: 'Caregiver accompaniment increases check-in complexity',
    context: 'geriatric psychiatric visits',
    volumeWord: 'patients',
  },
  {
    slug: 'mental-health',
    name: 'Mental Health',
    category: 'Behavioral Health',
    painA: 'Stigma-sensitive environments require discreet queue management',
    painB: 'High cancellation rates without same-day backfill waste clinical capacity',
    context: 'mental health appointments',
    volumeWord: 'clients',
  },
  {
    slug: 'trauma-therapy',
    name: 'Trauma Therapy',
    category: 'Behavioral Health',
    painA: 'Waiting room exposure to other patients increases patient distress',
    painB: 'Session overruns are common and cascade into late starts',
    context: 'trauma therapy sessions',
    volumeWord: 'clients',
  },
  {
    slug: 'neuropsychology',
    name: 'Neuropsychology',
    category: 'Behavioral Health',
    painA: 'Extended testing sessions require precise scheduling blocks that are hard to protect',
    painB: 'Insurance authorisation for neuropsych testing is frequently denied or delayed',
    context: 'neuropsychological assessments',
    volumeWord: 'patients',
  },
  {
    slug: 'dbt-therapy',
    name: 'DBT Therapy',
    category: 'Behavioral Health',
    painA: 'Group and individual session mix requires complex calendar management',
    painB: 'Skills training groups have strict attendance policies that need tracking',
    context: 'DBT sessions',
    volumeWord: 'clients',
  },
  {
    slug: 'autism-spectrum',
    name: 'Autism Spectrum',
    category: 'Behavioral Health',
    painA: 'Sensory-sensitive patients deteriorate quickly in crowded waiting rooms',
    painB: 'ABA session authorisations expire frequently, requiring constant pre-auth renewal',
    context: 'ABA and therapy sessions',
    volumeWord: 'patients',
  },
  {
    slug: 'adhd-treatment',
    name: 'ADHD Treatment',
    category: 'Behavioral Health',
    painA: 'Stimulant prescription monitoring requires precise visit scheduling',
    painB: 'Parents calling to check appointment status overwhelm front desk',
    context: 'ADHD appointments',
    volumeWord: 'patients',
  },
  {
    slug: 'bipolar-disorder',
    name: 'Bipolar Disorder',
    category: 'Behavioral Health',
    painA: 'Mood episode urgency creates unpredictable same-day demand',
    painB: 'Medication management visits require tight scheduling to avoid lapses',
    context: 'mood disorder appointments',
    volumeWord: 'patients',
  },
  {
    slug: 'anxiety-treatment',
    name: 'Anxiety Treatment',
    category: 'Behavioral Health',
    painA: 'Wait-room anxiety spikes cancel up to 15% of same-day appointments',
    painB: 'Exposure therapy sessions have variable durations that disrupt schedule flow',
    context: 'anxiety treatment sessions',
    volumeWord: 'clients',
  },
  {
    slug: 'depression-treatment',
    name: 'Depression Treatment',
    category: 'Behavioral Health',
    painA: 'Low motivation leads to above-average no-show and late-cancellation rates',
    painB: 'Medication adjustment visits cluster unpredictably, overwhelming the schedule',
    context: 'depression treatment visits',
    volumeWord: 'clients',
  },
  {
    slug: 'forensic-psychology',
    name: 'Forensic Psychology',
    category: 'Behavioral Health',
    painA: 'Court-mandated assessment deadlines create urgent scheduling pressure',
    painB: 'Documentation requirements are extensive and delay billing',
    context: 'forensic assessments',
    volumeWord: 'clients',
  },
  {
    slug: 'group-therapy',
    name: 'Group Therapy',
    category: 'Behavioral Health',
    painA: 'Group session fill rates are hard to track in real time',
    painB: 'Waitlist management for popular groups is done manually',
    context: 'group therapy sessions',
    volumeWord: 'clients',
  },

  // Pain & Rehabilitation (15)
  {
    slug: 'pain-management',
    name: 'Pain Management',
    category: 'Pain & Rehabilitation',
    painA: 'High-volume procedure days (injections, nerve blocks) create lobby bottlenecks',
    painB: 'Prior auth for controlled substances and procedures is denied frequently',
    context: 'pain procedures',
    volumeWord: 'patients',
  },
  {
    slug: 'physical-therapy',
    name: 'Physical Therapy',
    category: 'Pain & Rehabilitation',
    painA: 'Multi-patient simultaneous care means therapists lose track of who is ready',
    painB: 'Insurance authorisation runs out mid-treatment, forcing last-minute coverage checks',
    context: 'therapy sessions',
    volumeWord: 'patients',
  },
  {
    slug: 'chiropractic',
    name: 'Chiropractic',
    category: 'Pain & Rehabilitation',
    painA: 'High patient volume with short adjustment appointments creates a continuous flow challenge',
    painB: 'New patient intake paperwork creates a bottleneck before the first visit',
    context: 'chiropractic adjustments',
    volumeWord: 'patients',
  },
  {
    slug: 'occupational-therapy',
    name: 'Occupational Therapy',
    category: 'Pain & Rehabilitation',
    painA: 'Home program compliance tracking requires follow-up that falls through the cracks',
    painB: 'Authorisation limits are hit mid-episode without warning',
    context: 'OT sessions',
    volumeWord: 'patients',
  },
  {
    slug: 'sports-medicine',
    name: 'Sports Medicine',
    category: 'Pain & Rehabilitation',
    painA: 'Acute injury walk-ins disrupt the scheduled appointment flow',
    painB: 'Team and school season schedules create sudden volume spikes',
    context: 'sports medicine visits',
    volumeWord: 'athletes',
  },
  {
    slug: 'rehabilitation-medicine',
    name: 'Rehabilitation Medicine',
    category: 'Pain & Rehabilitation',
    painA: 'Multi-disciplinary rehab teams create complex handoff sequences',
    painB: 'Function assessments have variable durations that compress the schedule',
    context: 'rehabilitation sessions',
    volumeWord: 'patients',
  },
  {
    slug: 'acupuncture',
    name: 'Acupuncture',
    category: 'Pain & Rehabilitation',
    painA: 'Needle retention sessions require precise room timing that staff track manually',
    painB: 'Insurance coverage varies wildly, causing front-desk confusion at check-in',
    context: 'acupuncture sessions',
    volumeWord: 'patients',
  },
  {
    slug: 'massage-therapy',
    name: 'Massage Therapy',
    category: 'Pain & Rehabilitation',
    painA: 'Back-to-back room turnovers with no visibility create scheduling overruns',
    painB: 'Late cancellations leave revenue gaps that waitlist management could fill',
    context: 'massage sessions',
    volumeWord: 'clients',
  },
  {
    slug: 'wound-care',
    name: 'Wound Care',
    category: 'Pain & Rehabilitation',
    painA: 'Dressing-change frequency varies per patient, making scheduling irregular',
    painB: 'Prior auth for advanced wound care products is frequently denied',
    context: 'wound care visits',
    volumeWord: 'patients',
  },
  {
    slug: 'palliative-care',
    name: 'Palliative Care',
    category: 'Pain & Rehabilitation',
    painA: 'Care coordination across settings means visit flow is rarely predictable',
    painB: 'Caregiver and family attendance adds check-in complexity',
    context: 'palliative visits',
    volumeWord: 'patients',
  },
  {
    slug: 'speech-therapy',
    name: 'Speech Therapy',
    category: 'Pain & Rehabilitation',
    painA: 'Multi-patient session rooms require precise start and end tracking',
    painB: 'Authorisation renewal timelines are different for every payer',
    context: 'speech therapy sessions',
    volumeWord: 'patients',
  },
  {
    slug: 'lymphedema-therapy',
    name: 'Lymphedema Therapy',
    category: 'Pain & Rehabilitation',
    painA: 'Daily intensive treatment phases require strict scheduling precision',
    painB: 'Garment authorisations require frequent resubmission',
    context: 'lymphedema sessions',
    volumeWord: 'patients',
  },
  {
    slug: 'vestibular-therapy',
    name: 'Vestibular Therapy',
    category: 'Pain & Rehabilitation',
    painA: 'Post-treatment observation time is untracked, creating flow unpredictability',
    painB: 'Referral-to-first-visit lag time causes patients to abandon care',
    context: 'vestibular sessions',
    volumeWord: 'patients',
  },
  {
    slug: 'cardiac-rehab',
    name: 'Cardiac Rehab',
    category: 'Pain & Rehabilitation',
    painA: 'Group exercise session capacity limits require real-time attendance tracking',
    painB: 'Insurance-required session counts must be monitored to avoid claim denial',
    context: 'cardiac rehab sessions',
    volumeWord: 'patients',
  },
  {
    slug: 'pulmonary-rehab',
    name: 'Pulmonary Rehab',
    category: 'Pain & Rehabilitation',
    painA: 'Exercise tolerance monitoring mid-session requires constant staff attention',
    painB: 'Referrals from hospitalists create unpredictable intake waves',
    context: 'pulmonary rehab sessions',
    volumeWord: 'patients',
  },

  // Surgery & Procedures (12)
  {
    slug: 'orthopedic-surgery',
    name: 'Orthopedic Surgery',
    category: 'Surgery & Procedures',
    painA: 'Pre-op and post-op visits have completely different workflows that the same queue must handle',
    painB: 'Implant prior auth is slow and blocks surgery scheduling',
    context: 'orthopedic consultations',
    volumeWord: 'patients',
  },
  {
    slug: 'spine-surgery',
    name: 'Spine Surgery',
    category: 'Surgery & Procedures',
    painA: 'Conservative care requirements before surgery approval create months of wait',
    painB: 'Multi-level imaging authorisations are routinely denied on first submission',
    context: 'spine consultations',
    volumeWord: 'patients',
  },
  {
    slug: 'general-surgery',
    name: 'General Surgery',
    category: 'Surgery & Procedures',
    painA: 'OR scheduling ripples back to the clinic schedule unpredictably',
    painB: 'Post-op follow-up no-shows leave expensive consultation slots unfilled',
    context: 'surgical consultations',
    volumeWord: 'patients',
  },
  {
    slug: 'plastic-surgery',
    name: 'Plastic Surgery',
    category: 'Surgery & Procedures',
    painA: 'Self-pay and insurance mix creates inconsistent intake workflows',
    painB: 'Photo documentation requirements slow check-in',
    context: 'surgical consultations',
    volumeWord: 'patients',
  },
  {
    slug: 'bariatric-surgery',
    name: 'Bariatric Surgery',
    category: 'Surgery & Procedures',
    painA: 'Multi-month pre-op programme requires coordinated scheduling across disciplines',
    painB: 'Insurance-required psych clearance creates authorisation bottlenecks',
    context: 'bariatric programme visits',
    volumeWord: 'patients',
  },
  {
    slug: 'vascular-surgery',
    name: 'Vascular Surgery',
    category: 'Surgery & Procedures',
    painA: 'Vascular lab and surgical consultation visits must be tightly coordinated',
    painB: 'Urgent vascular cases displace scheduled appointments without notice',
    context: 'vascular consultations',
    volumeWord: 'patients',
  },
  {
    slug: 'thoracic-surgery',
    name: 'Thoracic Surgery',
    category: 'Surgery & Procedures',
    painA: 'Multi-modality pre-op workups scatter patients across departments',
    painB: 'Oncology coordination creates last-minute schedule changes',
    context: 'thoracic consultations',
    volumeWord: 'patients',
  },
  {
    slug: 'neurosurgery',
    name: 'Neurosurgery',
    category: 'Surgery & Procedures',
    painA: 'Consult-to-surgery timelines stretch because pre-auth for neuro procedures is contested',
    painB: 'Emergency cases disrupt the elective schedule multiple times per week',
    context: 'neurosurgical consultations',
    volumeWord: 'patients',
  },
  {
    slug: 'hand-surgery',
    name: 'Hand Surgery',
    category: 'Surgery & Procedures',
    painA: 'Occupational and workers comp cases require separate workflows',
    painB: 'Splint and therapy coordination visits add scheduling complexity',
    context: 'hand surgery consultations',
    volumeWord: 'patients',
  },
  {
    slug: 'podiatry',
    name: 'Podiatry',
    category: 'Surgery & Procedures',
    painA: 'High-volume clinics with short procedure visits require precise room turnover',
    painB: 'Diabetic foot care authorisations require documented wound measurements',
    context: 'podiatric visits',
    volumeWord: 'patients',
  },
  {
    slug: 'colorectal-surgery',
    name: 'Colorectal Surgery',
    category: 'Surgery & Procedures',
    painA: 'Colonoscopy prep instructions create high call volume the day before procedures',
    painB: 'Stoma care follow-ups have variable complexity that is hard to schedule accurately',
    context: 'colorectal consultations',
    volumeWord: 'patients',
  },
  {
    slug: 'cosmetic-procedures',
    name: 'Cosmetic Procedures',
    category: 'Surgery & Procedures',
    painA: 'Self-pay consultation no-shows cost high-margin appointment slots',
    painB: 'Treatment plan follow-through tracking is done manually',
    context: 'aesthetic consultations',
    volumeWord: 'clients',
  },

  // Primary & Specialty Care (15)
  {
    slug: 'primary-care',
    name: 'Primary Care',
    category: 'Primary & Specialty Care',
    painA: 'Same-day sick visit demand constantly overflows the scheduled appointment grid',
    painB: 'Annual wellness visit billing is often missed because check-in flags are unreliable',
    context: 'primary care visits',
    volumeWord: 'patients',
  },
  {
    slug: 'cardiology',
    name: 'Cardiology',
    category: 'Primary & Specialty Care',
    painA: 'Echo and stress test ancillary coordination creates wait-time spikes after the clinic visit',
    painB: 'Device clinic patients (pacemaker, ICD) have urgent follow-up needs that are hard to slot',
    context: 'cardiology visits',
    volumeWord: 'patients',
  },
  {
    slug: 'urgent-care',
    name: 'Urgent Care',
    category: 'Primary & Specialty Care',
    painA: 'LWBS rate spikes when lobby wait times exceed 20 minutes',
    painB: 'Shift handoffs leave staff without visibility into queue state',
    context: 'urgent care visits',
    volumeWord: 'patients',
  },
  {
    slug: 'internal-medicine',
    name: 'Internal Medicine',
    category: 'Primary & Specialty Care',
    painA: 'Complex multi-problem visits routinely run over their allotted time',
    painB: 'Chronic disease management visits require structured but flexible scheduling blocks',
    context: 'internal medicine visits',
    volumeWord: 'patients',
  },
  {
    slug: 'family-medicine',
    name: 'Family Medicine',
    category: 'Primary & Specialty Care',
    painA: 'Mixed acute and preventive visits in the same schedule create constant re-prioritisation',
    painB: 'Immunisation administration adds unscheduled time that backs up the queue',
    context: 'family medicine visits',
    volumeWord: 'patients',
  },
  {
    slug: 'geriatrics',
    name: 'Geriatrics',
    category: 'Primary & Specialty Care',
    painA: 'Extended visit durations for frail patients compress the rest of the schedule',
    painB: 'Multiple caregiver contacts create front-desk communication overload',
    context: 'geriatric visits',
    volumeWord: 'patients',
  },
  {
    slug: 'pediatrics',
    name: 'Pediatrics',
    category: 'Primary & Specialty Care',
    painA: 'Sick child walk-ins peak on Monday mornings with no predictable pattern',
    painB: 'Well-child visit season (back to school) overwhelms scheduling capacity',
    context: 'pediatric visits',
    volumeWord: 'patients',
  },
  {
    slug: 'adolescent-medicine',
    name: 'Adolescent Medicine',
    category: 'Primary & Specialty Care',
    painA: 'Confidentiality requirements complicate check-in when parents are present',
    painB: 'No-show rates spike during exam and sports seasons',
    context: 'adolescent visits',
    volumeWord: 'patients',
  },
  {
    slug: 'concierge-medicine',
    name: 'Concierge Medicine',
    category: 'Primary & Specialty Care',
    painA: 'White-glove patient expectations demand zero wait and seamless intake',
    painB: 'Membership coordination adds an administrative layer to every visit',
    context: 'concierge visits',
    volumeWord: 'members',
  },
  {
    slug: 'direct-primary-care',
    name: 'Direct Primary Care',
    category: 'Primary & Specialty Care',
    painA: 'Unlimited visit model means no-shows directly affect panel sustainability',
    painB: 'Membership billing is separate from visit billing, creating dual-track workflows',
    context: 'DPC visits',
    volumeWord: 'members',
  },
  {
    slug: 'neurology',
    name: 'Neurology',
    category: 'Primary & Specialty Care',
    painA: 'EEG and EMG ancillary scheduling creates coordination gaps',
    painB: 'Seizure disorder patients require priority access that disrupts the standard queue',
    context: 'neurology visits',
    volumeWord: 'patients',
  },
  {
    slug: 'gastroenterology',
    name: 'Gastroenterology',
    category: 'Primary & Specialty Care',
    painA: 'Endoscopy and clinic visits run on separate schedules that are hard to coordinate',
    painB: 'Prep instruction compliance tracking is entirely manual',
    context: 'GI visits',
    volumeWord: 'patients',
  },
  {
    slug: 'endocrinology',
    name: 'Endocrinology',
    category: 'Primary & Specialty Care',
    painA: 'Diabetes device downloads (CGM, pump) add 10–15 minutes per visit with no scheduling buffer',
    painB: 'Thyroid and adrenal workup coordination requires multi-visit sequencing',
    context: 'endocrinology visits',
    volumeWord: 'patients',
  },
  {
    slug: 'rheumatology',
    name: 'Rheumatology',
    category: 'Primary & Specialty Care',
    painA: 'Infusion suite coordination alongside clinic visits creates parallel scheduling complexity',
    painB: 'Biologic prior auth timelines routinely delay treatment by weeks',
    context: 'rheumatology visits',
    volumeWord: 'patients',
  },
  {
    slug: 'allergy-immunology',
    name: 'Allergy & Immunology',
    category: 'Primary & Specialty Care',
    painA: 'Allergy shot administration timing and post-injection observation create unpredictable flow',
    painB: 'New patient scratch testing requires a long block that is hard to protect',
    context: 'allergy visits',
    volumeWord: 'patients',
  },

  // Diagnostic & Medical Specialties (10)
  {
    slug: 'pulmonology',
    name: 'Pulmonology',
    category: 'Diagnostic & Medical',
    painA: 'Pulmonary function testing adds 30–60 minutes per visit with no standard scheduling buffer',
    painB: 'COPD exacerbation walk-ins regularly displace scheduled visits',
    context: 'pulmonology visits',
    volumeWord: 'patients',
  },
  {
    slug: 'nephrology',
    name: 'Nephrology',
    category: 'Diagnostic & Medical',
    painA: 'Dialysis patients have rigid scheduling windows that must interlock with clinic visits',
    painB: 'Transplant coordinator handoffs create last-minute schedule changes',
    context: 'nephrology visits',
    volumeWord: 'patients',
  },
  {
    slug: 'hematology-oncology',
    name: 'Hematology-Oncology',
    category: 'Diagnostic & Medical',
    painA: 'Infusion scheduling and clinic visits require tight real-time coordination',
    painB: 'Lab result delays push providers behind without a queuing system to adapt',
    context: 'oncology visits',
    volumeWord: 'patients',
  },
  {
    slug: 'dermatology',
    name: 'Dermatology',
    category: 'Diagnostic & Medical',
    painA: 'Procedure and consultation visits require different room setups with no transition buffer',
    painB: 'Cosmetic vs. medical visit mix creates billing workflow inconsistency',
    context: 'dermatology visits',
    volumeWord: 'patients',
  },
  {
    slug: 'infectious-disease',
    name: 'Infectious Disease',
    category: 'Diagnostic & Medical',
    painA: 'Isolation protocol requirements create separate queue management challenges',
    painB: 'IV antibiotic outpatient visits require precise scheduling around lab draws',
    context: 'ID visits',
    volumeWord: 'patients',
  },
  {
    slug: 'sleep-medicine',
    name: 'Sleep Medicine',
    category: 'Diagnostic & Medical',
    painA: 'Home sleep test equipment pickup and return adds non-clinical visit complexity',
    painB: 'CPAP follow-up visits cluster in waves after initial diagnosis',
    context: 'sleep medicine visits',
    volumeWord: 'patients',
  },
  {
    slug: 'clinical-genetics',
    name: 'Clinical Genetics',
    category: 'Diagnostic & Medical',
    painA: 'Counselling sessions before and after test results have variable and sensitive durations',
    painB: 'Family history intake is lengthy and delays the clinical portion of the visit',
    context: 'genetics consultations',
    volumeWord: 'patients',
  },
  {
    slug: 'radiology',
    name: 'Radiology',
    category: 'Diagnostic & Medical',
    painA: 'Imaging slot demand fluctuates dramatically, creating unpredictable backlogs',
    painB: 'Contrast authorisation delays prevent same-day imaging even when slots exist',
    context: 'imaging visits',
    volumeWord: 'patients',
  },
  {
    slug: 'nuclear-medicine',
    name: 'Nuclear Medicine',
    category: 'Diagnostic & Medical',
    painA: 'Radiopharmaceutical preparation windows create rigid, inflexible scheduling blocks',
    painB: 'Patient preparation instructions (fasting, medication holds) compliance is manual',
    context: 'nuclear medicine scans',
    volumeWord: 'patients',
  },
  {
    slug: 'pathology',
    name: 'Pathology',
    category: 'Diagnostic & Medical',
    painA: 'Specimen collection timing must align with courier schedules and lab hours',
    painB: 'Result communication workflows create provider follow-up delays',
    context: 'pathology encounters',
    volumeWord: 'patients',
  },

  // Women's Health (10)
  {
    slug: 'obstetrics-gynecology',
    name: 'Obstetrics & Gynecology',
    category: "Women's Health",
    painA: 'Labour and delivery emergencies constantly disrupt the outpatient schedule',
    painB: 'Prenatal visit sequences require precise scheduling intervals',
    context: 'OB/GYN visits',
    volumeWord: 'patients',
  },
  {
    slug: 'fertility-ivf',
    name: 'Fertility & IVF',
    category: "Women's Health",
    painA: 'Cycle monitoring visits are time-sensitive and change daily based on results',
    painB: 'Emotional sensitivity of patients makes wait-time management critical',
    context: 'fertility visits',
    volumeWord: 'patients',
  },
  {
    slug: 'midwifery',
    name: 'Midwifery',
    category: "Women's Health",
    painA: 'Prenatal visit intervals are standardised but home visit coordination is manual',
    painB: 'Birth centre room availability tracking is done on whiteboards',
    context: 'midwifery visits',
    volumeWord: 'clients',
  },
  {
    slug: 'urogynecology',
    name: 'Urogynecology',
    category: "Women's Health",
    painA: 'Urodynamics testing adds 45–90 minutes per visit beyond the consult',
    painB: 'Pelvic floor therapy coordination creates a dual-schedule management burden',
    context: 'urogynecology visits',
    volumeWord: 'patients',
  },
  {
    slug: 'maternal-fetal-medicine',
    name: 'Maternal-Fetal Medicine',
    category: "Women's Health",
    painA: 'High-risk obstetric urgencies require immediate scheduling that breaks the plan',
    painB: 'Genetic counselling coordination adds a complex scheduling dependency',
    context: 'MFM visits',
    volumeWord: 'patients',
  },
  {
    slug: 'breast-surgery',
    name: 'Breast Surgery',
    category: "Women's Health",
    painA: 'Biopsy result visits require sensitive, private room management',
    painB: 'Oncoplastic coordination across surgery and oncology creates multi-team scheduling',
    context: 'breast surgery consultations',
    volumeWord: 'patients',
  },
  {
    slug: 'reproductive-endocrinology',
    name: 'Reproductive Endocrinology',
    category: "Women's Health",
    painA: 'Treatment cycle monitoring requires same-day add-on appointments frequently',
    painB: 'Egg donor and surrogacy coordination creates multi-party visit complexity',
    context: 'reproductive endocrinology visits',
    volumeWord: 'patients',
  },
  {
    slug: 'menopause-care',
    name: 'Menopause Care',
    category: "Women's Health",
    painA: 'Hormone therapy follow-ups cluster at irregular intervals without structured reminders',
    painB: 'Symptom tracking intake varies significantly per patient, making visit timing unpredictable',
    context: 'menopause consultations',
    volumeWord: 'patients',
  },
  {
    slug: 'gynecologic-oncology',
    name: 'Gynecologic Oncology',
    category: "Women's Health",
    painA: 'Chemotherapy, surgery, and clinic visits require intricate multi-calendar coordination',
    painB: 'Emotional complexity of visits increases average time, compressing the schedule',
    context: 'gynecologic oncology visits',
    volumeWord: 'patients',
  },
  {
    slug: 'lactation-consulting',
    name: 'Lactation Consulting',
    category: "Women's Health",
    painA: 'Newborn feeding urgency creates same-day demand that is impossible to predict',
    painB: 'Consultant-to-patient ratio is tight, making queue visibility critical',
    context: 'lactation consultations',
    volumeWord: 'clients',
  },

  // Eye, Ear, Nose, Throat (8)
  {
    slug: 'ophthalmology',
    name: 'Ophthalmology',
    category: 'Eye, Ear, Nose & Throat',
    painA: 'Dilation wait times create a dead zone in patient flow that backs up the lobby',
    painB: 'Surgical scheduling (cataract, glaucoma) requires biometry coordination',
    context: 'ophthalmology visits',
    volumeWord: 'patients',
  },
  {
    slug: 'optometry',
    name: 'Optometry',
    category: 'Eye, Ear, Nose & Throat',
    painA: 'Frame selection time after the exam is untracked and blows up the schedule',
    painB: 'Contact lens fitting follow-ups are frequently scheduled too close together',
    context: 'optometry visits',
    volumeWord: 'patients',
  },
  {
    slug: 'ent-otolaryngology',
    name: 'ENT & Otolaryngology',
    category: 'Eye, Ear, Nose & Throat',
    painA: 'In-office procedure mix (nasal cautery, ear wax) creates unpredictable visit durations',
    painB: 'Hearing test coordination adds an ancillary scheduling layer',
    context: 'ENT visits',
    volumeWord: 'patients',
  },
  {
    slug: 'audiology',
    name: 'Audiology',
    category: 'Eye, Ear, Nose & Throat',
    painA: 'Hearing aid fitting follow-ups have variable durations based on patient adaptation',
    painB: 'Paediatric audiology appointments require caregiver coordination',
    context: 'audiology visits',
    volumeWord: 'patients',
  },
  {
    slug: 'retina-specialist',
    name: 'Retina Specialist',
    category: 'Eye, Ear, Nose & Throat',
    painA: 'Anti-VEGF injection visits have strict timing intervals that cannot slip',
    painB: 'OCT imaging coordination before the injection adds flow complexity',
    context: 'retina visits',
    volumeWord: 'patients',
  },
  {
    slug: 'glaucoma',
    name: 'Glaucoma',
    category: 'Eye, Ear, Nose & Throat',
    painA: 'Visual field testing scheduling must align with clinic visits but is managed separately',
    painB: 'IOP-dependent visit frequency changes create an unpredictable recall schedule',
    context: 'glaucoma visits',
    volumeWord: 'patients',
  },
  {
    slug: 'cornea-specialist',
    name: 'Cornea Specialist',
    category: 'Eye, Ear, Nose & Throat',
    painA: 'Post-transplant follow-up visit frequency is high and requires precise scheduling',
    painB: 'Topography and specular microscopy coordination adds pre-visit complexity',
    context: 'cornea visits',
    volumeWord: 'patients',
  },
  {
    slug: 'low-vision',
    name: 'Low Vision',
    category: 'Eye, Ear, Nose & Throat',
    painA: 'Extended evaluation sessions require 60–90 minute blocks that compress the schedule',
    painB: 'Device training sessions have no standard duration, making planning impossible',
    context: 'low vision visits',
    volumeWord: 'patients',
  },

  // Dental & Oral Health (8)
  {
    slug: 'dentistry',
    name: 'Dentistry',
    category: 'Dental & Oral Health',
    painA: 'Emergency toothache walk-ins displace hygiene and restorative appointments daily',
    painB: 'Hygiene recall tracking drives high outbound call volume for staff',
    context: 'dental appointments',
    volumeWord: 'patients',
  },
  {
    slug: 'orthodontics',
    name: 'Orthodontics',
    category: 'Dental & Oral Health',
    painA: 'Adjustment appointment intervals are time-sensitive and high-volume',
    painB: 'Emergency wire or bracket repairs walk in unannounced, breaking the schedule',
    context: 'orthodontic appointments',
    volumeWord: 'patients',
  },
  {
    slug: 'oral-surgery',
    name: 'Oral Surgery',
    category: 'Dental & Oral Health',
    painA: 'Consultation-to-surgery conversion tracking is done manually',
    painB: 'Sedation procedures require precise pre-op instruction compliance',
    context: 'oral surgery consultations',
    volumeWord: 'patients',
  },
  {
    slug: 'periodontics',
    name: 'Periodontics',
    category: 'Dental & Oral Health',
    painA: 'Scaling and root planning series require multi-visit scheduling coordination',
    painB: 'Maintenance recall interval compliance tracking falls to manual outreach',
    context: 'periodontic appointments',
    volumeWord: 'patients',
  },
  {
    slug: 'endodontics',
    name: 'Endodontics',
    category: 'Dental & Oral Health',
    painA: 'Emergency root canal walk-ins are common and require immediate scheduling',
    painB: 'Multi-visit cases require precisely sequenced follow-up appointments',
    context: 'endodontic appointments',
    volumeWord: 'patients',
  },
  {
    slug: 'pediatric-dentistry',
    name: 'Pediatric Dentistry',
    category: 'Dental & Oral Health',
    painA: 'Anxious paediatric patients extend appointment times unpredictably',
    painB: 'Sibling and family block scheduling is complex to manage manually',
    context: 'paediatric dental appointments',
    volumeWord: 'patients',
  },
  {
    slug: 'prosthodontics',
    name: 'Prosthodontics',
    category: 'Dental & Oral Health',
    painA: 'Lab turnaround dependency makes multi-visit case scheduling high-stakes',
    painB: 'Full-mouth reconstruction cases span months with intricate visit sequencing',
    context: 'prosthodontic appointments',
    volumeWord: 'patients',
  },
  {
    slug: 'dental-implants',
    name: 'Dental Implants',
    category: 'Dental & Oral Health',
    painA: 'Healing interval tracking between implant phases is critical and manually managed',
    painB: 'Bone graft and CBCT coordination adds scheduling complexity before implant placement',
    context: 'implant appointments',
    volumeWord: 'patients',
  },

  // Oncology (7)
  {
    slug: 'medical-oncology',
    name: 'Medical Oncology',
    category: 'Oncology',
    painA: 'Chemotherapy infusion and clinic visit coordination requires real-time cross-calendar visibility',
    painB: 'Lab hold decisions delay infusion starts, creating cascading flow problems',
    context: 'oncology visits',
    volumeWord: 'patients',
  },
  {
    slug: 'radiation-oncology',
    name: 'Radiation Oncology',
    category: 'Oncology',
    painA: 'Daily treatment sessions must run on a precise schedule with no slack',
    painB: 'Simulation and planning appointments are hard to fit around treatment slots',
    context: 'radiation treatment visits',
    volumeWord: 'patients',
  },
  {
    slug: 'surgical-oncology',
    name: 'Surgical Oncology',
    category: 'Oncology',
    painA: 'Tumour board scheduling and clinic visits require multi-team coordination',
    painB: 'Urgent biopsy result visits displace scheduled consultations',
    context: 'surgical oncology consultations',
    volumeWord: 'patients',
  },
  {
    slug: 'breast-oncology',
    name: 'Breast Oncology',
    category: 'Oncology',
    painA: 'Multi-disciplinary breast team coordination spans surgery, oncology, and radiology',
    painB: 'Emotional complexity of diagnosis visits makes wait-time management critical',
    context: 'breast oncology visits',
    volumeWord: 'patients',
  },
  {
    slug: 'urologic-oncology',
    name: 'Urologic Oncology',
    category: 'Oncology',
    painA: 'PSA surveillance visit intervals must be tracked precisely without manual systems',
    painB: 'Biopsy result disclosure visits require private, prompt scheduling',
    context: 'urologic oncology visits',
    volumeWord: 'patients',
  },
  {
    slug: 'skin-cancer',
    name: 'Skin Cancer',
    category: 'Oncology',
    painA: 'Mohs surgery sessions have unpredictable duration based on margin status',
    painB: 'Reconstruction coordination after excision adds visit complexity',
    context: 'skin cancer visits',
    volumeWord: 'patients',
  },
  {
    slug: 'cancer-survivorship',
    name: 'Cancer Survivorship',
    category: 'Oncology',
    painA: 'Surveillance visit intervals vary by cancer type and stage, creating complex recall schedules',
    painB: 'Multi-specialty coordination for late effects creates booking burden',
    context: 'survivorship visits',
    volumeWord: 'patients',
  },

  // Urology & Men's Health (7)
  {
    slug: 'urology',
    name: 'Urology',
    category: "Urology & Men's Health",
    painA: 'Cystoscopy and clinic visits require separate room setups in the same session',
    painB: 'Post-void residual testing adds unscheduled time to routine visits',
    context: 'urology visits',
    volumeWord: 'patients',
  },
  {
    slug: 'mens-health',
    name: "Men's Health",
    category: "Urology & Men's Health",
    painA: 'Testosterone therapy monitoring requires frequent but brief check-in visits',
    painB: 'Stigma-sensitive conditions increase no-show rates above average',
    context: "men's health visits",
    volumeWord: 'patients',
  },
  {
    slug: 'prostate-health',
    name: 'Prostate Health',
    category: "Urology & Men's Health",
    painA: 'Active surveillance visit intervals require precise scheduling without manual reminders',
    painB: 'Biopsy result visits must be handled with care and urgency simultaneously',
    context: 'prostate health visits',
    volumeWord: 'patients',
  },
  {
    slug: 'kidney-stone',
    name: 'Kidney Stone',
    category: "Urology & Men's Health",
    painA: 'Acute stone events create urgent access needs that break the schedule',
    painB: 'Metabolic workup visit sequencing is complex to manage manually',
    context: 'kidney stone visits',
    volumeWord: 'patients',
  },
  {
    slug: 'male-infertility',
    name: 'Male Infertility',
    category: "Urology & Men's Health",
    painA: 'Semen analysis coordination with IVF partner cycles creates timing pressure',
    painB: 'Sensitive nature of visits requires discreet queue management',
    context: 'male infertility consultations',
    volumeWord: 'patients',
  },
  {
    slug: 'erectile-dysfunction',
    name: 'Erectile Dysfunction',
    category: "Urology & Men's Health",
    painA: 'High no-show rates driven by embarrassment reduce clinic utilisation',
    painB: 'Injection therapy training visits require precise timing and private space',
    context: 'ED treatment visits',
    volumeWord: 'patients',
  },
  {
    slug: 'testosterone-therapy',
    name: 'Testosterone Therapy',
    category: "Urology & Men's Health",
    painA: 'Injection visits are brief but high-volume, requiring efficient room turnover',
    painB: 'Lab monitoring intervals must align with injection schedules precisely',
    context: 'testosterone therapy visits',
    volumeWord: 'patients',
  },

  // Cardiovascular (5)
  {
    slug: 'interventional-cardiology',
    name: 'Interventional Cardiology',
    category: 'Cardiovascular',
    painA: 'Cath lab scheduling and clinic visits require tight real-time coordination',
    painB: 'Urgent angina workups regularly displace elective appointments',
    context: 'interventional cardiology visits',
    volumeWord: 'patients',
  },
  {
    slug: 'electrophysiology',
    name: 'Electrophysiology',
    category: 'Cardiovascular',
    painA: 'Device clinic and ablation follow-ups have different durations that are hard to mix',
    painB: 'Arrhythmia monitoring downloads add unscheduled time to every device visit',
    context: 'EP visits',
    volumeWord: 'patients',
  },
  {
    slug: 'heart-failure',
    name: 'Heart Failure',
    category: 'Cardiovascular',
    painA: 'High-acuity patients decompensate quickly, requiring urgent same-day access',
    painB: 'Fluid management monitoring requires frequent but brief visits that clog the schedule',
    context: 'heart failure visits',
    volumeWord: 'patients',
  },
  {
    slug: 'hypertension',
    name: 'Hypertension',
    category: 'Cardiovascular',
    painA: 'BP monitoring visits are brief but high-volume, creating throughput pressure',
    painB: 'Medication titration follow-ups need to be timed precisely with lab results',
    context: 'hypertension visits',
    volumeWord: 'patients',
  },
  {
    slug: 'preventive-cardiology',
    name: 'Preventive Cardiology',
    category: 'Cardiovascular',
    painA: 'Risk assessment visits are comprehensive and frequently run over scheduled time',
    painB: 'Lifestyle programme coordination across dietitian and fitness adds scheduling layers',
    context: 'preventive cardiology visits',
    volumeWord: 'patients',
  },

  // Multi-Specialty & Other (3)
  {
    slug: 'multi-specialty-group',
    name: 'Multi-Specialty Group',
    category: 'Multi-Specialty',
    painA: 'Shared waiting rooms create confusion about which provider each patient is waiting for',
    painB: 'Cross-specialty referral handoffs happen informally, causing delays',
    context: 'multi-specialty visits',
    volumeWord: 'patients',
  },
  {
    slug: 'telehealth',
    name: 'Telehealth',
    category: 'Multi-Specialty',
    painA: 'Virtual waiting room management is invisible without dedicated tooling',
    painB: 'Technical difficulties cause patient flow disruptions that compound over the day',
    context: 'telehealth visits',
    volumeWord: 'patients',
  },
  {
    slug: 'integrative-medicine',
    name: 'Integrative Medicine',
    category: 'Multi-Specialty',
    painA: 'Long initial consultations followed by brief follow-ups make scheduling pattern unpredictable',
    painB: 'Multi-practitioner coordination (MD, ND, acupuncturist) requires a unified queue view',
    context: 'integrative medicine visits',
    volumeWord: 'patients',
  },
]

// ─── Content generator ────────────────────────────────────────────────────────

// H1 templates — varied by a hash of feature+specialty slugs to distribute patterns
const H1_TEMPLATES = [
  (f: FeatureDef, s: SpecialtyDef) =>
    `${f.name} for ${s.name}: Stop Losing ${s.volumeWord} to ${f.problemNoun}`,
  (f: FeatureDef, s: SpecialtyDef) =>
    `${s.name} ${f.name} That Actually Works`,
  (f: FeatureDef, s: SpecialtyDef) =>
    `How ${s.name} Practices Use clinIQ ${f.name} to Fix ${f.problemNoun}`,
  (f: FeatureDef, s: SpecialtyDef) =>
    `${f.name} Built for ${s.name} Clinics`,
  (f: FeatureDef, s: SpecialtyDef) =>
    `End ${f.problemNoun} in Your ${s.name} Practice`,
  (f: FeatureDef, s: SpecialtyDef) =>
    `clinIQ ${f.name} for ${s.name} — ${f.tagline}`,
  (f: FeatureDef, s: SpecialtyDef) =>
    `${s.name} Practices: Fix ${f.problemNoun} with clinIQ`,
]

const META_TEMPLATES = [
  (f: FeatureDef, s: SpecialtyDef) =>
    `clinIQ's ${f.name} module helps ${s.name} clinics eliminate ${f.problemNoun}. ${s.painA.split(',')[0]}. See it in action.`,
  (f: FeatureDef, s: SpecialtyDef) =>
    `${s.name} practices trust clinIQ for ${f.solutionNoun}. ${f.tagline}. Built for the way you work — not a generic EHR.`,
  (f: FeatureDef, s: SpecialtyDef) =>
    `Stop losing revenue to ${f.problemNoun}. clinIQ gives ${s.name} teams ${f.solutionNoun} in real time. Request a demo.`,
  (f: FeatureDef, s: SpecialtyDef) =>
    `${s.name} clinics using clinIQ ${f.name} ${f.solutionVerb} ${f.solutionNoun} without extra staff. See the difference.`,
  (f: FeatureDef, s: SpecialtyDef) =>
    `clinIQ ${f.name} was designed for ${s.name} workflows. ${s.painB.split(',')[0]}. We solve that.`,
]

const PROBLEM_HEADINGS = [
  (f: FeatureDef, s: SpecialtyDef) =>
    `${s.name} practices lose revenue to ${f.problemNoun} every day`,
  (f: FeatureDef, s: SpecialtyDef) =>
    `The hidden cost of ${f.problemNoun} in ${s.name}`,
  (f: FeatureDef, s: SpecialtyDef) =>
    `Why ${s.name} ${f.problemNoun} is harder than it looks`,
  (f: FeatureDef, s: SpecialtyDef) =>
    `${s.name} clinics weren't built to manage ${f.problemNoun} manually`,
]

const SOLUTION_HEADINGS = [
  (f: FeatureDef, s: SpecialtyDef) =>
    `clinIQ ${f.name}: built for ${s.name} workflows`,
  (f: FeatureDef, s: SpecialtyDef) =>
    `${f.solutionNoun} designed around how ${s.name} actually works`,
  (f: FeatureDef, s: SpecialtyDef) =>
    `How clinIQ ${f.name} solves ${f.problemNoun} for ${s.name}`,
  (f: FeatureDef, s: SpecialtyDef) =>
    `Give your ${s.name} team ${f.solutionNoun}`,
]

function hash(a: string, b: string): number {
  let h = 0
  for (const c of a + b) h = (h * 31 + c.charCodeAt(0)) & 0xffffffff
  return Math.abs(h)
}

export function getPageData(featureSlug: string, specialtySlug: string): PageData | null {
  const feature = FEATURES.find(f => f.slug === featureSlug)
  const specialty = SPECIALTIES.find(s => s.slug === specialtySlug)
  if (!feature || !specialty) return null

  const h = hash(featureSlug, specialtySlug)

  const h1 = H1_TEMPLATES[h % H1_TEMPLATES.length](feature, specialty)
  const metaDescription = META_TEMPLATES[h % META_TEMPLATES.length](feature, specialty).slice(0, 160)
  const problemHeading = PROBLEM_HEADINGS[h % PROBLEM_HEADINGS.length](feature, specialty)
  const solutionHeading = SOLUTION_HEADINGS[h % SOLUTION_HEADINGS.length](feature, specialty)

  const problemStatement =
    `${specialty.painA}. ${specialty.painB}. ` +
    `For ${specialty.name} practices, ${feature.problemNoun} isn't a minor inconvenience — ` +
    `it compounds across every ${specialty.context}, eroding revenue and ${specialty.volumeWord} satisfaction.`

  const solutionStatement =
    `clinIQ's ${feature.name} module gives your ${specialty.name} team ${feature.solutionNoun} ` +
    `purpose-built for ${specialty.context}. ` +
    `You'll ${feature.solutionVerb} ${feature.solutionNoun} without adding staff or switching EHRs — ` +
    `so your ${specialty.volumeWord} spend less time waiting and your team spends less time managing chaos.`

  return {
    featureSlug,
    featureName: feature.name,
    specialtySlug,
    specialtyName: specialty.name,
    h1,
    metaTitle: `${feature.name} for ${specialty.name} — clinIQ`,
    metaDescription,
    problemHeading,
    problemStatement,
    solutionHeading,
    solutionStatement,
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Features', href: '/features' },
      { label: feature.name, href: `/features/${featureSlug}` },
      { label: specialty.name, href: `/features/${featureSlug}/${specialtySlug}` },
    ],
  }
}

export function getAllParams(): { featureSlug: string; specialtySlug: string }[] {
  const params: { featureSlug: string; specialtySlug: string }[] = []
  for (const feature of FEATURES) {
    for (const specialty of SPECIALTIES) {
      params.push({ featureSlug: feature.slug, specialtySlug: specialty.slug })
    }
  }
  return params
}

// ─── Specialty-only page generator ────────────────────────────────────────────

export interface SpecialtyPageData {
  specialtySlug: string
  specialtyName: string
  category: string
  heroH1Lines: string[]
  heroSubtitle: string
  metaTitle: string
  metaDescription: string
  marqueeItems: string[]
  realityTitle: string
  realityNarrative: string[]
  painPoints: string[]
  changes: { before: string; after: string }[]
  featureModules: { slug: string; name: string; title: string; desc: string; href: string }[]
  workflowStages: { label: string; color: string }[]
  workflowNote: string
  stats: { number: string; label: string }[]
  faqs: { q: string; a: string }[]
  ctaH2Lines: string[]
  ctaDesc: string
  relatedLinks: { label: string; href: string }[]
  breadcrumbs: { label: string; href: string }[]
}

const CATEGORY_WORKFLOWS: Record<string, { label: string; color: string }[]> = {
  'Behavioral Health': [
    { label: 'Arrival', color: '#f59e0b' },
    { label: 'Check-In', color: '#8b5cf6' },
    { label: 'Intake', color: '#3b82f6' },
    { label: 'Session', color: '#0d9488' },
    { label: 'Notes', color: '#ec4899' },
    { label: 'Checkout', color: '#22c55e' },
  ],
  'Pain & Rehabilitation': [
    { label: 'Check-In', color: '#f59e0b' },
    { label: 'Vitals', color: '#8b5cf6' },
    { label: 'Rooming', color: '#3b82f6' },
    { label: 'Treatment', color: '#0d9488' },
    { label: 'Provider Review', color: '#ec4899' },
    { label: 'Discharge', color: '#22c55e' },
  ],
  'Surgery & Procedures': [
    { label: 'Check-In', color: '#f59e0b' },
    { label: 'Pre-op Prep', color: '#8b5cf6' },
    { label: 'Imaging', color: '#3b82f6' },
    { label: 'Consult', color: '#0d9488' },
    { label: 'Procedure', color: '#ef4444' },
    { label: 'Recovery', color: '#22c55e' },
  ],
  'Primary & Specialty Care': [
    { label: 'Check-In', color: '#f59e0b' },
    { label: 'Vitals', color: '#8b5cf6' },
    { label: 'Rooming', color: '#3b82f6' },
    { label: 'With Provider', color: '#0d9488' },
    { label: 'Orders / Ancillary', color: '#ec4899' },
    { label: 'Checkout', color: '#22c55e' },
  ],
  'Diagnostic & Medical': [
    { label: 'Check-In', color: '#f59e0b' },
    { label: 'Vitals', color: '#8b5cf6' },
    { label: 'Provider', color: '#3b82f6' },
    { label: 'Testing', color: '#ef4444' },
    { label: 'Results Review', color: '#0d9488' },
    { label: 'Discharge', color: '#22c55e' },
  ],
  "Women's Health": [
    { label: 'Check-In', color: '#f59e0b' },
    { label: 'Vitals', color: '#8b5cf6' },
    { label: 'Rooming', color: '#3b82f6' },
    { label: 'Provider', color: '#0d9488' },
    { label: 'Ancillary / Imaging', color: '#ec4899' },
    { label: 'Checkout', color: '#22c55e' },
  ],
  'Eye, Ear, Nose & Throat': [
    { label: 'Check-In', color: '#f59e0b' },
    { label: 'Pre-Exam Tests', color: '#8b5cf6' },
    { label: 'Dilation / Prep', color: '#3b82f6' },
    { label: 'With Provider', color: '#0d9488' },
    { label: 'Follow-up Plan', color: '#ec4899' },
    { label: 'Checkout', color: '#22c55e' },
  ],
  'Dental & Oral Health': [
    { label: 'Check-In', color: '#f59e0b' },
    { label: 'Pre-exam', color: '#8b5cf6' },
    { label: 'X-Ray / Imaging', color: '#3b82f6' },
    { label: 'Provider', color: '#0d9488' },
    { label: 'Treatment', color: '#ef4444' },
    { label: 'Post-care', color: '#22c55e' },
  ],
  'Oncology': [
    { label: 'Check-In', color: '#f59e0b' },
    { label: 'Vitals / Labs', color: '#8b5cf6' },
    { label: 'Lab Hold Check', color: '#3b82f6' },
    { label: 'Provider', color: '#0d9488' },
    { label: 'Treatment', color: '#ef4444' },
    { label: 'Discharge', color: '#22c55e' },
  ],
  "Urology & Men's Health": [
    { label: 'Check-In', color: '#f59e0b' },
    { label: 'Vitals', color: '#8b5cf6' },
    { label: 'Rooming', color: '#3b82f6' },
    { label: 'Provider', color: '#0d9488' },
    { label: 'Testing / Procedure', color: '#ec4899' },
    { label: 'Discharge', color: '#22c55e' },
  ],
  'Cardiovascular': [
    { label: 'Check-In', color: '#f59e0b' },
    { label: 'Vitals / ECG', color: '#8b5cf6' },
    { label: 'Ancillary Testing', color: '#3b82f6' },
    { label: 'With Provider', color: '#0d9488' },
    { label: 'Results Review', color: '#ec4899' },
    { label: 'Discharge', color: '#22c55e' },
  ],
  'Multi-Specialty': [
    { label: 'Check-In', color: '#f59e0b' },
    { label: 'Triage', color: '#8b5cf6' },
    { label: 'Rooming', color: '#3b82f6' },
    { label: 'Provider', color: '#0d9488' },
    { label: 'Ancillary', color: '#ec4899' },
    { label: 'Discharge', color: '#22c55e' },
  ],
}

const CATEGORY_FEATURES: Record<string, string[]> = {
  'Behavioral Health': ['check-in', 'scheduling', 'lobbyview'],
  'Pain & Rehabilitation': ['patient-flow', 'rtm', 'pre-auth'],
  'Surgery & Procedures': ['patient-flow', 'pre-auth', 'scheduling'],
  'Primary & Specialty Care': ['patient-flow', 'check-in', 'scheduling'],
  'Diagnostic & Medical': ['patient-flow', 'analytics', 'pre-auth'],
  "Women's Health": ['scheduling', 'check-in', 'patient-flow'],
  'Eye, Ear, Nose & Throat': ['patient-flow', 'lobbyview', 'check-in'],
  'Dental & Oral Health': ['scheduling', 'check-in', 'analytics'],
  'Oncology': ['patient-flow', 'pre-auth', 'analytics'],
  "Urology & Men's Health": ['patient-flow', 'check-in', 'pre-auth'],
  'Cardiovascular': ['patient-flow', 'scheduling', 'analytics'],
  'Multi-Specialty': ['patient-flow', 'analytics', 'check-in'],
}

function getModuleDesc(feature: FeatureDef, specialty: SpecialtyDef): string {
  const f = feature.slug
  const s = specialty.name
  const ctx = specialty.context
  const vw = specialty.volumeWord
  const singular = vw.replace(/s$/, '')

  if (f === 'patient-flow') {
    return `${s} ${vw} move through multiple stages — each with its own readiness signal and handoff. clinIQ maps every stage on a live board so every team member sees exactly where each ${singular} is in the visit. No hallway checks. No "is room 4 ready?" calls. No providers waiting on a signal that never comes. The flow gaps that cost ${s} clinics 5–10 minutes per patient disappear because everyone is working from the same real-time picture.`
  }
  if (f === 'check-in') {
    return `clinIQ digital check-in captures ${vw} consent, insurance, and intake information before they reach the front desk. ${s} ${vw} complete forms on their phone or a tablet — so by the time they arrive, the MA has everything they need. No clipboards. No transcription. No "we still need your insurance card" at the window. The first five minutes of every ${ctx.replace(/s$/, '')} visit stop being the worst five minutes.`
  }
  if (f === 'scheduling') {
    return `${s} scheduling has patterns that generic templates can't handle — ${ctx} with variable durations, same-day demand, and no-show gaps that can't be filled manually. clinIQ Scheduling gives ${s} practices multi-provider calendar management with real-time fill logic, waitlist automation, and no-show backfill. The schedule adapts to the reality of ${ctx} — not the other way around.`
  }
  if (f === 'rtm') {
    return `${s} practices eligible for RTM billing (CPT 98975–98981) are leaving significant revenue uncaptured because manual tracking fails at scale. clinIQ RTM automates the monitoring, qualifying, and billing of remote therapeutic monitoring — so your ${s} team captures revenue from ${vw} they're already monitoring. No new devices required. No additional staff workflows. The code gets billed because the data is being tracked and surfaced automatically.`
  }
  if (f === 'pre-auth') {
    return `clinIQ Pre-Authorization tracks every pending PA in a single pipeline — with payer, status, expiration date, and required documentation visible in one place. Your ${s} team sees which ${ctx} are blocked, which authorisations are expiring, and which requests need follow-up today. No spreadsheets. No missed expirations. No delayed treatments because the PA fell through the cracks.`
  }
  if (f === 'analytics') {
    return `${s} operational data lives in the EHR — but it doesn't tell you why your schedule runs late on Tuesdays, which provider has the longest rooming times, or where ${vw} are waiting longest. clinIQ Analytics surfaces the metrics that matter for ${s} operations: average time per visit stage, ${ctx} throughput by day and provider, no-show patterns, and recovery opportunities. The data is already there. clinIQ just shows you what it means.`
  }
  if (f === 'lobbyview') {
    return `clinIQ LobbyView gives ${s} ${vw} a real-time view of their place in the queue — displayed on a lobby screen without using names. Wait-time transparency reduces walkouts, cuts "how much longer?" calls to the front desk, and helps ${vw} plan their visit. The information your ${vw} are already asking for, displayed before they have to ask.`
  }
  return `clinIQ ${feature.name} for ${s} — built around the operational realities of ${ctx}.`
}

const SPEC_HERO_H1_TEMPLATES: Array<(s: SpecialtyDef) => string[]> = [
  (s) => [
    s.painA.split(',')[0].split('.')[0] + '.',
    `Your ${s.context} can't wait.`,
  ],
  (s) => [
    `${s.name} operations`,
    `break at the same point every day.`,
  ],
  (s) => [
    `Your ${s.volumeWord} are waiting.`,
    `${s.painB.split(',')[0].split('.')[0].toLowerCase()}.`,
    `That combination has a cost.`,
  ],
]

const SPEC_HERO_SUBTITLE_TEMPLATES: Array<(s: SpecialtyDef) => string> = [
  (s) => `${s.painA}. ${s.painB}. These aren't edge cases — they're the operational reality of every ${s.name} clinic that hasn't found a system built specifically for how they work. clinIQ is built for that. Not adapted from a hospital platform. Built for ${s.context}.`,
  (s) => `${s.name} practices face operational challenges that generic scheduling software wasn't designed to handle. clinIQ maps your ${s.context} in real time — giving every team member a shared picture of the day so handoffs happen before they need to be requested.`,
  (s) => `${s.volumeWord.charAt(0).toUpperCase() + s.volumeWord.slice(1)} don't see the coordination failures that cost ${s.name} practices time and revenue every day. They just experience the wait. clinIQ fixes the flow — from ${s.context} check-in to discharge — so your team stops absorbing problems the system should be preventing.`,
]

export function getSpecialtyPageData(specialtySlug: string): SpecialtyPageData | null {
  const specialty = SPECIALTIES.find(s => s.slug === specialtySlug)
  if (!specialty) return null

  const h = hash(specialtySlug, specialty.category)
  const cap = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)
  const singular = specialty.volumeWord.replace(/s$/, '')

  const heroH1Lines = SPEC_HERO_H1_TEMPLATES[h % SPEC_HERO_H1_TEMPLATES.length](specialty)
  const heroSubtitle = SPEC_HERO_SUBTITLE_TEMPLATES[h % SPEC_HERO_SUBTITLE_TEMPLATES.length](specialty)

  const metaTitle = `${specialty.name} Clinic Software | Patient Flow & Operations | clinIQ`
  const metaDescription = `clinIQ helps ${specialty.name} practices eliminate ${specialty.painA.split(',')[0].toLowerCase()}. Purpose-built for ${specialty.context} — not adapted from hospital software. Request a demo.`.slice(0, 160)

  const marqueeItems = [
    `Real-time ${specialty.context} visibility`,
    `${specialty.name}-specific check-in workflows`,
    `No-show backfill automation`,
    `Prior auth pipeline tracking`,
    `Multi-provider scheduling`,
    `${cap(specialty.volumeWord)} wait-time transparency`,
    `Analytics built for ${specialty.name}`,
    `EHR-agnostic — deploys in days`,
  ]

  const realityTitle = `The ${specialty.name} operational challenge isn't clinical. It's coordination.`
  const realityNarrative = [
    `${specialty.painA}. This isn't an unusual day. It's a ${specialty.name} clinic operating the way most ${specialty.name} clinics operate — without a system built to manage the specific flow complexity of ${specialty.context}.`,
    `${specialty.painB}. The two problems compound. ${cap(specialty.volumeWord)} who wait too long without information escalate. Staff who lack visibility absorb the frustration. Providers who lose time between ${specialty.context} fall behind — and there's no way to catch up by lunch.`,
    `None of this is a clinical failure. It's a coordination failure. The information exists — the schedule, the room status, the visit stage — but it's scattered across people's heads, paper printouts, and an EHR built for documentation, not operational visibility. clinIQ is the layer that connects it.`,
  ]

  const painPoints = [
    `${specialty.painA}.`,
    `${specialty.painB}.`,
    `${cap(specialty.volumeWord)} who don't know where they are in the queue call the front desk repeatedly — adding 30–50 inbound calls per day to a team that's already stretched.`,
    `Providers who rely on verbal cues from MAs to know when the next ${singular} is ready lose 5–8 minutes between every ${specialty.context.replace(/s$/, '')} visit.`,
    `No-show gaps go unfilled because the waitlist process is manual — the front desk is managing flow, not backfilling schedule gaps in real time.`,
    `Staff describe the current system as a daily exercise in absorbing problems they weren't given tools to prevent. Turnover in ${specialty.name} front-desk and MA roles is above the healthcare average.`,
  ]

  const changes = [
    {
      before: `${specialty.painA}. The team absorbs this problem manually — with phone calls, hallway checks, and staff memory. When it fails, the ${singular} waits and nobody knows why.`,
      after: `clinIQ maps every ${specialty.context.replace(/s$/, '')} visit stage in real time. Every team member sees the same board. Handoffs happen before they need to be requested. The 5–8 minutes of dead time between ${specialty.context} disappear.`,
    },
    {
      before: `${specialty.painB}. The workaround is manual, slow, and falls through the cracks multiple times per week — usually discovered after the ${singular} has already been impacted.`,
      after: `clinIQ surfaces the issue before it becomes a problem. Prior auth expirations, scheduling gaps, and operational blockers are visible in advance — so the team acts proactively, not reactively.`,
    },
    {
      before: `${cap(specialty.volumeWord)} in the lobby have no information. They don't know if they're next. They don't know how long they'll wait. They call the front desk. They walk out. The staff can't do anything about it because they don't have a tool that gives them that visibility either.`,
      after: `clinIQ LobbyView displays wait status on the lobby screen — without using names — so ${specialty.volumeWord} know they haven't been forgotten. The "how much longer?" calls drop immediately. The walkout rate drops with them.`,
    },
  ]

  const categoryFeatureSlugs = CATEGORY_FEATURES[specialty.category] || ['patient-flow', 'check-in', 'analytics']
  const featureModules = categoryFeatureSlugs.map(slug => {
    const feature = FEATURES.find(f => f.slug === slug)!
    return {
      slug: feature.slug,
      name: feature.name,
      title: `${feature.name} — ${feature.tagline}`,
      desc: getModuleDesc(feature, specialty),
      href: `/features/${feature.slug}`,
    }
  })

  const workflowStages = CATEGORY_WORKFLOWS[specialty.category] || CATEGORY_WORKFLOWS['Primary & Specialty Care']
  const workflowNote = `Every ${specialty.context.replace(/s$/, '')} visit passes through these stages. clinIQ tracks each transition in real time — so when a ${singular} moves from vitals to the provider, the provider sees it without being told. When the visit is complete, checkout knows before the staff has to relay the message. The coordination that currently happens through calls and hallway checks happens automatically.`

  const stats = [
    { number: '5–8 min', label: `Average time lost between ${specialty.context} when providers rely on verbal cues instead of a live queue` },
    { number: '30–50', label: `"How much longer?" calls per day handled by front desk staff in high-volume ${specialty.name} practices` },
    { number: '72%', label: `Of ${specialty.name} practice managers report that scheduling gaps go unfilled same-day because backfill is manual` },
    { number: '2–4 hrs', label: `Weekly staff time spent on prior auth status calls that a pipeline tool would surface automatically` },
  ]

  const faqs = [
    {
      q: `Does clinIQ integrate with our EHR?`,
      a: `clinIQ is EHR-agnostic. It works alongside your existing EHR without replacing it. Staff mark visit stages in clinIQ — the EHR handles clinical documentation. No integration project required. Most ${specialty.name} practices are live in under a week.`,
    },
    {
      q: `How does clinIQ handle the specific flow of ${specialty.context}?`,
      a: `clinIQ is configured to match your ${specialty.name} visit types. ${cap(specialty.context)} have different stages, room requirements, and handoff points — and clinIQ maps all of them. The board shows what's relevant for your workflow, not a generic hospital template.`,
    },
    {
      q: `Will this add to our MA and front desk workload?`,
      a: `clinIQ removes more steps than it adds. MAs no longer need to physically check room status or relay messages between providers. The added steps — marking stage transitions — take 5–10 seconds each. The time saved per ${specialty.context.replace(/s$/, '')} is 5–8 minutes. The math works in your favor.`,
    },
    {
      q: `What does implementation look like?`,
      a: `We configure clinIQ to your ${specialty.name} workflow during onboarding. You tell us your visit types, room layout, and team roles. We build the board. Most practices complete onboarding in 1–2 sessions and go live the same week. No IT project. No downtime. No six-month rollout.`,
    },
  ]

  const ctaH2Lines = [
    `Stop losing time between ${specialty.context}`,
    `to coordination that should be automatic.`,
  ]
  const ctaDesc = `${specialty.painA}. ${specialty.painB}. These are coordination problems with a software solution — built specifically for ${specialty.name} practices, not adapted from a hospital system. clinIQ gives your team real-time visibility into every ${specialty.context.replace(/s$/, '')} visit, from arrival to discharge.`

  const sameCategory = SPECIALTIES
    .filter(s => s.category === specialty.category && s.slug !== specialty.slug)
    .slice(0, 3)

  const relatedLinks = [
    ...categoryFeatureSlugs.map(slug => {
      const f = FEATURES.find(ff => ff.slug === slug)!
      return { label: `${f.name} Feature`, href: `/features/${f.slug}` }
    }),
    ...sameCategory.map(s => ({ label: s.name, href: `/specialties/${s.slug}` })),
    { label: 'All Specialties', href: '/specialties' },
  ]

  return {
    specialtySlug,
    specialtyName: specialty.name,
    category: specialty.category,
    heroH1Lines,
    heroSubtitle,
    metaTitle,
    metaDescription,
    marqueeItems,
    realityTitle,
    realityNarrative,
    painPoints,
    changes,
    featureModules,
    workflowStages,
    workflowNote,
    stats,
    faqs,
    ctaH2Lines,
    ctaDesc,
    relatedLinks,
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Specialties', href: '/specialties' },
      { label: specialty.name, href: `/specialties/${specialtySlug}` },
    ],
  }
}

export function getAllSpecialtyParams(): { specialtySlug: string }[] {
  return SPECIALTIES.map(s => ({ specialtySlug: s.slug }))
}
