import type { Metadata } from 'next'
import data from '@/data/ent-patient-flow-clinic-procedure.json'
import BlogJsonPage from '@/components/templates/BlogJsonPage'

export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  keywords: data.meta.keywords,
}

export default function EntPatientFlowClinicProcedurePage() {
  return <BlogJsonPage data={data} />
}
