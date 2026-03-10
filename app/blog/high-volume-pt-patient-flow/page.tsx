import data from '@/data/high-volume-pt-patient-flow.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function HighVolumePtPatientFlowPage() {
  return <BlogJsonPage data={data} />
}
