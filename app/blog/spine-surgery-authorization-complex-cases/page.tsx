import data from '@/data/spine-surgery-authorization-complex-cases.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function SpineSurgeryAuthorizationComplexCasesPage() {
  return <BlogJsonPage data={data} />
}
