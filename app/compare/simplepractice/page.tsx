import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import s from '@/app/specialties/specialty-full.module.css'

export const metadata: Metadata = {
  title: 'clinIQ vs SimplePractice — Operations Platform vs Documentation Software',
  description:
    'SimplePractice is documentation software with a scheduler — built for solo therapists. clinIQ is an operations platform built for multi-provider outpatient specialty clinics. See the difference.',
  keywords: [
    'SimplePractice alternative multi-specialty',
    'SimplePractice vs clinic operations',
    'SimplePractice vs clinIQ',
    'beyond SimplePractice scheduling',
    'specialty clinic operations platform',
  ],
  openGraph: {
    title: 'clinIQ vs SimplePractice — Operations Platform vs Documentation Software',
    description:
      'SimplePractice is documentation software with a scheduler. clinIQ is operations software.',
    type: 'website',
  },
}

const schemaData = {
  breadcrumb: {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cliniq.com' },
      { '@type': 'ListItem', position: 2, name: 'Compare', item: 'https://cliniq.com/compare' },
      { '@type': 'ListItem', position: 3, name: 'clinIQ vs SimplePractice', item: 'https://cliniq.com/compare/simplepractice' },
    ],
  },
  faq: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Can clinIQ replace SimplePractice for a multi-specialty clinic?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'clinIQ and SimplePractice solve different problems. SimplePractice is built around clinical documentation — notes, treatment plans, and billing for behavioral health providers. clinIQ is an operations layer that handles patient flow, live room status, check-in, scheduling, RTM billing, and pre-authorization tracking. For a multi-specialty clinic that needs operations intelligence, clinIQ fills the gap that SimplePractice was never designed to address. Many clinics use an EHR for documentation and clinIQ for operations — they are not competing for the same job.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why isn\'t SimplePractice a good fit for outpatient specialty clinics?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'SimplePractice was designed for solo and small-group behavioral health practices — therapists, counselors, and psychologists. Its workflow assumptions are built around 50-minute therapy sessions, individual practitioner notes, and telehealth. Outpatient specialty clinics — orthopedics, pain management, neurology, physical therapy — operate on fundamentally different models: multi-provider coordination, high visit volume, complex insurance authorization workflows, RTM billing for chronic care, and real-time room assignment. SimplePractice does not support these operational patterns.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does clinIQ include scheduling or does it require a separate scheduler?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'clinIQ includes a full multi-provider scheduling suite with appointment creation, recall automation, waitlist fill, and provider schedule management. It also layers on top of existing EHR scheduling systems — so if your EHR\'s scheduler works for your team, clinIQ can read from it and add operational intelligence on top without replacing your scheduling workflow.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does clinIQ handle RTM billing that SimplePractice doesn\'t support?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Remote Therapeutic Monitoring (RTM) billing under CPT codes 98975–98981 requires tracking patient interactions over 16-day periods to hit billing thresholds worth approximately $100–$125 per patient per month. SimplePractice has no native mechanism for tracking these thresholds or alerting staff when a patient is approaching the billing window close. clinIQ automates RTM threshold tracking, surfaces patients approaching the 16-day cutoff, and generates billing-ready documentation — turning RTM from a manual tracking exercise into an automated revenue stream.',
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

