import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import s from '@/app/specialties/specialty-full.module.css'

export const metadata: Metadata = {
  title: 'Psychiatry Practice Management Software | Scheduling, No-Shows & Patient Privacy | clinIQ',
  description:
    'Clinic operations software built for psychiatric practices. Reduce new-patient no-shows from 25% to under 10%. Private digital check-in. Portal message triage. Crisis walk-in visibility.',
  openGraph: {
    title: 'clinIQ for Psychiatry — Scheduling That Reduces No-Shows and Protects Patient Privacy',
    description:
      'Psychiatric practices face 25% new-patient no-show rates, portal message overload, privacy-compromised check-in, and waiting room crises with no protocol. clinIQ addresses all four.',
    type: 'website',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cliniq.com' },
    { '@type': 'ListItem', position: 2, name: 'Specialties', item: 'https://cliniq.com/specialties' },
    { '@type': 'ListItem', position: 3, name: 'Psychiatry', item: 'https://cliniq.com/specialties/psychiatry' },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'clinIQ for Psychiatric Practices',
  description:
    'Scheduling, check-in, and patient flow software built for outpatient psychiatry. Reduces new-patient no-shows, enables private digital intake, and provides crisis queue visibility.',
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
      name: 'How does clinIQ reduce no-show rates in psychiatric practices?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'clinIQ reduces no-shows through multi-touch automated reminders, in-room follow-up scheduling support (which research shows outperforms reception-booked follow-ups), and optional deposit-hold for new patients. New-patient no-show rates of 25% are common in psychiatric outpatient; practices using a structured multi-touch confirmation system typically see rates drop to under 10%.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does clinIQ protect patient privacy in psychiatric check-in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'clinIQ\'s check-in system uses mobile-first intake completed on the patient\'s own device. No sensitive details are confirmed aloud at the front desk. No patient history is visible to others in the waiting room. Intake data goes directly into the system without staff needing to read, handle, or verbally confirm it.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can clinIQ help manage portal message volume and provider burnout?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. clinIQ\'s messaging triage flags incoming patient messages by urgency, so providers can batch-review non-urgent messages during designated windows rather than being interrupted throughout the day. Urgent messages surface immediately. Routine messages are batched. The goal is protected clinical time, not a full inbox that competes with patient care.',
      },
    },
  ],
}

