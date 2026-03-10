import type { Metadata } from 'next'
import data from '@/data/behavioral-health-rtm-addiction-medicine.json'
import BlogJsonPage from '@/components/templates/BlogJsonPage'

export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  keywords: data.meta.keywords,
}

export default function BehavioralHealthRtmAddictionMedicinePage() {
  return <BlogJsonPage data={data} />
}
