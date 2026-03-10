import data from '@/data/gastroenterology-prior-auth-biologics.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function GastroenterologyPriorAuthBiologicsPage() {
  return <BlogJsonPage data={data} />
}
