import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import s from '@/app/specialties/specialty-full.module.css'

export const metadata: Metadata = {
  title: 'clinIQ vs AdvancedMD — Built to Maximize Billing vs Built to Maximize Throughput',
  description:
    'AdvancedMD was built to maximize billing efficiency. clinIQ was built to maximize patient throughput. Add clinIQ on top of AdvancedMD for live patient flow, RTM billing automation, and real-time operational analytics.',
  keywords: [
    'AdvancedMD alternative',
    'AdvancedMD patient flow',
    'AdvancedMD add-on operational layer',
    'clinic throughput software',
    'AdvancedMD vs clinic operations',
  ],
  openGraph: {
    title: 'clinIQ vs AdvancedMD — The Operational Layer AdvancedMD Left Empty',
    description:
      'AdvancedMD handles billing well. clinIQ handles what happens between the door and the discharge — room status, wait times, RTM billing, and PA tracking.',
    type: 'website',
    url: 'https://cliniq.com/compare/advancedmd',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cliniq.com' },
    { '@type': 'ListItem', position: 2, name: 'Compare', item: 'https://cliniq.com/compare' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'clinIQ vs AdvancedMD',
      item: 'https://cliniq.com/compare/advancedmd',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does clinIQ work with AdvancedMD?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. clinIQ layers on top of AdvancedMD as a dedicated operational platform. Your billing workflows, scheduling, and clinical documentation stay in AdvancedMD. clinIQ adds real-time patient flow tracking, RTM billing threshold monitoring, pre-authorization management, and LobbyView. No migration required.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does AdvancedMD not do that clinIQ does?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AdvancedMD is strong on billing automation and claims scrubbing. It does not offer real-time room status dashboards, patient-facing lobby displays, automated RTM 16-day threshold alerts, waitlist-fill scheduling, or pre-authorization expiration tracking with appeal workflows. These are operational features, not billing features.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is AdvancedMD expensive compared to clinIQ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AdvancedMD pricing varies significantly by tier and module selection, often landing in the $400–$700+ per provider per month range with add-on fees for additional modules. clinIQ is flat ~$250–$500 per provider per month with no per-transaction fees and no long-term contract requirement.',
      },
    },
    {
      '@type': 'Question',
      name: 'How quickly can we add clinIQ on top of AdvancedMD?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Typical clinIQ deployment alongside AdvancedMD takes under one week. There is no data migration, no EHR retraining, and no disruption to your billing workflows. Your team sees the live floor map and operational dashboard in days.',
      },
    },
  ],
}

const tableRows = [
  {
    feature: 'Live room & queue status',
    cliniq: 'Real-time floor map with time-in-stage per patient',
    competitor: 'Appointment schedule only — no live floor view',
  },
  {
    feature: 'Patient-facing lobby display',
    cliniq: 'LobbyView — privacy-forward, branded display',
    competitor: 'Not available',
  },
  {
    feature: 'RTM billing (CPT 98975–98981)',
    cliniq: 'Automated 16-day threshold alerts, time capture',
    competitor: 'Manual documentation required',
  },
  {
    feature: 'Bottleneck detection',
    cliniq: 'Automated alerts when any stage exceeds threshold',
    competitor: 'No proactive alerting — reactive only',
  },
  {
    feature: 'Pre-authorization tracking',
    cliniq: 'PA status, expiration alerts, denial appeals',
    competitor: 'Basic PA tracking in billing module',
  },
  {
    feature: 'Waitlist fill & recall scheduling',
    cliniq: 'Automated waitlist SMS, recall campaigns',
    competitor: 'Standard scheduling, no waitlist automation',
  },
  {
    feature: 'Self-service check-in',
    cliniq: 'Kiosk + mobile, feeds directly into live queue',
    competitor: 'Patient portal check-in, not live-flow connected',
  },
  {
    feature: 'Implementation time',
    cliniq: 'Days — no migration, no AdvancedMD disruption',
    competitor: 'Complex setup; operational gaps remain after go-live',
  },
  {
    feature: 'Pricing model',
    cliniq: 'Flat ~$250–500/provider/mo, no hidden fees',
    competitor: 'Tiered modules; can exceed $700+/provider/mo',
  },
]

