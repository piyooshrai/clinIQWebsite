import data from '@/data/oral-surgery-authorization-extractions-implants.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function OralSurgeryAuthorizationExtractionsImplantsPage() {
  return <BlogJsonPage data={data} />
}
