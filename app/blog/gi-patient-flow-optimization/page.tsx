import data from '@/data/gi-patient-flow-optimization.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function GiPatientFlowOptimizationPage() {
  return <BlogJsonPage data={data} />
}
