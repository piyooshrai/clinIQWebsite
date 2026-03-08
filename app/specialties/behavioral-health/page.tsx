import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import s from '@/app/specialties/specialty-full.module.css'

export const metadata: Metadata = {
  title: 'clinIQ for Behavioral Health — Session Flow Without the Scheduling Chaos',
  description:
    'Behavioral health practices lose hours every week to ABA scheduling collisions, crisis walk-in disruptions, and variable session lengths no EHR was built to handle. clinIQ fixes the operational layer.',
  openGraph: {
    title: 'clinIQ for Behavioral Health — Session Flow Without the Scheduling Chaos',
    description:
      'Real-time session tracking, crisis-aware check-in, and ABA block scheduling for behavioral health and mental health practices.',
    type: 'website',
  },
}

const schemaData = {
  breadcrumb: {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cliniq.com' },
      { '@type': 'ListItem', position: 2, name: 'Specialties', item: 'https://cliniq.com/specialties' },
      { '@type': 'ListItem', position: 3, name: 'Behavioral Health', item: 'https://cliniq.com/specialties/behavioral-health' },
    ],
  },
  service: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'clinIQ for Behavioral Health',
    description:
      'Clinic operations platform built for the scheduling complexity, session variability, and crisis demands of behavioral health and mental health practices.',
    provider: { '@type': 'Organization', name: 'clinIQ' },
    areaServed: 'US',
    serviceType: 'Clinic Operations Software',
  },
  faq: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why is behavioral health scheduling harder than other specialties?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Behavioral health sessions vary in length from 30 to 90 minutes or more. ABA practices run simultaneous block sessions with multiple therapists. Crisis walk-ins can displace scheduled patients with no visibility for the rest of the staff. Standard scheduling systems assume uniform appointment slots — behavioral health is structurally incompatible with that assumption.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does clinIQ handle ABA scheduling specifically?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'clinIQ tracks each therapist and each client session independently, with real-time status updates as sessions start, pause, and end. Staff can see which rooms are occupied, which therapists are available, and where clients are in their session without interrupting anyone. ABA blocks with multiple concurrent sessions are tracked on a single live board.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does clinIQ support crisis walk-ins without disrupting the scheduled day?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'clinIQ\'s Patient Flow module gives front desk staff real-time visibility into who is with a provider, who is waiting, and how long each scheduled slot is running. When a crisis walk-in arrives, staff can see exactly where capacity exists rather than guessing or interrupting clinicians mid-session.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does clinIQ work for both outpatient therapy and intensive outpatient programs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. clinIQ handles outpatient therapy practices with individual 50-minute sessions, intensive outpatient programs (IOP) with group session blocks, and partial hospitalization programs (PHP) where patients cycle through structured activities throughout the day. The workflow is configurable to match each practice\'s actual patient flow.',
        },
      },
    ],
  },
}

const marqueeItems = [
  'ABA Block Scheduling', 'Session Tracking', 'Crisis Walk-In Flow',
  'IOP Group Boards', 'Variable Session Lengths', 'Therapist Availability',
  'Check-In Privacy', 'No-Show Patterns', 'Intake Coordination',
]

