import type { Metadata } from 'next'
import data from '@/data/obgyn-patient-flow-prenatal-gyn-procedures.json'
import BlogJsonPage from '@/components/templates/BlogJsonPage'

export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  keywords: data.meta.keywords,
}

export default function ObgynPatientFlowPrenatalGynProceduresPage() {
  return <BlogJsonPage data={data} />
}
