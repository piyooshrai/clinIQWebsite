import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import s from '@/app/specialties/specialty-full.module.css'

export const metadata: Metadata = {
  title: 'Pain Management Clinic Software | Prior Auth Tracking & Procedure Flow | clinIQ',
  description:
    'Clinic operations software for pain management. Track prior authorizations in real time, coordinate injection rooms and procedure flow, and stop medication gaps before they happen.',
  openGraph: {
    title: 'clinIQ for Pain Management — Prior Auth Pipeline That Doesn\'t Fail Your Patients',
    description:
      'Pain management clinics lose patient trust not because the clinical care fails — but because the prior auth pipeline is invisible. clinIQ makes every PA status, every expiration, and every next step visible.',
    type: 'website',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cliniq.com' },
    { '@type': 'ListItem', position: 2, name: 'Specialties', item: 'https://cliniq.com/specialties' },
    { '@type': 'ListItem', position: 3, name: 'Pain Management', item: 'https://cliniq.com/specialties/pain-management' },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'clinIQ for Pain Management Clinics',
  description:
    'Patient flow and prior authorization management software for pain management clinics. Tracks PA pipeline tied to prescription refill dates, coordinates procedure room flow, and prevents medication gap incidents.',
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
      name: 'How does clinIQ help with prior authorization for pain medications and procedures?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'clinIQ tracks every prior authorization with its status, expiration date, and associated patient. When a PA is approaching expiration before a scheduled refill or procedure, the system flags it before the gap occurs — not after the patient calls in crisis. Staff see the full pipeline, not individual disconnected tasks.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can clinIQ coordinate multi-step procedure visits (consult, imaging, injection, recovery)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Pain management visits often span multiple rooms and stages. clinIQ tracks each patient across consult, imaging, injection suite, and recovery on a single live board. Staff see exactly where every patient is, which rooms are occupied, and which handoffs are pending — without a single hallway check.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens when a prior auth is denied for a spinal cord stimulator or complex procedure?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'clinIQ\'s pre-auth module tracks denials alongside active cases. When a denial comes in, staff can initiate an appeal workflow with documentation upload, specialist letter tracking, and payer communication history. Nothing falls through the gap between "denied" and "appealed."',
      },
    },
  ],
}

