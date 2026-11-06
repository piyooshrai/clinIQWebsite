const SITE = 'https://www.cliniqhealthcare.com'

interface Props {
  slug: string
  /** Display name, e.g. "Atlanta, GA" or "Australia". */
  place: string
  description: string
  /** Country-level pages use Country; everything else is a City. */
  placeType?: 'City' | 'Country'
}

/** BreadcrumbList + Service JSON-LD for the static location pages. */
export default function LocationSchema({ slug, place, description, placeType = 'City' }: Props) {
  const url = `${SITE}/locations/${slug}`
  const graph = [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
        { '@type': 'ListItem', position: 2, name: 'Locations', item: `${SITE}/locations` },
        { '@type': 'ListItem', position: 3, name: place, item: url },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${url}#service`,
      name: `clinIQ clinic operations software for ${place}`,
      serviceType: 'Clinic operations software',
      description,
      url,
      provider: { '@type': 'Organization', name: 'clinIQ', url: SITE },
      areaServed: { '@type': placeType, name: place },
    },
  ]
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }) }}
    />
  )
}
