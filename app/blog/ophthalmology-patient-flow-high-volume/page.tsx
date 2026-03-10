import data from '@/data/ophthalmology-patient-flow-high-volume.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function OphthalmologyPatientFlowHighVolumePage() {
  return <BlogJsonPage data={data} />
}
