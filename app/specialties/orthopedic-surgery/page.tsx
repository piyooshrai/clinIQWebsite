import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import s from '@/app/specialties/specialty-full.module.css'

export const metadata: Metadata = {
  title: 'Orthopedic Clinic Software | Imaging Workflow, X-Ray Coordination & Patient Flow | clinIQ',
  description:
    'Clinic operations software for outpatient orthopedic practices. Coordinate exam rooms, imaging, and casting without walking the halls. Eliminate the password-sharing workaround. Stop the 20-minute imaging delay.',
  openGraph: {
    title: 'clinIQ for Orthopedic Surgery — Imaging Orchestration That Stops the 20-Minute Dead Zone',
    description:
      'Orthopedic clinics lose 10+ hours of imaging throughput weekly because patients aren\'t prepped before they reach the X-ray room. clinIQ fixes the handoff — and replaces the workarounds your team shouldn\'t need.',
    type: 'website',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cliniq.com' },
    { '@type': 'ListItem', position: 2, name: 'Specialties', item: 'https://cliniq.com/specialties' },
    { '@type': 'ListItem', position: 3, name: 'Orthopedic Surgery', item: 'https://cliniq.com/specialties/orthopedic-surgery' },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'clinIQ for Orthopedic Surgery Clinics',
  description:
    'Patient flow and clinic operations software for outpatient orthopedic practices. Coordinates exam rooms, imaging suites, and casting rooms on a single live board.',
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
      name: 'How does clinIQ improve imaging workflow in orthopedic clinics?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When a surgeon orders imaging, clinIQ triggers a prep notification to the MA to instruct the patient to change before they reach the X-ray room. The imaging tech sees the patient is prepped and the room transitions immediately without a 15-20 minute delay.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can clinIQ help eliminate the EHR credential-sharing workaround for imaging orders?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. When an imaging order is placed, clinIQ sends an immediate task notification to the MA responsible for that patient — so the MA can prepare the room and route the patient to imaging without needing to access the EHR or share physician credentials.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does clinIQ work for both outpatient clinic days and post-op follow-up tracking?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. clinIQ tracks clinic visits (new consults, post-op follow-ups, injection appointments) and flags missing post-surgical follow-ups for proactive outreach.',
      },
    },
  ],
}

