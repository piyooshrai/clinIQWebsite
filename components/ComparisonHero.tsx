'use client'

import Link from 'next/link'
import styles from './ComparisonHero.module.css'

interface ComparisonHeroProps {
  competitor: string
  title: string
  subtitle: string
  targetTerms?: string[]
}

function ArrowIcon() {
  return (
    <svg
      className={styles.btnIcon}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 10h12m-4-4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function ComparisonHero({
  competitor,
  title,
  subtitle,
}: ComparisonHeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBg}>
        <div className={styles.heroOrbTeal} />
        <div className={styles.heroOrbBlue} />
        <div className={styles.heroGrain} />
      </div>

      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            clinIQ vs {competitor}
          </div>

          <h1 className={styles.heroTitle}>{title}</h1>
          <p className={styles.heroSubtitle}>{subtitle}</p>

          <div className={styles.heroActions}>
            <Link href="/demo" className="btn-inner btn-inner-lg btn-inner-primary">
              Request Demo
              <ArrowIcon />
            </Link>
            <Link href="#comparison" className="btn-inner btn-inner-lg btn-inner-ghost">
              See the comparison
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
