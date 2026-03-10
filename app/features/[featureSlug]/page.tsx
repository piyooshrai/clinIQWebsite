import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import PillarSpecialtyPage, { type PillarData } from '@/components/templates/PillarSpecialtyPage'
import analyticsData from '@/data/analytics-pillar.json'
import checkInData from '@/data/patient-check-in-pillar.json'
import patientFlowData from '@/data/patient-flow-pillar.json'
import preAuthData from '@/data/pre-authorization-pillar.json'
import rtmData from '@/data/rtm-billing-pillar.json'
import schedulingData from '@/data/scheduling-pillar.json'

// Feature pillar pages keyed by the URL slug used throughout the site.
// Slugs match existing links in /features page and [featureSlug]/[specialtySlug] pages.
const featurePillars: Record<string, PillarData> = {
  analytics: analyticsData as unknown as PillarData,
  'check-in': checkInData as unknown as PillarData,
  'patient-flow': patientFlowData as unknown as PillarData,
  'pre-auth': preAuthData as unknown as PillarData,
  rtm: rtmData as unknown as PillarData,
  scheduling: schedulingData as unknown as PillarData,
}

export function generateStaticParams() {
  return Object.keys(featurePillars).map((slug) => ({ featureSlug: slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { featureSlug: string }
}): Promise<Metadata> {
  const data = featurePillars[params.featureSlug]
  if (!data) return {}
  const pillarWithDate = data as unknown as { publishDate?: string }
  const url = `https://cliniqhealthcare.com/features/${params.featureSlug}`
  return {
    title: data.meta.title,
    description: data.meta.description,
    keywords: data.meta.keywords ? [...data.meta.keywords] : undefined,
    alternates: { canonical: url },
    openGraph: {
      title: data.meta.title,
      description: data.meta.description,
      type: 'article',
      url,
      ...(pillarWithDate.publishDate ? { publishedTime: pillarWithDate.publishDate } : {}),
    },
  }
}

export default function FeaturePillarSlugPage({ params }: { params: { featureSlug: string } }) {
  const data = featurePillars[params.featureSlug]
  if (!data) notFound()
  return <PillarSpecialtyPage data={data} />
}
