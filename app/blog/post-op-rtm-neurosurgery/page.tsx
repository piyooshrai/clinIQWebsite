import type { Metadata } from 'next'
import data from '@/data/post-op-rtm-neurosurgery.json'
import BlogJsonPage from '@/components/templates/BlogJsonPage'

export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  keywords: data.meta.keywords,
}

export default function PostOpRtmNeurosurgeryPage() {
  return <BlogJsonPage data={data} />
}
