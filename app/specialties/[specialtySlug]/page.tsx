import type { Metadata } from 'next'
import { getSpecialtyPageData, getAllSpecialtyParams } from '@/lib/feature-specialty-data'
import SpecialtyPage from '@/components/templates/SpecialtyPage'

export function generateStaticParams() {
  return getAllSpecialtyParams()
}

export async function generateMetadata({
  params,
}: {
  params: { specialtySlug: string }
}): Promise<Metadata> {
  const data = getSpecialtyPageData(params.specialtySlug)
  if (!data) return {}
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      type: 'website',
    },
  }
}

export default function SpecialtyDynamicPage({
  params,
}: {
  params: { specialtySlug: string }
}) {
  const data = getSpecialtyPageData(params.specialtySlug)
  if (!data) return null
  return <SpecialtyPage data={data} />
}
