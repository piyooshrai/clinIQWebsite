import styles from './LocationHero.module.css'

interface LocationHeroProps {
  badge: string
  title: string
  subtitle: string
}

export default function LocationHero({ badge, title, subtitle }: LocationHeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBg}>
        <div className={styles.heroOrbTeal} />
        <div className={styles.heroOrbBlue} />
        <div className={styles.heroGrain} />
      </div>

      <div className="container">
        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>clinIQ for {badge} Clinics</span>
          <h1 className={styles.heroTitle}>{title}</h1>
          <p className={styles.heroSubtitle}>{subtitle}</p>
        </div>
      </div>
    </section>
  )
}
