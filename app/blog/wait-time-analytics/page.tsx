import data from '@/data/wait-time-analytics.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function WaitTimeAnalyticsPage() {
  return <BlogJsonPage data={data} />
}
