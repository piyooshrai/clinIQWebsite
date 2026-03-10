import type { Metadata } from 'next'
import data from '@/data/pt-visit-cap-tracking.json'
import BlogJsonPage from '@/components/templates/BlogJsonPage'

export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  keywords: data.meta.keywords,
}

export default function PtVisitCapTrackingPage() {
  return <BlogJsonPage data={data} />
}
