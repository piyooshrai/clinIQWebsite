import data from '@/data/cardiology-practice-workflow-optimization.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function CardiologyPracticeWorkflowOptimizationPage() {
  return <BlogJsonPage data={data} />
}
