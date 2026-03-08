import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import s from '@/app/specialties/specialty-full.module.css'

export const metadata: Metadata = {
  title: 'Ophthalmology Clinic Management Software | Dilation Flow & Wait Time Reduction | clinIQ',
  description:
    'Clinic operations software for ophthalmology practices. Coordinate dilation, imaging, and provider visits without 2–3 hour waits. Handle variable visit lengths without losing throughput.',
  openGraph: {
    title: 'clinIQ for Ophthalmology — Variable Dilation Times, 2-Hour Waits, One Machine Per Tech. Fixed.',
    description:
      'Ophthalmology clinics run 2–3 hour waits as normal because dilation is unpredictable, each machine is assigned to one person, and variable visit lengths create invisible bottlenecks. clinIQ maps all of it.',
    type: 'website',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cliniq.com' },
    { '@type': 'ListItem', position: 2, name: 'Specialties', item: 'https://cliniq.com/specialties' },
    { '@type': 'ListItem', position: 3, name: 'Ophthalmology', item: 'https://cliniq.com/specialties/ophthalmology' },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'clinIQ for Ophthalmology Clinics',
  description:
    'Patient flow and scheduling software for ophthalmology practices. Manages dilation variability, imaging sequencing, and multi-tech coordination to reduce chronic 2–3 hour wait times.',
  provider: { '@type': 'Organization', name: 'clinIQ', url: 'https://cliniq.com' },
  serviceType: 'Healthcare Operations Software',
  areaServed: 'US',
}

export default function OphthalmologyPage() {
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
              <div className={s.badge}>Ophthalmology</div>
              <h1 className={s.heroTitle}>
                Two to three hour waits.<br />
                One machine, one tech.<br />
                <em>Dilation that finishes whenever it finishes.<br />This is not an unsolvable problem.</em>
              </h1>
              <p className={s.heroSubtitle}>
                Ophthalmology clinics run chronic 2–3 hour waits not because they see too many patients —
                but because dilation wait times are invisible, imaging machines are bottlenecked to single
                staff members, and variable visit lengths compound throughout the day without any system
                to surface the cascade early. clinIQ makes all three visible.
              </p>
              <div className={s.heroActions}>
                <a href="/contact" className={s.btnPrimary}>
                  See clinIQ for Ophthalmology Practices
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
              'Dilation wait time tracking',
              'Imaging machine utilization board',
              'Variable visit length support',
              'Multi-tech coordination',
              'Transparent wait time display',
              'Dilation-to-provider handoff automation',
              'Imaging bottleneck detection',
              'Real-time flow across all rooms',
              'Dilation wait time tracking',
              'Imaging machine utilization board',
              'Variable visit length support',
              'Multi-tech coordination',
              'Transparent wait time display',
              'Dilation-to-provider handoff automation',
              'Imaging bottleneck detection',
              'Real-time flow across all rooms',
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
                  A scribe, a work-up tech, and an office surgery coordinator.<br />
                  One person. Three roles.<br />
                  <em>The wait is 2–3 hours. The staff is desperate for another body.</em>
                </h2>
                <div className={s.realityNarrative}>
                  <p>
                    An ophthalmology tech and scribe posting for advice describes their clinic
                    as overbooked, with 2–3 hour waits as normal. Appointment durations vary
                    from 30 minutes to two hours &ldquo;depending on the flow and the day.&rdquo;
                    They are responsible for work-up tech duties, scribing, and office surgery
                    coordination simultaneously. They describe the situation as &ldquo;increasingly
                    frustrating for everyone&rdquo; and say it&rsquo;s hard to retain people who
                    want to stay.
                  </p>
                  <p>
                    Each imaging machine is assigned to one staff member, making the system brittle
                    when people are out or volume spikes. If the tech assigned to the OCT calls out,
                    the OCT sits idle regardless of how many patients need it. The dilation wait —
                    which can range from 20 minutes to 45+ depending on the patient&rsquo;s response —
                    is invisible. Patients sit in the waiting area with no indication of where they
                    are in the process. Staff answer the same questions repeatedly. The cascade builds
                    by midmorning and is irreversible by afternoon.
                  </p>
                  <p>
                    None of this is caused by bad staff or difficult patients. It&rsquo;s caused by
                    an invisible workflow in a specialty where the main bottleneck — dilation — is
                    inherently variable and compounds everything that comes after it.
                  </p>
                </div>
              </div>
              <div className={s.realityRight}>
                <ul className={s.painList} aria-label="Ophthalmology clinic operational pain points">
                  {[
                    'Dilation wait times are invisible. Patients sit in the waiting area with no signal of where they are in the process. Staff field the same "how much longer" questions for 45 minutes straight.',
                    'Each imaging machine is assigned to one tech. When that person is out or busy, the machine sits idle regardless of demand. One absence creates a bottleneck that ripples through the entire day.',
                    'Visit lengths range from 30 minutes to 2 hours with no reliable indicator at check-in. Schedule templates don\'t reflect this variability, so the day falls apart quietly by 11am.',
                    'Post-dilation, patients need to move to imaging before seeing the provider. This handoff is managed manually — staff check whether the patient is dilated by looking at them or asking.',
                    'Overbooked days with inadequate staffing make it nearly impossible to retain experienced techs. High turnover means perpetual onboarding, lower efficiency, and a team that never reaches full operating speed.',
                    'Patients who came for a routine annual exam and waited 2.5 hours don\'t say anything at checkout. They just don\'t schedule next year\'s appointment.',
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
              <h2 className={s.sectionTitle}>Make dilation visible.<br />Make the cascade stoppable.</h2>
              <p className={s.sectionDesc}>
                The ophthalmology wait time problem is a visibility problem. clinIQ makes
                dilation status, imaging queue, and provider readiness visible — so staff
                can intervene before the day is irretrievably behind.
              </p>
            </div>
            <div className={s.changesGrid}>
              {[
                {
                  before: 'Patients wait post-dilation with no signal to staff or provider about when they\'re ready. The handoff from dilation wait to imaging is managed by staff physically checking patients.',
                  after: 'Dilation timer starts when drops are administered. System alerts staff when dilation period is complete. Patient moves to imaging automatically without a manual check. The handoff is triggered, not remembered.',
                },
                {
                  before: 'Each machine has one assigned tech. That person\'s absence creates an immediate bottleneck regardless of demand. No cross-coverage because there\'s no visibility into which machine is free.',
                  after: 'Machine utilization visible on the live board. When a machine is available and a patient is ready for it, the board surfaces the match. Cross-coverage becomes manageable because availability and demand are visible simultaneously.',
                },
                {
                  before: 'Patients wait 2–3 hours with no information. They don\'t complain at checkout. They just don\'t come back.',
                  after: 'LobbyView shows honest estimated wait including dilation time. Patients understand the process. Expectations are managed before frustration sets in. Repeat visit rates improve when patients feel informed rather than abandoned.',
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
              <h2 className={s.sectionTitle}>clinIQ tools for the ophthalmology workflow.</h2>
              <p className={s.sectionDesc}>
                Dilation management, multi-tech coordination, and patient wait transparency —
                the specific tools for the specific problems that make ophthalmology waits chronic.
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
                  title: 'Patient Flow — Dilation-Aware Visit Tracking',
                  desc: 'Ophthalmology has a built-in unpredictable delay — dilation. clinIQ tracks the dilation period as a discrete stage with a timer that starts when drops are administered. When dilation is complete, the patient advances to imaging on the board. Staff don\'t need to check the patient\'s eyes. The tech in the imaging room sees the queue update. The provider sees when post-imaging patients are ready for the exam. Every stage is tracked, every handoff is automatic, and the dilation delay — instead of being invisible — becomes a managed part of the flow.',
                  href: '/features/patient-flow',
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  ),
                  title: 'LobbyView — Wait Transparency for Dilation Patients',
                  desc: 'Dilation is the hardest part of the ophthalmology wait to explain — because the time is genuinely unpredictable and has nothing to do with how many patients are ahead. LobbyView shows patients where they are in the dilation process with a general progress indicator — not a countdown, not a broken promise, but enough information to answer the "how much longer" question before it\'s asked. Patients who understand the process wait more patiently than patients who feel forgotten.',
                  href: '/features/lobbyview',
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                    </svg>
                  ),
                  title: 'Analytics — Machine Utilization and Dilation Throughput',
                  desc: 'Average dilation-to-imaging transition time by day and provider. Imaging machine utilization rate by machine. Average wait time from check-in to provider contact by visit type. Days when the schedule template underestimated actual visit duration. These numbers reveal whether the 2–3 hour wait is a staffing problem, a scheduling problem, or a dilation management problem — and whether the solution is another tech hire, a scheduling template revision, or a workflow change that costs nothing.',
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
              <h2 className={s.sectionTitle}>Dilation tracked. Handoff automated. Provider notified.</h2>
              <p className={s.workflowDesc}>
                Every stage of the ophthalmology visit — from check-in through dilation,
                imaging, and provider exam — tracked on one board. The unpredictable parts
                are managed, not ignored.
              </p>
            </div>
            <div className={s.stageRow} role="list" aria-label="Ophthalmology visit flow stages">
              {[
                { label: 'Check-In', color: '#f59e0b' },
                { label: 'Pre-Test / History', color: '#8b5cf6' },
                { label: 'Dilation Wait', color: '#3b82f6' },
                { label: 'Imaging / OCT', color: '#ef4444' },
                { label: 'With Provider', color: '#0d9488' },
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
              The dilation wait stage is where the cascade starts. In most ophthalmology clinics,
              there is no visible marker for when dilation is complete — staff physically check
              patients. clinIQ replaces this with a timed alert. When the dilation period ends,
              the patient advances on the board. The imaging queue updates. The wait stops being
              invisible. Everything that follows improves.
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className={s.stats}>
          <div className={s.container}>
            <div className={s.statsHeader}>
              <h2 className={s.statsHeaderTitle}>The ophthalmology wait, quantified.</h2>
              <p className={s.statsHeaderDesc}>
                Chronic 2–3 hour waits are not a volume problem. They are a visibility problem
                with compounding consequences for patient retention and staff longevity.
              </p>
            </div>
            <div className={s.statsGrid}>
              {[
                { number: '2–3h', label: 'Reported wait as "normal" in high-volume ophthalmology practices — before a single complaint is filed' },
                { number: '20–45 min', label: 'Dilation wait variability — managed manually in most practices, creating invisible cascades throughout the day' },
                { number: '1 tech', label: 'Per imaging machine — making every person\'s absence a full machine bottleneck with no cross-coverage visibility' },
                { number: '0', label: 'Complaints at checkout from patients who won\'t rebook — the silent retention failure that doesn\'t show up until the schedule is suddenly lighter' },
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
                The dilation is unpredictable.<br />
                <em>Everything else doesn&rsquo;t have to be.</em>
              </h2>
              <p className={s.ctaDesc}>
                You can&rsquo;t make dilation faster. You can make everything around it visible,
                coordinated, and communicated — so the wait is understood instead of resented,
                and the cascade is stopped before it owns the afternoon.
              </p>
              <div className={s.ctaActions}>
                <a href="/contact" className={s.btnPrimary}>
                  See clinIQ for Ophthalmology
                  <svg className={s.btnIcon} viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10h12m-4-4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a href="/features/lobbyview" className={s.btnGhost}>
                  See LobbyView
                </a>
              </div>
              <span className={s.ctaNote}>No commitment. We&rsquo;ll show you the dilation flow configured for your clinic.</span>
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
                { label: 'Analytics Feature', href: '/features/analytics' },
                { label: 'Cardiology', href: '/specialties/cardiology' },
                { label: 'Dermatology', href: '/specialties/dermatology' },
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
