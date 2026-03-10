import data from '@/data/ent-patient-flow-clinic-procedure.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function EntPatientFlowClinicProcedurePage() {
  return <BlogJsonPage data={data} />
}
