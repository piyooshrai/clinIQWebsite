import Image from 'next/image'
import styles from './BlogHero.module.css'

interface BlogHeroProps {
  category: string
  title: string
  date: string
  readTime: string
  subhead?: string
  image?: { src: string; alt: string; width: number; height: number }
}

export default function BlogHero({ category, title, date, readTime, subhead, image }: BlogHeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBg}>
        <div className={styles.heroOrb} />
        <div className={styles.heroGrain} />
      </div>

      <div className="container">
        <div className={image ? styles.heroGrid : undefined}>
          <div className={styles.heroContent}>
            <span className={styles.categoryBadge}>{category}</span>
            <h1 className={styles.heroTitle}>{title}</h1>
            {subhead && <p className={styles.heroSubhead}>{subhead}</p>}
            <div className={styles.meta}>
              <span>{date}</span>
              <span className={styles.metaDot} aria-hidden="true" />
              <span>{readTime} read</span>
            </div>
          </div>
          {image && (
            <figure className={styles.heroFigure}>
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes="(max-width: 1023px) 100vw, 520px"
                priority
                className={styles.heroImage}
              />
            </figure>
          )}
        </div>
      </div>
    </section>
  )
}
