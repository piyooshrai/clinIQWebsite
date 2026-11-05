import data from '@/data/patient-scheduling-software-buyers-guide.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function PatientSchedulingSoftwareBuyersGuidePage() {
  return <BlogJsonPage data={data} />
}
