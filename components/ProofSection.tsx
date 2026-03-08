import styles from './ProofSection.module.css'

export interface StatItem {
  value: string
  label: string
  context?: string
}

export interface TestimonialItem {
  quote: string
  name: string
  title: string
  specialty?: string
}

interface ProofSectionProps {
  headline?: string
  subheadline?: string
  stats?: StatItem[]
  testimonials?: TestimonialItem[]
  variant?: 'cream' | 'white' | 'dark'
}

function QuoteIcon() {
  return (
    <svg className={styles.quoteIcon} viewBox="0 0 32 24" fill="none" aria-hidden="true">
      <path
        d="M0 24V14.4C0 6.44 4.48 1.6 13.44 0l1.92 3.2C10.24 4.48 7.68 7.2 7.04 11.2H13.44V24H0zm18.56 0V14.4C18.56 6.44 23.04 1.6 32 0l1.92 3.2c-5.12 1.28-7.68 4-8.32 8H32V24H18.56z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function ProofSection({
  headline = 'Built for the way clinics actually work',
  subheadline,
  stats,
  testimonials,
  variant = 'cream',
}: ProofSectionProps) {
  return (
    <section className={`${styles.section} ${styles[variant]}`}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.headline}>{headline}</h2>
          {subheadline && <p className={styles.subheadline}>{subheadline}</p>}
        </div>

        {stats && stats.length > 0 && (
          <div className={styles.statsGrid}>
            {stats.map((stat, i) => (
              <div key={i} className={styles.statCard}>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
                {stat.context && <div className={styles.statContext}>{stat.context}</div>}
              </div>
            ))}
          </div>
        )}

        {testimonials && testimonials.length > 0 && (
          <div className={styles.testimonialGrid}>
            {testimonials.map((t, i) => (
              <div key={i} className={styles.testimonialCard}>
                <QuoteIcon />
                <blockquote className={styles.quote}>{t.quote}</blockquote>
                <div className={styles.attribution}>
                  <div className={styles.attributionName}>{t.name}</div>
                  <div className={styles.attributionTitle}>
                    {t.title}
                    {t.specialty && `, ${t.specialty}`}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
