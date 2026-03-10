import type { Metadata } from 'next'
import data from '@/data/prior-auth-denial-prevention-guide.json'
import BlogJsonPage from '@/components/templates/BlogJsonPage'

export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  keywords: data.meta.keywords,
}

export default function PriorAuthDenialPreventionGuidePage() {
  return <BlogJsonPage data={data} />
}
