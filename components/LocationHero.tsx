import styles from './LocationHero.module.css'
import s from '@/app/specialties/specialty-full.module.css'
import type { FeatureKey } from './LocationFeatures'

const FEATURE_LINKS: Record<FeatureKey, { label: string; href: string }> = {
  'patient-flow': { label: 'Patient flow', href: '/features/patient-flow' },
  'check-in': { label: 'Digital check-in', href: '/features/check-in' },
  rtm: { label: 'RTM billing', href: '/features/rtm' },
  'pre-auth': { label: 'Prior authorization', href: '/features/pre-auth' },
  scheduling: { label: 'Scheduling', href: '/features/scheduling' },
  analytics: { label: 'Analytics', href: '/features/analytics' },
}

interface LocationHeroProps {
  badge: string
  title: string
  subtitle: string
  /** Modules featured for this market; shown in the side card. */
  features?: FeatureKey[]
}

export default function LocationHero({ badge, title, subtitle, features = [] }: LocationHeroProps) {
  const place = badge.split(',')[0]
  return (
    <section className={styles.hero}>
      <div className={styles.heroBg}>
        <div className={styles.heroOrbTeal} />
        <div className={styles.heroOrbBlue} />
        <div className={styles.heroGrain} />
      </div>

      <div className="container">
        <div className={styles.heroGrid}>
          <div className={styles.heroContent}>
            <span className={styles.heroBadge}>clinIQ for {badge} Clinics</span>
            <h1 className={styles.heroTitle}>{title}</h1>
            <p className={styles.heroSubtitle}>{subtitle}</p>
            <div className={styles.heroActions}>
              <a href="/demo" className={s.btnPrimary}>
                Request Demo
                <svg className={s.btnIcon} viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M4 10h12m-4-4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="/pricing" className={s.btnGhost}>See Pricing</a>
            </div>
          </div>

          {features.length > 0 && (
            <aside className={styles.heroAside} aria-label={`clinIQ for ${place} clinics`}>
              <span className={styles.heroAsideLabel}>Built for {place} clinics</span>
              <ul className={styles.heroList}>
                {features.map((key) => (
                  <li key={key}>
                    <a href={FEATURE_LINKS[key].href}>
                      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                        <path d="M5 10.5l3.2 3.2L15 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {FEATURE_LINKS[key].label}
                    </a>
                  </li>
                ))}
              </ul>
              <p className={styles.heroAsideNote}>Works alongside your existing EHR. 15-minute demo, configured for your specialty.</p>
            </aside>
          )}
        </div>
      </div>
    </section>
  )
}
