import data from '@/data/provider-productivity-metrics.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function ProviderProductivityMetricsPage() {
  return <BlogJsonPage data={data} />
}
