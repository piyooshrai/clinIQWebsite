import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import s from '@/app/specialties/specialty-full.module.css'

export const metadata: Metadata = {
  title: 'Dermatology Clinic Management Software | Stop Overbooking & MA Burnout | clinIQ',
  description:
    'Clinic operations software for dermatology practices. End quadruple-booking. Give MAs a live view of the schedule before it overloads. Stop the noon myth in high-volume derm clinics.',
  openGraph: {
    title: 'clinIQ for Dermatology — 42 Appointments Booked 8–12. Something Has to Change.',
    description:
      'Dermatology practices pack 42 slots into a 4-hour morning, manually override scheduling templates, and watch their MAs quit. clinIQ makes the schedule match reality before it breaks the people delivering the care.',
    type: 'website',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cliniq.com' },
    { '@type': 'ListItem', position: 2, name: 'Specialties', item: 'https://cliniq.com/specialties' },
    { '@type': 'ListItem', position: 3, name: 'Dermatology', item: 'https://cliniq.com/specialties/dermatology' },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'clinIQ for Dermatology Clinics',
  description:
    'Patient flow and scheduling software for dermatology practices. Prevents overbooking, provides real-time MA visibility, and tracks procedure flow for biopsies and cosmetic appointments alongside medical derm.',
  provider: { '@type': 'Organization', name: 'clinIQ', url: 'https://cliniq.com' },
  serviceType: 'Healthcare Operations Software',
  areaServed: 'US',
}

export default function DermatologyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
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
              <div className={s.badge}>Dermatology</div>
              <h1 className={s.heroTitle}>
                42 appointments booked 8 to 12.<br />
                Provider doing full-body exams in five minutes.<br />
                <em>MA gives two weeks&rsquo; notice by 10am.</em>
              </h1>
              <p className={s.heroSubtitle}>
                High-volume dermatology books itself into chaos. A morning template that officially
                holds 16 slots gets manually overridden to 42 by a select few with scheduling access.
                Nobody tells the MA. Nobody tells the patient their wait will be two hours.
                clinIQ makes the schedule visible before it makes people quit.
              </p>
              <div className={s.heroActions}>
                <a href="/contact" className={s.btnPrimary}>
                  See clinIQ for Dermatology Practices
                  <svg className={s.btnIcon} viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10h12m-4-4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a href="/features/analytics" className={s.btnGhost}>
                  See Analytics
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── MARQUEE ── */}
        <div className={s.marquee} aria-hidden="true">
          <div className={s.marqueeTrack}>
            {[
              'Schedule override visibility',
              'Biopsy and procedure flow tracking',
              'MA workload real-time board',
              'Template vs actual comparison',
              'Medical vs cosmetic visit routing',
              'Scheduling cap enforcement',
              'Live provider readiness signal',
              'Staff burnout prevention',
              'Schedule override visibility',
              'Biopsy and procedure flow tracking',
              'MA workload real-time board',
              'Template vs actual comparison',
              'Medical vs cosmetic visit routing',
              'Scheduling cap enforcement',
              'Live provider readiness signal',
              'Staff burnout prevention',
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
                  The template says 16 slots.<br />
                  The schedule has 42.<br />
                  <em>Noon is a fiction everyone pretends to believe.</em>
                </h2>
                <div className={s.realityNarrative}>
                  <p>
                    A dermatology MA posting their resignation describes their clinic&rsquo;s
                    morning: the official scheduling template allows around 15–16 slots for
                    an 8am–12pm block. But additional appointments are added manually, by a
                    select few with scheduling access, without adjusting staffing or notifying
                    the MA. The result: 42 appointments in four hours. One provider doing
                    full-body skin exams in five minutes to keep pace. The MA working to
                    room patients, take histories, and prepare biopsy trays at a rate that
                    requires everything to go perfectly.
                  </p>
                  <p>
                    The provider starts entering rooms immediately after the MA finishes taking
                    history — no buffer, no prep time. When the schedule falls behind, nobody
                    tells patients. They sit. The MA absorbs the questions. By 10am the day
                    is already 45 minutes behind. The MA, who has been in this situation before,
                    decides they&rsquo;ve had enough. Two weeks&rsquo; notice submitted before lunch.
                  </p>
                  <p>
                    The clinic will post the job. It will take weeks to fill. The next MA will
                    start without knowing about the 42-appointment problem. And the cycle
                    will repeat — unless something surfaces what the schedule actually contains
                    before the people delivering the care reach their limit.
                  </p>
                </div>
              </div>
              <div className={s.realityRight}>
                <ul className={s.painList} aria-label="Dermatology clinic operational pain points">
                  {[
                    '15-minute derm slots are routinely triple- or quadruple-booked. The template says one thing. The actual schedule says another. The MA finds out when they start rooming patients and can\'t keep up.',
                    'Manual scheduling overrides by a select few with access create a schedule that does not match staffing levels. Nobody outside that group can see what\'s coming until it\'s already overloaded.',
                    'Medical derm, surgical derm, and cosmetic appointments have very different prep, room, and time requirements — but often land on the same template and get treated the same.',
                    'Biopsy result follow-up falls through the cracks when there\'s no structured workflow for flagging unreviewed results and ensuring patients are contacted.',
                    'MAs are already stretched when the day starts at the real volume level. Any deviation from perfect execution cascades. By 10am, the day is beyond recovery.',
                    'High-volume derm staff turnover is chronic — not because the specialty is inherently unpleasant, but because scheduling decisions made at the top land on the people doing the work, with no visibility and no recourse.',
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
              <h2 className={s.sectionTitle}>From invisible overload<br />to a schedule staff can actually see.</h2>
              <p className={s.sectionDesc}>
                The dermatology scheduling crisis is a visibility and governance problem.
                clinIQ makes both visible before they become a staffing crisis.
              </p>
            </div>
            <div className={s.changesGrid}>
              {[
                {
                  before: 'Template shows 16 slots. Actual schedule has 42. MAs find out when patients start arriving faster than they can be roomed. Nobody communicated the change.',
                  after: 'Live schedule view shows actual booked volume versus template capacity. Overrides are visible in real time. Practice manager sees when a morning is being overloaded before the day starts, not during it.',
                },
                {
                  before: 'Medical, surgical, and cosmetic derm appointments all routed to the same template. Biopsy prep time same as a quick acne check. Provider moves at full-body exam speed regardless of visit type.',
                  after: 'Visit types carry distinct time allocations, room requirements, and MA prep steps. Biopsy appointments route to procedure rooms. Cosmetic appointments route to cosmetic treatment rooms. Medical derm flows through a separate track.',
                },
                {
                  before: 'Biopsy result follow-up is ad hoc. Results are reviewed when the provider finds time. Patients who need to be recalled fall through until they call in — or don\'t.',
                  after: 'Biopsy and procedure results tracked with follow-up due dates. Uncontacted patients flagged automatically. Results review queued against provider availability so nothing sits unactioned for two weeks.',
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
              <h2 className={s.sectionTitle}>clinIQ modules for high-volume dermatology.</h2>
              <p className={s.sectionDesc}>
                Scheduling governance, visit-type routing, and MA visibility —
                the operational tools that prevent the 42-appointment morning.
              </p>
            </div>
            <div className={`${s.modulesGrid} ${s.threeCol}`}>
              {[
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  ),
                  title: 'Scheduling — Template Governance and Override Visibility',
                  desc: 'clinIQ makes the gap between official template capacity and actual booked volume visible in real time. When someone with scheduling access adds a 17th appointment to a 16-slot morning, the system flags the override — and shows the downstream impact on MA workload and provider throughput before the day starts. Scheduling decisions that currently happen in a silo become visible to the people who carry their consequences. The MA sees what\'s coming. The practice manager can approve or decline overrides with full context.',
                  href: '/features/scheduling',
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
                      <rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
                    </svg>
                  ),
                  title: 'Patient Flow — MA Live Board for High-Volume Rooms',
                  desc: 'At peak volume, a dermatology MA needs to know which rooms are occupied, which patients are waiting to be roomed, which biopsies are in progress, and which patients are ready for discharge — simultaneously. clinIQ\'s live board gives the MA exactly this view. No walking the hall. No guessing which room the provider is in. No discovering that the patient in room 4 has been waiting 25 minutes while a new patient was roomed ahead of them. The board removes the memory tax and replaces it with visible information.',
                  href: '/features/patient-flow',
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                    </svg>
                  ),
                  title: 'Analytics — Actual vs Template, Staff Workload, Turnover Signals',
                  desc: 'Average appointments per half-day versus template capacity, by week and by provider. MA time-per-room across different visit types. Days on which schedule overrides were applied and the downstream impact on running time. These numbers surface the structural problem for the practice owner who thinks the schedule is running smoothly because patients haven\'t complained yet — they\'re just choosing not to come back.',
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
              <h2 className={s.sectionTitle}>Medical. Surgical. Cosmetic. Each tracked separately.</h2>
              <p className={s.workflowDesc}>
                Dermatology visit types have different prep, room, and follow-up requirements.
                clinIQ tracks each on the same board with distinct flows —
                so the MA always knows what type of visit is coming next.
              </p>
            </div>
            <div className={s.stageRow} role="list" aria-label="Dermatology visit flow stages">
              {[
                { label: 'Check-In', color: '#f59e0b' },
                { label: 'Rooming / History', color: '#8b5cf6' },
                { label: 'With Provider', color: '#0d9488' },
                { label: 'Biopsy / Procedure', color: '#ef4444' },
                { label: 'Result Follow-Up Queue', color: '#3b82f6' },
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
              The result follow-up queue is a post-visit stage — it creates a tracking task for
              biopsy and procedure results that require patient notification. When a result is
              available, the task fires to the appropriate staff member. Nothing waits for the
              provider to &ldquo;find time.&rdquo; Nothing falls through because the patient
              didn&rsquo;t call.
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className={s.stats}>
          <div className={s.container}>
            <div className={s.statsHeader}>
              <h2 className={s.statsHeaderTitle}>The cost of the 42-appointment morning.</h2>
              <p className={s.statsHeaderDesc}>
                Staff turnover, patient experience failure, and result follow-up gaps —
                all traceable to a scheduling problem that was visible in the data before it became a crisis.
              </p>
            </div>
            <div className={s.statsGrid}>
              {[
                { number: '42 slots', label: '8am–12pm in real dermatology practices. Official template capacity: 15–16. The gap is invisible until it breaks someone.' },
                { number: '5 min', label: 'Full-body skin exam speed at triple/quadruple booking pace — a clinical quality signal as much as an operations one' },
                { number: '$4–6k', label: 'Estimated replacement cost per MA when chronic overbooking drives turnover in outpatient dermatology' },
                { number: '2 weeks', label: 'Notice given — often before noon — when the schedule reveals itself and the MA decides they\'ve had enough' },
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

        {/* ── CTA ── */}
        <section className={s.cta}>
          <div className={s.ctaBg}><div className={s.ctaOrb} aria-hidden="true" /></div>
          <div className={s.container}>
            <div className={s.ctaContent}>
              <h2 className={s.ctaTitle}>
                The schedule is the product.<br />
                <em>Make it visible before it becomes a liability.</em>
              </h2>
              <p className={s.ctaDesc}>
                Dermatology staff don&rsquo;t quit because the specialty is hard.
                They quit because decisions made at the top arrive without warning and land on the
                people doing the work. clinIQ makes those decisions visible — in time to manage them,
                not after they&rsquo;ve already cost you a trained MA.
              </p>
              <div className={s.ctaActions}>
                <a href="/contact" className={s.btnPrimary}>
                  See clinIQ for Dermatology
                  <svg className={s.btnIcon} viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10h12m-4-4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a href="/resources/staff-burnout-prevention-guide" className={s.btnGhost}>
                  Free: Staff Burnout Prevention Guide
                </a>
              </div>
              <span className={s.ctaNote}>No commitment. We&rsquo;ll show you the scheduling visibility features first.</span>
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
                { label: 'Patient Flow Feature', href: '/features/patient-flow' },
                { label: 'Analytics Feature', href: '/features/analytics' },
                { label: 'Staff Burnout Prevention Guide', href: '/resources/staff-burnout-prevention-guide' },
                { label: 'Urgent Care', href: '/specialties/urgent-care' },
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
