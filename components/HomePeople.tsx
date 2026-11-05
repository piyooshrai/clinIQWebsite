import Image from 'next/image'
import { useTranslations } from 'next-intl'
import styles from './HomePeople.module.css'

const CARDS = [
  { key: 'frontDesk', src: '/people/clinic-front-desk-patient-check-in.jpg' },
  { key: 'careTeam', src: '/people/clinician-reviewing-tablet-with-patient.jpg' },
  { key: 'provider', src: '/people/provider-using-tablet.jpg' },
] as const

export default function HomePeople() {
  const t = useTranslations('homePeople')
  return (
    <section className={styles.section} aria-labelledby="home-people-title">
      <div className="container">
        <h2 id="home-people-title" className={styles.title}>{t('title')}</h2>
        <p className={styles.subtitle}>{t('subtitle')}</p>
        <div className={styles.grid}>
          {CARDS.map(({ key, src }) => (
            <figure key={key} className={styles.card}>
              <div className={styles.imageWrap}>
                <Image
                  src={src}
                  alt={t(`${key}.alt`)}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={styles.image}
                />
              </div>
              <figcaption className={styles.caption}>
                <strong className={styles.captionTitle}>{t(`${key}.title`)}</strong>
                <span className={styles.captionBody}>{t(`${key}.body`)}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
