import type { Metadata } from 'next'
import data from '@/data/rtm-billing-pillar.json'
import FeaturePillarPage from '@/components/templates/FeaturePillarPage'

export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  keywords: data.meta.keywords,
}

export default function RtmFeaturePage() {
  return <FeaturePillarPage data={data} />
}
