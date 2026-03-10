import type { Metadata } from 'next'
import data from '@/data/lomn-best-practices-specialty.json'
import BlogJsonPage from '@/components/templates/BlogJsonPage'

export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  keywords: data.meta.keywords,
}

export default function LomnBestPracticesSpecialtyPage() {
  return <BlogJsonPage data={data} />
}
