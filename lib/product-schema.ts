const BASE_URL = 'https://www.cliniqhealthcare.com'

/**
 * Structured data for clinIQ as a product, priced from the public pricing page.
 *
 * SoftwareApplication needs a star rating or review to be valid in Google, and clinIQ
 * has no published reviews yet, so it was flagged as invalid. Product is valid with
 * offers alone. Add aggregateRating here only from real, verifiable reviews.
 */
export function productSchema({ name, description, url, category }: {
  name: string
  description: string
  url?: string
  category?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    ...(url ? { url } : {}),
    ...(category ? { category } : {}),
    image: `${BASE_URL}/og-default.png`,
    brand: { '@type': 'Brand', name: 'clinIQ' },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: '449',
      highPrice: '999',
      offerCount: 3,
      url: `${BASE_URL}/pricing`,
    },
  }
}
