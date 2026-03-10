import data from '@/data/ophthalmology-diagnostic-testing-workflow.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function OphthalmologyDiagnosticTestingWorkflowPage() {
  return <BlogJsonPage data={data} />
}
