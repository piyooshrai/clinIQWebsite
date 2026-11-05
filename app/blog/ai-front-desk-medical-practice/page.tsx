import data from '@/data/ai-front-desk-medical-practice.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function AiFrontDeskMedicalPracticePage() {
  return <BlogJsonPage data={data} />
}
