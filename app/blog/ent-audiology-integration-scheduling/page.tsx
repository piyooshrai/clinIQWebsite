import type { Metadata } from 'next'
import data from '@/data/ent-audiology-integration-scheduling.json'
import BlogJsonPage from '@/components/templates/BlogJsonPage'

export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  keywords: data.meta.keywords,
}

export default function EntAudiologyIntegrationSchedulingPage() {
  return <BlogJsonPage data={data} />
}
