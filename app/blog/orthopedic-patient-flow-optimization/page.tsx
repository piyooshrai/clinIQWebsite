import data from '@/data/orthopedic-patient-flow-optimization.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function OrthopedicPatientFlowOptimizationPage() {
  return <BlogJsonPage data={data} />
}
