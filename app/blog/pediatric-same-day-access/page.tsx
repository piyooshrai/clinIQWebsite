import data from '@/data/pediatric-same-day-access.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function PediatricSameDayAccessPage() {
  return <BlogJsonPage data={data} />
}
