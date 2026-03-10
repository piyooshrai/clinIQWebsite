import data from '@/data/behavioral-health-rtm-addiction-medicine.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function BehavioralHealthRtmAddictionMedicinePage() {
  return <BlogJsonPage data={data} />
}
