import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import styles from './Hero.module.css'

export default function Hero() {
  const t = useTranslations('hero')

  return (
    <section className={styles.hero}>
      <div className={styles.media}>
        <Image
          src="/editorial/nurse-with-tablet-clinic-reception.jpg"
          alt={t('imageAlt')}
          fill
          priority
          sizes="(max-width: 900px) 170vw, 56vw"
          className={styles.mediaImage}
        />
      </div>

      <div className={styles.layout}>
        <div className={styles.content}>
          <div className={styles.label}>
            <span className={styles.labelLine} />
            <span className={styles.labelText}>{t('badge')}</span>
          </div>

          <h1 className={styles.title}>
            <span className={styles.titleLine}>
              <span className={styles.titleWord}>{t('title1')}</span>
            </span>
            <span className={styles.titleLine}>
              <span className={styles.titleWord}>
                {t('title2')} <em className={styles.titleEm}>{t('titleEm')}</em>
              </span>
            </span>
          </h1>

          <p className={styles.description}>{t('description')}</p>

          <div className={styles.ctaRow}>
            <Link href="/demo" className={`${styles.btnBase} ${styles.btnPrimary}`}>
              {t('requestDemo')}
            </Link>
            <Link href="/features" className={`${styles.btnBase} ${styles.btnSecondary}`}>
              {t('seeHowItWorks')}
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator} aria-hidden="true">
        <span className={styles.scrollText}>{t('scroll')}</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  )
}
