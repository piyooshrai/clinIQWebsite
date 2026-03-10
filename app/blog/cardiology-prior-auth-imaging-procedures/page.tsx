import type { Metadata } from 'next'
import data from '@/data/cardiology-prior-auth-imaging-procedures.json'
import BlogJsonPage from '@/components/templates/BlogJsonPage'

export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  keywords: data.meta.keywords,
}

export default function CardiologyPriorAuthImagingProceduresPage() {
  return <BlogJsonPage data={data} />
}
