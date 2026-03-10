import data from '@/data/neurosurgery-authorization-complex-cases.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function NeurosurgeryAuthorizationComplexCasesPage() {
  return <BlogJsonPage data={data} />
}
