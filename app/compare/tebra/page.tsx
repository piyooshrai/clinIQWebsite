import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import s from '@/app/specialties/specialty-full.module.css'

export const metadata: Metadata = {
  title: 'clinIQ vs Tebra (formerly Kareo) — Market Your Practice vs Run Your Day',
  description:
    'Tebra (formerly Kareo + PatientPop) helps you market your practice and document visits. clinIQ helps you run your day — live patient flow, RTM billing automation, and operational analytics that work on top of any EHR.',
  keywords: [
    'Tebra alternative',
    'Kareo alternative patient flow',
    'Tebra vs clinic operations software',
    'PatientPop alternative',
    'Kareo operational layer',
  ],
  openGraph: {
    title: 'clinIQ vs Tebra — Beyond Marketing and Documentation',
    description:
      'Tebra fills your calendar and documents your visits. clinIQ manages what happens between the time a patient arrives and the time they leave.',
    type: 'website',
    url: 'https://cliniqhealthcare.com/compare/tebra',
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
      name: 'clinIQ vs Tebra',
      item: 'https://cliniqhealthcare.com/compare/tebra',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does clinIQ work with Tebra (formerly Kareo)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. clinIQ layers on top of Tebra without replacing it. Your scheduling, documentation, and billing stay in Tebra. clinIQ adds the real-time operational layer: live room and queue status, LobbyView patient display, RTM billing automation, and pre-authorization tracking. No migration required.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between Tebra and clinIQ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tebra (formerly Kareo combined with PatientPop) focuses on practice marketing, online presence, patient acquisition, telehealth, and small-practice EHR/PM. clinIQ focuses on what happens operationally once the patient is in your building — real-time flow management, RTM billing capture, pre-authorization tracking, and analytics that surface bottlenecks before they cost you revenue.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Tebra a good fit for specialty clinics?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tebra is primarily designed for small primary care and general outpatient practices. Its EHR and PM features are lightweight compared to specialty-focused platforms. clinIQ is built specifically for outpatient specialty clinics — physical therapy, orthopedics, behavioral health, cardiology — where RTM billing, pre-authorization complexity, and patient flow management are critical daily functions.',
      },
    },
    {
      '@type': 'Question',
      name: 'How quickly can clinIQ be added on top of Tebra?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'clinIQ typically deploys in under one week alongside Tebra. There is no data migration, no retraining on a new platform, and no disruption to your existing Tebra workflows. Your staff gains real-time operational visibility and automated RTM billing from day one.',
      },
    },
  ],
}

const tableRows = [
  {
    feature: 'Live room & queue status',
    cliniq: 'Real-time floor map with time-in-stage per patient',
    competitor: 'No live floor view — appointment list only',
  },
  {
    feature: 'Patient-facing lobby display',
    cliniq: 'LobbyView — privacy-forward, branded queue display',
    competitor: 'Not available',
  },
  {
    feature: 'RTM billing (CPT 98975–98981)',
    cliniq: 'Automated 16-day threshold alerts, time capture',
    competitor: 'Manual documentation required, not automated',
  },
  {
    feature: 'Pre-authorization tracking',
    cliniq: 'PA status, expiration alerts, denial appeal workflow',
    competitor: 'Basic PA tracking, not surfaced in live flow',
  },
  {
    feature: 'Specialty clinic focus',
    cliniq: 'Built for outpatient specialty: PT, ortho, cardiology, etc.',
    competitor: 'Designed for small primary care and general practices',
  },
  {
    feature: 'Practice marketing',
    cliniq: 'Not in scope — clinIQ is operations-only',
    competitor: 'Strong: SEO, reviews, online presence (PatientPop heritage)',
  },
  {
    feature: 'Waitlist fill & recall',
    cliniq: 'Automated waitlist SMS, recall campaigns',
    competitor: 'Basic scheduling, limited waitlist management',
  },
  {
    feature: 'Self-service check-in',
    cliniq: 'Kiosk + mobile, no PII on shared screens',
    competitor: 'Patient portal check-in, not live-flow connected',
  },
  {
    feature: 'Implementation time',
    cliniq: 'Days — no migration, no Tebra disruption',
    competitor: '3–6 months for full platform migration',
  },
]

