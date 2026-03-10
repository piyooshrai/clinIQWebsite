import data from '@/data/prenatal-visit-scheduling-optimization.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function PrenatalVisitSchedulingOptimizationPage() {
  return <BlogJsonPage data={data} />
}
