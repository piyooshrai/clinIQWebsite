import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import s from '@/app/specialties/specialty-full.module.css'

export const metadata: Metadata = {
  title: 'clinIQ vs eClinicalWorks — Manage the Record vs Manage the Day',
  description:
    'eClinicalWorks manages the record of care. clinIQ manages the delivery of care — live patient flow, room status, RTM billing automation, and operational analytics on top of any EHR. No eCW replacement needed.',
  keywords: [
    'eClinicalWorks alternative',
    'eCW operational workflow',
    'eClinicalWorks patient flow',
    'clinic operations software',
    'eCW add-on',
  ],
  openGraph: {
    title: 'clinIQ vs eClinicalWorks — The Operational Layer eCW Was Never Built to Be',
    description:
      'eCW handles documentation with depth. clinIQ handles what is happening on your clinic floor right now — room status, queue visibility, RTM billing, and pre-auth tracking.',
    type: 'website',
    url: 'https://cliniq.com/compare/eclinicalworks',
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
      name: 'clinIQ vs eClinicalWorks',
      item: 'https://cliniq.com/compare/eclinicalworks',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does clinIQ replace eClinicalWorks?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. clinIQ layers on top of eCW without replacing it. Your providers keep documenting in eCW while clinIQ adds the operational layer: live room and queue status, self-service check-in, RTM billing automation, and pre-authorization tracking. Zero disruption to clinical documentation.',
      },
    },
    {
      '@type': 'Question',
      name: 'What operational gaps does eClinicalWorks leave that clinIQ fills?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'eCW shows an appointment list — not a live clinic floor. clinIQ adds real-time room status, patient stage tracking, bottleneck alerts, a patient-facing lobby display (LobbyView), RTM billing threshold monitoring, and waitlist-fill scheduling. These are operational capabilities eCW was never designed to provide.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is eClinicalWorks known for being hard to use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'eCW is a powerful but complex platform with a steep learning curve. Many practices spend months training staff. clinIQ is an add-on layer that deploys in days and presents a clean, purpose-built interface — staff learn it in hours, not months.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much can RTM billing recover per patient per month with clinIQ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most outpatient specialty clinics using clinIQ recover $100–125 per enrolled RTM patient per month through CPT codes 98975–98981. The 16-day threshold alerts in clinIQ ensure eligible patients are documented before the billing window closes — a step eCW does not automate.',
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
    cliniq: 'LobbyView — privacy-forward queue display',
    competitor: 'Not available',
  },
  {
    feature: 'Self-service check-in',
    cliniq: 'Kiosk + mobile, feeds directly into live queue',
    competitor: 'Patient portal only, not connected to live flow',
  },
  {
    feature: 'RTM billing (CPT 98975–98981)',
    cliniq: '16-day threshold alerts, automated time capture',
    competitor: 'Manual documentation, no automated tracking',
  },
  {
    feature: 'Bottleneck alerts',
    cliniq: 'Auto-alerts when any stage exceeds time threshold',
    competitor: 'No proactive alerting — staff must notice delays',
  },
  {
    feature: 'Pre-authorization tracking',
    cliniq: 'PA status, expiration alerts, denial appeal workflow',
    competitor: 'Separate PA workflow, not surfaced in live flow',
  },
  {
    feature: 'Waitlist fill & recall',
    cliniq: 'Automated waitlist texts, recall campaigns',
    competitor: 'Basic scheduling, no waitlist intelligence',
  },
  {
    feature: 'Implementation time',
    cliniq: 'Days — no migration, no eCW disruption',
    competitor: 'Months of initial setup and ongoing training',
  },
  {
    feature: 'Pricing model',
    cliniq: 'Flat ~$250–500/provider/mo',
    competitor: 'Per-provider licensing plus add-on module fees',
  },
]

