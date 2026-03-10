import data from '@/data/mat-patient-monitoring-compliance.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function MatPatientMonitoringCompliancePage() {
  return <BlogJsonPage data={data} />
}
