import data from '@/data/obgyn-patient-flow-prenatal-gyn-procedures.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function ObgynPatientFlowPrenatalGynProceduresPage() {
  return <BlogJsonPage data={data} />
}
