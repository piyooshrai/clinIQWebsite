import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import s from '@/app/specialties/specialty-full.module.css'

export const metadata: Metadata = {
  title: 'Prior Authorization Software — PA Tracking, Denial Appeals & Expiration Alerts | clinIQ',
  description:
    'clinIQ Pre-Authorization tracks every PA from submission to approval, alerts before expiration, and manages denial-to-appeal workflows — so revenue doesn\'t disappear in the PA pipeline.',
  openGraph: {
    title: 'Prior Authorization Software — PA Tracking & Denial Management | clinIQ',
    description:
      'End-to-end prior authorization management: submission tracking, expiration alerts, denial workflow, and documentation completeness checks before submission.',
    type: 'website',
  },
}

const schemaData = {
  breadcrumb: {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cliniq.com' },
      { '@type': 'ListItem', position: 2, name: 'Features', item: 'https://cliniq.com/features' },
      { '@type': 'ListItem', position: 3, name: 'Pre-Authorization', item: 'https://cliniq.com/features/pre-auth' },
    ],
  },
  faq: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What causes most prior authorization denials?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most PA denials are not clinical — they are administrative. The top causes are incomplete documentation packages (missing conservative treatment records, incorrect diagnosis codes, incomplete clinical justification), submissions that miss the payer\'s required format, and cases submitted without verifying current formulary or coverage criteria. Practices that implement a documentation completeness checklist before submission reduce denial rates by 30-50% without changing their patient mix or clinical decisions.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does clinIQ track PA expiration dates?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Every PA entered in clinIQ has an approval date and an expiration window. The system alerts coordinators at 30 days and again at 14 days before expiration — providing enough lead time to resubmit before the window closes. For spine surgery and pain management practices where PA approvals have 90-day windows and surgery dates frequently shift, these expiration alerts prevent the most common and costly administrative denials.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does clinIQ manage denied PA appeals?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'When a PA is denied, clinIQ creates an appeal workflow with the denial reason, the required appeal documentation, and the appeal deadline. The coordinator has a clear list of what\'s needed and by when — rather than starting the appeal process from scratch while managing 20 other active PA cases. Appeal deadlines are tracked with alerts so nothing expires in the queue without action.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which specialties see the highest PA denial rates?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Spine surgery, pain management, and musculoskeletal procedures consistently rank among the highest PA denial rates — often 20-40% on initial submission. Behavioral health PA for inpatient and intensive outpatient programs also sees high denial rates. Physical therapy PA for extended treatment plans, cardiology for advanced imaging, and oncology for specific chemotherapy regimens are all high-denial-rate categories where systematic PA management has the highest financial impact.',
        },
      },
    ],
  },
}

const marqueeItems = [
  'PA Submission Tracking', 'Expiration Alerts', 'Denial Appeals',
  'Documentation Checklists', 'Spine Surgery PA', 'Pain Management PA',
  'Approval Status Board', 'Insurance Verification', 'Appeal Deadlines',
]

