import data from '@/data/rheumatology-patient-flow.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function RheumatologyPatientFlowPage() {
  return <BlogJsonPage data={data} />
}
