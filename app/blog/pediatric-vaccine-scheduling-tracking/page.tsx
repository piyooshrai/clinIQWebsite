import type { Metadata } from 'next'
import data from '@/data/pediatric-vaccine-scheduling-tracking.json'
import BlogJsonPage from '@/components/templates/BlogJsonPage'

export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  keywords: data.meta.keywords,
}

export default function PediatricVaccineSchedulingTrackingPage() {
  return <BlogJsonPage data={data} />
}
