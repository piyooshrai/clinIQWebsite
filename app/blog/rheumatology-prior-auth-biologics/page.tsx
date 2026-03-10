import data from '@/data/rheumatology-prior-auth-biologics.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function RheumatologyPriorAuthBiologicsPage() {
  return <BlogJsonPage data={data} />
}
