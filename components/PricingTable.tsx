import Link from 'next/link'
import styles from './PricingTable.module.css'

interface PricingTier {
  name: string
  price: string
  priceNote?: string
  badge?: string
  featured?: boolean
  patients: string
  features: string[]
  cta: string
  ctaHref: string
}

const TIERS: PricingTier[] = [
  {
    name: 'Starter',
    price: '$249',
    priceNote: '/month',
    patients: 'Up to 500 patients/month',
    features: [
      'Check-In + Patient Flow',
      'LobbyView display',
      'Email support',
    ],
    cta: 'Get Started',
    ctaHref: '/demo',
  },
  {
    name: 'Professional',
    price: '$499',
    priceNote: '/month',
    badge: 'Most Popular',
    featured: true,
    patients: 'Up to 2,000 patients/month',
    features: [
      'Everything in Starter',
      'RTM Billing',
      'Scheduling',
      'Analytics dashboard',
      'Priority support',
    ],
    cta: 'Get Started',
    ctaHref: '/demo',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    priceNote: 'pricing',
    patients: 'Unlimited patients',
    features: [
      'Everything in Professional',
      'Pre-Authorization',
      'Custom integrations',
      'Dedicated success manager',
      'SLA guarantee',
    ],
    cta: 'Contact Sales',
    ctaHref: '/contact',
  },
]

function CheckIcon() {
  return (
    <svg className={styles.checkIcon} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function PricingTable() {
  return (
    <section className={styles.section}>
      <div className="container">
        {/* Tier cards */}
        <div className={styles.grid}>
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`${styles.card} ${tier.featured ? styles.cardFeatured : ''}`}
            >
              {tier.badge && (
                <span className={styles.badge}>{tier.badge}</span>
              )}

              <div className={styles.cardHeader}>
                <span className={styles.tierName}>{tier.name}</span>
                <div className={styles.priceRow}>
                  <span className={styles.price}>{tier.price}</span>
                  {tier.priceNote && (
                    <span className={styles.priceNote}>{tier.priceNote}</span>
                  )}
                </div>
                <p className={styles.patients}>{tier.patients}</p>
              </div>

              <ul className={styles.featureList}>
                {tier.features.map((f) => (
                  <li key={f} className={styles.featureItem}>
                    <CheckIcon />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={tier.ctaHref}
                className={`${styles.cta} ${tier.featured ? styles.ctaPrimary : styles.ctaSecondary}`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Addons + all-inclusive notes */}
        <div className={styles.notes}>
          <div className={styles.noteItem}>
            <span className={styles.noteLabel}>Implementation</span>
            <span className={styles.noteValue}>$750 one-time setup</span>
          </div>
          <div className={styles.noteDivider} />
          <div className={styles.noteItem}>
            <span className={styles.noteLabel}>EHR Integrations</span>
            <span className={styles.noteValue}>Custom quote based on EHR</span>
          </div>
          <div className={styles.noteDivider} />
          <div className={styles.noteItem}>
            <span className={styles.noteLabel}>All plans include</span>
            <span className={styles.noteValue}>HIPAA-compliant infrastructure &middot; 99.9% uptime &middot; Free onboarding</span>
          </div>
        </div>
      </div>
    </section>
  )
}