export default function SimplePracticePage() {
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
            <div className={s.badge}>clinIQ vs SimplePractice</div>
            <h1 className={s.heroTitle}>
              SimplePractice is<br />
              documentation software.<br />
              clinIQ is operations software.
            </h1>
            <p className={s.heroSubtitle}>
              SimplePractice was built for solo therapists managing notes and telehealth
              appointments. clinIQ was built for multi-provider outpatient specialty clinics
              managing patient flow, RTM billing, pre-authorizations, and real-time operations
              across a full care team.
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
              <h2>Two products solving two different problems</h2>
              <div className={s.realityNarrative}>
                <p>
                  SimplePractice is a genuinely good product for its intended market: behavioral
                  health practitioners — therapists, counselors, psychologists — who need a clean,
                  integrated system for notes, scheduling, telehealth, and billing. For that use
                  case, it delivers.
                </p>
                <p>
                  The challenge is that SimplePractice is frequently considered by clinics that
                  are not behavioral health practices, because its marketing reaches broadly and
                  its scheduling interface looks appealing. An orthopedic clinic, a pain management
                  practice, a neurology group, a multi-specialty rehabilitation center — these
                  clinics have operational needs that SimplePractice was architecturally never
                  designed to meet.
                </p>
                <p>
                  SimplePractice has no concept of real-time room management. It doesn't know that
                  Room 3 has been occupied for 35 minutes and the provider hasn't been in yet. It
                  doesn't surface that three patients are ready for vitals simultaneously and the
                  MA station will become a bottleneck in the next five minutes. It doesn't track
                  RTM billing thresholds, manage pre-authorization pipelines, or automate recall
                  lists for complex specialty schedules.
                </p>
                <p>
                  clinIQ doesn't compete with SimplePractice on documentation. clinIQ doesn't
                  write notes. What clinIQ does is manage the operational layer that happens around
                  the documentation: the flow of patients through the physical space, the revenue
                  workflows between visits, the coordination between front desk, MAs, and providers
                  that makes a multi-provider clinic function efficiently.
                </p>
                <p>
                  The right framing is not "clinIQ vs SimplePractice" — it's "clinIQ alongside
                  your EHR." SimplePractice is an EHR. clinIQ is the operations platform that
                  sits on top of any EHR and handles everything SimplePractice was never built to do.
                </p>
              </div>
            </div>
            <div className={s.realityRight}>
              <h3>What multi-specialty clinics need that SimplePractice can&apos;t provide</h3>
              <ul className={s.painList}>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    Real-time room status — which rooms are occupied, ready, or waiting for
                    care team action right now
                  </span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    Multi-provider coordination — when one provider runs late, the cascade is
                    visible across the whole team
                  </span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    RTM billing automation — 16-day threshold tracking for CPT 98975–98981,
                    worth ~$100–125/patient/month
                  </span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    Pre-authorization management — denial tracking, expiry alerts, and appeal
                    workflow support
                  </span>
                </li>
                <li className={s.painItem}>
                  <span className={s.painDot} />
                  <span className={s.painText}>
                    LobbyView display — patient-facing TV shows wait context without exposing
                    other patients' information
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
                  <th style={{ ...thStyle, color: '#fff', borderBottom: 'none', textAlign: 'center' }}>SimplePractice</th>
                  <th style={{ ...thStyle, color: '#0a9e6e', borderBottom: 'none', textAlign: 'center' }}>clinIQ</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Clinical documentation / notes', '✓ Core strength', '✗ Not in scope (use your EHR)'],
                  ['Scheduling', '✓ Basic single-provider', '✓ Multi-provider, recalls, waitlist'],
                  ['Telehealth', '✓ Integrated', '✗ Not in scope'],
                  ['Real-time room status', '✗ Not available', '✓ Live dashboard'],
                  ['Bottleneck & delay alerts', '✗ Not available', '✓ Threshold-based'],
                  ['LobbyView patient display', '✗ Not available', '✓ Branded TV display'],
                  ['RTM billing (CPT 98975–98981)', '✗ Not available', '✓ 16-day threshold tracking'],
                  ['Pre-authorization management', '✗ Not available', '✓ Pipeline + expiry alerts'],
                  ['Multi-provider coordination', '✗ Limited', '✓ Full care team visibility'],
                  ['Designed for specialty clinics', '✗ Behavioral health only', '✓ Outpatient specialty'],
                  ['EHR agnostic', '✗ Is the EHR', '✓ Layers on any EHR'],
                  ['Implementation time', '2–4 weeks', 'Days'],
                ].map(([feature, sp, cliniq], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : '#fafaf8' }}>
                    <td style={tdStyle}>{feature}</td>
                    <td style={{ ...tdStyle, textAlign: 'center' }}>
                      <span style={sp.startsWith('✗') ? crossStyle : (sp.startsWith('✓') ? checkStyle : {})}>
                        {sp}
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
              <div className={s.statNumber}>~$112</div>
              <div className={s.statLabel}>avg RTM revenue per patient/month</div>
            </div>
            <div className={s.stat}>
              <div className={s.statNumber}>Real-time</div>
              <div className={s.statLabel}>room visibility for every care team member</div>
            </div>
            <div className={s.stat}>
              <div className={s.statNumber}>Any EHR</div>
              <div className={s.statLabel}>no rip-and-replace required</div>
            </div>
            <div className={s.stat}>
              <div className={s.statNumber}>Days</div>
              <div className={s.statLabel}>to go live in your clinic</div>
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
            <h2 className={s.ctaTitle}>Your specialty clinic needs operations software.</h2>
            <p className={s.ctaDesc}>
              clinIQ adds the operational intelligence layer your EHR never had — patient flow,
              RTM billing, pre-auth tracking, and real-time coordination for your whole care team.
            </p>
            <div className={s.ctaActions}>
              <a href="/demo" className={s.btnPrimary}>
                Book a Demo <span className={s.btnIcon}>→</span>
              </a>
              <a href="/pricing" className={s.btnGhost}>
                See Pricing
              </a>
            </div>
            <p className={s.ctaNote}>Layers on top of any EHR. Live in days.</p>
          </div>
        </section>
      </main>
      <FooterInner />
    </>
  )
}
