import type { Metadata } from 'next'
import data from '@/data/nephrology-patient-flow-dialysis-coordination.json'
import BlogJsonPage from '@/components/templates/BlogJsonPage'

export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  keywords: data.meta.keywords,
}

export default function NephrologyPatientFlowDialysisCoordinationPage() {
  return <BlogJsonPage data={data} />
}
