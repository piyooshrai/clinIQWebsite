import type { Metadata } from 'next'
import data from '@/data/respiratory-rtm-copd-asthma.json'
import BlogJsonPage from '@/components/templates/BlogJsonPage'

export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  keywords: data.meta.keywords,
}

export default function RespiratoryRtmCopdAsthmaPage() {
  return <BlogJsonPage data={data} />
}
