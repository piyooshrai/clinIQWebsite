import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import s from '@/app/specialties/specialty-full.module.css'

export const metadata: Metadata = {
  title: 'clinIQ vs Clearwave — From Kiosk Check-In to Full Patient Flow',
  description:
    'Clearwave kiosks tell you who arrived. clinIQ tells you where every patient is after that — live room status, bottleneck alerts, RTM billing, and pre-auth tracking. See the difference.',
  keywords: [
    'Clearwave alternative',
    'Clearwave check-in alternative',
    'Clearwave vs clinIQ',
    'clinic patient flow tracking',
    'beyond check-in kiosk',
  ],
  openGraph: {
    title: 'clinIQ vs Clearwave — From Kiosk Check-In to Full Patient Flow',
    description:
      'Kiosks tell you who arrived. They don\'t tell you where anyone is after that.',
    type: 'website',
  },
}

const schemaData = {
  breadcrumb: {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cliniqhealthcare.com' },
      { '@type': 'ListItem', position: 2, name: 'Compare', item: 'https://cliniqhealthcare.com/compare' },
      { '@type': 'ListItem', position: 3, name: 'clinIQ vs Clearwave', item: 'https://cliniqhealthcare.com/compare/clearwave' },
    ],
  },
  faq: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Does clinIQ replace Clearwave kiosks?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'clinIQ includes self-service digital check-in that replaces Clearwave\'s kiosk function — patients check in via QR code or lobby tablet without dedicated hardware. But clinIQ goes much further: after check-in, clinIQ tracks every patient through rooms, surfaces bottlenecks, drives the lobby display, and automates RTM billing. You get check-in plus the entire operational layer that Clearwave never provided.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does Clearwave do well that clinIQ also covers?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Clearwave is strong on insurance eligibility verification at check-in, and that capability is matched in clinIQ. Both products handle patient check-in workflows. The critical difference is operational visibility once the patient is inside the clinic — Clearwave\'s data stops at the waiting room door, while clinIQ tracks room status, care team position, and wait-time patterns in real time.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does clinIQ handle hardware compared to Clearwave?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Clearwave is built around dedicated kiosk hardware — procurement, installation, and maintenance are part of the engagement. clinIQ requires no dedicated hardware for core functions. Staff use existing workstations or phones. For lobby display (LobbyView), any TV with a media stick works. This dramatically reduces upfront cost and eliminates hardware replacement cycles.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can clinIQ track patients through the entire visit?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. This is clinIQ\'s core capability. From the moment a patient checks in, clinIQ shows their status — waiting room, roomed, with provider, at checkout — on a real-time dashboard visible to every staff member. Bottleneck alerts fire when rooms have been occupied longer than expected thresholds. The patient-facing LobbyView display shows wait context so patients aren\'t left guessing.',
        },
      },
    ],
  },
}

const tdStyle: React.CSSProperties = {
  padding: '0.85rem 1rem',
  borderBottom: '1px solid #e5e2db',
  fontSize: '0.95rem',
  verticalAlign: 'top',
}
const thStyle: React.CSSProperties = {
  padding: '0.85rem 1rem',
  textAlign: 'left',
  fontWeight: 700,
  fontSize: '0.85rem',
  textTransform: 'uppercase',
  letterSpacing: '0.06em',
  borderBottom: '2px solid #1a1a1a',
}
const checkStyle: React.CSSProperties = { color: '#0a9e6e', fontWeight: 700 }
const crossStyle: React.CSSProperties = { color: '#c0392b', fontWeight: 700 }