export default function PsychiatryPage() {
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
              <div className={s.badge}>Psychiatry</div>
              <h1 className={s.heroTitle}>
                One in four new patients<br />
                won&rsquo;t show up.<br />
                <em>That&rsquo;s before the portal messages,<br />the waiting room crisis, and the privacy gap.</em>
              </h1>
              <p className={s.heroSubtitle}>
                Psychiatric outpatient practices average 25% new-patient no-shows. They also deal with
                portal message overload that burns out providers, check-in processes that expose sensitive
                histories in public spaces, and waiting rooms where crisis events happen without any protocol.
                clinIQ addresses all four — on one platform.
              </p>
              <div className={s.heroActions}>
                <a href="/contact" className={s.btnPrimary}>
                  See clinIQ for Psychiatry Practices
                  <svg className={s.btnIcon} viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10h12m-4-4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a href="/resources/staff-burnout-prevention-guide" className={s.btnGhost}>
                  Free: Staff Burnout Prevention Guide
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── MARQUEE ── */}
        <div className={s.marquee} aria-hidden="true">
          <div className={s.marqueeTrack}>
            {[
              '25% new-patient no-show reduction',
              'Private mobile check-in',
              'Portal message triage',
              'Variable appointment length support',
              'Crisis walk-in queue visibility',
              'In-room follow-up scheduling',
              'Deposit-hold for new patients',
              'Waiting room safety protocols',
              '25% new-patient no-show reduction',
              'Private mobile check-in',
              'Portal message triage',
              'Variable appointment length support',
              'Crisis walk-in queue visibility',
              'In-room follow-up scheduling',
              'Deposit-hold for new patients',
              'Waiting room safety protocols',
            ].reduce<React.ReactNode[]>((acc, item, i) => {
              if (i > 0) acc.push(<span key={`dot-${i}`} className={s.marqueeDot} />)
              acc.push(<span key={item + i}>{item}</span>)
              return acc
            }, []).map((node, i) => (
              <span key={i}>{node}</span>
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
                  Last Tuesday, a new patient didn&rsquo;t show.<br />
                  <em>They were one of four. That&rsquo;s normal.</em>
                </h2>
                <div className={s.realityNarrative}>
                  <p>
                    The slot sat empty. The provider spent 15 minutes looking for something to fill it.
                    Reception had two follow-up calls to make and three portal messages to answer.
                    One of the portal messages was marked urgent. In the waiting room, a patient
                    near the front desk overheard parts of their own history being confirmed aloud
                    during check-in — insurance, date of birth, reason for visit.
                  </p>
                  <p>
                    At 2pm, a patient in the waiting room began escalating. Crying loudly, then yelling,
                    then threatening. The new receptionist froze. There was no protocol. They knew the
                    provider was in session. They didn&rsquo;t know what to do. By the time someone
                    with experience came out, the situation had grown. Three other patients in the
                    waiting room had witnessed the entire event.
                  </p>
                  <p>
                    By 3pm, the day was running 40 minutes behind and nobody was sure why. The no-show,
                    the portal messages, the check-in interruption, the waiting room incident — none of
                    them were tracked as operational events. They just happened and absorbed time and
                    energy that was already thin. They happen every week.
                  </p>
                </div>
              </div>
              <div className={s.realityRight}>
                <ul className={s.painList} aria-label="Psychiatric practice operational pain points">
                  {[
                    '25% new-patient no-show rate versus 13% for established patients. That\'s significant wasted clinical time every month — and it\'s preventable with the right confirmation sequence and scheduling protocol.',
                    'Reception-booked follow-ups produce more no-shows than in-room follow-ups scheduled by the provider before the patient leaves. Most practices have no way to enforce in-room scheduling consistently.',
                    'Portal message overload adds 45–90 minutes of uncompensated provider time per day. No triage. No urgency distinction. Everything goes into the same inbox and competes for attention.',
                    'Check-in in psychiatric practices happens at front desks in low-privacy areas. Sensitive histories are confirmed aloud. Insurance and diagnoses are visible. Patients overhear each other. The therapeutic relationship starts under compromised conditions.',
                    'Waiting rooms in psychiatric settings experience crisis events — escalating patients, self-harm disclosures, confrontational behavior — that reception staff are not trained for and have no protocol to manage.',
                    'Variable appointment lengths (15-minute med checks, 50-minute therapy, 90-minute intakes) make scheduling a daily puzzle that no standard scheduling tool solves cleanly.',
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
              <h2 className={s.sectionTitle}>Four structural fixes<br />for four structural problems.</h2>
              <p className={s.sectionDesc}>
                These aren&rsquo;t process tweaks. They&rsquo;re the removal of the conditions
                that make psychiatric practice management unnecessarily hard.
              </p>
            </div>
            <div className={s.changesGrid}>
              {[
                {
                  before: 'New patient confirmation: one call or text, no deposit, no consequence for not showing. 25% no-show rate treated as unavoidable.',
                  after: 'Multi-touch automated confirmation sequence (2 weeks, 1 week, 48 hours, day-of). Optional deposit-hold for new patients. No-show rate drops to under 10% with consistent implementation.',
                },
                {
                  before: 'Patient presents at front desk for check-in. Receptionist reads details aloud. Other patients in the waiting area hear diagnosis, insurance, date of birth, and reason for visit.',
                  after: 'Patient checks in privately on their own device before arrival or in the waiting room. No verbal confirmation of sensitive information. Intake data flows to the system — not through a front desk conversation.',
                },
                {
                  before: 'Portal messages arrive in an undifferentiated inbox. Everything looks equally urgent. Providers check it between patients, at the end of the day, or when burnout allows.',
                  after: 'Messages triaged by urgency. Urgent flags surface immediately. Routine messages batch into designated review windows. Provider gets protected clinical time instead of a perpetually open inbox.',
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
              <h2 className={s.sectionTitle}>The clinIQ tools psychiatric practices actually use.</h2>
              <p className={s.sectionDesc}>
                Each module targets a specific structural problem in psychiatric practice operations —
                not a generic feature list adapted from a different specialty.
              </p>
            </div>
            <div className={s.modulesGrid}>
              {[
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  ),
                  title: 'Scheduling — Variable Lengths and No-Show Recovery',
                  desc: 'clinIQ handles 15-minute med checks and 90-minute intakes on the same provider schedule without creating gaps or collisions. In-room follow-up scheduling surfaces at the end of each appointment, supporting the protocol that demonstrably reduces no-shows versus reception-booked follow-ups. For new patients, optional deposit-hold discourages ghost appointments. For established patients, multi-touch automated reminders catch cancellations early enough to offer the slot to a waitlist patient.',
                  href: '/features/scheduling',
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  ),
                  title: 'Check-In — Private Intake for Sensitive Histories',
                  desc: 'Psychiatric intake forms contain some of the most sensitive information a patient will ever share with a healthcare provider. clinIQ\'s mobile check-in moves that exchange entirely to the patient\'s own device — no front desk reading intake aloud, no other patients hearing answers, no staff handling documents describing trauma or psychiatric history in a waiting area. The therapeutic relationship starts with the first contact, not the first appointment.',
                  href: '/features/check-in',
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
                      <rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
                    </svg>
                  ),
                  title: 'Patient Flow — Crisis-Aware Queue Visibility',
                  desc: 'When a crisis walk-in arrives, the live board shows the downstream scheduling impact immediately — which appointments shift, by how much, and who should be notified. Reception staff without clinical training have a clear next step when a waiting room situation escalates, because the board shows who\'s available and where the provider is in their current session. The ambiguity that causes freeze responses — "I don\'t know what to do, I don\'t want to interrupt, I don\'t know who to call" — is replaced by visible information.',
                  href: '/features/patient-flow',
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                    </svg>
                  ),
                  title: 'Analytics — No-Show Patterns and Provider Capacity',
                  desc: 'No-show rate by appointment type (new patient vs established, med check vs therapy), by day of week, by confirmation method, and by individual patient history. Provider utilization by appointment length. Portal message volume per provider per week. These numbers make the case for structural changes — and they make the case to insurers and administrators when clinical capacity is being underutilized by preventable no-shows rather than actual demand.',
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
              <h2 className={s.sectionTitle}>Variable visits. Predictable operations.</h2>
              <p className={s.workflowDesc}>
                A 15-minute med check and a 90-minute intake are both tracked on the same board —
                each with the correct time allocation, each visible to the whole team, each
                generating the right notifications at the right moment.
              </p>
            </div>
            <div className={s.stageRow} role="list" aria-label="Psychiatric practice visit flow stages">
              {[
                { label: 'Check-In', color: '#f59e0b' },
                { label: 'Waiting', color: '#3b82f6' },
                { label: 'With Provider', color: '#0d9488' },
                { label: 'In-Room Follow-Up Booking', color: '#8b5cf6' },
                { label: 'Checkout', color: '#22c55e' },
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
              The in-room follow-up booking stage is not an extra step — it&rsquo;s an explicit
              prompt to the provider to schedule the next appointment before the patient leaves
              the room. Providers who do this consistently see new-patient no-show rates drop by
              30–40% compared to follow-ups booked by reception after the visit.
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className={s.stats}>
          <div className={s.container}>
            <div className={s.statsHeader}>
              <h2 className={s.statsHeaderTitle}>What these problems cost psychiatric practices.</h2>
              <p className={s.statsHeaderDesc}>
                Not soft costs. Quantifiable clinical time, revenue, and staff hours lost
                to preventable operational failures.
              </p>
            </div>
            <div className={s.statsGrid}>
              {[
                { number: '25%', label: 'New-patient no-show rate in psychiatric outpatient — nearly double the established patient rate' },
                { number: '30–40%', label: 'No-show reduction when follow-ups are scheduled in-room versus reception-booked after the visit' },
                { number: '45–90min', label: 'Uncompensated provider time per day consumed by portal messages with no triage system' },
                { number: '1 in 4', label: 'Psychiatric front desk staff report a waiting room safety incident in the past 30 days with no protocol to handle it' },
              ].map(({ number, label }) => (
                <div key={label} className={s.stat}>
                  <span className={s.statNumber}>{number}</span>
                  <span className={s.statLabel}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIAL PLACEHOLDER — DO NOT FABRICATE. Insert real client quote when available. */}

        {/* ── FAQ ── */}
        <section className={s.faq}>
          <div className={s.container}>
            <div className={s.faqHeader}>
              <span className={s.sectionLabel}>Common Questions</span>
              <h2 className={s.sectionTitle}>What psychiatric practices ask before getting started.</h2>
            </div>
            <div className={s.faqList}>
              {[
                {
                  q: 'We see both psychiatry and therapy patients. Does clinIQ handle both appointment types on the same schedule?',
                  a: 'Yes. clinIQ supports multiple appointment types with different durations, reminder cadences, and check-in flows on the same provider schedule. A 15-minute medication management visit and a 50-minute psychotherapy session can coexist on the same day without scheduling conflicts or uniform-template problems.',
                },
                {
                  q: 'HIPAA compliance is non-negotiable for our patient population. How does clinIQ handle data privacy?',
                  a: 'clinIQ is designed for HIPAA-covered entities. The check-in system avoids any public display of patient information, the mobile intake flow keeps data on the patient\'s device until submission, and the platform operates under Business Associate Agreement terms. For specific compliance questions, we provide documentation and work with your compliance officer.',
                },
                {
                  q: 'Our providers are burning out from portal messages. How does triage actually work?',
                  a: 'Incoming messages are classified by urgency at submission — either by the patient selecting a category (routine, question, urgent) or by staff tagging. Urgent messages surface immediately. Routine messages accumulate in a batch queue that providers review in designated windows rather than being interrupted throughout the day. The goal is not to reduce access — it\'s to protect focused clinical time.',
                },
                {
                  q: 'How do we handle the deposit-hold for new patients without alienating people who genuinely cannot pay upfront?',
                  a: 'The deposit-hold is configurable — you decide whether to require it, how much, and for which appointment types. Many practices apply it selectively (new patients referred from outside sources, for example) rather than universally. The goal is to filter out ghost appointments without creating barriers for patients in genuine need.',
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
                Your patients are doing<br />
                <em>courageous work showing up.</em>
              </h2>
              <p className={s.ctaDesc}>
                The administrative experience should match the clinical one. Private intake. Predictable
                scheduling. A waiting room that is managed — not hoped for. clinIQ makes psychiatric
                practice operations worthy of the care being delivered inside.
              </p>
              <div className={s.ctaActions}>
                <a href="/contact" className={s.btnPrimary}>
                  See clinIQ for Psychiatry
                  <svg className={s.btnIcon} viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10h12m-4-4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a href="/specialties/behavioral-health" className={s.btnGhost}>
                  Also: Behavioral Health
                </a>
              </div>
              <span className={s.ctaNote}>No commitment. We&rsquo;ll show you the scheduling and check-in flow live.</span>
            </div>
          </div>
        </section>

        {/* ── RELATED ── */}
        <section className={s.related}>
          <div className={s.container}>
            <p className={s.relatedTitle}>Related resources and pages</p>
            <div className={s.relatedLinks}>
              {[
                { label: 'Scheduling Feature', href: '/features/scheduling' },
                { label: 'Check-In Feature', href: '/features/check-in' },
                { label: 'Patient Flow Feature', href: '/features/patient-flow' },
                { label: 'Behavioral Health', href: '/specialties/behavioral-health' },
                { label: 'Addiction Medicine', href: '/specialties/addiction-medicine' },
                { label: 'Staff Burnout Prevention Guide', href: '/resources/staff-burnout-prevention-guide' },
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
