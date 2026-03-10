import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import s from '@/app/specialties/specialty-full.module.css'

export const metadata: Metadata = {
  title: 'clinIQ vs NextGen Healthcare — Specialty Documentation vs Specialty Operations',
  description:
    'NextGen customizes the documentation experience by specialty. clinIQ customizes the operational experience — live patient flow, RTM billing, pre-authorization tracking, and real-time analytics built for outpatient specialty clinics.',
  keywords: [
    'NextGen alternative',
    'NextGen Healthcare patient flow',
    'NextGen operational layer',
    'specialty clinic operations software',
    'NextGen add-on',
  ],
  openGraph: {
    title: 'clinIQ vs NextGen Healthcare — Beyond Specialty Documentation',
    description:
      'NextGen brings specialty depth to the EHR. clinIQ brings specialty depth to clinic operations — the layer NextGen was never designed to provide.',
    type: 'website',
    url: 'https://cliniqhealthcare.com/compare/nextgen',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cliniqhealthcare.com' },
    { '@type': 'ListItem', position: 2, name: 'Compare', item: 'https://cliniqhealthcare.com/compare' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'clinIQ vs NextGen',
      item: 'https://cliniqhealthcare.com/compare/nextgen',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does clinIQ work with NextGen Healthcare?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. clinIQ layers on top of NextGen without replacing it. Your specialty documentation templates, scheduling, and billing workflows stay in NextGen. clinIQ adds the operational layer: live room and queue status, patient-facing LobbyView, RTM billing threshold alerts, and pre-authorization tracking.',
      },
    },
    {
      '@type': 'Question',
      name: 'NextGen already has specialty workflows. What does clinIQ add?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NextGen customizes the documentation and billing experience for specialties like orthopedics, dermatology, and behavioral health. It does not provide real-time patient flow visibility, automated RTM billing capture, waitlist-fill scheduling, or a live operations dashboard. clinIQ adds all of these — the operational layer that even specialty-tuned EHRs leave empty.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is NextGen a good fit for small specialty practices?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NextGen is primarily positioned for mid-to-large specialty groups and health systems. Its implementation complexity and cost can be significant for smaller practices. clinIQ is designed for outpatient specialty clinics of all sizes and deploys in days rather than months.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does clinIQ handle RTM billing differently than NextGen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NextGen requires manual documentation to capture RTM-eligible encounters (CPT 98975–98981). clinIQ automatically monitors the 16-day billing threshold per patient and alerts your team before the window closes — turning a manual compliance task into an automated revenue capture system worth $100–125 per enrolled patient per month.',
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
    feature: 'Specialty-specific operations',
    cliniq: 'Custom flow stages per specialty (PT, ortho, cardiology, etc.)',
    competitor: 'Specialty-specific documentation templates only',
  },
  {
    feature: 'Patient-facing lobby display',
    cliniq: 'LobbyView — privacy-forward, branded',
    competitor: 'Not available',
  },
  {
    feature: 'RTM billing (CPT 98975–98981)',
    cliniq: 'Automated 16-day threshold alerts, time capture',
    competitor: 'Manual documentation required — no automation',
  },
  {
    feature: 'Pre-authorization tracking',
    cliniq: 'PA status, expiration alerts, denial appeal workflow',
    competitor: 'PA managed in billing module, not live flow',
  },
  {
    feature: 'Bottleneck detection',
    cliniq: 'Auto-alerts when any stage exceeds time threshold',
    competitor: 'No proactive operational alerting',
  },
  {
    feature: 'Waitlist fill & recall',
    cliniq: 'Automated waitlist SMS, recall campaigns',
    competitor: 'Standard scheduling, no waitlist automation',
  },
  {
    feature: 'Target clinic size',
    cliniq: 'Outpatient specialty clinics of all sizes',
    competitor: 'Mid-to-large groups and health systems',
  },
  {
    feature: 'Implementation time',
    cliniq: 'Days — no migration, no NextGen disruption',
    competitor: 'Months of implementation and specialty configuration',
  },
]

