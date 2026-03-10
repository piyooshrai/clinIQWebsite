import type { Metadata } from 'next'
import data from '@/data/psychiatric-medication-monitoring.json'
import BlogJsonPage from '@/components/templates/BlogJsonPage'

export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  keywords: data.meta.keywords,
}

export default function PsychiatricMedicationMonitoringPage() {
  return <BlogJsonPage data={data} />
}
