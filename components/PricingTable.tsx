import Link from 'next/link'
import { useTranslations } from 'next-intl'
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

function CheckIcon() {
  return (
    <svg className={styles.checkIcon} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function PricingTable() {
  const t = useTranslations('pricingTable')
  const tiers: PricingTier[] = [
    {
      name: 'Starter',
      price: '$249',
      priceNote: t('month'),
      patients: t('starter.patients'),
      features: [t('starter.f1'), t('starter.f2'), t('starter.f3')],
      cta: t('getStarted'),
      ctaHref: '/demo',
    },
    {
      name: 'Professional',
      price: '$499',
      priceNote: t('month'),
      badge: t('mostPopular'),
      featured: true,
      patients: t('professional.patients'),
      features: [t('professional.f1'), t('professional.f2'), t('professional.f3'), t('professional.f4'), t('professional.f5')],
      cta: t('getStarted'),
      ctaHref: '/demo',
    },
    {
      name: 'Enterprise',
      price: t('custom'),
      priceNote: t('pricingNote'),
      patients: t('enterprise.patients'),
      features: [t('enterprise.f1'), t('enterprise.f2'), t('enterprise.f3'), t('enterprise.f4'), t('enterprise.f5')],
      cta: t('contactSales'),
      ctaHref: '/contact',
    },
  ]

  return (
    <section className={styles.section}>
      <div className="container">
        {/* Tier cards */}
        <div className={styles.grid}>
          {tiers.map((tier) => (
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
            <span className={styles.noteLabel}>{t('implementationLabel')}</span>
            <span className={styles.noteValue}>{t('implementationValue')}</span>
          </div>
          <div className={styles.noteDivider} />
          <div className={styles.noteItem}>
            <span className={styles.noteLabel}>{t('ehrLabel')}</span>
            <span className={styles.noteValue}>{t('ehrValue')}</span>
          </div>
          <div className={styles.noteDivider} />
          <div className={styles.noteItem}>
            <span className={styles.noteLabel}>{t('allPlansLabel')}</span>
            <span className={styles.noteValue}>{t('allPlansValue')}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
