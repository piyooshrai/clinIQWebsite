import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import s from '@/app/specialties/specialty-full.module.css'

export const metadata: Metadata = {
  title: 'MAT Clinic Management Software | Addiction Medicine Patient Flow | clinIQ',
  description:
    'Clinic operations software built for medication-assisted treatment. Track UDS, injection scheduling, Suboxone induction, and complex dual-diagnosis visits — all on one live board.',
  openGraph: {
    title: 'clinIQ for Addiction Medicine — MAT Clinic Operations, Finally Under Control',
    description:
      'Manage UDS logistics, Sublocade and Vivitrol injection scheduling, walk-in crisis patients, and complex psych co-management. clinIQ is built for the 80% of your day that generic tools ignore.',
    type: 'website',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cliniq.com' },
    { '@type': 'ListItem', position: 2, name: 'Specialties', item: 'https://cliniq.com/specialties' },
    { '@type': 'ListItem', position: 3, name: 'Addiction Medicine', item: 'https://cliniq.com/specialties/addiction-medicine' },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'clinIQ for Addiction Medicine / MAT Clinics',
  description:
    'Patient flow and clinic operations software for medication-assisted treatment programs. Supports UDS tracking, injection scheduling, multi-stage visit orchestration, and dual-diagnosis complexity.',
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
      name: 'Can clinIQ track UDS chain of custody for MAT clinics?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. clinIQ logs UDS collection with timestamp, staff ID, and chain-of-custody notes tied directly to the patient record. When a result is contested or an audit occurs, you have a complete, time-stamped trail — not a reconstruction from memory.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does clinIQ support injection scheduling for Sublocade, Vivitrol, and buprenorphine injectables?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Injectable MAT visits can be flagged by medication type, benefit classification (medical vs drug benefit), and inventory status before the patient arrives. This eliminates the phone-back cycle that delays starts when benefit routing is unclear.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does clinIQ handle walk-in crisis patients in a MAT clinic?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When a crisis walk-in is checked in, the live board re-sorts to show the downstream impact on the scheduled queue. Staff can see exactly which appointments shift and by how much — instead of discovering the ripple effect visit by visit throughout the day.',
      },
    },
  ],
}

