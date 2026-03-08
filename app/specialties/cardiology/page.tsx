import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import s from '@/app/specialties/specialty-full.module.css'

export const metadata: Metadata = {
  title: 'Cardiology Clinic Management Software | Reduce Wait Times & Scheduling Chaos | clinIQ',
  description:
    'Clinic operations software for cardiology practices. End triple-booking. Give patients honest wait times. Coordinate echo studies and device interrogations without status guesswork.',
  openGraph: {
    title: 'clinIQ for Cardiology — End Triple-Booking and the Two-Hour Wait for a 15-Minute Visit',
    description:
      'Cardiology clinics normalize triple-booking to keep physicians busy, then cancel patients who arrive 5 minutes late while running 90 minutes behind. clinIQ replaces that contradiction with actual capacity visibility.',
    type: 'website',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cliniq.com' },
    { '@type': 'ListItem', position: 2, name: 'Specialties', item: 'https://cliniq.com/specialties' },
    { '@type': 'ListItem', position: 3, name: 'Cardiology', item: 'https://cliniq.com/specialties/cardiology' },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'clinIQ for Cardiology Clinics',
  description:
    'Patient flow and scheduling software for outpatient cardiology. Coordinates echo studies, stress tests, device interrogations, and provider follow-ups with real-time visibility.',
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
      name: 'How does clinIQ help cardiology practices reduce patient wait times?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'clinIQ replaces triple-booking with capacity-aware scheduling and real-time flow visibility. Providers see who is ready for them without interrupting front desk. Patients waiting for echo studies or stress tests see live status updates so they understand where they are in the sequence. Visible wait times and real capacity signals reduce the chronic 90-minute wait that drives patient complaints and no-shows.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can clinIQ coordinate echo studies, stress tests, and device interrogations on the same board?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Each diagnostic stage — echo, stress test, device interrogation, Holter monitor pickup, provider follow-up — is a trackable status in the patient flow board. When an echo is complete, the board updates and the provider sees the patient is ready. When device interrogation is done, the cardiologist\'s queue advances. No phone calls. No hallway check-ins.',
      },
    },
  ],
}

