import type { Metadata } from 'next'
import specialtiesData from '@/data/specialties-10-value-first'
import { getSpecialtyPageData, getAllSpecialtyParams } from '@/lib/feature-specialty-data'
import JsonSpecialtyPage from '@/components/templates/JsonSpecialtyPage'
import SpecialtyPage from '@/components/templates/SpecialtyPage'

type JsonSpecialty = (typeof specialtiesData)[number]

export function generateStaticParams() {
  const jsonSlugs = new Set<string>(specialtiesData.map((s) => s.slug))
  const generatedSlugs = getAllSpecialtyParams()
    .map((p) => p.specialtySlug)
    .filter((slug) => !jsonSlugs.has(slug))
  return [
    ...specialtiesData.map((s) => ({ slug: s.slug })),
    ...generatedSlugs.map((slug) => ({ slug })),
  ]
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
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
  const jsonData = specialtiesData.find((s) => s.slug === params.slug) as JsonSpecialty | undefined
  if (jsonData) {
    return <JsonSpecialtyPage data={jsonData} />
  }
  const generated = getSpecialtyPageData(params.slug)
  if (!generated) return null
  return <SpecialtyPage data={generated} />
}
