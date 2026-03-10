import data from '@/data/infusion-center-patient-flow.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function InfusionCenterPatientFlowPage() {
  return <BlogJsonPage data={data} />
}