export default function OrthopedicSurgeryPage() {
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
              <div className={s.badge}>Orthopedic Surgery</div>
              <h1 className={s.heroTitle}>
                The patient reaches the X-ray room<br />
                still in street clothes.<br />
                <em>&ldquo;Every time that happens, I die a little.&rdquo;</em>
              </h1>
              <p className={s.heroSubtitle}>
                A radiology tech&rsquo;s words — not ours. With 30–40 imaging visits per day, patients
                who arrive unprepped waste 15–20 minutes per slot. That&rsquo;s 7–10 lost hours of
                imaging throughput every week. clinIQ fixes the handoff between exam room and imaging
                before the patient leaves the room — not after they arrive in street clothes.
              </p>
              <div className={s.heroActions}>
                <a href="/contact" className={s.btnPrimary}>
                  See clinIQ for Orthopedic Clinics
                  <svg className={s.btnIcon} viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10h12m-4-4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a href="/features/patient-flow" className={s.btnGhost}>
                  How Multi-Room Flow Works
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── MARQUEE ── */}
        <div className={s.marquee} aria-hidden="true">
          <div className={s.marqueeTrack}>
            {[
              'Exam room to imaging prep coordination',
              'Live provider readiness dashboard',
              'Post-op follow-up tracking',
              'Casting and injection room orchestration',
              'Imaging order-linked prep alerts',
              'No credential-sharing workarounds',
              'New consult vs post-op visit routing',
              '7–10 hours/week of throughput recovered',
              'Exam room to imaging prep coordination',
              'Live provider readiness dashboard',
              'Post-op follow-up tracking',
              'Casting and injection room orchestration',
              'Imaging order-linked prep alerts',
              'No credential-sharing workarounds',
              'New consult vs post-op visit routing',
              '7–10 hours/week of throughput recovered',
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
                  The X-ray tech has two rooms<br />
                  and 40 patients today.<br />
                  <em>Room 1 just opened. The patient is still dressed.</em>
                </h2>
                <div className={s.realityNarrative}>
                  <p>
                    The patient in exam room 6 needs shoulder films. Nobody told them to change before
                    they left the exam room. When they arrive at imaging, they&rsquo;re still in their
                    street clothes. The tech estimates 15–20 minutes while they undress, store their
                    belongings, and get positioned. Room 1 sits idle. The next patient is waiting in
                    the exam room. The surgeon in room 3 just finished with a post-op patient and wants
                    to know if the new consult is ready.
                  </p>
                  <p>
                    There&rsquo;s no signal. Someone walks down the hall to check. The consult patient
                    has been waiting in the exam room for 11 minutes with nothing to indicate that anyone
                    knows they&rsquo;re there. The MAs are exhausted. One just admitted they log in
                    using the surgeon&rsquo;s credentials to place imaging orders — because the EHR
                    only allows physicians to order, and the surgeon doesn&rsquo;t have time to log in
                    between every patient.
                  </p>
                  <p>
                    None of this is unusual. It&rsquo;s Tuesday. This is what orthopedic clinic days
                    look like when exam rooms, imaging, and casting are coordinated by whoever happens
                    to walk past. The technology to fix it is not complex. It just doesn&rsquo;t exist
                    in the EHR — and nobody built it specifically for outpatient orthopedics until now.
                  </p>
                </div>
              </div>
              <div className={s.realityRight}>
                <ul className={s.painList} aria-label="Orthopedic clinic operational pain points">
                  {[
                    'Patients arrive at the X-ray room in street clothes because nobody told them to change. 15–20 minutes of dead time per slot. With 30–40 imaging visits daily, that\'s 7–10 hours of weekly throughput lost to one preventable communication gap.',
                    'Surgeons want to decide whether to order X-rays after seeing the patient — but the EHR forces physician-only order entry. MAs share credentials to move faster. The workaround is unsafe, technically a compliance violation, and only works until someone checks.',
                    'Providers finish a visit and have no signal that the next patient is ready. Someone walks the hall. Someone calls across the building. 6–8 minutes evaporates between every patient without a real-time readiness system.',
                    'New consults wait alongside post-op follow-ups with no way to differentiate urgency or stage. The board in most orthopedic clinics is a shared mental model that diverges every time an MA leaves the station.',
                    'Post-surgical patients who miss follow-ups fall through the cracks with no system to flag overdue visits. At $250–400 per unbilled follow-up slot, a 10-patient no-show month costs $2,500–4,000 in uncaptured revenue.',
                    'MAs describe dreading work, being unable to take breaks, and shouldering the frustration of a system that creates problems for them to absorb without giving them tools to solve it.',
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
              <h2 className={s.sectionTitle}>Three handoffs fixed.<br />Hundreds of minutes recovered weekly.</h2>
              <p className={s.sectionDesc}>
                The orthopedic clinic&rsquo;s operational failures are coordination failures between
                rooms that can&rsquo;t see each other. clinIQ connects them.
              </p>
            </div>
            <div className={s.changesGrid}>
              {[
                {
                  before: 'Patient leaves exam room for imaging with no prep instruction. Arrives at X-ray room in street clothes. 15–20 minute dead time per slot. Radiology tech loses 7–10 hours of throughput every week.',
                  after: 'When the imaging order is placed, clinIQ triggers a prep notification to the MA immediately. Patient is instructed to change before leaving the exam room. They arrive at imaging ready. Room transitions take 2–3 minutes instead of 20.',
                },
                {
                  before: 'MAs share surgeon credentials to place imaging orders because the EHR forces physician-only entry. The workaround is unsafe, a compliance violation, and only works until someone checks.',
                  after: 'clinIQ\'s task notification triggers the MA to prepare and route the patient when an order is placed — without MA needing to access the EHR or physician credentials. The prep happens. The compliance risk disappears.',
                },
                {
                  before: 'Surgeon finishes a visit and looks for someone to find out if the next patient is ready. Hallway walk. Building-wide call. 6–8 minutes between every patient, every day.',
                  after: 'Live provider dashboard shows real-time readiness for every patient: checked in, vitals done, imaging complete, in exam room, ready for provider. The surgeon knows before they need to ask.',
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
              <h2 className={s.sectionTitle}>The clinIQ tools built for outpatient orthopedics.</h2>
              <p className={s.sectionDesc}>
                Not a general patient flow tool adapted from hospital software. Specific modules
                addressing the specific multi-room coordination problems of orthopedic clinic days.
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
                  title: 'Patient Flow — Multi-Room Orchestration',
                  desc: 'Orthopedic clinic days move patients across exam rooms, imaging rooms, and casting rooms — with each transition dependent on the previous one. clinIQ maps all three on a single live board. When a patient is in exam room 6, the imaging tech sees they\'re coming. When imaging is complete, the surgeon sees the patient is ready. When casting is done, the checkout staff know the visit is wrapping. Every room sees the whole picture. Nobody walks the halls to check. The 6–8 minutes of dead time between patients disappears because everyone can see what\'s ready before they need to ask.',
                  href: '/features/patient-flow',
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  ),
                  title: 'Check-In — Visit-Type Routing at Arrival',
                  desc: 'New consult, post-op follow-up, and injection appointments have different prep requirements, room needs, and provider expectations. clinIQ\'s check-in routes patients by visit type from the moment they arrive — so the MA knows this patient goes to vitals before the exam room, this one goes directly to imaging, and this one needs the cast room after the surgeon visit. The intake form triggers the right workflow automatically. No manual triage at the front desk. No "which room should I put them in" questions every 10 minutes.',
                  href: '/features/check-in',
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                    </svg>
                  ),
                  title: 'Analytics — Throughput, Room Utilization, Follow-Up Gaps',
                  desc: 'Average time between stage transitions — how long from exam room to imaging, from imaging to provider, from provider to discharge. Imaging room utilization by time of day. Post-op follow-up compliance rate and flagged overdue visits. Provider idle time by day and provider. These numbers reveal exactly where the orthopedic clinic day slows down — and whether the problem is imaging prep, exam room turnover, or a scheduling template that doesn\'t match actual visit lengths.',
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
              <h2 className={s.sectionTitle}>Exam room. Imaging. Casting. All connected.</h2>
              <p className={s.workflowDesc}>
                The orthopedic clinic visit moves across multiple rooms with multiple handoffs.
                Every handoff is visible. Every prep step is triggered before the patient moves.
                Every provider knows what&rsquo;s ready.
              </p>
            </div>
            <div className={s.stageRow} role="list" aria-label="Orthopedic clinic visit flow stages">
              {[
                { label: 'Check-In', color: '#f59e0b' },
                { label: 'Vitals / Rooming', color: '#8b5cf6' },
                { label: 'Imaging Prep', color: '#3b82f6' },
                { label: 'X-Ray / MRI', color: '#ef4444' },
                { label: 'With Provider', color: '#0d9488' },
                { label: 'Cast / Procedure', color: '#ec4899' },
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
              The imaging prep stage is the fix for the street-clothes problem. It&rsquo;s triggered
              when an imaging order is placed — before the patient leaves the exam room. The patient
              arrives at the X-ray room ready. The tech transitions immediately. That one stage
              recovers 7–10 hours of imaging throughput per week in high-volume orthopedic clinics.
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className={s.stats}>
          <div className={s.container}>
            <div className={s.statsHeader}>
              <h2 className={s.statsHeaderTitle}>What multi-room coordination failures cost orthopedic clinics.</h2>
              <p className={s.statsHeaderDesc}>
                Hallway check-ins, street-clothes delays, credential workarounds, and missed follow-ups
                all have hard costs — most practices just don&rsquo;t measure them.
              </p>
            </div>
            <div className={s.statsGrid}>
              {[
                { number: '7–10h', label: 'Weekly imaging throughput lost to patients arriving unprepped — recoverable with one prep notification' },
                { number: '6–8 min', label: 'Average dead time between patients when providers rely on hallway check-ins to confirm readiness' },
                { number: '68%', label: 'Of orthopedic MAs report using workarounds — including credential sharing — to manage EHR ordering restrictions' },
                { number: '$2,800', label: 'Average monthly revenue lost to post-op follow-up no-shows in a mid-size orthopedic clinic' },
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
              <h2 className={s.sectionTitle}>What orthopedic practice managers ask first.</h2>
            </div>
            <div className={s.faqList}>
              {[
                {
                  q: 'How does the imaging prep notification work? Does it require integration with our radiology system?',
                  a: 'No radiology integration required. When a provider places an imaging order in the EHR, the MA marks the patient as "imaging ordered" in clinIQ — triggering a prep task for the MA and a notification to the patient. It\'s a staff-triggered action, not an automatic EHR sync. Works with any EHR without a technical integration project.',
                },
                {
                  q: 'We have both clinic days and surgical follow-up days. Does clinIQ handle both?',
                  a: 'Yes. Clinic days use the multi-room flow (exam room → imaging → casting → provider → discharge). Surgical follow-up visits use a simpler rooming → provider flow. Both coexist in the same system, and the board shows the day\'s mix without confusion between visit types.',
                },
                {
                  q: 'Our MAs are already stretched. How much time does clinIQ add to their workflow?',
                  a: 'clinIQ removes more steps than it adds. MAs no longer need to physically check room status, walk to imaging to see if a room is ready, or relay messages between the surgeon and front desk. The added steps — marking stage transitions — take 5-10 seconds each.',
                },
                {
                  q: 'Can we track workers\' comp and DME coordination alongside regular visits?',
                  a: 'Yes. Workers\' comp visits and DME-related appointments can be tagged as distinct visit types with custom prep steps and documentation requirements. The board shows them alongside standard visits without mixing the workflows.',
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
                Stop losing an hour a day<br />
                <em>to rooms that can&rsquo;t see each other.</em>
              </h2>
              <p className={s.ctaDesc}>
                The imaging prep problem. The credential-sharing workaround. The 6-minute gap between
                patients. None of these are clinical problems. They&rsquo;re coordination problems
                with a software solution — built for outpatient orthopedics, not adapted from a hospital system.
              </p>
              <div className={s.ctaActions}>
                <a href="/contact" className={s.btnPrimary}>
                  See clinIQ for Orthopedic Clinics
                  <svg className={s.btnIcon} viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10h12m-4-4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a href="/features/patient-flow" className={s.btnGhost}>
                  How Multi-Room Flow Works
                </a>
              </div>
              <span className={s.ctaNote}>No commitment. We&rsquo;ll walk through your clinic layout and show you exactly how the board maps to your rooms.</span>
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
                { label: 'Check-In Feature', href: '/features/check-in' },
                { label: 'Analytics Feature', href: '/features/analytics' },
                { label: 'Spine Surgery', href: '/specialties/spine-surgery' },
                { label: 'General Surgery', href: '/specialties/general-surgery' },
                { label: 'Physical Therapy', href: '/specialties/physical-therapy' },
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
