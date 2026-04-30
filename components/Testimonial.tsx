import { getTranslations } from 'next-intl/server'
import styles from './Testimonial.module.css'

export default async function Testimonial() {
  const t = await getTranslations('testimonial')

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.label}>
          <span className={styles.labelLine} />
          <span className={styles.labelText}>{t('heading')}</span>
        </div>
        <div className={styles.grid}>
          <div className={styles.card}>
            <p className={styles.quote}>&ldquo;{t('quote')}&rdquo;</p>
            <div className={styles.author}>
              <div className={styles.avatar} aria-hidden="true">OD</div>
              <div>
                <div className={styles.role}>{t('author')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
