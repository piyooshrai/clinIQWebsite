import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import s from '@/app/specialties/specialty-full.module.css'

export const metadata: Metadata = {
  title: 'clinIQ vs Phreesia — Beyond Intake to Full Clinic Operations',
  description:
    'Phreesia solved patient intake. clinIQ solves the 45 minutes after intake — live patient flow, room status, RTM billing, and pre-auth tracking. See the real difference.',
  keywords: [
    'Phreesia alternative',
    'Phreesia pricing',
    'Phreesia vs clinIQ',
    'Phreesia check-in alternative',
    'clinic operations platform',
    'patient flow management',
  ],
  openGraph: {
    title: 'clinIQ vs Phreesia — Beyond Intake to Full Clinic Operations',
    description:
      'Phreesia solved check-in. clinIQ solves everything that happens after the patient puts down the tablet.',
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
      { '@type': 'ListItem', position: 3, name: 'clinIQ vs Phreesia', item: 'https://cliniqhealthcare.com/compare/phreesia' },
    ],
  },
  faq: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Can clinIQ replace Phreesia entirely?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'clinIQ includes self-service check-in that replaces Phreesia\'s core intake function. But clinIQ also adds real-time patient flow, room status, LobbyView displays, RTM billing automation, and pre-authorization tracking — capabilities Phreesia was never designed to provide. Most clinics switching from Phreesia to clinIQ are not just replacing check-in; they are gaining a complete operational layer that sits on top of their existing EHR.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does Phreesia pricing compare to clinIQ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Phreesia charges per-transaction and per-device, making total cost difficult to predict as patient volume grows. A practice processing 1,500 visits per month can see costs scale unpredictably with Phreesia\'s model. clinIQ is flat monthly per-provider — approximately $250–$500/month per provider — with no per-transaction fees and no hardware lease surprises. You know your cost before the first patient walks in.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does clinIQ take to implement compared to Phreesia?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Phreesia implementations for mid-size clinics typically run 3–6 months, involve device procurement, EHR workflow builds, and staff training programs. clinIQ layers on top of your existing EHR without replacing it, and most clinics are live within days. There is no device dependency for core functions — staff use existing phones or workstations.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does clinIQ work with my current EHR?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. clinIQ is an operations layer, not an EHR replacement. It works alongside Epic, Athenahealth, eClinicalWorks, ModMed, NextGen, and virtually any other EHR through read-only integrations that pull appointment and patient data without touching clinical records. You do not need to rip and replace anything.',
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