export default function NextGenPage() {
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
            <span className={s.badge}>clinIQ vs NextGen Healthcare</span>
            <h1 className={s.heroTitle}>
              NextGen customizes the chart. clinIQ customizes the operation.
            </h1>
            <p className={s.heroSubtitle}>
              NextGen Healthcare has built one of the most specialty-aware EHR platforms on the market — orthopedic templates, behavioral health workflows, cardiology documentation. What it never built was the operational layer: the live floor map, the RTM billing threshold tracker, the lobby display, the PA expiration dashboard. That is exactly what clinIQ is.
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
              <h2>What NextGen Healthcare is built for</h2>
              <div className={s.realityNarrative}>
                <p>
                  NextGen Healthcare is a mid-to-large EHR platform with genuine specialty depth. Its documentation templates for orthopedics, behavioral health, OB/GYN, and other specialties are among the most configurable in the market. For specialty groups that need documentation workflows tailored to their clinical context — not just a generic note template — NextGen is a reasonable choice. It also includes scheduling, billing, and a patient engagement portal.
                </p>
                <p>
                  Where NextGen falls short is the same place every EHR falls short: the operational layer. NextGen can show you a specialty-specific documentation template and a fee schedule configured for your payer mix. It cannot show you, in real time, which ortho rooms are occupied, which physical therapy patient has been in the gym area for 45 minutes past their scheduled slot, or which patients have RTM billing windows closing this week. Those are operational problems that NextGen&apos;s documentation-first design was never intended to solve.
                </p>
              </div>
            </div>
            <div className={s.realityRight}>
              <h2>What clinIQ adds on top</h2>
              <div className={s.realityNarrative}>
                <p>
                  clinIQ completes the specialty operations picture that NextGen starts but never finishes. Where NextGen gives you specialty-aware documentation, clinIQ gives you specialty-aware operations: custom flow stages by specialty type, RTM billing tracking built around the specific CPT codes your specialty uses, and pre-authorization workflows tuned to the denial patterns your payer mix creates. Your orthopedic clinic, your PT practice, your cardiology group all get an operational layer that understands how their day actually runs.
                </p>
                <p>
                  Unlike NextGen&apos;s implementation process — which can stretch months as specialty templates, payer configurations, and clinical workflows are built out — clinIQ deploys in days. The operational layer does not require clinical migration. It reads from your existing systems and surfaces what is happening right now. Your NextGen documentation stays exactly where it is; clinIQ adds the real-time operational visibility that no EHR, including NextGen, was ever designed to provide.
                </p>
              </div>
              <ul className={s.painList}>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>Specialty-aware operations on top of specialty-aware documentation</span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>RTM billing capture NextGen requires manual workflows to handle</span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>Deploys in days alongside NextGen — no specialty reconfiguration</span>
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
                NextGen shows beautiful specialty documentation. No one knows which ortho room is open. Physical therapy patients wait in the gym with no queue visibility. RTM tracking falls to manual reminders. PA expirations are caught late.
              </div>
            </div>
            <div className={s.changeCard}>
              <div className={`${s.changeLabel} ${s.changeLabelAfter}`}>With clinIQ</div>
              <div className={s.changeAfter}>
                Real-time room map per specialty area. LobbyView with estimated wait. Automated RTM threshold alerts by specialty CPT code. PA expiration dashboard. Waitlist fill for canceled slots. NextGen documentation workflows completely unchanged.
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
                  <th style={{ textAlign: 'left', padding: '0.75rem 1rem' }}>NextGen</th>
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
              <div className={s.statLabel}>Per RTM-enrolled patient per month — captured automatically by clinIQ</div>
            </div>
            <div className={s.stat}>
              <div className={s.statNumber}>Specialty-aware</div>
              <div className={s.statLabel}>Custom flow stages and CPT tracking per specialty type</div>
            </div>
            <div className={s.stat}>
              <div className={s.statNumber}>&lt;1 week</div>
              <div className={s.statLabel}>Typical clinIQ go-live alongside NextGen</div>
            </div>
            <div className={s.stat}>
              <div className={s.statNumber}>Zero</div>
              <div className={s.statLabel}>NextGen documentation changes required to deploy clinIQ</div>
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
            <h2 className={s.ctaTitle}>NextGen documents the specialty. clinIQ operates it.</h2>
            <p className={s.ctaDesc}>
              clinIQ deploys alongside NextGen in days. Your specialty documentation workflows stay exactly where they are. Your team gains the real-time operational layer NextGen was never designed to provide.
            </p>
            <div className={s.ctaActions}>
              <a href="/demo" className={s.btnPrimary}>
                Book a demo<span className={s.btnIcon}>→</span>
              </a>
              <a href="/pricing" className={s.btnGhost}>See pricing</a>
            </div>
            <p className={s.ctaNote}>Flat monthly pricing. Works alongside any NextGen configuration.</p>
          </div>
        </section>

        {/* Related */}
        <section className={s.related}>
          <div className={s.relatedLinks}>
            <a href="/compare/athenahealth" className={s.relatedLink}>clinIQ vs athenahealth</a>
            <a href="/compare/eclinicalworks" className={s.relatedLink}>clinIQ vs eClinicalWorks</a>
            <a href="/compare/advancedmd" className={s.relatedLink}>clinIQ vs AdvancedMD</a>
            <a href="/compare/ehr-only" className={s.relatedLink}>clinIQ vs EHR-only</a>
          </div>
        </section>
      </main>
      <FooterInner />
    </>
  )
}
