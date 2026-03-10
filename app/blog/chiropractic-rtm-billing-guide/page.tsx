import data from '@/data/chiropractic-rtm-billing-guide.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function ChiropracticRtmBillingGuidePage() {
  return <BlogJsonPage data={data} />
}
