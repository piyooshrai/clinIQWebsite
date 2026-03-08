import Link from 'next/link'
import styles from './ComparisonCTA.module.css'

interface ComparisonCTAProps {
  ctaLabel: string
  description?: string
}

export default function ComparisonCTA({
  ctaLabel,
  description = "15-minute walkthrough. We'll configure it for your workflow. No pressure, no 47-slide deck.",
}: ComparisonCTAProps) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.content}>
          <h2 className={styles.title}>{ctaLabel}</h2>
          <p className={styles.description}>{description}</p>
          <Link href="/demo" className="btn-inner btn-inner-lg btn-inner-primary">
            Schedule Demo
          </Link>
          <span className={styles.note}>No credit card required</span>
        </div>
      </div>
    </section>
  )
}
