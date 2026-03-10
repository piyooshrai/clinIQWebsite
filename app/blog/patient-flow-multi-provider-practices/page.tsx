import data from '@/data/patient-flow-multi-provider-practices.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function PatientFlowMultiProviderPracticesPage() {
  return <BlogJsonPage data={data} />
}
