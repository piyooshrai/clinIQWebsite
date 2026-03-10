import type { Metadata } from 'next'
import data from '@/data/allergy-shot-scheduling-tracking.json'
import BlogJsonPage from '@/components/templates/BlogJsonPage'

export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  keywords: data.meta.keywords,
}

export default function AllergyShottSchedulingTrackingPage() {
  return <BlogJsonPage data={data} />
}
