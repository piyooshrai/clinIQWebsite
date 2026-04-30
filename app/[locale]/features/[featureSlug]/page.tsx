import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import PillarSpecialtyPage, { type PillarData } from '@/components/templates/PillarSpecialtyPage'
import analyticsData from '@/data/feature-analytics.json'
import checkInData from '@/data/feature-patient-check-in.json'
import patientFlowData from '@/data/feature-patient-flow.json'
import preAuthData from '@/data/feature-pre-authorization.json'
import rtmData from '@/data/feature-rtm-billing.json'
import schedulingData from '@/data/feature-scheduling.json'
import telehealthData from '@/data/feature-telehealth.json'
import patientSatisfactionData from '@/data/feature-patient-satisfaction.json'
import wearableIntegrationData from '@/data/feature-wearable-integration.json'
import secureMessagingData from '@/data/feature-secure-messaging.json'
import secureFileExchangeData from '@/data/feature-secure-file-exchange.json'
import patientAppData from '@/data/feature-patient-app.json'

// Feature pillar pages keyed by the URL slug used throughout the site.
const featurePillars: Record<string, PillarData> = {
  analytics: analyticsData as unknown as PillarData,
  'check-in': checkInData as unknown as PillarData,
  'patient-flow': patientFlowData as unknown as PillarData,
  'pre-auth': preAuthData as unknown as PillarData,
  rtm: rtmData as unknown as PillarData,
  scheduling: schedulingData as unknown as PillarData,
  telehealth: telehealthData as unknown as PillarData,
  'patient-satisfaction': patientSatisfactionData as unknown as PillarData,
  'wearable-integration': wearableIntegrationData as unknown as PillarData,
  'secure-messaging': secureMessagingData as unknown as PillarData,
  'secure-file-exchange': secureFileExchangeData as unknown as PillarData,
  'patient-app': patientAppData as unknown as PillarData,
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
  const ogImageMap: Record<string, string> = {
    'check-in': '/og-patient-check-in.png',
    'rtm': '/og-rtm-billing.png',
    'pre-auth': '/og-pre-authorization.png',
  }
  const ogImage = ogImageMap[params.featureSlug] ?? '/og-default.png'
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
      images: [{ url: ogImage, width: 1200, height: 630 }],
      ...(pillarWithDate.publishDate ? { publishedTime: pillarWithDate.publishDate } : {}),
    },
  }
}

export default function FeaturePillarSlugPage({ params }: { params: { featureSlug: string } }) {
  const data = featurePillars[params.featureSlug]
  if (!data) notFound()
  return <PillarSpecialtyPage data={data} />
}
