import type { Metadata } from 'next'
import data from '@/data/dermatology-patient-flow-medical-cosmetic.json'
import BlogJsonPage from '@/components/templates/BlogJsonPage'

export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  keywords: data.meta.keywords,
}

export default function DermatologyPatientFlowMedicalCosmeticPage() {
  return <BlogJsonPage data={data} />
}
