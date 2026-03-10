import type { Metadata } from 'next'
import data from '@/data/gi-procedure-scheduling-colonoscopy-egd.json'
import BlogJsonPage from '@/components/templates/BlogJsonPage'

export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  keywords: data.meta.keywords,
}

export default function GiProcedureSchedulingColonoscopyEgdPage() {
  return <BlogJsonPage data={data} />
}
