import data from '@/data/plastic-surgery-consultation-workflow.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function PlasticSurgeryConsultationWorkflowPage() {
  return <BlogJsonPage data={data} />
}
