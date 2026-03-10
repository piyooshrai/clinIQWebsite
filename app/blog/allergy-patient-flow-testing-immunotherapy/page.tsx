import data from '@/data/allergy-patient-flow-testing-immunotherapy.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function AllergyPatientFlowTestingImmunotherapyPage() {
  return <BlogJsonPage data={data} />
}
