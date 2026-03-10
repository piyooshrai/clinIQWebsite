import data from '@/data/nephrology-patient-flow-dialysis-coordination.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function NephrologyPatientFlowDialysisCoordinationPage() {
  return <BlogJsonPage data={data} />
}