export default function PreAuthFeaturePage() {
  return (
    <>
      <NavInner />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData.breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData.faq) }} />
      <main>
        <section className={s.hero}>
          <div className={s.heroBg}>
            <div className={`${s.heroOrb} ${s.heroOrbTeal}`} />
            <div className={`${s.heroOrb} ${s.heroOrbBlue}`} />
            <div className={s.heroGrain} />
          </div>
          <div className={s.heroContent}>
            <span className={s.badge}>Pre-Authorization</span>
            <h1 className={s.heroTitle}>
              A PA that expires before surgery day is{' '}
              <em>revenue that already happened and then didn't.</em>
            </h1>
            <p className={s.heroSubtitle}>
              Prior authorization is where clinical decisions become administrative failures.
              A surgery that's fully justified clinically gets pushed because a PA expired.
              A prescription runs out because the renewal PA was due last Thursday and nobody
              submitted it. A denial arrives without triggering an appeal that would have
              reversed it. clinIQ tracks every PA from submission to approval — with expiration
              alerts before the window closes and denial workflows before the deadline passes.
            </p>
            <div className={s.heroActions}>
              <a href="/demo" className={s.btnPrimary}>See Pre-Auth live<span className={s.btnIcon}>→</span></a>
              <a href="/features" className={s.btnGhost}>All features</a>
            </div>
          </div>
        </section>

        <div className={s.marquee}>
          <div className={s.marqueeTrack}>
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className={s.marqueeContent}>
                {item}{i < marqueeItems.length * 2 - 1 && <span className={s.marqueeDot}>·</span>}
              </span>
            ))}
          </div>
        </div>

        <section className={s.reality}>
          <div className={s.realityGrid}>
            <div className={s.realityLeft}>
              <h2>Most PA failures aren't clinical. They're tracking problems.</h2>
              <p className={s.realityNarrative}>
                A PA coordinator managing 30 active cases simultaneously is tracking submission dates,
                approval windows, expiration dates, denial deadlines, and appeal requirements — for
                30 different patients, 30 different insurers, and 30 different clinical scenarios.
                They're doing it in a spreadsheet, a shared drive folder, or their own memory. When
                something slips, the consequence isn't a note in a chart — it's a surgical case that
                gets pushed, a prescription that lapses, a patient who calls asking why their
                procedure was denied.
              </p>
              <p className={s.realityNarrative}>
                The data on PA denials confirms the tracking problem: most denials cite administrative
                reasons — missing documentation, wrong format, coverage criteria not met in the
                submission package — not clinical inappropriateness. Practices that fix the
                documentation completeness and submission tracking reduce denial rates by 30-50%
                without changing their patient mix at all. The clinical justification was always
                there. The administrative execution was the failure.
              </p>
            </div>
            <div className={s.realityRight}>
              <ul className={s.painList}>
                <li className={s.painItem}><span className={s.painDot} /><span className={s.painText}>A PA approved last quarter with a 90-day window expires before the surgery date shifts — nobody alerts the coordinator until pre-certification fails the morning of.</span></li>
                <li className={s.painItem}><span className={s.painDot} /><span className={s.painText}>A pain management patient's opioid PA renewal was due Thursday. It's Friday. The prescription lapses. The patient calls in crisis. The coordinator discovers the gap in real time.</span></li>
                <li className={s.painItem}><span className={s.painDot} /><span className={s.painText}>A denial arrives. The appeal deadline is 30 days. Nobody tracks the denial. The 30 days expire. The revenue is gone permanently.</span></li>
                <li className={s.painItem}><span className={s.painDot} /><span className={s.painText}>A PA is submitted without the complete conservative treatment documentation the insurer requires. It's denied in 48 hours. The resubmission takes 2 weeks. The surgery date is lost.</span></li>
                <li className={s.painItem}><span className={s.painDot} /><span className={s.painText}>A coordinator manages 30 active PA cases in a spreadsheet. They call in sick. Nobody else knows the status of any case. The queue sits for a day with no action.</span></li>
              </ul>
            </div>
          </div>
        </section>

        <section className={s.changes}>
          <h2>Before and after clinIQ Pre-Authorization.</h2>
          <div className={s.changesGrid}>
            <div className={s.changeCard}>
              <div className={`${s.changeLabel} ${s.changeLabelBefore}`}>Before</div>
              <div className={s.changeBefore}>A PA approved 80 days ago expires silently. Pre-certification fails the day before surgery. OR slot given to another case. Patient rescheduled 6 weeks out. Revenue lost.</div>
              <div className={`${s.changeLabel} ${s.changeLabelAfter}`}>After</div>
              <div className={s.changeAfter}>clinIQ alerts at day 60 and day 76. Resubmission happens before expiration. Pre-certification clears. The surgery happens as scheduled.</div>
            </div>
            <div className={s.changeCard}>
              <div className={`${s.changeLabel} ${s.changeLabelBefore}`}>Before</div>
              <div className={s.changeBefore}>A spine PA is submitted without the complete imaging series the insurer requires. Denied in 48 hours with a documentation deficiency notice. 2-week resubmission delay. Surgical date pushed.</div>
              <div className={`${s.changeLabel} ${s.changeLabelAfter}`}>After</div>
              <div className={s.changeAfter}>clinIQ's pre-submission checklist flags the missing imaging. Coordinator requests records before submitting. Submission is complete. First-pass approval. No delay.</div>
            </div>
            <div className={s.changeCard}>
              <div className={`${s.changeLabel} ${s.changeLabelBefore}`}>Before</div>
              <div className={s.changeBefore}>A denial arrives on a Thursday. The coordinator notes it, plans to start the appeal Monday. Forgets over the weekend. Appeal deadline passes on day 30. Revenue gone permanently.</div>
              <div className={`${s.changeLabel} ${s.changeLabelAfter}`}>After</div>
              <div className={s.changeAfter}>Denial received, appeal workflow triggered automatically with deadline tracking. Day 25 alert fires. Coordinator submits appeal in time. Decision reversed. Revenue recovered.</div>
            </div>
            <div className={s.changeCard}>
              <div className={`${s.changeLabel} ${s.changeLabelBefore}`}>Before</div>
              <div className={s.changeBefore}>The PA coordinator is out sick. Nobody else knows the status of the 28 active cases. Three expiration dates pass. Two cases miss their surgical windows. The coordinator returns to a crisis.</div>
              <div className={`${s.changeLabel} ${s.changeLabelAfter}`}>After</div>
              <div className={s.changeAfter}>Every case status is on the shared PA board. Coverage staff can see expiration dates, pending items, and action deadlines. One day out, zero cases fall through.</div>
            </div>
          </div>
        </section>

        <section className={s.stats}>
          <div className={s.statsGrid}>
            <div className={s.stat}><div className={s.statNumber}>30–50%</div><div className={s.statLabel}>reduction in PA denial rates when documentation completeness is verified before submission</div></div>
            <div className={s.stat}><div className={s.statNumber}>90 days</div><div className={s.statLabel}>typical PA approval window — the expiration most commonly missed when surgery dates shift</div></div>
            <div className={s.stat}><div className={s.statNumber}>30 days</div><div className={s.statLabel}>standard appeal deadline after PA denial — the window that passes silently in most practices</div></div>
            <div className={s.stat}><div className={s.statNumber}>Top 5</div><div className={s.statLabel}>spine, pain management, and musculoskeletal procedures among highest PA denial rates of any specialty</div></div>
          </div>
        </section>

        <section className={s.faq}>
          <h2>Pre-Authorization, answered.</h2>
          <div className={s.faqList}>
            {schemaData.faq.mainEntity.map((item) => (
              <div key={item.name} className={s.faqItem}>
                <div className={s.faqQ}>{item.name}</div>
                <div className={s.faqA}>{item.acceptedAnswer.text}</div>
              </div>
            ))}
          </div>
        </section>

        <section className={s.cta}>
          <div className={s.ctaBg}><div className={s.ctaOrb} /></div>
          <div className={s.ctaContent}>
            <h2 className={s.ctaTitle}>A PA that expires or a denial that goes unappealed is permanent revenue loss. Stop both.</h2>
            <p className={s.ctaDesc}>clinIQ Pre-Authorization tracks every PA submission, alerts before expiration, and creates appeal workflows the moment a denial arrives — so nothing falls through the administrative gap.</p>
            <div className={s.ctaActions}><a href="/demo" className={s.btnPrimary}>See Pre-Auth live<span className={s.btnIcon}>→</span></a></div>
            <p className={s.ctaNote}>No commitment. Setup in one day.</p>
          </div>
        </section>

        <section className={s.related}>
          <h3>Related features</h3>
          <div className={s.relatedLinks}>
            <a href="/features/patient-flow" className={s.relatedLink}>Patient Flow</a>
            <a href="/features/scheduling" className={s.relatedLink}>Scheduling</a>
            <a href="/features/analytics" className={s.relatedLink}>Analytics</a>
            <a href="/specialties/pain-management" className={s.relatedLink}>Pain Management</a>
          </div>
        </section>
      </main>
      <FooterInner />
    </>
  )
}
