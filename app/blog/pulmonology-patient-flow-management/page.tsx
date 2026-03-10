import data from '@/data/pulmonology-patient-flow-management.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function PulmonologyPatientFlowManagementPage() {
  return <BlogJsonPage data={data} />
}
