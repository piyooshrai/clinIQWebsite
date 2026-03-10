import data from '@/data/self-service-check-in-elderly-patients.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function SelfServiceCheckInElderlyPatientsPage() {
  return <BlogJsonPage data={data} />
}
