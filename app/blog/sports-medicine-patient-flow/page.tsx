import data from '@/data/sports-medicine-patient-flow.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function SportsMedicinePatientFlowPage() {
  return <BlogJsonPage data={data} />
}
