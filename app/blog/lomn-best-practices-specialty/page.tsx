import data from '@/data/lomn-best-practices-specialty.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function LomnBestPracticesSpecialtyPage() {
  return <BlogJsonPage data={data} />
}