export default function CardiologyPage() {
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
              <div className={s.badge}>Cardiology</div>
              <h1 className={s.heroTitle}>
                You triple-book to keep doctors busy.<br />
                You cancel patients who are 5 minutes late.<br />
                <em>You run 90 minutes behind every day. Something is wrong.</em>
              </h1>
              <p className={s.heroSubtitle}>
                Cardiology clinics normalize overbooking to fill physician time — then create two-hour
                waits for 15-minute visits while enforcing strict patient punctuality rules.
                The contradiction isn&rsquo;t lost on patients. clinIQ replaces the triple-booking
                compromise with actual capacity visibility and multi-stage visit coordination.
              </p>
              <div className={s.heroActions}>
                <a href="/contact" className={s.btnPrimary}>
                  See clinIQ for Cardiology Practices
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
              'Echo and stress test coordination',
              'Device interrogation tracking',
              'Real-time provider readiness board',
              'Transparent wait time display',
              'Urgent referral triage',
              'Multi-stage cardiology visit flow',
              'New referral vs follow-up routing',
              'End to triple-booking chaos',
              'Echo and stress test coordination',
              'Device interrogation tracking',
              'Real-time provider readiness board',
              'Transparent wait time display',
              'Urgent referral triage',
              'Multi-stage cardiology visit flow',
              'New referral vs follow-up routing',
              'End to triple-booking chaos',
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
                  &ldquo;We triple-book because of cancellations<br />
                  and because the doctors need to stay busy.&rdquo;<br />
                  <em>The patient waited two hours for a 15-minute visit. Then switched cardiologists.</em>
                </h2>
                <div className={s.realityNarrative}>
                  <p>
                    A front-desk worker at a cardiology office describes the four most common patient
                    complaints as: waits of an hour past appointment time, follow-ups booked three months
                    out, new patients waiting six months, and policies that limit how many concerns can
                    be addressed per visit. None of these are random. They&rsquo;re the output of a
                    scheduling system designed around physician utilization rather than patient capacity.
                  </p>
                  <p>
                    The same patient who is cancelled for arriving six minutes late will wait 90 minutes
                    when they arrive on time. They notice. When they tell other patients in the waiting
                    room — and they do — the front desk gets another impossible conversation to manage.
                    A patient dealing with post-cardiac-surgery wound care calls for an urgent referral
                    and is told the earliest appointment is three months out. Only after screaming at
                    a supervisor does a slot &ldquo;suddenly&rdquo; appear for next week.
                    The capacity existed. The scheduling was opaque.
                  </p>
                  <p>
                    Cardiology visits also require sequential multi-stage coordination: echo first,
                    then stress test, then device interrogation, then provider review. Each stage
                    depends on the last. Each handoff is currently a phone call or a hallway question.
                    When any stage runs long, it cascades — invisibly — through the rest of the day.
                  </p>
                </div>
              </div>
              <div className={s.realityRight}>
                <ul className={s.painList} aria-label="Cardiology practice operational pain points">
                  {[
                    'Triple-booking is a system designed to protect physician utilization at the cost of patient experience. It creates 2-hour waits for 15-minute visits and destroys trust with every patient who notices the contradiction.',
                    'Echo and stress test results aren\'t flagged to providers automatically — someone physically walks over or calls across the building to say the study is done.',
                    'Device clinic days pack in interrogations back-to-back with no real-time board — staff lose track of who\'s been seen, who\'s next, and which device clinic station is free.',
                    'Urgent referrals from hospitalists and other specialists land in the scheduling queue with no urgency signal — they wait alongside routine 6-month follow-ups until someone escalates manually.',
                    'New referrals are booked 3–6 months out not because there\'s no capacity, but because scheduling is opaque. Capacity exists but isn\'t visible or accessible until someone applies pressure.',
                    'Front desk staff absorb the patient frustration from a scheduling system they didn\'t design, can\'t change, and are blamed for every day.',
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
              <h2 className={s.sectionTitle}>From opaque overbooking<br />to managed, visible capacity.</h2>
              <p className={s.sectionDesc}>
                The cardiology scheduling crisis is a visibility crisis. clinIQ makes capacity
                visible — to staff, to patients, and to the people making scheduling decisions.
              </p>
            </div>
            <div className={s.changesGrid}>
              {[
                {
                  before: 'Triple-booking fills the day. Patients wait 60–90 minutes past appointment time. The same clinic cancels patients who arrive 6 minutes late. The contradiction is visible to everyone.',
                  after: 'Real capacity signals tied to actual visit stage durations. Scheduling reflects what the physician can actually see that day — not what looks full on a template that hasn\'t been calibrated in three years.',
                },
                {
                  before: 'Echo is done. Stress test complete. Device interrogated. Provider has no idea until someone walks across the building to say so. Minutes lost between every multi-stage patient.',
                  after: 'Each diagnostic stage updates the live board when complete. Provider sees patient is ready — echo done, device interrogated, in exam room. No phone calls. No physical check. The handoff is automatic.',
                },
                {
                  before: 'Urgent referral from a hospitalist sits in the standard scheduling queue alongside 6-month follow-ups. Nobody flags it. Patient calls three times to find out what happened.',
                  after: 'Referrals tagged by urgency at intake. Urgent cases surface to a separate review queue with same-day or next-day response SLA. Capacity that exists gets used for the patients who need it most.',
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
              <h2 className={s.sectionTitle}>clinIQ modules that address cardiology&rsquo;s specific problems.</h2>
              <p className={s.sectionDesc}>
                Multi-stage diagnostic coordination, scheduling visibility, and patient wait time
                transparency — the specific problems cardiology practices face every clinic day.
              </p>
            </div>
            <div className={`${s.modulesGrid} ${s.threeCol}`}>
              {[
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
                      <rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
                    </svg>
                  ),
                  title: 'Patient Flow — Multi-Stage Diagnostic Coordination',
                  desc: 'Cardiology visits are rarely single-room. An echo visit moves through check-in, echo study, waiting for provider review, provider visit, and discharge — each stage dependent on the previous one. clinIQ tracks every patient across every stage simultaneously. The cardiologist\'s dashboard shows which patients are post-echo and ready for review, which are still in the stress test, and which device clinic patients have been interrogated and are waiting. The provider never needs to ask. Staff never need to physically track who\'s where. The day runs on information instead of interruptions.',
                  href: '/features/patient-flow',
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  ),
                  title: 'LobbyView — Wait Time Transparency',
                  desc: 'A HIPAA-safe public display showing real estimated wait times — no patient names, no chart information, no violations. When a cardiologist is running behind because a complex echo took longer than scheduled, patients in the lobby see an updated wait estimate instead of sitting in silence for 90 minutes and imagining the worst. Transparent wait times reduce "how much longer?" questions, prevent the hostile lobby conversations front desk dreads, and give patients the option to make an informed decision about their time.',
                  href: '/features/lobbyview',
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                    </svg>
                  ),
                  title: 'Analytics — Utilization, Wait Times, Referral Response',
                  desc: 'Actual provider utilization versus booked time. Average patient wait from scheduled appointment to provider contact. Echo and stress test completion times. Device clinic throughput per session. Time-to-appointment for urgent referrals versus routine follow-ups. These numbers reveal whether triple-booking is actually solving a utilization problem or creating a wait time problem that costs you patients. When a practice owner asks why the schedule is full but patients are complaining, this data has the answer.',
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
              <h2 className={s.sectionTitle}>Echo done. Device interrogated. <em>Provider ready? Yes. Everyone knows.</em></h2>
              <p className={s.workflowDesc}>
                Every cardiology visit stage — from check-in through diagnostic studies to
                provider review — tracked on a single live board. No phone calls between rooms.
                No hallway check-ins. No provider waiting for information that already exists.
              </p>
            </div>
            <div className={s.stageRow} role="list" aria-label="Cardiology visit flow stages">
              {[
                { label: 'Check-In', color: '#f59e0b' },
                { label: 'Echo / Stress Test', color: '#8b5cf6' },
                { label: 'Device Interrogation', color: '#3b82f6' },
                { label: 'Waiting — Provider', color: '#ec4899' },
                { label: 'With Cardiologist', color: '#0d9488' },
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
              Not every patient goes through every stage — routine follow-ups skip the diagnostic stages,
              device clinic patients skip echo, stress test patients skip device interrogation.
              The board adapts to visit type so the cardiologist&rsquo;s queue reflects who is actually
              ready for them — not who is somewhere in the building at an unknown stage.
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className={s.stats}>
          <div className={s.container}>
            <div className={s.statsHeader}>
              <h2 className={s.statsHeaderTitle}>The wait time problem is a retention problem.</h2>
              <p className={s.statsHeaderDesc}>
                Cardiology patients who switch practices cite wait times and scheduling experience —
                not clinical quality. The care is excellent. The operations drive them away.
              </p>
            </div>
            <div className={s.statsGrid}>
              {[
                { number: '90 min', label: 'Average reported wait past scheduled appointment time in triple-booked cardiology practices' },
                { number: '3–6 mo', label: 'Time-to-appointment for new patients — in clinics where scheduling capacity is opaque rather than genuinely full' },
                { number: '2-hour', label: 'Reported wait for a 15-minute follow-up visit — the experience that drives patient switches' },
                { number: '1 week', label: 'How quickly urgent appointments materialize when a patient escalates — proving capacity existed all along' },
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
              <h2 className={s.sectionTitle}>What cardiology practices ask before getting started.</h2>
            </div>
            <div className={s.faqList}>
              {[
                {
                  q: 'We use triple-booking because no-shows are unpredictable. How does clinIQ solve the no-show problem without overbooking?',
                  a: 'clinIQ addresses the symptom (no-shows) and the side effect (overbooking) separately. For no-shows: multi-touch automated reminders and same-day confirmation reduce the rate. For overbooking: when no-shows do occur, automated waitlist backfill fills the slot. The goal is to recover no-show slots individually rather than systemically overloading every day.',
                },
                {
                  q: 'How does clinIQ handle the different scheduling rules for echo, stress test, and device clinic days?',
                  a: 'Each visit type and each diagnostic modality can have separate scheduling templates, room assignments, and time allocations. Echo days, stress test days, and device clinic days can coexist on the same system with different flows. The board adapts to the day\'s configuration automatically.',
                },
                {
                  q: 'Our front desk is already overwhelmed. Does adding clinIQ create more work for them?',
                  a: 'clinIQ removes the tasks that currently require front desk to hold everything in memory: who\'s in which stage, how long each patient has been waiting, which rooms are occupied, what the wait looks like from the lobby. Those tasks move to a board. Front desk manages exceptions, not the operational state of the entire clinic.',
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
                The capacity is there.<br />
                <em>The visibility isn&rsquo;t.</em>
              </h2>
              <p className={s.ctaDesc}>
                Cardiology practices that see 3-month new patient waits aren&rsquo;t necessarily
                overwhelmed — they&rsquo;re often opaque. clinIQ makes capacity visible, scheduling
                intelligent, and wait times honest. Patients stay when they feel respected. They leave
                when they feel like a number.
              </p>
              <div className={s.ctaActions}>
                <a href="/contact" className={s.btnPrimary}>
                  See clinIQ for Cardiology
                  <svg className={s.btnIcon} viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10h12m-4-4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a href="/features/lobbyview" className={s.btnGhost}>
                  See LobbyView
                </a>
              </div>
              <span className={s.ctaNote}>No commitment. We&rsquo;ll show you the multi-stage flow configured for cardiology.</span>
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
                { label: 'Scheduling Feature', href: '/features/scheduling' },
                { label: 'Analytics Feature', href: '/features/analytics' },
                { label: 'ROI Calculator', href: '/resources/roi-calculator' },
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
