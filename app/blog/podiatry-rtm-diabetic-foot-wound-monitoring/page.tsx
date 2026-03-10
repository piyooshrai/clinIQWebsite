import data from '@/data/podiatry-rtm-diabetic-foot-wound-monitoring.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function PodiatryRtmDiabeticFootWoundMonitoringPage() {
  return <BlogJsonPage data={data} />
}
