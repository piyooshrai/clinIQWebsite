import type { Metadata } from 'next'
import data from '@/data/reducing-wait-times-data-driven.json'
import BlogJsonPage from '@/components/templates/BlogJsonPage'

export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  keywords: data.meta.keywords,
}

export default function ReducingWaitTimesDataDrivenPage() {
  return <BlogJsonPage data={data} />
}
