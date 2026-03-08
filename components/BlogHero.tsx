import styles from './BlogHero.module.css'

interface BlogHeroProps {
  category: string
  title: string
  date: string
  readTime: string
}

export default function BlogHero({ category, title, date, readTime }: BlogHeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBg}>
        <div className={styles.heroOrb} />
        <div className={styles.heroGrain} />
      </div>

      <div className="container">
        <div className={styles.heroContent}>
          <span className={styles.categoryBadge}>{category}</span>
          <h1 className={styles.heroTitle}>{title}</h1>
          <div className={styles.meta}>
            <span>{date}</span>
            <span className={styles.metaDot} aria-hidden="true" />
            <span>{readTime} read</span>
          </div>
        </div>
      </div>
    </section>
  )
}
