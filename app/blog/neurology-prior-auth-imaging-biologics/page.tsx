import type { Metadata } from 'next'
import data from '@/data/neurology-prior-auth-imaging-biologics.json'
import BlogJsonPage from '@/components/templates/BlogJsonPage'

export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  keywords: data.meta.keywords,
}

export default function NeurologyPriorAuthImagingBiologicsPage() {
  return <BlogJsonPage data={data} />
}
