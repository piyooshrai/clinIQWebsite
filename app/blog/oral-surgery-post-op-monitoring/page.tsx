import data from '@/data/oral-surgery-post-op-monitoring.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function OralSurgeryPostOpMonitoringPage() {
  return <BlogJsonPage data={data} />
}