export default function AddictionMedicinePage() {
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
              <div className={s.badge}>Addiction Medicine / MAT</div>
              <h1 className={s.heroTitle}>
                Only 20% of your day is Suboxone management.<br />
                <em>Generic tools are built for 100% of someone else&rsquo;s clinic.</em>
              </h1>
              <p className={s.heroSubtitle}>
                clinIQ is built for the 80% — the UDS logistics, the injection scheduling, the dual-diagnosis
                complexity, the crisis walk-ins that detonate a carefully timed schedule. One live board
                for the most layered clinic workflow in outpatient medicine.
              </p>
              <div className={s.heroActions}>
                <a href="/contact" className={s.btnPrimary}>
                  See clinIQ for MAT Clinics
                  <svg className={s.btnIcon} viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10h12m-4-4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a href="/resources/mat-clinic-workflow-template" className={s.btnGhost}>
                  Free: MAT Clinic Workflow Template
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── MARQUEE ── */}
        <div className={s.marquee} aria-hidden="true">
          <div className={s.marqueeTrack}>
            {[
              'UDS chain-of-custody tracking',
              'Sublocade & Vivitrol scheduling',
              'Walk-in crisis queue management',
              'Dual-diagnosis visit orchestration',
              'Stigma-aware check-in',
              'Injectable MAT benefit routing',
              'No generic templates',
              'Built for MAT complexity',
              'UDS chain-of-custody tracking',
              'Sublocade & Vivitrol scheduling',
              'Walk-in crisis queue management',
              'Dual-diagnosis visit orchestration',
              'Stigma-aware check-in',
              'Injectable MAT benefit routing',
              'No generic templates',
              'Built for MAT complexity',
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
                  Your MA&rsquo;s morning started fine.<br />
                  <em>By 9am it was already over.</em>
                </h2>
                <div className={s.realityNarrative}>
                  <p>
                    Three injection appointments, two UDS collections, and a blood pressure check —
                    that was the schedule. By 9, there&rsquo;s a walk-in crisis patient in room 4.
                    By 10, a UDS result comes back flagged. The lab staff rotated this week.
                    The chain-of-custody documentation is unclear. The provider can&rsquo;t advance
                    the patient&rsquo;s dosing level until it&rsquo;s resolved. The patient in the
                    lobby doesn&rsquo;t know they&rsquo;re in limbo.
                  </p>
                  <p>
                    Meanwhile your front desk is maintaining a stigma-free environment for a waiting
                    room full of patients who are already carrying enough. They&rsquo;re on three
                    phone calls simultaneously. One is about a Vivitrol prior auth — the plan keeps
                    routing it as a medical benefit but the pharmacy portal says drug benefit.
                    Nobody knows who to call. The patient hasn&rsquo;t started treatment yet because
                    nobody has resolved the routing.
                  </p>
                  <p>
                    The &ldquo;scheduled&rdquo; day was never really scheduled. It was a placeholder
                    that gets rewritten in real time, every single morning, by a team that is
                    already stretched to its limit — and doing deeply important work in the middle
                    of all of it.
                  </p>
                </div>
              </div>
              <div className={s.realityRight}>
                <ul className={s.painList} aria-label="MAT clinic operational pain points">
                  {[
                    'MAT visits are slotted as simple med checks. In reality, 80% of the clinical day is complex psychiatric medication management, urgent-care-like presentations, and crises — stacked on top of the MAT work.',
                    'UDS chain-of-custody failures aren\'t edge cases. Label mix-ups, staff rotation, and documentation gaps mean contested results that block patient progress — and "this kinda shit happens all the time."',
                    'Sublocade and Vivitrol prior auth is routed differently from every other injectable. Medical benefit vs drug benefit confusion delays treatment starts by 2–4 weeks while someone makes phone calls.',
                    'Walk-in crisis patients have no designated lane. They absorb the entire day with no visibility into downstream impact on scheduled MAT appointments.',
                    'Stigma-sensitive intake is a clinical requirement, not a preference. When front desk reads sensitive information aloud or patients overhear each other\'s details, the therapeutic relationship is damaged before the visit begins.',
                    'MAs are responsible for injections, phones, UDS interpretation, vitals, and crisis triage — simultaneously — with no shared visibility board to coordinate any of it.',
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
              <h2 className={s.sectionTitle}>From reactive triage to<br />coordinated care delivery.</h2>
              <p className={s.sectionDesc}>
                clinIQ doesn&rsquo;t simplify MAT workflows. It maps them — so the complexity is visible
                and manageable instead of invisible and chaotic.
              </p>
            </div>
            <div className={s.changesGrid}>
              {[
                {
                  before: 'UDS results tracked on paper or in someone\'s memory. Chain of custody reconstructed after the fact when a result is contested or an audit arrives.',
                  after: 'Digital UDS log with timestamp, staff ID, and result tied directly to the patient record. Complete audit trail available in seconds — not reconstructed from memory under pressure.',
                },
                {
                  before: 'Injection scheduling managed separately from visit flow. Benefit type remembered by one staff member. When they\'re out, nobody knows who has the Vivitrol prior auth or whether it\'s been submitted.',
                  after: 'Injectable MAT visits flagged by type, benefit classification, and inventory status before the patient arrives. Prior auth status visible on the board. No phone-back loop to find out where a case stands.',
                },
                {
                  before: 'Crisis walk-ins absorb the entire day. Staff discover the ripple effect visit by visit — first by running late, then by realizing they\'re an hour behind, then by staying past close.',
                  after: 'Crisis walk-in triggers a live queue re-sort showing the downstream impact immediately. Team sees exactly which visits shift, by how much, and who needs to be notified — before the problem compounds.',
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
              <h2 className={s.sectionTitle}>clinIQ modules built for the MAT clinic reality.</h2>
              <p className={s.sectionDesc}>
                Each module addresses a specific structural problem in addiction medicine operations —
                not a generic clinic workflow that happens to include an injection option.
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
                  title: 'Patient Flow — 7-Stage MAT Board',
                  desc: 'clinIQ maps the actual MAT visit flow: Intake → Urine Collection → With MA → With Provider → Injection → Observation → Checkout. Every stage is a discrete status on the live board. When a patient is waiting for UDS results, that\'s visible. When they\'re in the observation period post-injection, that\'s visible. When a crisis walk-in is added, the whole board updates. No mental juggling. No hallway check-ins. One shared view for the entire team.',
                  href: '/features/patient-flow',
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                  title: 'Pre-Authorization — Injectable MAT Routing',
                  desc: 'Naltrexone, buprenorphine injectables, and Vivitrol are routed differently from almost every other medication — sometimes as medical benefits, sometimes drug benefits, with no consistent logic across payers. clinIQ tracks prior auth status per injectable, per patient, with benefit classification flags that prevent the "I thought someone else was handling it" gap. You see what\'s been submitted, what\'s pending, and what\'s blocking a patient\'s treatment start.',
                  href: '/features/pre-auth',
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  ),
                  title: 'Check-In — Stigma-Aware Private Intake',
                  desc: 'Addiction medicine patients carry sensitive histories that should not be confirmed aloud at a front desk, visible to other patients in the waiting room, or handled by staff who aren\'t part of the care team. clinIQ\'s mobile check-in keeps the intake process on the patient\'s own device — no verbal confirmation of sensitive details, no public display of information, no patient overhearing another\'s history through a waiting room partition.',
                  href: '/features/check-in',
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                    </svg>
                  ),
                  title: 'Analytics — Audit-Ready Operational Data',
                  desc: 'UDS completion rates, injection volume by type and month, crisis walk-in frequency and downstream scheduling impact, prior auth turnaround by payer. For DEA audits, accreditation reviews, and grant reporting — the data exists in the system, timestamped and attributed. For operational decisions — which days are overloaded, which payers are slowing treatment starts, where the MA team is consistently absorbing extra work — the trends are visible.',
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
              <h2 className={s.sectionTitle}>The MAT visit. Mapped completely.</h2>
              <p className={s.workflowDesc}>
                Seven stages. Each one discrete, trackable, and visible to the whole team —
                so UDS results, injections, observation periods, and checkout are
                coordinated rather than improvised.
              </p>
            </div>
            <div className={s.stageRow} role="list" aria-label="MAT clinic visit flow stages">
              {[
                { label: 'Intake', color: '#f59e0b' },
                { label: 'Urine Collection', color: '#8b5cf6' },
                { label: 'With MA', color: '#3b82f6' },
                { label: 'With Provider', color: '#0d9488' },
                { label: 'Injection', color: '#ec4899' },
                { label: 'Observation', color: '#6366f1' },
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
              Not all patients move through every stage — patients without injections skip the injection and
              observation steps. Crisis walk-ins can be inserted at intake and the board re-sorts. UDS holds
              can pause a patient at the collection stage without blocking the rest of the board.
              The flow adapts to what actually happens, not to a template built for a different clinic.
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className={s.stats}>
          <div className={s.container}>
            <div className={s.statsHeader}>
              <h2 className={s.statsHeaderTitle}>The operational weight of MAT, in numbers.</h2>
              <p className={s.statsHeaderDesc}>
                These are the realities that show up in staff turnover, patient complaints, audit findings,
                and treatment delays when MAT operations run without visibility.
              </p>
            </div>
            <div className={s.statsGrid}>
              {[
                { number: '80%', label: 'Of MAT provider time spent on complex psych and co-morbid presentations — not MAT itself' },
                { number: '2–4wk', label: 'Average delay in injectable MAT starts caused by benefit misclassification and PA routing confusion' },
                { number: '40%+', label: 'Of MAT program audit findings cite documentation gaps — many from UDS chain-of-custody failures' },
                { number: '60%', label: 'Of MAT clinics report crisis walk-ins as their #1 daily operational disruptor' },
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
              <h2 className={s.sectionTitle}>What MAT clinic teams ask first.</h2>
            </div>
            <div className={s.faqList}>
              {[
                {
                  q: 'Does clinIQ work with our OTP (Opioid Treatment Program) and its specific compliance requirements?',
                  a: 'Yes. clinIQ is designed to complement OTP workflows — including methadone dosing protocols, UDS documentation, and the multi-stage visit structure that federal OTP certification requires. The system does not replace your OTP-specific documentation; it sits alongside it as the operational coordination layer.',
                },
                {
                  q: 'Our biggest problem is UDS documentation failures that show up during audits. Can clinIQ fix that?',
                  a: 'UDS chain-of-custody documentation in clinIQ creates a complete, timestamped, staff-attributed record for every collection. The record is tied to the patient visit and cannot be retroactively altered. When an audit asks for collection documentation from six months ago, you produce a report — not a reconstruction.',
                },
                {
                  q: 'How does clinIQ handle the privacy requirements specific to substance use disorder treatment (42 CFR Part 2)?',
                  a: 'clinIQ\'s check-in and patient display features are designed to minimize any public-facing disclosure of patient information. No names appear on lobby displays. Intake forms are completed on patient-owned devices. We recommend a compliance review with your legal team for specific 42 CFR Part 2 obligations, which vary by clinic structure.',
                },
                {
                  q: 'Our staff burnout is severe. Does adding new software make this worse?',
                  a: 'Every clinIQ implementation starts with a workflow mapping session. We don\'t configure software and leave. The goal is to remove cognitive load from MAs and front desk — specifically the tasks that require holding the entire queue in memory, tracking UDS status manually, and discovering crisis ripple effects by running late. Most teams report reduced end-of-shift stress within the first two weeks.',
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
                <em>the hardest work of their lives.</em>
              </h2>
              <p className={s.ctaDesc}>
                The operations of your clinic should not be a barrier to the care they came for.
                clinIQ removes the administrative friction so your team can focus on what actually matters.
              </p>
              <div className={s.ctaActions}>
                <a href="/contact" className={s.btnPrimary}>
                  Talk to Someone Who Gets MAT
                  <svg className={s.btnIcon} viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10h12m-4-4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a href="/resources/mat-clinic-workflow-template" className={s.btnGhost}>
                  Free: MAT Workflow Template
                </a>
              </div>
              <span className={s.ctaNote}>No commitment. Built around your patient population and visit structure.</span>
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
                { label: 'Pre-Authorization Feature', href: '/features/pre-auth' },
                { label: 'MAT Clinic Workflow Template', href: '/resources/mat-clinic-workflow-template' },
                { label: 'Prior Auth Checklist', href: '/resources/prior-auth-checklist' },
                { label: 'Staff Burnout Prevention Guide', href: '/resources/staff-burnout-prevention-guide' },
                { label: 'Psychiatry Specialty Page', href: '/specialties/psychiatry' },
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
