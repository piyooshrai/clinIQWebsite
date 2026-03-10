import type { Metadata } from 'next'
import data from '@/data/urgent-care-patient-flow-volume.json'
import BlogJsonPage from '@/components/templates/BlogJsonPage'

export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  keywords: data.meta.keywords,
}

export default function UrgentCarePatientFlowVolumePage() {
  return <BlogJsonPage data={data} />
}
