import styles from './PricingHero.module.css'

interface PricingHeroProps {
  title: string
  subtitle: string
}

export default function PricingHero({ title, subtitle }: PricingHeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBg}>
        <div className={styles.heroOrb} />
        <div className={styles.heroGrain} />
      </div>
      <div className="container">
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{title}</h1>
          <p className={styles.heroSubtitle}>{subtitle}</p>
        </div>
      </div>
    </section>
  )
}
