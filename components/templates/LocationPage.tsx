import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import LocationHero from '@/components/LocationHero'
import LocationFeatures from '@/components/LocationFeatures'
import LocationContext from '@/components/LocationContext'
import LocationCTA from '@/components/LocationCTA'
import type { FeatureKey } from '@/components/LocationFeatures'
import type { ContextPoint } from '@/components/LocationContext'
import styles from './LocationPage.module.css'
import { productSchema } from '@/lib/product-schema'

export interface LocationPageProps {
  city: string
  state: string
  stateAbbr: string
  locationSlug: string
  heroTitle: string
  heroSubtitle: string
  heroBadge?: string
  contextHeading: string
  contextIntro: string
  contextPoints: ContextPoint[]
  featureKeys?: FeatureKey[]
  ctaLabel?: string
  ctaDescription?: string
}

export default function LocationPage({
  city,
  state,
  stateAbbr,
  locationSlug,
  heroTitle,
  heroSubtitle,
  heroBadge,
  contextHeading,
  contextIntro,
  contextPoints,
  featureKeys,
  ctaLabel,
  ctaDescription,
}: LocationPageProps) {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.cliniqhealthcare.com' },
      { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://www.cliniqhealthcare.com/locations' },
      {
        '@type': 'ListItem',
        position: 3,
        name: `${city}, ${stateAbbr}`,
        item: `https://www.cliniqhealthcare.com/locations/${locationSlug}`,
      },
    ],
  }

  const baseProduct = productSchema({
    name: `clinIQ — ${city}, ${state}`,
    description: heroSubtitle,
    category: 'Clinic operations software',
  })
  // Where clinIQ is offered belongs on the offer: Product has no areaServed field.
  const localBusinessSchema = {
    ...baseProduct,
    offers: {
      ...baseProduct.offers,
      areaServed: {
        '@type': 'City',
        name: city,
        containedInPlace: { '@type': 'State', name: state },
      },
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <NavInner />
      <main>
        <div className={styles.breadcrumbBar}>
          <div className="container">
            <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
              <a href="/">Home</a>
              <span aria-hidden="true">/</span>
              <a href="/locations">Locations</a>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{city}, {stateAbbr}</span>
            </nav>
          </div>
        </div>
        <LocationHero
          badge={heroBadge ?? `${city}, ${stateAbbr}`}
          title={heroTitle}
          subtitle={heroSubtitle}
        />
        {featureKeys && featureKeys.length > 0 && (
          <LocationFeatures features={featureKeys} />
        )}
        <LocationContext heading={contextHeading} intro={contextIntro} points={contextPoints} />
        <LocationCTA ctaLabel={ctaLabel ?? `Book a Demo — ${city}`} description={ctaDescription} />
      </main>
      <FooterInner />
    </>
  )
}
