import styles from './ResourceHero.module.css'

interface ResourceHeroProps {
  type: string
  title: string
  subtitle: string
}

export default function ResourceHero({ type, title, subtitle }: ResourceHeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBg}>
        <div className={styles.heroOrb} />
        <div className={styles.heroGrain} />
      </div>

      <div className="container">
        <div className={styles.heroContent}>
          <span className={styles.typeBadge}>{type}</span>
          <h1 className={styles.heroTitle}>{title}</h1>
          <p className={styles.heroSubtitle}>{subtitle}</p>
        </div>
      </div>
    </section>
  )
}
