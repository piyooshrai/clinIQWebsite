import type { Metadata } from 'next'
import data from '@/data/behavioral-health-no-shows.json'
import BlogJsonPage from '@/components/templates/BlogJsonPage'

export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  keywords: data.meta.keywords,
}

export default function BehavioralHealthNoShowsPage() {
  return <BlogJsonPage data={data} />
}
