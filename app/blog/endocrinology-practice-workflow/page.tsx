import data from '@/data/endocrinology-practice-workflow.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function EndocrinologyPracticeWorkflowPage() {
  return <BlogJsonPage data={data} />
}
