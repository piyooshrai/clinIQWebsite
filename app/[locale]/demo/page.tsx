import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import DemoForm from '@/components/DemoForm'
import s from '@/app/specialties/specialty-full.module.css'
import styles from '@/app/demo/demo.module.css'

export const metadata: Metadata = {
  title: 'Request a Demo — clinIQ Clinic Operations Platform',
  description:
    "See clinIQ in 15 minutes. We'll configure it for your specialty. Patient flow, RTM billing, pre-authorization, digital check-in — live in your workflow.",
  alternates: { canonical: 'https://cliniqhealthcare.com/demo' },
  openGraph: {
    title: 'Request a Demo — clinIQ Clinic Operations Platform',
    description:
      "See clinIQ in 15 minutes. We'll configure it for your specialty. Patient flow, RTM billing, pre-authorization, digital check-in — live in your workflow.",
    type: 'website',
    url: 'https://cliniqhealthcare.com/demo',
    images: [{ url: '/og-demo.png', width: 1200, height: 630, alt: 'Request a Demo — clinIQ' }],
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

export default async function DemoPage() {
  const t = await getTranslations('demo')

  const demoFeatures = [
    t('features.f1'),
    t('features.f2'),
    t('features.f3'),
    t('features.f4'),
    t('features.f5'),
  ]

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
              <span className={s.badge}>{t('badge')}</span>
              <h1 className={s.heroTitle}>
                {t('title1')}<br /><em>{t('titleEm')}</em>
              </h1>
              <p className={s.heroSubtitle}>{t('subtitle')}</p>
            </div>
          </div>
        </section>

        {/* ── Main two-column section ── */}
        <section className={styles.mainSection}>
          <div className={s.container}>
            <div className={styles.twoCol}>
              {/* Left panel — dark */}
              <div className={styles.leftPanel}>
                <h2 className={styles.leftTitle}>{t('whatYoullSee')}</h2>
                <ul className={styles.featureList}>
                  {demoFeatures.map((feat) => (
                    <li key={feat} className={styles.featureItem}>
                      {CHECK_ICON}
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className={styles.statsRow}>
                  <div className={styles.statBlock}>
                    <span className={styles.statValue}>{t('stats.demo')}</span>
                    <span className={styles.statMeta}>{t('stats.demoLabel')}</span>
                  </div>
                  <div className={styles.statBlock}>
                    <span className={styles.statValue}>{t('stats.response')}</span>
                    <span className={styles.statMeta}>{t('stats.responseLabel')}</span>
                  </div>
                  <div className={styles.statBlock}>
                    <span className={styles.statValue}>{t('stats.live')}</span>
                    <span className={styles.statMeta}>{t('stats.liveLabel')}</span>
                  </div>
                </div>
              </div>

              {/* Right panel — form */}
              <div className={styles.rightPanel}>
                <h2 className={styles.formTitle}>{t('formTitle')}</h2>
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
