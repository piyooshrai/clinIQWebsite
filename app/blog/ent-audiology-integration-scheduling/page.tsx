import data from '@/data/ent-audiology-integration-scheduling.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function EntAudiologyIntegrationSchedulingPage() {
  return <BlogJsonPage data={data} />
}
