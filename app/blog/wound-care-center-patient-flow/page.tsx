import data from '@/data/wound-care-center-patient-flow.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function WoundCareCenterPatientFlowPage() {
  return <BlogJsonPage data={data} />
}