export default function AdvancedMDPage() {
  return (
    <>
      <NavInner />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main>
        {/* Hero */}
        <section className={s.hero}>
          <div className={s.heroBg}>
            <div className={`${s.heroOrb} ${s.heroOrbTeal}`} />
            <div className={`${s.heroOrb} ${s.heroOrbBlue}`} />
            <div className={s.heroGrain} />
          </div>
          <div className={s.heroContent}>
            <span className={s.badge}>clinIQ vs AdvancedMD</span>
            <h1 className={s.heroTitle}>
              Built to maximize billing. clinIQ is built to maximize throughput.
            </h1>
            <p className={s.heroSubtitle}>
              AdvancedMD is a well-regarded practice management and billing platform. It was designed around revenue cycle efficiency — claims scrubbing, denial rates, fee schedule management. What it was not designed for is telling your staff in real time which room is occupied, which patient has been waiting 40 minutes, or that an RTM billing window closes tomorrow. clinIQ handles all of that.
            </p>
            <div className={s.heroActions}>
              <a href="/demo" className={s.btnPrimary}>
                See clinIQ in action<span className={s.btnIcon}>→</span>
              </a>
              <a href="/compare" className={s.btnGhost}>All comparisons</a>
            </div>
          </div>
        </section>

        {/* Reality */}
        <section className={s.reality}>
          <div className={s.realityGrid}>
            <div className={s.realityLeft}>
              <h2>What AdvancedMD is built for</h2>
              <div className={s.realityNarrative}>
                <p>
                  AdvancedMD is a cloud-based EHR and practice management platform with particular strength in billing automation. Its claims scrubbing engine, denial tracking, and fee schedule management tools are genuinely powerful — practices that prioritize clean claims and optimized reimbursement rates often find AdvancedMD&apos;s billing module to be a step above competitors. The platform also includes scheduling, clinical documentation, and a patient portal.
                </p>
                <p>
                  What AdvancedMD was not designed for is operational throughput management. It cannot show you a live floor view of which rooms are occupied and for how long, alert your staff when a patient has been in a stage beyond a threshold, or automatically track RTM-eligible time as patients move through care. Its patient portal check-in exists but is not connected to a live operational queue. The billing engine is strong; the operational layer is absent.
                </p>
              </div>
            </div>
            <div className={s.realityRight}>
              <h2>What clinIQ adds on top</h2>
              <div className={s.realityNarrative}>
                <p>
                  clinIQ is the operational layer that AdvancedMD never built. It sits alongside your existing AdvancedMD setup and gives your entire staff a shared, real-time view of every patient on your floor — which room, which stage, how long they&apos;ve been waiting, and where the flow is backed up. Your providers stop walking to the front desk to ask questions. Your front desk stops calling the back to check room availability.
                </p>
                <p>
                  And while AdvancedMD&apos;s billing engine optimizes the claims you already submit, clinIQ captures revenue you are currently not submitting at all: RTM billing (CPT 98975–98981) requires tracking 16-day intervals per patient — a workflow that does not fit neatly into AdvancedMD&apos;s billing-first interface. clinIQ monitors that threshold automatically and sends alerts before the window closes. The result is $100–125 per enrolled RTM patient per month in additional revenue that never touched AdvancedMD at all.
                </p>
              </div>
              <ul className={s.painList}>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>AdvancedMD optimizes the claims you submit — clinIQ captures the ones you miss</span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>Live operational floor view AdvancedMD was never built to provide</span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>Deploys in days alongside AdvancedMD — no disruption to billing</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Before / After */}
        <section className={s.changes}>
          <div className={s.changesGrid}>
            <div className={s.changeCard}>
              <div className={`${s.changeLabel} ${s.changeLabelBefore}`}>Without clinIQ</div>
              <div className={s.changeBefore}>
                AdvancedMD shows a clean claims report from last week. No one knows which room is occupied right now. RTM-eligible patients slip past 16 days. PAs expire quietly. Lobby patients wait with no information. Canceled slots stay dark.
              </div>
            </div>
            <div className={s.changeCard}>
              <div className={`${s.changeLabel} ${s.changeLabelAfter}`}>With clinIQ</div>
              <div className={s.changeAfter}>
                Live floor map on every staff screen. LobbyView keeps patients informed. RTM alert at day 14 — no missed billing windows. PA expiration dashboard 30 days ahead. Waitlist SMS fills canceled slots automatically. AdvancedMD billing untouched.
              </div>
            </div>
          </div>
        </section>

        {/* Feature Table */}
        <section style={{ padding: '5rem 1.5rem', background: 'var(--cream, #f5f3ef)' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2
              style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontSize: '2rem',
                marginBottom: '2rem',
              }}
            >
              Feature by feature
            </h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9375rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #0d0d0c' }}>
                  <th style={{ textAlign: 'left', padding: '0.75rem 1rem', width: '40%' }}>Feature</th>
                  <th style={{ textAlign: 'left', padding: '0.75rem 1rem', color: '#0d9488' }}>clinIQ</th>
                  <th style={{ textAlign: 'left', padding: '0.75rem 1rem' }}>AdvancedMD</th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, i) => (
                  <tr
                    key={i}
                    style={{
                      borderBottom: '1px solid #e5e5e5',
                      background: i % 2 === 0 ? '#fff' : 'transparent',
                    }}
                  >
                    <td style={{ padding: '0.75rem 1rem', fontWeight: 500 }}>{row.feature}</td>
                    <td style={{ padding: '0.75rem 1rem', color: '#0d9488' }}>✓ {row.cliniq}</td>
                    <td style={{ padding: '0.75rem 1rem', color: '#666' }}>{row.competitor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Stats */}
        <section className={s.stats}>
          <div className={s.statsGrid}>
            <div className={s.stat}>
              <div className={s.statNumber}>$100–125</div>
              <div className={s.statLabel}>Per RTM-enrolled patient per month — revenue AdvancedMD never captures</div>
            </div>
            <div className={s.stat}>
              <div className={s.statNumber}>16 days</div>
              <div className={s.statLabel}>RTM billing window clinIQ monitors automatically</div>
            </div>
            <div className={s.stat}>
              <div className={s.statNumber}>&lt;1 week</div>
              <div className={s.statLabel}>Typical clinIQ go-live alongside AdvancedMD</div>
            </div>
            <div className={s.stat}>
              <div className={s.statNumber}>Zero</div>
              <div className={s.statLabel}>Disruption to AdvancedMD billing during clinIQ deployment</div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className={s.faq}>
          <h2>Frequently asked questions</h2>
          <ul className={s.faqList}>
            {faqSchema.mainEntity.map((item, i) => (
              <li key={i} className={s.faqItem}>
                <div className={s.faqQ}>{item.name}</div>
                <div className={s.faqA}>{item.acceptedAnswer.text}</div>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section className={s.cta}>
          <div className={s.ctaBg}>
            <div className={s.ctaOrb} />
          </div>
          <div className={s.ctaContent}>
            <h2 className={s.ctaTitle}>Keep AdvancedMD for billing. Add clinIQ for throughput.</h2>
            <p className={s.ctaDesc}>
              clinIQ deploys alongside AdvancedMD in days. Your billing engine stays untouched. Your team gains live operational visibility and automated RTM revenue capture from day one.
            </p>
            <div className={s.ctaActions}>
              <a href="/demo" className={s.btnPrimary}>
                Book a demo<span className={s.btnIcon}>→</span>
              </a>
              <a href="/pricing" className={s.btnGhost}>See pricing</a>
            </div>
            <p className={s.ctaNote}>Flat monthly pricing. No AdvancedMD migration needed.</p>
          </div>
        </section>

        {/* Related */}
        <section className={s.related}>
          <div className={s.relatedLinks}>
            <a href="/compare/athenahealth" className={s.relatedLink}>clinIQ vs athenahealth</a>
            <a href="/compare/eclinicalworks" className={s.relatedLink}>clinIQ vs eClinicalWorks</a>
            <a href="/compare/nextgen" className={s.relatedLink}>clinIQ vs NextGen</a>
            <a href="/compare/ehr-only" className={s.relatedLink}>clinIQ vs EHR-only</a>
          </div>
        </section>
      </main>
      <FooterInner />
    </>
  )
}
