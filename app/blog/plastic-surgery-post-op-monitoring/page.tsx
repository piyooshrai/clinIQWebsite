import data from '@/data/plastic-surgery-post-op-monitoring.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function PlasticSurgeryPostOpMonitoringPage() {
  return <BlogJsonPage data={data} />
}
