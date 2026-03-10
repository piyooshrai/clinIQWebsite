import data from '@/data/vascular-surgery-authorization-complex-procedures.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function VascularSurgeryAuthorizationComplexProceduresPage() {
  return <BlogJsonPage data={data} />
}