export default function EClinicalWorksPage() {
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
            <span className={s.badge}>clinIQ vs eClinicalWorks</span>
            <h1 className={s.heroTitle}>
              eCW manages the record. clinIQ manages the day.
            </h1>
            <p className={s.heroSubtitle}>
              eClinicalWorks is a capable EHR built to manage clinical documentation, scheduling, and billing records. It was not built to tell your staff which patient is in which room right now, send a lobby display to the waiting area, or fire an alert when an RTM-eligible patient is about to miss the 16-day billing window. clinIQ was.
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
              <h2>What eClinicalWorks is built for</h2>
              <div className={s.realityNarrative}>
                <p>
                  eClinicalWorks is one of the most widely used mid-market EHRs in the US, serving over 130,000 providers. It handles clinical documentation, e-prescribing, scheduling, billing, and population health features with genuine depth. For practices that need a comprehensive EHR at a reasonable price point, eCW is a common and defensible choice. Its templates and customization options make it a workhorse for busy outpatient practices.
                </p>
                <p>
                  What eCW was not designed to do is operate as a real-time clinic management system. It does not show a live floor view of which rooms are occupied, which patients are waiting and for how long, or where the current bottleneck in your workflow is. eCW&apos;s interface is oriented around the patient record and the appointment — not around the fluid, real-time reality of a clinic day in progress.
                </p>
              </div>
            </div>
            <div className={s.realityRight}>
              <h2>What clinIQ adds on top</h2>
              <div className={s.realityNarrative}>
                <p>
                  clinIQ layers on top of eCW and provides the operational visibility your team has been improvising around for years. Instead of MAs texting providers or front desk staff walking to the back to check room status, everyone sees a live floor map on their screen. Patients in the lobby see a privacy-forward LobbyView display that sets expectations without exposing PHI.
                </p>
                <p>
                  Beyond flow, clinIQ captures revenue that eCW&apos;s manual workflows routinely miss. RTM billing (CPT 98975–98981) requires tracking 16-day intervals per patient — a task that gets lost in eCW&apos;s documentation-first interface. clinIQ monitors that threshold automatically and alerts your team before the billing window closes. Pre-authorization expirations, waitlist fills, and recall campaigns all run through clinIQ — turning operational data into revenue without adding staff hours.
                </p>
              </div>
              <ul className={s.painList}>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>Keep eCW for documentation — add clinIQ for operations</span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>RTM billing automation fills the gap eCW&apos;s UI creates</span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>Live floor visibility that eCW was never designed to provide</span>
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
                MAs check rooms manually and update eCW appointments. RTM patients hit 17 days before anyone notices. Pre-auth expires on a Tuesday and the provider finds out at 9 AM with a patient in the chair. Lobby patients wait in silence.
              </div>
            </div>
            <div className={s.changeCard}>
              <div className={`${s.changeLabel} ${s.changeLabelAfter}`}>With clinIQ</div>
              <div className={s.changeAfter}>
                Live floor map on every screen. LobbyView displays estimated wait times. RTM alert fires at day 14. PA dashboard shows expiration dates 30 days out. Waitlist fills canceled slots automatically. eCW documentation stays untouched.
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
                  <th style={{ textAlign: 'left', padding: '0.75rem 1rem' }}>eClinicalWorks</th>
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
              <div className={s.statNumber}>130k+</div>
              <div className={s.statLabel}>Providers on eCW — all can add clinIQ without migrating</div>
            </div>
            <div className={s.stat}>
              <div className={s.statNumber}>16 days</div>
              <div className={s.statLabel}>RTM billing window clinIQ monitors automatically per patient</div>
            </div>
            <div className={s.stat}>
              <div className={s.statNumber}>$100–125</div>
              <div className={s.statLabel}>Recovered per RTM-enrolled patient per month</div>
            </div>
            <div className={s.stat}>
              <div className={s.statNumber}>&lt;1 week</div>
              <div className={s.statLabel}>Typical clinIQ go-live time alongside eCW</div>
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
            <h2 className={s.ctaTitle}>Keep eCW. Add the operations layer it was never built for.</h2>
            <p className={s.ctaDesc}>
              clinIQ deploys alongside eClinicalWorks in days. Your clinical documentation stays exactly where it is. Your staff gains real-time floor visibility, automated RTM billing, and PA tracking from week one.
            </p>
            <div className={s.ctaActions}>
              <a href="/demo" className={s.btnPrimary}>
                Book a demo<span className={s.btnIcon}>→</span>
              </a>
              <a href="/pricing" className={s.btnGhost}>See pricing</a>
            </div>
            <p className={s.ctaNote}>Flat monthly pricing. No eCW migration required.</p>
          </div>
        </section>

        {/* Related */}
        <section className={s.related}>
          <div className={s.relatedLinks}>
            <a href="/compare/athenahealth" className={s.relatedLink}>clinIQ vs athenahealth</a>
            <a href="/compare/advancedmd" className={s.relatedLink}>clinIQ vs AdvancedMD</a>
            <a href="/compare/nextgen" className={s.relatedLink}>clinIQ vs NextGen</a>
            <a href="/compare/ehr-only" className={s.relatedLink}>clinIQ vs EHR-only</a>
          </div>
        </section>
      </main>
      <FooterInner />
    </>
  )
}
