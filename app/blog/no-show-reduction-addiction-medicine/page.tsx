import type { Metadata } from 'next'
import data from '@/data/no-show-reduction-addiction-medicine.json'
import BlogJsonPage from '@/components/templates/BlogJsonPage'

export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  keywords: data.meta.keywords,
}

export default function NoShowReductionAddictionMedicinePage() {
  return <BlogJsonPage data={data} />
}
