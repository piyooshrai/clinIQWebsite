import data from '@/data/no-show-analytics-patterns.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function NoShowAnalyticsPatternsPage() {
  return <BlogJsonPage data={data} />
}
