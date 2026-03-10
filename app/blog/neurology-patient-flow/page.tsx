import data from '@/data/neurology-patient-flow.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function NeurologyPatientFlowPage() {
  return <BlogJsonPage data={data} />
}
