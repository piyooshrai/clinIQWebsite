import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import DemoForm from '@/components/DemoForm'
import s from '@/app/specialties/specialty-full.module.css'
import styles from './demo.module.css'

export const metadata: Metadata = {
  title: 'Request a Demo — clinIQ Clinic Operations Platform',
  description:
    'See clinIQ in 15 minutes. We\'ll configure it for your specialty. Patient flow, RTM billing, pre-authorization, digital check-in — live in your workflow.',
  alternates: { canonical: 'https://cliniqhealthcare.com/demo' },
  openGraph: {
    title: 'Request a Demo — clinIQ Clinic Operations Platform',
    description:
      'See clinIQ in 15 minutes. We\'ll configure it for your specialty. Patient flow, RTM billing, pre-authorization, digital check-in — live in your workflow.',
    type: 'website',
    url: 'https://cliniqhealthcare.com/demo',
  },
}

const CHECK_ICON = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    aria-hidden="true"
    style={{ flexShrink: 0, marginTop: '0.1rem' }}
  >
    <circle cx="9" cy="9" r="8.5" stroke="#14b8a6" strokeWidth="1" />
    <path
      d="M5.5 9l2.5 2.5L12.5 6"
      stroke="#14b8a6"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const DEMO_FEATURES = [
  'Real-time patient flow dashboard configured for your specialty',
  'Digital check-in flow — from patient arrival to room assignment in under 3 minutes',
  'RTM billing workflow — CPT 98975–98981 enrollment and compliance tracking',
  'Pre-authorization automation — live payer submission demo',
  'Analytics dashboard — RTM compliance, throughput, revenue per provider',
]

export default function DemoPage() {
  return (
    <>
      <NavInner />
      <main>
        {/* ── Hero ── */}
        <section className={s.hero} style={{ minHeight: 'auto', padding: '7rem 0 5rem' }}>
          <div className={s.heroBg}>
            <div className={`${s.heroOrb} ${s.heroOrbTeal}`} />
            <div className={`${s.heroOrb} ${s.heroOrbBlue}`} />
            <div className={s.heroGrain} />
          </div>
          <div className={s.container}>
            <div className={s.heroContent}>
              <span className={s.badge}>Schedule a Demo</span>
              <h1 className={s.heroTitle}>
                See clinIQ<br /><em>in action.</em>
              </h1>
              <p className={s.heroSubtitle}>
                15 minutes. Configured for your specialty. No 47-slide deck.
              </p>
            </div>
          </div>
        </section>

        {/* ── Main two-column section ── */}
        <section className={styles.mainSection}>
          <div className={s.container}>
            <div className={styles.twoCol}>
              {/* Left panel — dark */}
              <div className={styles.leftPanel}>
                <h2 className={styles.leftTitle}>What you&apos;ll see</h2>
                <ul className={styles.featureList}>
                  {DEMO_FEATURES.map((feat) => (
                    <li key={feat} className={styles.featureItem}>
                      {CHECK_ICON}
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className={styles.statsRow}>
                  <div className={styles.statBlock}>
                    <span className={styles.statValue}>15 min</span>
                    <span className={styles.statMeta}>Average demo</span>
                  </div>
                  <div className={styles.statBlock}>
                    <span className={styles.statValue}>&lt;24 hrs</span>
                    <span className={styles.statMeta}>Response time</span>
                  </div>
                  <div className={styles.statBlock}>
                    <span className={styles.statValue}>Days</span>
                    <span className={styles.statMeta}>To go live</span>
                  </div>
                </div>
              </div>

              {/* Right panel — form */}
              <div className={styles.rightPanel}>
                <h2 className={styles.formTitle}>Request your demo</h2>
                <DemoForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterInner />
    </>
  )
}
