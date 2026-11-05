import { Fragment } from 'react'
import { useTranslations } from 'next-intl'
import styles from './Marquee.module.css'

const SPECIALTIES = ['addiction', 'psychiatry', 'pain', 'ortho', 'pt', 'urgent', 'behavioral', 'cardiology', 'dermatology', 'primary', 'chiropractic', 'neurology', 'pediatrics', 'ophthalmology', 'spine', 'obgyn'] as const

function MarqueeContent() {
  const t = useTranslations('marquee')
  return (
    <div className={styles.content} aria-hidden="true">
      {SPECIALTIES.map((key, i) => (
        <Fragment key={i}>
          <span className={styles.item}>{t(`items.${key}`)}</span>
          <span className={styles.divider} />
        </Fragment>
      ))}
    </div>
  )
}

export default function Marquee() {
  const t = useTranslations('marquee')
  return (
    <section className={styles.section} aria-label={t('label')}>
      <div className={styles.track}>
        {/* Duplicated for seamless loop */}
        <MarqueeContent />
        <MarqueeContent />
      </div>
    </section>
  )
}
