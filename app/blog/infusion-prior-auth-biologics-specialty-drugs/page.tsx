import type { Metadata } from 'next'
import data from '@/data/infusion-prior-auth-biologics-specialty-drugs.json'
import BlogJsonPage from '@/components/templates/BlogJsonPage'

export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  keywords: data.meta.keywords,
}

export default function InfusionPriorAuthBiologicsSpecialtyDrugsPage() {
  return <BlogJsonPage data={data} />
}
