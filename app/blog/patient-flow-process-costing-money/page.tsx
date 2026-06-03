import data from '@/data/patient-flow-process-costing-money.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function PatientFlowProcessCostingMoneyPage() {
  return <BlogJsonPage data={data} />
}