export default function BehavioralHealthPage() {
  return (
    <>
      <NavInner />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData.breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData.service) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData.faq) }}
      />
      <main>
        {/* ── HERO ── */}
        <section className={s.hero}>
          <div className={s.heroBg}>
            <div className={`${s.heroOrb} ${s.heroOrbTeal}`} />
            <div className={`${s.heroOrb} ${s.heroOrbBlue}`} />
            <div className={s.heroGrain} />
          </div>
          <div className={s.heroContent}>
            <span className={s.badge}>Behavioral Health</span>
            <h1 className={s.heroTitle}>
              Sessions run long, patients show up in crisis, and your scheduler was built for{' '}
              <em>15-minute slots.</em>
            </h1>
            <p className={s.heroSubtitle}>
              Behavioral health is operationally unlike any other specialty. Sessions vary by 60 minutes or more.
              ABA practices run simultaneous blocks across multiple therapists. Crisis presentations blow up
              whatever the day looked like at 9am. clinIQ gives your staff live visibility into exactly
              who is where — without calling into anyone's session to find out.
            </p>
            <div className={s.heroActions}>
              <a href="/demo" className={s.btnPrimary}>
                See clinIQ for behavioral health
                <span className={s.btnIcon}>→</span>
              </a>
              <a href="/specialties" className={s.btnGhost}>All specialties</a>
            </div>
          </div>
        </section>

        {/* ── MARQUEE ── */}
        <div className={s.marquee}>
          <div className={s.marqueeTrack}>
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className={s.marqueeContent}>
                {item}
                {i < marqueeItems.length * 2 - 1 && <span className={s.marqueeDot}>·</span>}
              </span>
            ))}
          </div>
        </div>

        {/* ── REALITY ── */}
        <section className={s.reality}>
          <div className={s.realityGrid}>
            <div className={s.realityLeft}>
              <h2>The operational weight no EHR was built to carry.</h2>
              <p className={s.realityNarrative}>
                Standard clinic software assumes a predictable rhythm: patient arrives, patient is seen,
                patient leaves. In behavioral health, that rhythm doesn't exist. Therapy sessions run over.
                ABA clients have meltdowns that delay transitions. IOP groups start while individual clients
                are still being triaged. Crisis walk-ins appear without appointments and need to be
                absorbed without blowing up the entire day.
              </p>
              <p className={s.realityNarrative}>
                The result is that behavioral health front desk staff spend their shift doing triage
                they were never trained for — figuring out which therapist is available, whether the
                client in Room 3 is close to done, whether there's any capacity for the person who
                just walked in visibly distressed. The answers exist. Nobody can access them
                without interrupting a session.
              </p>
            </div>
            <div className={s.realityRight}>
              <ul className={s.painList}>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    ABA practices run simultaneous sessions across multiple therapists and rooms —
                    no standard scheduler tracks therapist availability in real time.
                  </span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    Session overruns are invisible to front desk staff until they're already 20 minutes
                    past schedule, cascading delays through every appointment that follows.
                  </span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    Crisis walk-ins require immediate staff triage with no live picture of where
                    capacity actually exists — staff guess, or interrupt clinicians mid-session.
                  </span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    IOP and PHP programs need group-level tracking in addition to individual session
                    management — no EHR workflow covers both simultaneously.
                  </span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    Behavioral health no-show rates run 20-40% for new patients, with no system
                    flagging patterns or triggering re-engagement workflows automatically.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── CHANGES ── */}
        <section className={s.changes}>
          <h2>Before and after clinIQ.</h2>
          <div className={s.changesGrid}>
            <div className={s.changeCard}>
              <div className={`${s.changeLabel} ${s.changeLabelBefore}`}>Before</div>
              <div className={s.changeBefore}>
                Front desk calls into a session or walks to a room to find out if a therapist is available
                for a crisis walk-in.
              </div>
              <div className={s.changeLabel + ' ' + s.changeLabelAfter}>After</div>
              <div className={s.changeAfter}>
                Staff sees a live board: which therapist is with a client, how long the session has been
                running, and when the next opening exists — no interruptions required.
              </div>
            </div>
            <div className={s.changeCard}>
              <div className={`${s.changeLabel} ${s.changeLabelBefore}`}>Before</div>
              <div className={s.changeBefore}>
                ABA scheduling is tracked in a spreadsheet because no system handles simultaneous
                multi-therapist block sessions.
              </div>
              <div className={`${s.changeLabel} ${s.changeLabelAfter}`}>After</div>
              <div className={s.changeAfter}>
                Every ABA session is tracked in clinIQ: client name, assigned therapist, room,
                session start time, and live status visible to all staff simultaneously.
              </div>
            </div>
            <div className={s.changeCard}>
              <div className={`${s.changeLabel} ${s.changeLabelBefore}`}>Before</div>
              <div className={s.changeBefore}>
                A session runs 35 minutes over and nobody knows until the next patient is already
                in the waiting room asking what's happening.
              </div>
              <div className={`${s.changeLabel} ${s.changeLabelAfter}`}>After</div>
              <div className={s.changeAfter}>
                Session duration alerts flag overruns before they compound. Staff can proactively
                communicate delays to waiting patients without hunting for the information.
              </div>
            </div>
            <div className={s.changeCard}>
              <div className={`${s.changeLabel} ${s.changeLabelBefore}`}>Before</div>
              <div className={s.changeBefore}>
                A new patient no-shows for the third time. Nobody has flagged them for a call because
                no system connects the no-show pattern to an outreach action.
              </div>
              <div className={`${s.changeLabel} ${s.changeLabelAfter}`}>After</div>
              <div className={s.changeAfter}>
                clinIQ flags repeat no-shows automatically. Front desk staff see the pattern before
                the appointment and can call to confirm — or the slot gets offered to a waitlisted patient.
              </div>
            </div>
          </div>
        </section>

        {/* ── MODULES ── */}
        <section className={s.modules}>
          <h2>The clinIQ modules that move behavioral health forward.</h2>
          <div className={s.modulesGrid}>
            <div className={s.moduleCard}>
              <div className={s.moduleIcon}>⬛</div>
              <h3 className={s.moduleTitle}>Patient Flow</h3>
              <p className={s.moduleDesc}>
                Live view of every session in progress, every therapist's status, and every waiting
                patient — on one screen. Designed for the parallel-session reality of ABA and IOP.
              </p>
              <a href="/features/patient-flow" className={s.moduleLink}>Learn more →</a>
            </div>
            <div className={s.moduleCard}>
              <div className={s.moduleIcon}>⬛</div>
              <h3 className={s.moduleTitle}>Check-In</h3>
              <p className={s.moduleDesc}>
                Privacy-forward check-in built for behavioral health. Patients self-check without
                announcing themselves to a waiting room. Crisis walk-ins enter a separate triage
                queue visible to clinical staff immediately.
              </p>
              <a href="/features/check-in" className={s.moduleLink}>Learn more →</a>
            </div>
            <div className={s.moduleCard}>
              <div className={s.moduleIcon}>⬛</div>
              <h3 className={s.moduleTitle}>Scheduling</h3>
              <p className={s.moduleDesc}>
                Variable-length session support built in. 30-minute, 50-minute, 90-minute — each
                therapist's schedule reflects actual session lengths, not a uniform slot assumption
                that guarantees cascading delays.
              </p>
              <a href="/features/scheduling" className={s.moduleLink}>Learn more →</a>
            </div>
            <div className={s.moduleCard}>
              <div className={s.moduleIcon}>⬛</div>
              <h3 className={s.moduleTitle}>Analytics</h3>
              <p className={s.moduleDesc}>
                No-show rates by patient, therapist, and appointment type. Session overrun patterns.
                Crisis walk-in volume by day and time. The operational intelligence your practice
                needs to staff properly and stop reactive scheduling.
              </p>
              <a href="/features/analytics" className={s.moduleLink}>Learn more →</a>
            </div>
          </div>
        </section>

        {/* ── WORKFLOW ── */}
        <section className={s.workflow}>
          <h2>How a behavioral health day actually moves through clinIQ.</h2>
          <div className={s.stageRow}>
            {[
              { label: 'Arrival & Check-In', color: '#0d9488' },
              { label: 'Waiting / Intake', color: '#8b5cf6' },
              { label: 'With Therapist', color: '#3b82f6' },
              { label: 'Session Active', color: '#f59e0b' },
              { label: 'Session Complete', color: '#22c55e' },
              { label: 'Crisis Triage', color: '#ef4444' },
              { label: 'Checkout / Next Appt', color: '#0d9488' },
            ].map((stage, i, arr) => (
              <>
                <div key={stage.label} className={s.stage}>
                  <div className={s.stageDot} style={{ background: stage.color }} />
                  <span>{stage.label}</span>
                </div>
                {i < arr.length - 1 && <div key={`arrow-${i}`} className={s.stageArrow}>→</div>}
              </>
            ))}
          </div>
          <p className={s.workflowNote}>
            Crisis Triage is a parallel track — walk-in patients enter a separate queue visible to
            clinical leads while the scheduled day continues uninterrupted for other patients.
          </p>
        </section>

        {/* ── STATS ── */}
        <section className={s.stats}>
          <div className={s.statsGrid}>
            <div className={s.stat}>
              <div className={s.statNumber}>20–40%</div>
              <div className={s.statLabel}>new patient no-show rates in behavioral health — highest of any specialty</div>
            </div>
            <div className={s.stat}>
              <div className={s.statNumber}>60 min</div>
              <div className={s.statLabel}>typical session length variability — 30-minute to 90-minute in the same day</div>
            </div>
            <div className={s.stat}>
              <div className={s.statNumber}>3–5×</div>
              <div className={s.statLabel}>more simultaneous sessions in ABA practices vs. standard outpatient clinics</div>
            </div>
            <div className={s.stat}>
              <div className={s.statNumber}>1 in 4</div>
              <div className={s.statLabel}>behavioral health practices report staff turnover driven partly by workflow chaos and burnout</div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className={s.faq}>
          <h2>Behavioral health operations, answered.</h2>
          <div className={s.faqList}>
            {schemaData.faq.mainEntity.map((item) => (
              <div key={item.name} className={s.faqItem}>
                <div className={s.faqQ}>{item.name}</div>
                <div className={s.faqA}>{item.acceptedAnswer.text}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className={s.cta}>
          <div className={s.ctaBg}>
            <div className={s.ctaOrb} />
          </div>
          <div className={s.ctaContent}>
            <h2 className={s.ctaTitle}>
              Your staff shouldn't have to interrupt a session to find out if a therapist is available.
            </h2>
            <p className={s.ctaDesc}>
              clinIQ gives behavioral health teams live visibility into every session, every therapist,
              and every waiting patient. See it running on a practice like yours.
            </p>
            <div className={s.ctaActions}>
              <a href="/demo" className={s.btnPrimary}>
                See clinIQ for behavioral health
                <span className={s.btnIcon}>→</span>
              </a>
            </div>
            <p className={s.ctaNote}>No commitment. Setup in one day.</p>
          </div>
        </section>

        {/* ── RELATED ── */}
        <section className={s.related}>
          <h3>Related specialties</h3>
          <div className={s.relatedLinks}>
            <a href="/specialties/psychiatry" className={s.relatedLink}>Psychiatry</a>
            <a href="/specialties/addiction-medicine" className={s.relatedLink}>Addiction Medicine</a>
            <a href="/specialties/primary-care" className={s.relatedLink}>Primary Care</a>
            <a href="/specialties/urgent-care" className={s.relatedLink}>Urgent Care</a>
          </div>
        </section>
      </main>
      <FooterInner />
    </>
  )
}
