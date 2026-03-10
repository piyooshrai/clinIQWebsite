import type { Metadata } from 'next'
import data from '@/data/oncology-infusion-scheduling-optimization.json'
import BlogJsonPage from '@/components/templates/BlogJsonPage'

export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  keywords: data.meta.keywords,
}

export default function OncologyInfusionSchedulingOptimizationPage() {
  return <BlogJsonPage data={data} />
}
