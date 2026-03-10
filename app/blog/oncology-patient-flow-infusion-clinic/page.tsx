import data from '@/data/oncology-patient-flow-infusion-clinic.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function OncologyPatientFlowInfusionClinicPage() {
  return <BlogJsonPage data={data} />
}
