import data from '@/data/patient-engagement-software-guide.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function PatientEngagementSoftwareGuidePage() {
  return <BlogJsonPage data={data} />
}
