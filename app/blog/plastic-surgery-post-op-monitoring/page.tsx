import type { Metadata } from 'next'
import data from '@/data/plastic-surgery-post-op-monitoring.json'
import BlogJsonPage from '@/components/templates/BlogJsonPage'

export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  keywords: data.meta.keywords,
}

export default function PlasticSurgeryPostOpMonitoringPage() {
  return <BlogJsonPage data={data} />
}
