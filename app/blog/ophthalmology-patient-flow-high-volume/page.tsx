import type { Metadata } from 'next'
import data from '@/data/ophthalmology-patient-flow-high-volume.json'
import BlogJsonPage from '@/components/templates/BlogJsonPage'

export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  keywords: data.meta.keywords,
}

export default function OphthalmologyPatientFlowHighVolumePage() {
  return <BlogJsonPage data={data} />
}
