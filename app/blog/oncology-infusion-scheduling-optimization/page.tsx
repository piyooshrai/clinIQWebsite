import data from '@/data/oncology-infusion-scheduling-optimization.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function OncologyInfusionSchedulingOptimizationPage() {
  return <BlogJsonPage data={data} />
}
