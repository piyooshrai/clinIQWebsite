import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import s from '@/app/specialties/specialty-full.module.css'

export const metadata: Metadata = {
  title: 'clinIQ vs athenahealth — Clinic Operations vs EHR Documentation',
  description:
    'athenahealth is a powerful EHR. It was never designed to tell your front desk who is in Room 3 right now. clinIQ is the operational layer that fills that gap — live patient flow, check-in, scheduling, and RTM billing on top of any EHR.',
  keywords: [
    'athenahealth alternative small practice',
    'athenahealth vs clinic operations software',
    'athenahealth patient flow',
    'clinic operations platform',
    'athenahealth add-on',
  ],
  openGraph: {
    title: 'clinIQ vs athenahealth — The Operational Layer Your EHR Was Never Meant to Be',
    description:
      'athenahealth handles documentation beautifully. clinIQ handles what is happening right now — room status, queue bottlenecks, check-in, RTM billing, and real-time analytics.',
    type: 'website',
    url: 'https://cliniqhealthcare.com/compare/athenahealth',
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
      name: 'clinIQ vs athenahealth',
      item: 'https://cliniqhealthcare.com/compare/athenahealth',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can clinIQ work alongside athenahealth?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. clinIQ layers on top of athenahealth without replacing it. Your providers keep their clinical workflows in athenahealth while clinIQ handles real-time patient flow, lobby display, self-service check-in, and RTM billing automation. No rip-and-replace, no migration.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does athenahealth not do that clinIQ does?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'athenahealth excels at documentation, coding assistance, and revenue cycle management. It does not offer live room-status dashboards, patient-facing lobby displays, RTM billing with automated 16-day threshold alerts, waitlist-fill scheduling, or pre-authorization denial tracking with appeal workflows.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does clinIQ take to implement compared to athenahealth?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'athenahealth implementations typically run 6–12 months due to data migration, credentialing, and workflow rebuilds. clinIQ deploys in days — it layers on top of your existing EHR and adds the operational layer without touching your clinical data.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is clinIQ priced per-transaction like athenahealth billing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. clinIQ uses flat monthly pricing — approximately $250–$500 per provider per month depending on module selection. There are no per-claim fees, no percentage-of-collections charges, and no hidden transaction costs.',
      },
    },
  ],
}

const tableRows = [
  {
    feature: 'Live room & queue status',
    cliniq: 'Real-time dashboard with bottleneck alerts',
    competitor: 'Not available',
  },
  {
    feature: 'Patient-facing lobby display',
    cliniq: 'LobbyView — privacy-forward, branded',
    competitor: 'Not available',
  },
  {
    feature: 'Self-service check-in',
    cliniq: 'Kiosk + mobile, no PII on shared screens',
    competitor: 'Limited patient portal only',
  },
  {
    feature: 'RTM billing (CPT 98975–98981)',
    cliniq: '16-day threshold alerts, automated capture',
    competitor: 'Not supported natively',
  },
  {
    feature: 'Pre-authorization tracking',
    cliniq: 'PA status, denial appeals, expiration alerts',
    competitor: 'Basic PA workflow in billing module',
  },
  {
    feature: 'Waitlist fill & recall scheduling',
    cliniq: 'Automated waitlist texts, recall campaigns',
    competitor: 'Scheduling available, no waitlist intelligence',
  },
  {
    feature: 'Implementation timeline',
    cliniq: 'Days — no migration required',
    competitor: '6–12 months full implementation',
  },
  {
    feature: 'Pricing model',
    cliniq: 'Flat ~$250–500/provider/mo, no per-transaction fees',
    competitor: 'Percentage of collections + setup fees',
  },
  {
    feature: 'Works with other EHRs',
    cliniq: 'Yes — EHR-agnostic operational layer',
    competitor: 'Replaces your EHR entirely',
  },
]

