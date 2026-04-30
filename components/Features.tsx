import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import styles from './Features.module.css'

const FEATURE_HREFS: Record<string, string> = {
  patientFlow: '/features/patient-flow',
  checkIn: '/features/check-in',
  scheduling: '/features/scheduling',
  analytics: '/features/analytics',
  rtm: '/features/rtm',
  preAuth: '/features/pre-auth',
}

export default async function Features() {
  const t = await getTranslations('features')

  const FEATURES = (['patientFlow', 'checkIn', 'scheduling', 'analytics', 'rtm', 'preAuth'] as const).map(
    (key, i) => ({
      number: String(i + 1).padStart(2, '0'),
      title: t(`cards.${key}.title`),
      description: t(`cards.${key}.desc`),
      href: FEATURE_HREFS[key],
    })
  )

  return (
    <section className={styles.section} id="features">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.label}>
            <span className={styles.labelLine} />
            <span className={styles.labelText}>{t('badge')}</span>
          </div>
          <h2 className={styles.title}>{t('heading')}</h2>
          <p className={styles.intro}>{t('subheading')}</p>
        </div>

        <div className={styles.grid}>
          {FEATURES.map((f) => (
            <Link key={f.number} href={f.href} className={styles.card}>
              <div className={styles.number}>{f.number}</div>
              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardDesc}>{f.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
