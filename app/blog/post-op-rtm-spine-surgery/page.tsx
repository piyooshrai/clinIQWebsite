import type { Metadata } from 'next'
import data from '@/data/post-op-rtm-spine-surgery.json'
import BlogJsonPage from '@/components/templates/BlogJsonPage'

export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  keywords: data.meta.keywords,
}

export default function PostOpRtmSpineSurgeryPage() {
  return <BlogJsonPage data={data} />
}
