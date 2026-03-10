import type { Metadata } from 'next'
import data from '@/data/oral-surgery-authorization-extractions-implants.json'
import BlogJsonPage from '@/components/templates/BlogJsonPage'

export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  keywords: data.meta.keywords,
}

export default function OralSurgeryAuthorizationExtractionsImplantsPage() {
  return <BlogJsonPage data={data} />
}
