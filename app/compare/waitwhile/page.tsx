import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import s from '@/app/specialties/specialty-full.module.css'

export const metadata: Metadata = {
  title: 'clinIQ vs Waitwhile — Healthcare Queues Are Not Barbershop Queues',
  description:
    'Waitwhile was built for retail queue management. clinIQ was built for outpatient specialty clinics — with RTM billing, pre-auth tracking, and real-time patient flow. See why the difference matters.',
  keywords: [
    'Waitwhile for healthcare',
    'Waitwhile alternative medical office',
    'Waitwhile vs clinIQ',
    'healthcare queue management',
    'clinic patient flow software',
  ],
  openGraph: {
    title: 'clinIQ vs Waitwhile — Healthcare Queues Are Not Barbershop Queues',
    description:
      'Waitwhile was built for a barbershop. It doesn\'t know what a PA denial is.',
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
      { '@type': 'ListItem', position: 3, name: 'clinIQ vs Waitwhile', item: 'https://cliniqhealthcare.com/compare/waitwhile' },
    ],
  },
  faq: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why isn\'t Waitwhile a good fit for medical clinics?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Waitwhile is a general-purpose queue management platform built for retail and service businesses — barbershops, DMVs, retail stores. It can reduce lobby crowding, but it has no concept of clinical workflows: it doesn\'t understand exam rooms, care team roles, multi-provider scheduling, RTM billing thresholds, or pre-authorization requirements. Healthcare queues have unique complexity that a retail queue tool simply wasn\'t designed to handle.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does clinIQ do that Waitwhile cannot?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'clinIQ tracks patients through every stage of the clinical visit — waiting room, roomed, provider in room, ready for checkout — with real-time room status visible to all staff. It surfaces bottlenecks, drives a patient-facing lobby display, automates RTM billing tracking for CPT 98975–98981, manages pre-authorization pipelines, and handles multi-provider scheduling with recall and waitlist automation. None of these exist in Waitwhile because Waitwhile was never designed for clinical operations.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Waitwhile HIPAA compliant?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Waitwhile offers a BAA and general HIPAA compliance claims, but its compliance posture was retrofitted onto a consumer product, not designed for healthcare from the ground up. clinIQ was built exclusively for outpatient healthcare environments with privacy-forward check-in (no visible patient list on shared screens), HIPAA-aligned data handling, and clinic-specific security controls baked in from day one.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does clinIQ pricing compare to Waitwhile?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Waitwhile charges per-location and scales with visit volume. clinIQ is flat monthly per provider — approximately $250–$500/month — with no per-visit fees. For a busy specialty clinic processing hundreds of visits per month, clinIQ\'s predictable pricing often comes out significantly lower than Waitwhile\'s volume-based model, and includes operational capabilities Waitwhile doesn\'t offer at any price.',
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

