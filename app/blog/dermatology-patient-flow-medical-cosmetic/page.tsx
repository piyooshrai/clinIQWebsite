import data from '@/data/dermatology-patient-flow-medical-cosmetic.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function DermatologyPatientFlowMedicalCosmeticPage() {
  return <BlogJsonPage data={data} />
}
