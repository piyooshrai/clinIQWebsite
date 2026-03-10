import data from '@/data/ophthalmology-prior-auth-cataract-injections.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function OphthalmologyPriorAuthCataractInjectionsPage() {
  return <BlogJsonPage data={data} />
}