export default function WaitwhilePage() {
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
            <div className={s.badge}>clinIQ vs Waitwhile</div>
            <h1 className={s.heroTitle}>
              Waitwhile was built<br />
              for a barbershop.<br />
              Your clinic is not one.
            </h1>
            <p className={s.heroSubtitle}>
              Waitwhile manages queues for retail and service businesses. clinIQ manages patient
              flow for outpatient specialty clinics — including the clinical workflows, billing
              operations, and care team coordination that retail queue tools have never heard of.
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
              <h2>What happens when you use retail software in a clinic</h2>
              <div className={s.realityNarrative}>
                <p>
                  Waitwhile is a well-designed queue management tool. For a barbershop, a city
                  permit office, or a retail store, it works well. Customers join a virtual queue,
                  get a text when it's their turn, and wait somewhere else instead of in a crowded
                  lobby. That's a real problem worth solving.
                </p>
                <p>
                  But a specialty clinic's operational complexity is categorically different. A
                  queue tool tracks one dimension: position in line. A clinic has rooms, care team
                  roles, multi-provider schedules, insurance authorizations, billing thresholds, and
                  complex workflows that don't map to "next in line." When patient #4 needs an
                  extended evaluation, it doesn't just delay patient #5 — it cascades through MA
                  workflows, provider schedules, and checkout queues in ways a retail queue never
                  experiences.
                </p>
                <p>
                  Waitwhile has no concept of what an exam room is. It doesn't know that a patient
                  is "roomed and waiting for provider" versus "with provider" versus "discharged but
                  not yet checked out." It doesn't know what a pre-authorization denial is, or that
                  a patient's RTM billing clock has been running for 14 days and needs one more
                  qualifying interaction before the 16-day window closes.
                </p>
                <p>
                  When clinics try to use Waitwhile, they end up bolting on workarounds for
                  everything Waitwhile doesn't know about their actual operations. The lobby looks
                  better, but the clinical floor is still running on radio calls and sticky notes.
                  clinIQ was built for the clinical floor, not the lobby.
                </p>
              </div>
            </div>
            <div className={s.realityRight}>
              <h3>Healthcare concepts Waitwhile doesn't have</h3>
              <ul className={s.painList}>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    Exam room status — occupied, ready, needs cleaning, blocked
                  </span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    Multi-provider scheduling with real-time room assignments
                  </span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    RTM billing — 16-day thresholds, CPT 98975–98981, ~$100–125/patient/month
                  </span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    Pre-authorization tracking — denial management, expiration alerts, appeal
                    workflows
                  </span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    Recall lists and waitlist automation for specialty scheduling
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
                  <th style={{ ...thStyle, color: '#fff', borderBottom: 'none', textAlign: 'center' }}>Waitwhile</th>
                  <th style={{ ...thStyle, color: '#0a9e6e', borderBottom: 'none', textAlign: 'center' }}>clinIQ</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Virtual lobby queue', '✓ Core strength', '✓ Included'],
                  ['SMS wait notifications', '✓ Available', '✓ Included'],
                  ['Exam room status tracking', '✗ Not available', '✓ Real-time'],
                  ['Multi-provider scheduling', '✗ Not available', '✓ Full scheduling suite'],
                  ['Bottleneck detection & alerts', '✗ Not available', '✓ Threshold alerts'],
                  ['LobbyView patient display', '✗ Not available', '✓ Branded TV display'],
                  ['RTM billing management', '✗ Not available', '✓ CPT 98975–98981'],
                  ['Pre-authorization pipeline', '✗ Not available', '✓ Denials + expiry alerts'],
                  ['HIPAA-native design', 'Retrofitted', '✓ Built for healthcare'],
                  ['EHR integration', '✗ No native EHR integration', '✓ Any EHR'],
                  ['Recall & waitlist automation', '✗ Not available', '✓ Automated fill'],
                  ['Built for specialty clinics', '✗ Retail/service focus', '✓ Outpatient specialty'],
                ].map(([feature, waitwhile, cliniq], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : '#fafaf8' }}>
                    <td style={tdStyle}>{feature}</td>
                    <td style={{ ...tdStyle, textAlign: 'center' }}>
                      <span style={waitwhile.startsWith('✗') ? crossStyle : (waitwhile.startsWith('✓') ? checkStyle : {})}>
                        {waitwhile}
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
              <div className={s.statNumber}>100%</div>
              <div className={s.statLabel}>built for healthcare from day one</div>
            </div>
            <div className={s.stat}>
              <div className={s.statNumber}>8+</div>
              <div className={s.statLabel}>clinical workflow modules</div>
            </div>
            <div className={s.stat}>
              <div className={s.statNumber}>~$112</div>
              <div className={s.statLabel}>avg RTM revenue per patient/month</div>
            </div>
            <div className={s.stat}>
              <div className={s.statNumber}>Days</div>
              <div className={s.statLabel}>to implement, not months</div>
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
            <h2 className={s.ctaTitle}>Your clinic deserves a tool built for clinics.</h2>
            <p className={s.ctaDesc}>
              clinIQ was purpose-built for outpatient specialty operations — not adapted from a
              retail queue manager. See what that difference looks like in practice.
            </p>
            <div className={s.ctaActions}>
              <a href="/demo" className={s.btnPrimary}>
                Book a Demo <span className={s.btnIcon}>→</span>
              </a>
              <a href="/pricing" className={s.btnGhost}>
                See Pricing
              </a>
            </div>
            <p className={s.ctaNote}>No long-term contract. Live in days.</p>
          </div>
        </section>
      </main>
      <FooterInner />
    </>
  )
}
