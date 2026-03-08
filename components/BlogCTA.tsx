import Link from 'next/link'
import styles from './BlogCTA.module.css'

interface BlogCTAProps {
  ctaLabel: string
  description?: string
}

export default function BlogCTA({
  ctaLabel,
  description = "See how clinIQ handles this in a 15-minute walkthrough — no 47-slide deck, no pressure.",
}: BlogCTAProps) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.content}>
          <h2 className={styles.title}>{ctaLabel}</h2>
          <p className={styles.description}>{description}</p>
          <Link href="/demo" className="btn-inner btn-inner-lg btn-inner-primary">
            Request Demo
          </Link>
          <span className={styles.note}>No credit card required</span>
        </div>
      </div>
    </section>
  )
}
