import data from '@/data/behavioral-health-rtm-billing-guide.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function BehavioralHealthRtmBillingGuidePage() {
  return <BlogJsonPage data={data} />
}
