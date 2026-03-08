import Link from 'next/link'
import styles from './LocationCTA.module.css'

interface LocationCTAProps {
  ctaLabel: string
  description?: string
}

export default function LocationCTA({
  ctaLabel,
  description = "15-minute walkthrough. We'll configure it for your region and workflow. No pressure.",
}: LocationCTAProps) {
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
