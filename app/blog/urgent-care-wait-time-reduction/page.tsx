import data from '@/data/urgent-care-wait-time-reduction.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function UrgentCareWaitTimeReductionPage() {
  return <BlogJsonPage data={data} />
}
