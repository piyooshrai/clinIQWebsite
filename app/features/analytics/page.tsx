import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import s from '@/app/specialties/specialty-full.module.css'

export const metadata: Metadata = {
  title: 'Clinic Analytics Software — Wait Times, Utilization & No-Show Patterns | clinIQ',
  description:
    'clinIQ Analytics surfaces wait time patterns, provider utilization, no-show rates, and bottleneck data — turning daily operational noise into staffing decisions you can actually make.',
  openGraph: {
    title: 'Clinic Analytics Software — Operational Intelligence for Outpatient Practices | clinIQ',
    description:
      'Real-time and historical analytics for clinic operations: wait time trends, utilization by provider and room, no-show patterns, and bottleneck detection.',
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
      { '@type': 'ListItem', position: 3, name: 'Analytics', item: 'https://cliniq.com/features/analytics' },
    ],
  },
  faq: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What operational metrics does clinIQ Analytics track?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'clinIQ Analytics tracks wait time by stage (check-in to triage, triage to rooming, rooming to provider, provider to discharge), provider utilization (time in rooms vs. available hours), room utilization (occupancy rate by room and time of day), no-show rates by appointment type and provider, same-day fill rates, and treatment plan completion rates by specialty. The metrics are configurable by specialty — an urgent care practice tracks different KPIs than a behavioral health practice.',
        },
      },
      {
        '@type': 'Question',
        name: 'How is clinIQ Analytics different from the reports in my EHR?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'EHR reports capture clinical and billing data: diagnoses, procedures, revenue cycle metrics. clinIQ Analytics captures operational data: how long patients wait at each stage, where the bottlenecks form, which hours of the day create the most staff pressure, which providers consistently run behind schedule. These are two different data sets. EHR reports tell you what happened clinically and financially. clinIQ Analytics tells you how the operational delivery of that care performed — and where you\'re losing throughput.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can clinIQ Analytics identify which staff actions are causing bottlenecks?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, within the bounds of what operational data captures. clinIQ Analytics can identify that triage wait times spike consistently on Monday mornings, that Room 4 has 20% lower utilization than other rooms, and that a specific provider\'s average visit time is 35% longer than the practice average. These patterns surface without attributing blame — they\'re workflow data that informs staffing decisions, schedule design, and capacity planning.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does it take for clinIQ Analytics to show meaningful patterns?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Real-time analytics are visible from day one — wait time by stage, current queue depth, room occupancy, and active bottleneck alerts. Historical pattern data builds over 2-4 weeks. Most practices identify their first actionable pattern (a consistent Tuesday afternoon backup, a specific appointment type that consistently runs over, a room with scheduling inefficiency) within the first 30 days of operational data.',
        },
      },
    ],
  },
}

const marqueeItems = [
  'Wait Time Analysis', 'Provider Utilization', 'Bottleneck Detection',
  'No-Show Patterns', 'Room Utilization', 'Same-Day Fill Rates',
  'Hourly Demand Curves', 'Treatment Plan Tracking', 'RTM Compliance',
]

