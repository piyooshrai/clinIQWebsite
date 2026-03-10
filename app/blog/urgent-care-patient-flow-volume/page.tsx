import data from '@/data/urgent-care-patient-flow-volume.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function UrgentCarePatientFlowVolumePage() {
  return <BlogJsonPage data={data} />
}
