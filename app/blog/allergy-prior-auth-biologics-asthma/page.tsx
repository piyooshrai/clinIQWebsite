import type { Metadata } from 'next'
import data from '@/data/allergy-prior-auth-biologics-asthma.json'
import BlogJsonPage from '@/components/templates/BlogJsonPage'

export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  keywords: data.meta.keywords,
}

export default function AllergyPriorAuthBiologicsAsthmaPage() {
  return <BlogJsonPage data={data} />
}
