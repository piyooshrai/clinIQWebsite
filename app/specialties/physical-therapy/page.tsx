import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import s from '@/app/specialties/specialty-full.module.css'

export const metadata: Metadata = {
  title: 'Physical Therapy Practice Management Software | RTM Billing & No-Show Recovery | clinIQ',
  description:
    'Clinic operations software for physical therapy practices. Capture RTM revenue you\'re leaving on the table. Fix no-show management beyond the 20% rule. Track documentation compliance before it becomes a liability.',
  openGraph: {
    title: 'clinIQ for Physical Therapy — RTM Revenue, No-Show Recovery, and Documentation That Doesn\'t Lag',
    description:
      'Most PT clinics bill $0 in RTM revenue because tracking 16 days of monitoring data isn\'t embedded in their workflow. clinIQ changes that — along with blunt-instrument double-booking and retroactive documentation risk.',
    type: 'website',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cliniq.com' },
    { '@type': 'ListItem', position: 2, name: 'Specialties', item: 'https://cliniq.com/specialties' },
    { '@type': 'ListItem', position: 3, name: 'Physical Therapy', item: 'https://cliniq.com/specialties/physical-therapy' },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'clinIQ for Physical Therapy Practices',
  description:
    'Patient flow, RTM billing (CPT 98975-98981), scheduling, and documentation tracking software for outpatient physical therapy clinics.',
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
      name: 'How does clinIQ help physical therapy clinics bill RTM codes 98975-98981?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'clinIQ\'s RTM module automatically tracks monitoring days per patient, alerts staff when a patient approaches the 16-day threshold required for billing, and generates the documentation needed to support CPT 98975, 98977, 98980, and 98981. The burden of chasing 16 days of data is removed from the therapist — it\'s handled by the system.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between RTM (CPT 98975-98981) and RPM codes in physical therapy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Remote Therapeutic Monitoring (RTM) codes cover musculoskeletal and respiratory monitoring via patient-reported data, apps, or wearables — relevant to physical therapy for post-surgical and chronic musculoskeletal patients. RPM (Remote Patient Monitoring) codes cover physiologic data like heart rate, blood pressure, and glucose. For most PT clinics, RTM is the relevant billing pathway. clinIQ supports RTM specifically.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can clinIQ replace the blunt 20% double-booking rule for PT no-show management?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Rather than applying a uniform 20% double-booking rate regardless of day, provider, or patient, clinIQ tracks individual no-show history and flags high-risk appointment slots for selective backfill. When a cancellation does come in, the system notifies waitlisted patients automatically. The goal is to fill gaps intelligently rather than systematically overbook and create overburdened days.',
      },
    },
  ],
}

