import type { Metadata } from 'next'
import data from '@/data/spine-surgery-authorization-complex-cases.json'
import BlogJsonPage from '@/components/templates/BlogJsonPage'

export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  keywords: data.meta.keywords,
}

export default function SpineSurgeryAuthorizationComplexCasesPage() {
  return <BlogJsonPage data={data} />
}
