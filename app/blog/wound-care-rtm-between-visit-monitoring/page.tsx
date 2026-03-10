import type { Metadata } from 'next'
import data from '@/data/wound-care-rtm-between-visit-monitoring.json'
import BlogJsonPage from '@/components/templates/BlogJsonPage'

export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  keywords: data.meta.keywords,
}

export default function WoundCareRtmBetweenVisitMonitoringPage() {
  return <BlogJsonPage data={data} />
}
