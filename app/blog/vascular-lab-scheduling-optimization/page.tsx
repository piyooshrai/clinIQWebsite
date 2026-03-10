import data from '@/data/vascular-lab-scheduling-optimization.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function VascularLabSchedulingOptimizationPage() {
  return <BlogJsonPage data={data} />
}
