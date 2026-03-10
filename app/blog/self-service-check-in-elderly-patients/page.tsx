import type { Metadata } from 'next'
import data from '@/data/self-service-check-in-elderly-patients.json'
import BlogJsonPage from '@/components/templates/BlogJsonPage'

export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  keywords: data.meta.keywords,
}

export default function SelfServiceCheckInElderlyPatientsPage() {
  return <BlogJsonPage data={data} />
}