export default function TebraPage() {
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
            <span className={s.badge}>clinIQ vs Tebra (formerly Kareo)</span>
            <h1 className={s.heroTitle}>
              Tebra helps you market your practice. clinIQ helps you run your day.
            </h1>
            <p className={s.heroSubtitle}>
              Tebra (the merger of Kareo and PatientPop) is a compelling platform for small practices that need online presence, patient acquisition, telehealth, and light EHR/PM features. It was not built to manage real-time patient flow, automate RTM billing thresholds, or surface pre-authorization expirations before they become denials. That is clinIQ&apos;s domain — and clinIQ deploys on top of Tebra in days, not months.
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
              <h2>What Tebra is built for</h2>
              <div className={s.realityNarrative}>
                <p>
                  Tebra emerged from the 2021 merger of Kareo (small-practice EHR and billing software) and PatientPop (practice marketing and online reputation management). The combined platform gives small practices a single vendor for website management, SEO, online booking, patient reviews, telehealth, and lightweight EHR/PM. For primary care practices and small general outpatient clinics, Tebra&apos;s all-in-one approach has real appeal — particularly for practices that need to invest in patient acquisition.
                </p>
                <p>
                  Tebra&apos;s operational depth is limited by its positioning as a small-practice, marketing-forward platform. It does not provide real-time room status, live patient flow tracking, RTM billing automation, or the pre-authorization management workflows that outpatient specialty clinics require. These are not edge cases — for a physical therapy, orthopedics, or behavioral health practice, they are daily operational necessities that Tebra was simply not built to handle.
                </p>
              </div>
            </div>
            <div className={s.realityRight}>
              <h2>What clinIQ adds on top</h2>
              <div className={s.realityNarrative}>
                <p>
                  clinIQ is the operational layer that Tebra never built. It sits alongside your existing Tebra setup and adds live situational awareness: a real-time floor map showing every patient&apos;s current stage and room, a patient-facing LobbyView display that sets wait time expectations without exposing PHI, and automated bottleneck alerts when any stage falls behind threshold. Your staff stops guessing and starts managing.
                </p>
                <p>
                  For specialty clinics specifically, clinIQ also addresses the revenue gaps that Tebra&apos;s light PM layer creates. RTM billing for CPT codes 98975–98981 requires tracking 16-day intervals per patient — a workflow Tebra does not automate. clinIQ monitors that threshold in real time and fires alerts before the billing window closes. Pre-authorization expirations, which Tebra surfaces only in basic scheduling notes, get a full dashboard view in clinIQ with renewal alerts 30 days out and denial appeal tracking. These features do not exist in Tebra at any tier.
                </p>
              </div>
              <ul className={s.painList}>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>Tebra fills your schedule — clinIQ manages what happens after the patient arrives</span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>RTM billing automation Tebra&apos;s PM layer was never designed to provide</span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>Specialty operations depth for PT, ortho, behavioral health and more</span>
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
                Tebra shows a clean booking calendar and Google review stats. No one knows which room is in use. RTM patients slip past 16 days. PA expirations are discovered during the visit. Lobby patients wait in silence. Specialty revenue leaks quietly.
              </div>
            </div>
            <div className={s.changeCard}>
              <div className={`${s.changeLabel} ${s.changeLabelAfter}`}>With clinIQ</div>
              <div className={s.changeAfter}>
                Real-time floor map alongside Tebra&apos;s schedule. LobbyView displays wait times. RTM alert fires at day 14. PA dashboard flags renewals 30 days out. Waitlist fills canceled slots automatically. Tebra marketing and documentation untouched.
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
                  <th style={{ textAlign: 'left', padding: '0.75rem 1rem' }}>Tebra (formerly Kareo)</th>
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
              <div className={s.statLabel}>Per RTM-enrolled patient per month — not captured in Tebra</div>
            </div>
            <div className={s.stat}>
              <div className={s.statNumber}>16 days</div>
              <div className={s.statLabel}>RTM billing threshold clinIQ monitors — Tebra does not</div>
            </div>
            <div className={s.stat}>
              <div className={s.statNumber}>&lt;1 week</div>
              <div className={s.statLabel}>Typical clinIQ deployment alongside Tebra</div>
            </div>
            <div className={s.stat}>
              <div className={s.statNumber}>Zero</div>
              <div className={s.statLabel}>Tebra migration steps needed to add clinIQ</div>
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
            <h2 className={s.ctaTitle}>Tebra markets your clinic. clinIQ runs it.</h2>
            <p className={s.ctaDesc}>
              clinIQ deploys alongside Tebra in days. Your marketing, scheduling, and documentation stay exactly where they are. Your team gains real-time operational visibility, automated RTM billing, and PA tracking from week one.
            </p>
            <div className={s.ctaActions}>
              <a href="/demo" className={s.btnPrimary}>
                Book a demo<span className={s.btnIcon}>→</span>
              </a>
              <a href="/pricing" className={s.btnGhost}>See pricing</a>
            </div>
            <p className={s.ctaNote}>Flat monthly pricing. No Tebra/Kareo migration required.</p>
          </div>
        </section>

        {/* Related */}
        <section className={s.related}>
          <div className={s.relatedLinks}>
            <a href="/compare/athenahealth" className={s.relatedLink}>clinIQ vs athenahealth</a>
            <a href="/compare/eclinicalworks" className={s.relatedLink}>clinIQ vs eClinicalWorks</a>
            <a href="/compare/generic-scheduling" className={s.relatedLink}>clinIQ vs generic scheduling tools</a>
            <a href="/compare/ehr-only" className={s.relatedLink}>clinIQ vs EHR-only</a>
          </div>
        </section>
      </main>
      <FooterInner />
    </>
  )
}
