import type { Metadata } from 'next'
import specialties10 from '@/data/specialties-10-value-first'
import specialties20 from '@/data/specialties-20-value-first'
import painManagementPillar from '@/data/pain-management-pillar.json'
import { getSpecialtyPageData, getAllSpecialtyParams } from '@/lib/feature-specialty-data'
import JsonSpecialtyPage from '@/components/templates/JsonSpecialtyPage'
import PillarSpecialtyPage from '@/components/templates/PillarSpecialtyPage'
import SpecialtyPage from '@/components/templates/SpecialtyPage'

// Pillar pages keyed by slug — checked before JSON specialties
const pillarPages: Record<string, typeof painManagementPillar> = {
  'pain-management': painManagementPillar,
}

// Filter out slugs handled by pillar pages to avoid duplicate routing
const specialtiesData = [...specialties10, ...specialties20].filter(
  (s) => !(s.slug in pillarPages)
)
type JsonSpecialty = (typeof specialtiesData)[number]

export function generateStaticParams() {
  const pillarSlugs = Object.keys(pillarPages)
  const jsonSlugs = new Set<string>([...pillarSlugs, ...specialtiesData.map((s) => s.slug)])
  const generatedSlugs = getAllSpecialtyParams()
    .map((p) => p.specialtySlug)
    .filter((slug) => !jsonSlugs.has(slug))
  return [
    ...pillarSlugs.map((slug) => ({ slug })),
    ...specialtiesData.map((s) => ({ slug: s.slug })),
    ...generatedSlugs.map((slug) => ({ slug })),
  ]
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const pillar = pillarPages[params.slug]
  if (pillar) {
    return {
      title: pillar.meta.title,
      description: pillar.meta.description,
      keywords: pillar.meta.keywords,
      openGraph: { title: pillar.meta.title, description: pillar.meta.description, type: 'website' },
    }
  }
  const jsonData = specialtiesData.find((s) => s.slug === params.slug) as JsonSpecialty | undefined
  if (jsonData) {
    return {
      title: jsonData.meta.title,
      description: jsonData.meta.description,
      openGraph: {
        title: jsonData.meta.title,
        description: jsonData.meta.description,
        type: 'website',
      },
    }
  }
  const generated = getSpecialtyPageData(params.slug)
  if (generated) {
    return {
      title: generated.metaTitle,
      description: generated.metaDescription,
      openGraph: {
        title: generated.metaTitle,
        description: generated.metaDescription,
        type: 'website',
      },
    }
  }
  return {}
}

export default function SpecialtySlugPage({ params }: { params: { slug: string } }) {
  const pillar = pillarPages[params.slug]
  if (pillar) {
    return <PillarSpecialtyPage data={pillar} />
  }
  const jsonData = specialtiesData.find((s) => s.slug === params.slug) as JsonSpecialty | undefined
  if (jsonData) {
    return <JsonSpecialtyPage data={jsonData} />
  }
  const generated = getSpecialtyPageData(params.slug)
  if (!generated) return null
  return <SpecialtyPage data={generated} />
}