export default function AthenahealthPage() {
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
            <span className={s.badge}>clinIQ vs athenahealth</span>
            <h1 className={s.heroTitle}>
              Great EHR. No idea who&apos;s in Room 3.
            </h1>
            <p className={s.heroSubtitle}>
              athenahealth is one of the most capable EHR platforms on the market. It was built to document, code, and bill — not to tell your front desk that Bay 2 has been occupied for 47 minutes or that the patient in the lobby has been waiting longer than anyone else today. That is clinIQ&apos;s job.
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
              <h2>What athenahealth is built for</h2>
              <div className={s.realityNarrative}>
                <p>
                  athenahealth is a cloud-based EHR and revenue cycle management platform used by tens of thousands of providers across the US. It excels at clinical documentation, automated coding suggestions, claims scrubbing, and denial management. For large health systems and multi-specialty groups that need a unified record system, it is a genuinely strong choice. athenahealth&apos;s network effect — where payer rules and denial patterns are shared across the entire provider base — is a real competitive advantage on the billing side.
                </p>
                <p>
                  What athenahealth was not designed to do is surface real-time operational intelligence. It cannot show a care coordinator which rooms are occupied right now, flag that a patient has been in triage longer than expected, or automatically fill a canceled appointment from a waitlist 30 minutes before the slot. These are operational problems, not documentation problems — and athenahealth, by design, does not solve them.
                </p>
              </div>
            </div>
            <div className={s.realityRight}>
              <h2>What clinIQ adds on top</h2>
              <div className={s.realityNarrative}>
                <p>
                  clinIQ was built specifically for the operational layer that every EHR leaves empty. It sits on top of athenahealth (or any EHR) and provides the live situational awareness that your staff and patients need throughout the day. From the moment a patient arrives, clinIQ tracks their position in the flow: checked in, in the lobby, roomed, with provider, discharged. Every bottleneck is visible. No phone calls to the front desk asking what is happening.
                </p>
                <p>
                  On top of patient flow, clinIQ handles the revenue opportunities that fall through operational cracks: RTM billing with automated 16-day threshold monitoring (worth $100–125 per patient per month in most specialties), pre-authorization expiration tracking, and waitlist-fill scheduling that recovers revenue from last-minute cancellations. These are not features you add to athenahealth — they are a separate operational system that amplifies what your EHR already does.
                </p>
              </div>
              <ul className={s.painList}>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>No rip-and-replace — keep athenahealth, add clinIQ in days</span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>Flat pricing vs percentage-of-collections model</span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>Operational intelligence athenahealth was never built to provide</span>
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
                Front desk calls the nurse to ask if Room 3 is free. Patient in lobby has no idea how long the wait is. RTM-eligible patients hit 15 days with no alert. PAs expire before anyone notices. Canceled slots stay empty.
              </div>
            </div>
            <div className={s.changeCard}>
              <div className={`${s.changeLabel} ${s.changeLabelAfter}`}>With clinIQ</div>
              <div className={s.changeAfter}>
                Real-time room map on every staff screen. LobbyView shows patients their estimated wait. RTM threshold alert fires at day 14. PA dashboard flags renewals 30 days out. Waitlist auto-fill texts next eligible patient when a slot opens.
              </div>
            </div>
          </div>
        </section>

        {/* Feature Table */}
        <section style={{ padding: '5rem 1.5rem', background: 'var(--cream, #f5f3ef)' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', overflowX: 'auto' }}>
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
                  <th style={{ textAlign: 'left', padding: '0.75rem 1rem' }}>athenahealth</th>
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
              <div className={s.statLabel}>Per RTM-enrolled patient per month in recovered revenue</div>
            </div>
            <div className={s.stat}>
              <div className={s.statNumber}>&lt;1 week</div>
              <div className={s.statLabel}>Typical clinIQ deployment time alongside existing EHR</div>
            </div>
            <div className={s.stat}>
              <div className={s.statNumber}>6–12 mo</div>
              <div className={s.statLabel}>Typical athenahealth full implementation timeline</div>
            </div>
            <div className={s.stat}>
              <div className={s.statNumber}>Zero</div>
              <div className={s.statLabel}>Per-transaction fees in clinIQ&apos;s flat pricing model</div>
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
            <h2 className={s.ctaTitle}>Keep athenahealth. Add the layer it&apos;s missing.</h2>
            <p className={s.ctaDesc}>
              clinIQ deploys alongside your existing EHR in days. No migration, no disruption — just real-time operational intelligence your whole team can act on from day one.
            </p>
            <div className={s.ctaActions}>
              <a href="/demo" className={s.btnPrimary}>
                Book a demo<span className={s.btnIcon}>→</span>
              </a>
              <a href="/pricing" className={s.btnGhost}>See pricing</a>
            </div>
            <p className={s.ctaNote}>No long-term contract required. Flat monthly pricing.</p>
          </div>
        </section>

        {/* Related */}
        <section className={s.related}>
          <div className={s.relatedLinks}>
            <a href="/compare/eclinicalworks" className={s.relatedLink}>clinIQ vs eClinicalWorks</a>
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
