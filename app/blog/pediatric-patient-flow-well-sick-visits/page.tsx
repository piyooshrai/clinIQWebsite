import data from '@/data/pediatric-patient-flow-well-sick-visits.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function PediatricPatientFlowWellSickVisitsPage() {
  return <BlogJsonPage data={data} />
}
