import type { Metadata } from 'next'
import data from '@/data/rheumatology-rtm-ra-lupus-autoimmune.json'
import BlogJsonPage from '@/components/templates/BlogJsonPage'

export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  keywords: data.meta.keywords,
}

export default function RheumatologyRtmRaLupusAutoimmmunePage() {
  return <BlogJsonPage data={data} />
}
