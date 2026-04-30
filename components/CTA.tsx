import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import styles from './CTA.module.css'

export default async function CTA() {
  const t = await getTranslations('cta')

  return (
    <section className={styles.section}>
      <div className={styles.orb} style={{ top: '-200px', left: '-200px', background: 'var(--teal)' }} aria-hidden="true" />
      <div className={styles.orb} style={{ bottom: '-200px', right: '-200px', background: 'var(--blue)' }} aria-hidden="true" />

      <div className={styles.container}>
        <h2 className={styles.title}>{t('heading')}</h2>
        <p className={styles.description}>{t('subheading')}</p>
        <div className={styles.buttons}>
          <Link href="/demo" className={`${styles.btnBase} ${styles.btnPrimary}`}>
            {t('primary')}
          </Link>
          <Link href="/contact" className={`${styles.btnBase} ${styles.btnSecondary}`}>
            {t('secondary')}
          </Link>
        </div>
      </div>
    </section>
  )
}
