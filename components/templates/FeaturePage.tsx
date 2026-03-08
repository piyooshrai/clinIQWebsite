import type { ReactNode } from 'react'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import FeatureHero from '@/components/FeatureHero'
import FeatureProblem from '@/components/FeatureProblem'
import FeatureHowItWorks from '@/components/FeatureHowItWorks'
import FeatureCTA from '@/components/FeatureCTA'
import styles from './FeaturePage.module.css'

export interface FeaturePageProps {
  badge: string
  title: ReactNode
  subtitle: string
  problemPoints: { heading: string; body: string }[]
  howItWorksSteps: [{ title: string; body: string }, { title: string; body: string }, { title: string; body: string }]
  ctaTitle?: ReactNode
  ctaDescription?: string
  breadcrumb?: { label: string; href: string }[]
  schemaName?: string
  schemaDescription?: string
}

export default function FeaturePage({
  badge,
  title,
  subtitle,
  problemPoints,
  howItWorksSteps,
  ctaTitle,
  ctaDescription,
  breadcrumb,
  schemaName,
  schemaDescription,
}: FeaturePageProps) {
  const breadcrumbSchema = breadcrumb
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cliniq.com' },
          { '@type': 'ListItem', position: 2, name: 'Features', item: 'https://cliniq.com/features' },
          ...breadcrumb.map((b, i) => ({
            '@type': 'ListItem',
            position: i + 3,
            name: b.label,
            item: `https://cliniq.com${b.href}`,
          })),
        ],
      }
    : null

  const productSchema = schemaName
    ? {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: schemaName,
        description: schemaDescription,
        applicationCategory: 'HealthcareApplication',
        operatingSystem: 'Web',
        offers: {
          '@type': 'Offer',
          priceCurrency: 'USD',
          price: '249',
          priceSpecification: { '@type': 'UnitPriceSpecification', billingDuration: 'P1M' },
        },
      }
    : null

  return (
    <>
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
      {productSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
      )}
      <NavInner />
      <main>
        {breadcrumb && (
          <div className={styles.breadcrumbBar}>
            <div className="container">
              <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
                <a href="/">Home</a>
                <span aria-hidden="true">/</span>
                <a href="/features">Features</a>
                {breadcrumb.map((b) => (
                  <span key={b.href}>
                    <span aria-hidden="true">/</span>
                    <a href={b.href}>{b.label}</a>
                  </span>
                ))}
              </nav>
            </div>
          </div>
        )}
        <FeatureHero badge={badge} title={title} subtitle={subtitle} />
        <FeatureProblem points={problemPoints} />
        <FeatureHowItWorks steps={howItWorksSteps} />
        <FeatureCTA title={ctaTitle} description={ctaDescription} />
      </main>
      <FooterInner />
    </>
  )
}
