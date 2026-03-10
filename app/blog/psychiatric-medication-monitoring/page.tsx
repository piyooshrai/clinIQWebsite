import data from '@/data/psychiatric-medication-monitoring.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function PsychiatricMedicationMonitoringPage() {
  return <BlogJsonPage data={data} />
}