export default function ClearwavePage() {
  return (
    <>
      <NavInner />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData.breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData.faq) }}
      />
      <main>
        {/* Hero */}
        <section className={s.hero}>
          <div className={s.heroBg}>
            <div className={s.heroOrb} />
            <div className={s.heroOrbTeal} />
            <div className={s.heroOrbBlue} />
            <div className={s.heroGrain} />
          </div>
          <div className={s.heroContent}>
            <div className={s.badge}>clinIQ vs Clearwave</div>
            <h1 className={s.heroTitle}>
              Kiosks tell you<br />
              who arrived.<br />
              Not where they are now.
            </h1>
            <p className={s.heroSubtitle}>
              Clearwave kiosks handle check-in and eligibility. That covers the first five minutes
              of a visit. clinIQ covers the remaining 45 — and the revenue workflows that happen
              long after the patient leaves.
            </p>
            <div className={s.heroActions}>
              <a href="/demo" className={s.btnPrimary}>
                See clinIQ Live <span className={s.btnIcon}>→</span>
              </a>
              <a href="/compare" className={s.btnGhost}>
                All Comparisons
              </a>
            </div>
          </div>
        </section>

        {/* Reality */}
        <section className={s.reality}>
          <div className={s.realityGrid}>
            <div className={s.realityLeft}>
              <h2>What kiosks can't see</h2>
              <div className={s.realityNarrative}>
                <p>
                  Clearwave built a capable product around a specific moment: the patient arriving
                  at the clinic. Kiosk check-in, real-time insurance eligibility, digital intake
                  forms. For that five-minute window, Clearwave does the job.
                </p>
                <p>
                  But kiosks are stationary. They see one moment — arrival — and then lose the
                  patient entirely. After check-in, a patient could be sitting in a room for 25
                  minutes while a provider is tied up elsewhere, and Clearwave has no mechanism to
                  surface that. The care team has no shared view of who is where. The lobby display
                  shows nothing useful. Operations managers have no data on where time is being
                  lost.
                </p>
                <p>
                  Clearwave was also designed for volume — large health system deployments where
                  kiosk hardware fits the scale. For a 3–8 provider specialty clinic, buying,
                  installing, and maintaining kiosk hardware is overhead that adds cost without
                  adding intelligence. clinIQ's check-in is hardware-free: QR codes, web-based
                  forms, lobby tablets using existing hardware. No procurement, no installation, no
                  service contracts on physical devices.
                </p>
                <p>
                  The deeper gap is operational intelligence. Clearwave never built RTM billing
                  management, pre-authorization tracking, or recall automation. It wasn't designed
                  to. clinIQ was built specifically for outpatient specialty clinics that need all
                  of those things in one platform — not just a check-in terminal.
                </p>
              </div>
            </div>
            <div className={s.realityRight}>
              <h3>After the kiosk: what goes missing</h3>
              <ul className={s.painList}>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    No visibility into which rooms are occupied, empty, or waiting for care team
                    action
                  </span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    No alerts when a patient has been in a room longer than your standard
                    threshold
                  </span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    No patient-facing lobby display showing wait context or queue position
                  </span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    No RTM billing threshold tracking — CPT 98975–98981 revenue left on the table
                  </span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    No pre-authorization pipeline — expired auths discovered at checkout, not
                    proactively
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Comparison table */}
        <section style={{ padding: '5rem 1.5rem', background: 'var(--cream, #f5f3ef)' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem', textAlign: 'center' }}>
              Feature comparison
            </h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.07)' }}>
              <thead>
                <tr style={{ background: '#1a1a1a', color: '#fff' }}>
                  <th style={{ ...thStyle, color: '#fff', borderBottom: 'none' }}>Capability</th>
                  <th style={{ ...thStyle, color: '#fff', borderBottom: 'none', textAlign: 'center' }}>Clearwave</th>
                  <th style={{ ...thStyle, color: '#0a9e6e', borderBottom: 'none', textAlign: 'center' }}>clinIQ</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Patient check-in', '✓ Kiosk-based', '✓ Hardware-free QR/web'],
                  ['Insurance eligibility verification', '✓ Real-time', '✓ Integrated'],
                  ['Digital intake forms', '✓ At kiosk', '✓ Mobile-first, pre-visit'],
                  ['Live room & patient status tracking', '✗ Not available', '✓ Real-time dashboard'],
                  ['Bottleneck & delay alerts', '✗ Not available', '✓ Threshold-based alerts'],
                  ['LobbyView patient display', '✗ Not available', '✓ Branded TV display'],
                  ['RTM billing automation', '✗ Not available', '✓ CPT 98975–98981 tracking'],
                  ['Pre-authorization management', '✗ Not available', '✓ Pipeline + expiry alerts'],
                  ['Recall & waitlist fill', '✗ Not available', '✓ Automated'],
                  ['Hardware requirement', 'Dedicated kiosks required', 'None — existing devices'],
                  ['Implementation time', 'Weeks to months', 'Days'],
                  ['Clinic size target', 'Large health systems', 'Outpatient specialty clinics'],
                ].map(([feature, clearwave, cliniq], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : '#fafaf8' }}>
                    <td style={tdStyle}>{feature}</td>
                    <td style={{ ...tdStyle, textAlign: 'center' }}>
                      <span style={clearwave.startsWith('✗') ? crossStyle : (clearwave.startsWith('✓') ? checkStyle : {})}>
                        {clearwave}
                      </span>
                    </td>
                    <td style={{ ...tdStyle, textAlign: 'center' }}>
                      <span style={cliniq.startsWith('✓') ? checkStyle : crossStyle}>
                        {cliniq}
                      </span>
                    </td>
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
              <div className={s.statNumber}>$0</div>
              <div className={s.statLabel}>hardware to buy or maintain</div>
            </div>
            <div className={s.stat}>
              <div className={s.statNumber}>Real-time</div>
              <div className={s.statLabel}>room status after check-in</div>
            </div>
            <div className={s.stat}>
              <div className={s.statNumber}>Days</div>
              <div className={s.statLabel}>typical go-live timeline</div>
            </div>
            <div className={s.stat}>
              <div className={s.statNumber}>7+</div>
              <div className={s.statLabel}>modules beyond check-in</div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className={s.faq}>
          <div style={{ maxWidth: '780px', margin: '0 auto', padding: '0 1.5rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2.5rem', textAlign: 'center' }}>
              Common questions
            </h2>
            <ul className={s.faqList}>
              {schemaData.faq.mainEntity.map((item, i) => (
                <li key={i} className={s.faqItem}>
                  <div className={s.faqQ}>{item.name}</div>
                  <div className={s.faqA}>{item.acceptedAnswer.text}</div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className={s.cta}>
          <div className={s.ctaBg}>
            <div className={s.ctaOrb} />
          </div>
          <div className={s.ctaContent}>
            <h2 className={s.ctaTitle}>See every patient, every room, right now.</h2>
            <p className={s.ctaDesc}>
              clinIQ gives you check-in plus everything that happens inside your clinic — no
              kiosks, no hardware contracts, live in days.
            </p>
            <div className={s.ctaActions}>
              <a href="/demo" className={s.btnPrimary}>
                Book a Demo <span className={s.btnIcon}>→</span>
              </a>
              <a href="/pricing" className={s.btnGhost}>
                See Pricing
              </a>
            </div>
            <p className={s.ctaNote}>Works with your existing EHR. No rip-and-replace.</p>
          </div>
        </section>
      </main>
      <FooterInner />
    </>
  )
}
