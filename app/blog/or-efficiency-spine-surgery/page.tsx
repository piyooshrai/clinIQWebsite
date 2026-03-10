import type { Metadata } from 'next'
import data from '@/data/or-efficiency-spine-surgery.json'
import BlogJsonPage from '@/components/templates/BlogJsonPage'

export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  keywords: data.meta.keywords,
}

export default function OrEfficiencySpineSurgeryPage() {
  return <BlogJsonPage data={data} />
}