export default function PhreesiaPage() {
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
            <div className={s.badge}>clinIQ vs Phreesia</div>
            <h1 className={s.heroTitle}>
              Phreesia solved intake.<br />
              clinIQ solves what happens<br />
              after the tablet goes down.
            </h1>
            <p className={s.heroSubtitle}>
              Phreesia is the gold standard for patient intake and check-in. But intake is the first
              five minutes of a visit. clinIQ covers the next 45 — live queue tracking, room status,
              bottleneck alerts, RTM billing, and pre-auth management.
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
              <h2>The honest comparison</h2>
              <div className={s.realityNarrative}>
                <p>
                  Phreesia built a genuinely good product. If your clinic's primary problem is
                  intake — collecting forms, verifying insurance, capturing consent — Phreesia does
                  that well. It has robust tablet-based workflows, a large integration footprint,
                  and years of refinement for that specific job.
                </p>
                <p>
                  The problem is what Phreesia doesn't do. Once a patient completes intake and
                  enters the clinical space, Phreesia's visibility ends. A patient sitting in an
                  exam room waiting for a provider? Phreesia doesn't know that. A room that's been
                  occupied for 40 minutes while a provider sees other patients? Phreesia doesn't
                  surface that. A bottleneck building at the MA station because three rooms are
                  simultaneously ready for vitals? Phreesia doesn't alert anyone.
                </p>
                <p>
                  Phreesia also wasn't designed for outpatient specialty revenue operations. It
                  doesn't track RTM billing thresholds (CPT 98975–98981), it doesn't manage
                  pre-authorization pipelines, and it doesn't send expiration alerts when an auth
                  window is closing. Those are operations problems, and Phreesia is an intake
                  product.
                </p>
                <p>
                  Then there's pricing. Phreesia's per-transaction, per-device model was designed
                  for large health systems that can absorb the complexity and negotiate enterprise
                  terms. For a 4-provider orthopedic or pain management clinic, the unpredictable
                  cost structure — combined with a 3–6 month implementation — creates real friction.
                  clinIQ is flat-rate per provider, live in days, and covers the entire visit
                  lifecycle that Phreesia leaves unaddressed.
                </p>
              </div>
            </div>
            <div className={s.realityRight}>
              <h3>What clinics tell us after switching</h3>
              <ul className={s.painList}>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    &ldquo;Phreesia knew who checked in. We still had no idea where patients were
                    inside the clinic.&rdquo;
                  </span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    &ldquo;The implementation took five months. We had to buy tablets, build EHR
                    workflows, and train staff before a single patient touched it.&rdquo;
                  </span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    &ldquo;Our per-visit cost went up as volume grew. We were being penalized for
                    running a successful practice.&rdquo;
                  </span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    &ldquo;We needed someone to manage RTM billing and pre-auth. Phreesia couldn't
                    do either.&rdquo;
                  </span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    &ldquo;LobbyView was the first thing our patients mentioned. They finally knew
                    what was happening.&rdquo;
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Comparison table */}
        <section style={{ padding: '5rem 1.5rem', background: 'var(--cream, #f5f3ef)' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', overflowX: 'auto' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem', textAlign: 'center' }}>
              Feature comparison
            </h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.07)' }}>
              <thead>
                <tr style={{ background: '#1a1a1a', color: '#fff' }}>
                  <th style={{ ...thStyle, color: '#fff', borderBottom: 'none' }}>Capability</th>
                  <th style={{ ...thStyle, color: '#fff', borderBottom: 'none', textAlign: 'center' }}>Phreesia</th>
                  <th style={{ ...thStyle, color: '#0a9e6e', borderBottom: 'none', textAlign: 'center' }}>clinIQ</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Patient self-service check-in', '✓ Core strength', '✓ Included'],
                  ['Insurance eligibility verification', '✓ Real-time', '✓ Integrated'],
                  ['Digital intake forms', '✓ Comprehensive', '✓ Privacy-forward'],
                  ['Live room & queue status', '✗ Not available', '✓ Real-time dashboard'],
                  ['Bottleneck alerts', '✗ Not available', '✓ Automated thresholds'],
                  ['LobbyView patient display', '✗ Not available', '✓ Branded TV display'],
                  ['RTM billing (CPT 98975–98981)', '✗ Not available', '✓ 16-day threshold tracking'],
                  ['Pre-authorization tracking', '✗ Not available', '✓ Pipeline + expiration alerts'],
                  ['Recall & waitlist management', '✗ Not available', '✓ Automated fill'],
                  ['Pricing model', 'Per-transaction + device fees', 'Flat monthly per provider'],
                  ['Implementation time', '3–6 months', 'Days'],
                  ['EHR dependency', 'Deep integration required', 'Layers on any EHR'],
                ].map(([feature, phreesia, cliniq], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : '#fafaf8' }}>
                    <td style={tdStyle}>{feature}</td>
                    <td style={{ ...tdStyle, textAlign: 'center' }}>
                      <span style={phreesia.startsWith('✗') ? crossStyle : (phreesia.startsWith('✓') ? checkStyle : {})}>
                        {phreesia}
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
              <div className={s.statNumber}>Days</div>
              <div className={s.statLabel}>to go live, not months</div>
            </div>
            <div className={s.stat}>
              <div className={s.statNumber}>$0</div>
              <div className={s.statLabel}>per-transaction fees ever</div>
            </div>
            <div className={s.stat}>
              <div className={s.statNumber}>~$112</div>
              <div className={s.statLabel}>avg RTM revenue per patient/month</div>
            </div>
            <div className={s.stat}>
              <div className={s.statNumber}>100%</div>
              <div className={s.statLabel}>EHR-agnostic, no rip-and-replace</div>
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
            <h2 className={s.ctaTitle}>Ready to see what happens after check-in?</h2>
            <p className={s.ctaDesc}>
              Phreesia handles the front door. clinIQ handles the rest of the visit — and the
              revenue that comes after.
            </p>
            <div className={s.ctaActions}>
              <a href="/demo" className={s.btnPrimary}>
                Book a Demo <span className={s.btnIcon}>→</span>
              </a>
              <a href="/pricing" className={s.btnGhost}>
                See Pricing
              </a>
            </div>
            <p className={s.ctaNote}>No hardware required. Live in days.</p>
          </div>
        </section>
      </main>
      <FooterInner />
    </>
  )
}
