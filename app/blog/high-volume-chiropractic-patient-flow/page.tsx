import data from '@/data/high-volume-chiropractic-patient-flow.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function HighVolumeChiropracticPatientFlowPage() {
  return <BlogJsonPage data={data} />
}