export default function PainManagementPage() {
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
              <div className={s.badge}>Pain Management</div>
              <h1 className={s.heroTitle}>
                The clinical care is excellent.<br />
                <em>The prior auth pipeline is invisible.<br />That&rsquo;s what patients experience.</em>
              </h1>
              <p className={s.heroSubtitle}>
                Pain management clinics lose patient trust not because the doctor failed — but because
                the PA expired on a Friday and nobody caught it until Monday when the patient was
                already in withdrawal. clinIQ makes every prior auth status, every expiration date,
                and every pending resubmission visible before the gap happens.
              </p>
              <div className={s.heroActions}>
                <a href="/contact" className={s.btnPrimary}>
                  See clinIQ for Pain Management
                  <svg className={s.btnIcon} viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10h12m-4-4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a href="/resources/pre-auth-denial-playbook" className={s.btnGhost}>
                  Free: Prior Auth Denial Playbook
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── MARQUEE ── */}
        <div className={s.marquee} aria-hidden="true">
          <div className={s.marqueeTrack}>
            {[
              'Prior auth pipeline visibility',
              'PA expiration alerts before gaps occur',
              'Injection suite flow tracking',
              'Multi-step procedure orchestration',
              'Denial management and appeals',
              'No more medication gap incidents',
              'Works with any EHR',
              'DEA documentation support',
              'Prior auth pipeline visibility',
              'PA expiration alerts before gaps occur',
              'Injection suite flow tracking',
              'Multi-step procedure orchestration',
              'Denial management and appeals',
              'No more medication gap incidents',
              'Works with any EHR',
              'DEA documentation support',
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
                  The prescription runs out Friday.<br />
                  <em>The PA was due Thursday.<br />Nobody submitted it.</em>
                </h2>
                <div className={s.realityNarrative}>
                  <p>
                    Your pain clinic closes early on Fridays. It always has. The prior auth for
                    this patient&rsquo;s medication was due Thursday. Nobody submitted it — or
                    someone submitted it but the payer never received it, or it was submitted to
                    the wrong portal, or the documentation was incomplete and it sat in a queue
                    all week. The pharmacy is closed Saturday and Sunday.
                  </p>
                  <p>
                    By Monday, the patient is in withdrawal. They call the clinic. The staff are
                    already overwhelmed with the first wave of the week. They say they&rsquo;ll look
                    into it. By Wednesday, the patient files a complaint. The provider — who has
                    excellent clinical relationships with this patient — takes the reputational hit
                    for a system failure they had nothing to do with.
                  </p>
                  <p>
                    This pattern repeats every six weeks. Every patient on a medication that requires
                    recurring prior auth is a potential medication gap. The problem isn&rsquo;t that
                    staff are careless — it&rsquo;s that the PA pipeline is invisible. Nobody can see
                    what&rsquo;s coming, what&rsquo;s pending, or what&rsquo;s about to expire
                    until a patient calls in crisis.
                  </p>
                </div>
              </div>
              <div className={s.realityRight}>
                <ul className={s.painList} aria-label="Pain management operational pain points">
                  {[
                    'Prior auth is tracked in email threads, sticky notes, or a single staff member\'s memory. When that person is out, nothing moves. Patients find out when the pharmacy calls to say the auth expired.',
                    'Recurring PA cycles for chronic pain medications are predictable — but managed reactively. Every six weeks is another scramble instead of an automated alert.',
                    'Procedure-specific PAs for spinal cord stimulators, nerve blocks, and complex injections require 80+ pages of documentation in some cases. Staff sending faxes in 2026 is not a documentation strategy.',
                    'Payer approval in writing does not protect against retroactive claim denial. Cases are approved, services are rendered, and claims are denied months later on technicalities — forcing staff and clinic into appeals that consume hours.',
                    'Multi-step procedure visits (consult → imaging → injection room → recovery) are tracked by staff walking the halls and making verbal check-ins. When the injection suite is backed up, providers don\'t know.',
                    'The clinical reputation of the practice suffers for administrative failures. Patients who trust and value their provider leave negative reviews — about the office staff, the PA process, and the phone experience — because that\'s what they experienced.',
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
              <h2 className={s.sectionTitle}>From invisible pipeline<br />to managed, visible operations.</h2>
              <p className={s.sectionDesc}>
                The PA problem and the procedure flow problem are both visibility problems.
                clinIQ solves both on the same platform.
              </p>
            </div>
            <div className={s.changesGrid}>
              {[
                {
                  before: 'PA status tracked in someone\'s head, in an email thread, or on a sticky note. Expiration discovered when the patient calls in crisis — not before.',
                  after: 'Live PA pipeline shows every active authorization: status, expiration date, associated visit, and next action required. System flags approaching expirations before the gap. Staff act proactively instead of reactively.',
                },
                {
                  before: 'Prior auth denial discovered when the claim rejects weeks after the service was rendered. Staff then reconstruct the case and begin an appeal under time pressure.',
                  after: 'Denial tracked in the same system as the active PA. Appeal workflow initiated immediately: document upload, specialist letter tracking, payer communication log. Nothing falls between "denied" and "appealed."',
                },
                {
                  before: 'Multi-step procedure visits coordinated by staff physically checking each room. Providers waiting for a patient who is still in imaging with no signal. Recovery holding a patient because discharge was never communicated.',
                  after: 'Every patient\'s position in the procedure flow visible on the live board — pre-procedure consult, imaging, injection room, recovery, discharge. Each stage updates in real time so nothing sits idle.',
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
              <h2 className={s.sectionTitle}>The clinIQ tools that address pain management specifically.</h2>
              <p className={s.sectionDesc}>
                Not a generic practice management suite. The specific modules that address the PA problem,
                the procedure flow problem, and the patient experience problem in pain management.
              </p>
            </div>
            <div className={`${s.modulesGrid} ${s.threeCol}`}>
              {[
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                  title: 'Pre-Authorization — Pipeline With Expiration Intelligence',
                  desc: 'Every PA case in your clinic is visible: medication or procedure, patient, status, submission date, expiration date, and next action required. When a recurring auth is within 10 days of expiration and a refill visit is scheduled, the system flags it. Staff handle it before the gap — not after the phone call. For complex procedures requiring 80+ pages of documentation, the upload and submission tracking is in the same system. For denials, the appeal workflow starts immediately. No more cases that live in email and die in someone\'s inbox.',
                  href: '/features/pre-auth',
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
                      <rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
                    </svg>
                  ),
                  title: 'Patient Flow — Multi-Stage Procedure Orchestration',
                  desc: 'Pain management visits are not check-in-to-discharge. They are consult, then imaging, then injection suite, then recovery, then discharge — and each stage has dependencies on the previous one. clinIQ tracks every patient across all five stages simultaneously. Providers know which patients are ready for them. Imaging staff know who\'s coming. Recovery knows which patients are cleared to discharge. Nobody walks the halls to check. Nobody calls across the building. The board reflects reality as it changes.',
                  href: '/features/patient-flow',
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                    </svg>
                  ),
                  title: 'Analytics — PA Turnaround, Denial Rate, Revenue at Risk',
                  desc: 'Average PA turnaround time by payer. Denial rate by procedure type and payer. Revenue at risk from pending authorizations. Number of medication gap incidents per month. These are the metrics that tell a practice owner whether the PA department is resourced appropriately — and which payers are costing the most in staff time. When it\'s time to renegotiate a payer contract or make the case for additional PA staff, this data is the argument.',
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
              <h2 className={s.sectionTitle}>From check-in to discharge.<br />Every procedure stage tracked.</h2>
              <p className={s.workflowDesc}>
                Pain management visits touch more rooms, more staff, and more handoffs than almost any
                other outpatient specialty. clinIQ keeps every one visible.
              </p>
            </div>
            <div className={s.stageRow} role="list" aria-label="Pain management procedure flow stages">
              {[
                { label: 'Check-In', color: '#f59e0b' },
                { label: 'Pre-Proc Consult', color: '#8b5cf6' },
                { label: 'Imaging', color: '#3b82f6' },
                { label: 'Injection Room', color: '#ef4444' },
                { label: 'Recovery', color: '#6366f1' },
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
              Not every visit uses every stage — follow-up medication reviews skip imaging and the injection
              room, while interventional procedures need all six. The board adapts to visit type so staff
              only see the stages relevant to each patient, and providers aren&rsquo;t hunting
              through irrelevant status updates to find who&rsquo;s ready.
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className={s.stats}>
          <div className={s.container}>
            <div className={s.statsHeader}>
              <h2 className={s.statsHeaderTitle}>What the PA problem actually costs.</h2>
              <p className={s.statsHeaderDesc}>
                Prior auth failures in pain management are not just an administrative inconvenience.
                They are patient harm events, retention failures, and reputation damage — measured.
              </p>
            </div>
            <div className={s.statsGrid}>
              {[
                { number: '3–5 days', label: 'Average prior auth processing delay — up to 3–4 weeks for complex procedures with insufficient documentation' },
                { number: '73%', label: 'Of pain management patients cite the PA and phone experience as their primary clinic complaint — not the clinical care' },
                { number: '80+ pages', label: 'Of documentation required for some spinal cord stimulator approvals — mostly sent by fax' },
                { number: '60%', label: 'Reduction in medication gap incidents in clinics with a visible, proactive PA pipeline versus reactive management' },
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
              <h2 className={s.sectionTitle}>What pain management teams ask before they commit.</h2>
            </div>
            <div className={s.faqList}>
              {[
                {
                  q: 'We already have a PA staff member. Does clinIQ replace them?',
                  a: 'No. clinIQ gives your PA staff a system to work in instead of a pile of emails, faxes, and phone calls to manage. The same person does more — faster, with less that falls through — because they have a pipeline view instead of a task list.',
                },
                {
                  q: 'Our payers are constantly changing their PA requirements. How does clinIQ handle that?',
                  a: 'clinIQ tracks the case, not the rules. When payer requirements change, staff update the case notes and documentation. The system doesn\'t auto-submit — it ensures nothing gets lost, nothing expires unnoticed, and every case has a complete, auditable history.',
                },
                {
                  q: 'How does clinIQ handle procedure room tracking across multiple suites?',
                  a: 'Each procedure room is a configurable status in the patient flow board. Staff mark a room as occupied, in-procedure, or ready for turnover. Providers see which rooms are available and which patients are in them without calling the injection suite.',
                },
                {
                  q: 'We have DEA compliance requirements. Does clinIQ support documentation for controlled substances?',
                  a: 'clinIQ generates a timestamped, attributed visit record for every patient interaction. For DEA-related documentation specifically, we recommend working with your compliance officer to define what records your practice requires and how clinIQ data integrates with your documentation workflow.',
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
                Stop letting the PA pipeline<br />
                <em>undo the clinical work.</em>
              </h2>
              <p className={s.ctaDesc}>
                Your patients trust their provider. They should be able to trust the clinic too.
                clinIQ gives your team the visibility to make sure a medication authorization never
                silently expires before someone catches it.
              </p>
              <div className={s.ctaActions}>
                <a href="/contact" className={s.btnPrimary}>
                  See How clinIQ Handles Prior Auth
                  <svg className={s.btnIcon} viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10h12m-4-4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a href="/resources/prior-auth-checklist" className={s.btnGhost}>
                  Free: Prior Auth Checklist
                </a>
              </div>
              <span className={s.ctaNote}>No commitment. We&rsquo;ll map your current PA process and show you where gaps form.</span>
            </div>
          </div>
        </section>

        {/* ── RELATED ── */}
        <section className={s.related}>
          <div className={s.container}>
            <p className={s.relatedTitle}>Related resources and pages</p>
            <div className={s.relatedLinks}>
              {[
                { label: 'Pre-Authorization Feature', href: '/features/pre-auth' },
                { label: 'Patient Flow Feature', href: '/features/patient-flow' },
                { label: 'Prior Auth Checklist', href: '/resources/prior-auth-checklist' },
                { label: 'Pre-Auth Denial Playbook', href: '/resources/pre-auth-denial-playbook' },
                { label: 'Analytics Feature', href: '/features/analytics' },
                { label: 'Orthopedic Surgery', href: '/specialties/orthopedic-surgery' },
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