export default function PhysicalTherapyPage() {
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
              <div className={s.badge}>Physical Therapy</div>
              <h1 className={s.heroTitle}>
                You&rsquo;re leaving $100–125 per patient per month<br />
                on the table.<br />
                <em>Because nobody has time to chase 16 days of monitoring data.</em>
              </h1>
              <p className={s.heroSubtitle}>
                RTM billing (CPT 98975–98981) exists. The revenue is real. But most PT clinics bill
                zero — because the workflow to track 16 days of monitoring data isn&rsquo;t embedded
                in the day. clinIQ embeds it. And while it&rsquo;s at it, it fixes the blunt
                20% double-booking rule that creates overburdened days and empty ones in equal measure.
              </p>
              <div className={s.heroActions}>
                <a href="/contact" className={s.btnPrimary}>
                  See clinIQ for Physical Therapy
                  <svg className={s.btnIcon} viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10h12m-4-4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a href="/resources/rtm-implementation-guide" className={s.btnGhost}>
                  Free: RTM Implementation Guide
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── MARQUEE ── */}
        <div className={s.marquee} aria-hidden="true">
          <div className={s.marqueeTrack}>
            {[
              'RTM billing CPT 98975–98981',
              '16-day threshold auto-tracking',
              'Intelligent no-show backfill',
              'Documentation lag alerts',
              'Multi-patient parallel tracking',
              '$100–125/patient/month captured',
              'Pattern-based no-show prediction',
              'Waitlist automation',
              'RTM billing CPT 98975–98981',
              '16-day threshold auto-tracking',
              'Intelligent no-show backfill',
              'Documentation lag alerts',
              'Multi-patient parallel tracking',
              '$100–125/patient/month captured',
              'Pattern-based no-show prediction',
              'Waitlist automation',
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
                  Your no-show rate is 20%,<br />
                  so you double-book 20%.<br />
                  <em>There&rsquo;s no real way to predict who won&rsquo;t show.</em>
                </h2>
                <div className={s.realityNarrative}>
                  <p>
                    That&rsquo;s the rule. It doesn&rsquo;t matter that no-shows cluster on Mondays,
                    that two specific patients account for 60% of your no-shows, or that overcast
                    Fridays in winter see almost none. The rule is 20 and 20 — applied uniformly
                    across the entire schedule, every week.
                  </p>
                  <p>
                    On the days it works, your PTs are slammed. On the days it doesn&rsquo;t, they&rsquo;re
                    staring at empty treatment rooms while a full waitlist sits untouched. Nobody wins.
                    Patients who need care can&rsquo;t get in. Patients who do get in are rushed. PTs
                    end the week either exhausted or underutilized — depending on which version of the
                    double-booking gamble happened to play out.
                  </p>
                  <p>
                    Meanwhile, somewhere in the practice there&rsquo;s a patient who has been monitoring
                    remotely for 14 days — one day short of the RTM billing threshold. Nobody is chasing
                    day 15 because the PT barely has time to finish their notes from yesterday.
                    The RTM revenue goes uncaptured. The documentation sits incomplete.
                    Seven months later, someone flags a visit where the patient was marked as checked in
                    instead of no-show. Nobody can remember the visit. Nobody wants to write retroactive
                    notes for a visit that didn&rsquo;t happen. The compliance risk sits there.
                  </p>
                </div>
              </div>
              <div className={s.realityRight}>
                <ul className={s.painList} aria-label="Physical therapy operational pain points">
                  {[
                    'The 20% double-booking rule is applied uniformly regardless of patient history, day of week, provider, or time of year. It creates overburdened days and idle days in roughly equal measure — and fixes neither.',
                    'RTM codes (98975–98981) add $100–125/patient/month in reimbursable revenue. Most PT clinics bill zero because tracking 16 days of monitoring data isn\'t embedded in the workflow — it\'s an extra task nobody has time for.',
                    'Same-day cancellations with no fee result in gaps that can\'t be filled because there\'s no automated backfill. The waitlist exists. The patients are waiting. The connection isn\'t being made.',
                    'Documentation lag is a compliance liability that compounds quietly. A 48-hour lag becomes a week. A week becomes a month. Seven months later, a flagged visit from that period has no clear documentation and no one remembers the details.',
                    'Therapists managing 3–4 patients simultaneously in different stages of parallel care have no shared visibility board. They track everyone in their head — and when something shifts, they find out by walking the floor.',
                    'PTs who move fast and pick up everyone\'s slack learn quickly that speed results in more work being assigned, not recognition. The system penalizes efficiency. Many deliberately slow down to survive.',
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
              <h2 className={s.sectionTitle}>Replace blunt rules<br />with intelligent systems.</h2>
              <p className={s.sectionDesc}>
                The PT clinic&rsquo;s problems are not hard to solve. They&rsquo;re hard to solve
                manually. clinIQ automates the three biggest sources of lost revenue and wasted time.
              </p>
            </div>
            <div className={s.changesGrid}>
              {[
                {
                  before: '20% no-show rate results in blanket 20% double-booking across every slot, every day, every provider — regardless of actual risk per slot.',
                  after: 'Individual no-show history tracked per patient. High-risk slots flagged for selective backfill. When cancellations come in, waitlisted patients are notified automatically. Fill the gaps that need filling. Don\'t create overbooking you\'ll regret.',
                },
                {
                  before: 'RTM monitoring tracked manually — or not tracked at all. Staff attempt to chase 16 days of data to bill 98980/98981. Most give up. Revenue walks out the door.',
                  after: 'RTM days auto-logged through clinIQ\'s monitoring flow. Dashboard shows days-to-threshold per patient. Alert fires at day 14. Documentation for 98975, 98977, 98980, and 98981 generated from tracked data. The revenue is captured because the system does the chasing.',
                },
                {
                  before: 'Documentation lag discovered during compliance review or audit — sometimes 7+ months after the visit. Retroactive note-writing under ethical and legal pressure.',
                  after: 'Note completion rate tracked daily per provider. Lag beyond 48 hours triggers an alert. Supervisors see the status before it becomes a compliance issue. Notes get written while the visit is still recent.',
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
              <h2 className={s.sectionTitle}>The clinIQ modules PT clinics actually use.</h2>
              <p className={s.sectionDesc}>
                Four specific tools addressing the four specific problems that lose physical therapy
                clinics the most revenue and cost the most staff time every week.
              </p>
            </div>
            <div className={s.modulesGrid}>
              {[
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" /><path d="M12 6v6l4 2" />
                    </svg>
                  ),
                  title: 'RTM Billing — Automated CPT 98975–98981 Capture',
                  desc: 'Remote Therapeutic Monitoring adds $100–125 per eligible patient per month — in the first period alone. The barrier is the 16-day monitoring threshold: tracking it manually takes time nobody has. clinIQ\'s RTM module logs monitoring days automatically, alerts staff at day 14 with a billing prompt, and generates the supporting documentation for 98975 (initial setup), 98977 (musculoskeletal monitoring), 98980 (first 20 minutes of treatment management), and 98981 (additional 20-minute increments). The code that sounds like extra work stops being extra work.',
                  href: '/features/rtm',
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  ),
                  title: 'Scheduling — Pattern-Based No-Show Management',
                  desc: 'The 20/20 rule treats every no-show the same. clinIQ treats no-shows as data. Two patients with chronic cancellation histories get flagged for selective double-booking. A Monday at 8am with historically high no-shows gets a waitlist notification triggered automatically when a slot opens. A patient who has never cancelled in two years doesn\'t get doubled. The schedule is managed based on what actually happens — not what the rule assumes.',
                  href: '/features/scheduling',
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
                      <rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
                    </svg>
                  ),
                  title: 'Patient Flow — Parallel Care Visibility',
                  desc: 'One therapist managing three or four patients in different stages simultaneously is standard in PT. What isn\'t standard is having visibility into all four at once without walking the floor. clinIQ\'s patient flow board shows every patient in your clinic: who\'s in evaluation, who\'s in active treatment, who\'s doing their exercise set and ready for their next therapist check, and who\'s ready to discharge. The mental juggling gets replaced by a board that does the tracking.',
                  href: '/features/patient-flow',
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                    </svg>
                  ),
                  title: 'Analytics — RTM Capture Rate, Documentation Compliance, No-Show Patterns',
                  desc: 'RTM revenue capture rate: how many eligible patients are being billed vs. how many are eligible. Documentation lag by therapist and by week. No-show rate by patient, day, provider, and slot time. Cancellation-to-backfill conversion rate. These numbers exist in the data you already generate — clinIQ surfaces them. When it\'s time to demonstrate to a practice owner that the RTM program is working, or that a specific scheduling change reduced overtime, the data makes the case.',
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
              <h2 className={s.sectionTitle}>Four patients, four stages, one board.</h2>
              <p className={s.workflowDesc}>
                Physical therapy is parallel by nature — one therapist, multiple patients, multiple active
                stages of care happening simultaneously. The flow board reflects this structure rather
                than forcing PT into a single-patient-at-a-time model.
              </p>
            </div>
            <div className={s.stageRow} role="list" aria-label="Physical therapy patient flow stages">
              {[
                { label: 'Check-In', color: '#f59e0b' },
                { label: 'Evaluation', color: '#8b5cf6' },
                { label: 'Active Treatment', color: '#0d9488' },
                { label: 'Exercise Set', color: '#3b82f6' },
                { label: 'RTM Check', color: '#ec4899' },
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
              The RTM Check stage is not a gate — it&rsquo;s a lightweight confirmation that monitoring
              data was captured for the visit, contributing to the 16-day count. When the threshold
              is reached, the billing prompt fires. The therapist does nothing extra — the system
              tracks it as part of the discharge step.
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className={s.stats}>
          <div className={s.container}>
            <div className={s.statsHeader}>
              <h2 className={s.statsHeaderTitle}>The RTM revenue gap, by the numbers.</h2>
              <p className={s.statsHeaderDesc}>
                This is not theoretical revenue. These are the CPT codes, the reimbursement rates,
                and the operational barriers that determine whether PT clinics capture them.
              </p>
            </div>
            <div className={s.statsGrid}>
              {[
                { number: '$100–125', label: 'Per eligible patient per month in RTM reimbursement — most PT clinics bill $0' },
                { number: '16 days', label: 'Monitoring threshold required before billing 98980/98981 — the barrier most clinics can\'t track manually' },
                { number: '$400–500', label: 'Monthly revenue per therapist from just one uncaptured RTM patient per week' },
                { number: '2×', label: 'Increase in claims denial risk when PT documentation lags beyond 48 hours post-visit' },
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
              <h2 className={s.sectionTitle}>What PT clinic owners and directors ask first.</h2>
            </div>
            <div className={s.faqList}>
              {[
                {
                  q: 'We\'ve looked at RTM before but our therapists don\'t have time to manage it. How is clinIQ different?',
                  a: 'The reason most RTM programs fail in PT is that tracking is positioned as a therapist task rather than a system task. In clinIQ, monitoring days are logged as part of the visit workflow — the therapist doesn\'t "manage RTM," they discharge the patient and the system records the monitoring data. The billing alert fires automatically when the threshold is reached.',
                },
                {
                  q: 'Can we bill RTM for all our patients or only certain diagnoses?',
                  a: 'RTM (CPT 98975–98981) is appropriate for musculoskeletal and respiratory conditions being managed therapeutically — which covers the majority of outpatient PT patients. Your billing team should confirm eligibility by payer, as coverage varies. clinIQ tracks eligibility flags per patient and surfaces them during the scheduling workflow.',
                },
                {
                  q: 'Our double-booking strategy creates chaos on some days. Can clinIQ really predict no-shows better?',
                  a: 'Not predict — track. clinIQ identifies which patients have a history of cancellations, which days and times historically have higher no-shows, and which slots can absorb a double-booking with lower risk. It\'s not AI prediction — it\'s pattern visibility that your clinic already has in its data but can\'t see because it\'s spread across an EHR and a spreadsheet.',
                },
                {
                  q: 'How does clinIQ handle the documentation compliance piece?',
                  a: 'Note completion status is tracked per therapist per visit. When a note is overdue, the system flags it — first to the therapist, then to the supervisor at configurable thresholds. The goal is to surface the lag early, not to catch it at an audit. Most practices find that making documentation status visible reduces lag significantly within the first month.',
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
                The revenue is already there.<br />
                <em>The workflow to capture it isn&rsquo;t.</em>
              </h2>
              <p className={s.ctaDesc}>
                RTM reimbursement for eligible PT patients is real, recurring, and accessible.
                The only thing standing between your clinic and that revenue is a 16-day tracking
                process that nobody has time to do manually. clinIQ makes it automatic.
              </p>
              <div className={s.ctaActions}>
                <a href="/resources/roi-calculator" className={s.btnPrimary}>
                  Calculate Your RTM Revenue Gap
                  <svg className={s.btnIcon} viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10h12m-4-4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a href="/contact" className={s.btnGhost}>
                  See clinIQ for PT Clinics
                </a>
              </div>
              <span className={s.ctaNote}>No commitment. We&rsquo;ll show you the RTM module with your patient volume.</span>
            </div>
          </div>
        </section>

        {/* ── RELATED ── */}
        <section className={s.related}>
          <div className={s.container}>
            <p className={s.relatedTitle}>Related resources and pages</p>
            <div className={s.relatedLinks}>
              {[
                { label: 'RTM Billing Feature', href: '/features/rtm' },
                { label: 'Scheduling Feature', href: '/features/scheduling' },
                { label: 'RTM Implementation Guide', href: '/resources/rtm-implementation-guide' },
                { label: 'RTM Billing Guide 2026', href: '/resources/rtm-payer-matrix' },
                { label: 'ROI Calculator', href: '/resources/roi-calculator' },
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
