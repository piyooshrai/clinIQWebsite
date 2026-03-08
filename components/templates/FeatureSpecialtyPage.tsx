import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import FeatureHero from '@/components/FeatureHero'
import SpecialtyPain from '@/components/SpecialtyPain'
import FeatureHowItWorks from '@/components/FeatureHowItWorks'
import FeatureCTA from '@/components/FeatureCTA'
import styles from './FeatureSpecialtyPage.module.css'

export interface FeatureSpecialtyPageProps {
  feature: string
  specialty: string
  badge: string
  title: string
  subtitle: string
  painHeading: string
  painIntro: string
  painPoints: string[]
  solutionBlock?: string
  howItWorksSteps: [{ title: string; body: string }, { title: string; body: string }, { title: string; body: string }]
  ctaTitle?: string
  ctaDescription?: string
  featureSlug: string
  specialtySlug: string
}

export default function FeatureSpecialtyPage({
  feature,
  specialty,
  badge,
  title,
  subtitle,
  painHeading,
  painIntro,
  painPoints,
  solutionBlock,
  howItWorksSteps,
  ctaTitle,
  ctaDescription,
  featureSlug,
  specialtySlug,
}: FeatureSpecialtyPageProps) {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cliniq.com' },
      { '@type': 'ListItem', position: 2, name: 'Features', item: 'https://cliniq.com/features' },
      {
        '@type': 'ListItem',
        position: 3,
        name: feature,
        item: `https://cliniq.com/features/${featureSlug}`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: specialty,
        item: `https://cliniq.com/features/${featureSlug}/${specialtySlug}`,
      },
    ],
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${feature} for ${specialty} — clinIQ`,
    description: subtitle,
    provider: {
      '@type': 'Organization',
      name: 'clinIQ',
      url: 'https://cliniq.com',
    },
    serviceType: 'Healthcare Software',
    areaServed: 'US',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <NavInner />
      <main>
        <div className={styles.breadcrumbBar}>
          <div className="container">
            <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
              <a href="/">Home</a>
              <span aria-hidden="true">/</span>
              <a href="/features">Features</a>
              <span aria-hidden="true">/</span>
              <a href={`/features/${featureSlug}`}>{feature}</a>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{specialty}</span>
            </nav>
          </div>
        </div>
        <FeatureHero badge={badge} title={title} subtitle={subtitle} />
        <SpecialtyPain heading={painHeading} intro={painIntro} points={painPoints} />
        {solutionBlock && (
          <div className={styles.solutionSection}>
            <div className="container">
              <div
                className={styles.solutionContent}
                dangerouslySetInnerHTML={{ __html: solutionBlock }}
              />
            </div>
          </div>
        )}
        <FeatureHowItWorks steps={howItWorksSteps} />
        <FeatureCTA title={ctaTitle} description={ctaDescription} />
      </main>
      <FooterInner />
    </>
  )
}
