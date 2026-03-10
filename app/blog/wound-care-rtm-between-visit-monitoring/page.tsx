import data from '@/data/wound-care-rtm-between-visit-monitoring.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function WoundCareRtmBetweenVisitMonitoringPage() {
  return <BlogJsonPage data={data} />
}
