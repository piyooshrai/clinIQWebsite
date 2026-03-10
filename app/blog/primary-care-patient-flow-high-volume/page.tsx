import data from '@/data/primary-care-patient-flow-high-volume.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function PrimaryCarePatientFlowHighVolumePage() {
  return <BlogJsonPage data={data} />
}
