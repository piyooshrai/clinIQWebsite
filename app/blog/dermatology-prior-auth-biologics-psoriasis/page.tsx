import type { Metadata } from 'next'
import data from '@/data/dermatology-prior-auth-biologics-psoriasis.json'
import BlogJsonPage from '@/components/templates/BlogJsonPage'

export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  keywords: data.meta.keywords,
}

export default function DermatologyPriorAuthBiologicsPsoriasisPage() {
  return <BlogJsonPage data={data} />
}