export default function AnalyticsFeaturePage() {
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
            <span className={s.badge}>Analytics</span>
            <h1 className={s.heroTitle}>
              Your afternoon backup didn't start at noon.{' '}
              <em>It started at 9:20am and nobody saw it.</em>
            </h1>
            <p className={s.heroSubtitle}>
              Every clinic has patterns. The Tuesday afternoon compression that always runs 45 minutes
              behind. The provider whose visits average 32 minutes for 20-minute slots. The Monday
              morning triage backup that predicts the entire day's throughput. These patterns are
              completely visible in your operational data — if someone is looking at it. clinIQ
              Analytics surfaces them in real time, before they compound, and over time so you
              can staff for them instead of reacting to them.
            </p>
            <div className={s.heroActions}>
              <a href="/demo" className={s.btnPrimary}>See Analytics live<span className={s.btnIcon}>→</span></a>
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
              <h2>EHR reports tell you what happened clinically. clinIQ tells you how well you delivered it.</h2>
              <p className={s.realityNarrative}>
                Your EHR is excellent at capturing the clinical record: diagnoses, procedures,
                prescriptions, lab results. Its built-in reports tell you how much revenue you
                generated, which CPT codes you billed, and how your collections compare to charges.
                None of that tells you why patients were waiting 45 minutes by 11am, which stage
                of your workflow creates the most staff pressure, or whether your room utilization
                matches your staffing levels.
              </p>
              <p className={s.realityNarrative}>
                Operational analytics are a different data set entirely. They capture time — how
                long patients wait at each stage, how long providers spend in rooms, how much time
                passes between a patient being marked ready and being roomed. From that time data,
                patterns emerge: consistent bottlenecks at specific stages, specific days, and
                specific hours. Patterns that are actionable. You can't staff for a problem you
                can't see. clinIQ makes it visible.
              </p>
            </div>
            <div className={s.realityRight}>
              <ul className={s.painList}>
                <li className={s.painItem}><span className={s.painDot} /><span className={s.painText}>Bottlenecks are invisible until the lobby is already full — by then you're managing aftermath, not the cause that started an hour ago.</span></li>
                <li className={s.painItem}><span className={s.painDot} /><span className={s.painText}>No-show rates are reported as practice averages — without breakdowns by provider, appointment type, and day of week, the data doesn't point to a fix.</span></li>
                <li className={s.painItem}><span className={s.painDot} /><span className={s.painText}>Room utilization is unknown — practices staff based on appointment volume, not actual room occupancy, leading to chronic overstaffing and understaffing by hour.</span></li>
                <li className={s.painItem}><span className={s.painDot} /><span className={s.painText}>Provider visit duration data doesn't exist — you know the schedule says 20 minutes, but you don't know which providers average 27 minutes and compress every afternoon.</span></li>
                <li className={s.painItem}><span className={s.painDot} /><span className={s.painText}>Staffing decisions are based on intuition — the Monday morning supervisor who adds an extra MA because "Mondays are always rough" is right, but can't prove it to administration.</span></li>
              </ul>
            </div>
          </div>
        </section>

        <section className={s.changes}>
          <h2>Before and after clinIQ Analytics.</h2>
          <div className={s.changesGrid}>
            <div className={s.changeCard}>
              <div className={`${s.changeLabel} ${s.changeLabelBefore}`}>Before</div>
              <div className={s.changeBefore}>A practice manager notices patients complain about Tuesdays. She adds staff "just in case." It helps sometimes. She doesn't know why Tuesday is different from Thursday.</div>
              <div className={`${s.changeLabel} ${s.changeLabelAfter}`}>After</div>
              <div className={s.changeAfter}>Analytics shows triage wait time spikes to 22 minutes on Tuesday mornings between 9:00-10:30 — when two providers start simultaneously. One MA redirect at 9am prevents the backup. Data-justified, targeted, effective.</div>
            </div>
            <div className={s.changeCard}>
              <div className={`${s.changeLabel} ${s.changeLabelBefore}`}>Before</div>
              <div className={s.changeBefore}>No-show rate is 18%. "We need to send more reminders." Reminders increase. No-show rate is still 17%. Nobody knows which appointment types or which providers drive the rate.</div>
              <div className={`${s.changeLabel} ${s.changeLabelAfter}`}>After</div>
              <div className={s.changeAfter}>Analytics shows the 18% rate is actually 8% for established patients and 34% for new patients scheduled by phone vs. 12% for those who self-scheduled online. The fix is targeted, not blanket.</div>
            </div>
            <div className={s.changeCard}>
              <div className={`${s.changeLabel} ${s.changeLabelBefore}`}>Before</div>
              <div className={s.changeBefore}>Room utilization is unknown. 6 exam rooms. Some feel constantly occupied. Some feel empty. No data to guide room assignment redesign or future capacity planning.</div>
              <div className={`${s.changeLabel} ${s.changeLabelAfter}`}>After</div>
              <div className={s.changeAfter}>Analytics shows rooms 1-4 average 78% utilization 9am-12pm, rooms 5-6 average 31%. Afternoon pattern reverses. Scheduling reconfigured to match provider assignment to actual room demand curves.</div>
            </div>
            <div className={s.changeCard}>
              <div className={`${s.changeLabel} ${s.changeLabelBefore}`}>Before</div>
              <div className={s.changeBefore}>A provider consistently creates afternoon backup. Nobody knows why. The practice manager suspects they run long. There's no data to confirm or have a productive conversation about it.</div>
              <div className={`${s.changeLabel} ${s.changeLabelAfter}`}>After</div>
              <div className={s.changeAfter}>Analytics confirms average visit duration is 31 minutes vs. 20-minute scheduled slots. The data supports a schedule redesign conversation — or justifies adding buffer slots — without it being personal.</div>
            </div>
          </div>
        </section>

        <section className={s.stats}>
          <div className={s.statsGrid}>
            <div className={s.stat}><div className={s.statNumber}>Day 1</div><div className={s.statLabel}>real-time analytics visible from first day of operation — wait time, queue depth, room status, and bottleneck alerts</div></div>
            <div className={s.stat}><div className={s.statNumber}>2–4 wks</div><div className={s.statLabel}>time to first actionable historical pattern — most practices identify a fixable bottleneck within the first month of data</div></div>
            <div className={s.stat}><div className={s.statNumber}>35%</div><div className={s.statLabel}>typical difference between average visit duration and scheduled slot length in practices without duration tracking</div></div>
            <div className={s.stat}><div className={s.statNumber}>2× range</div><div className={s.statLabel}>typical no-show rate difference between self-scheduled and staff-scheduled appointments — only visible with booking-source analytics</div></div>
          </div>
        </section>

        <section className={s.faq}>
          <h2>Analytics, answered.</h2>
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
            <h2 className={s.ctaTitle}>Your operational patterns are already there. You just can't see them yet.</h2>
            <p className={s.ctaDesc}>clinIQ Analytics surfaces wait time patterns, utilization by hour, no-show drivers, and bottleneck causes — turning daily operational noise into decisions you can actually make.</p>
            <div className={s.ctaActions}><a href="/demo" className={s.btnPrimary}>See Analytics live<span className={s.btnIcon}>→</span></a></div>
            <p className={s.ctaNote}>No commitment. Setup in one day.</p>
          </div>
        </section>

        <section className={s.related}>
          <h3>Related features</h3>
          <div className={s.relatedLinks}>
            <a href="/features/patient-flow" className={s.relatedLink}>Patient Flow</a>
            <a href="/features/scheduling" className={s.relatedLink}>Scheduling</a>
            <a href="/features/rtm" className={s.relatedLink}>RTM Billing</a>
            <a href="/features/check-in" className={s.relatedLink}>Check-In</a>
          </div>
        </section>
      </main>
      <FooterInner />
    </>
  )
}
