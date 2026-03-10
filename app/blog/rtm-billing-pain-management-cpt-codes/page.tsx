import data from '@/data/rtm-billing-pain-management-cpt-codes.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function RtmBillingPainManagementPage() {
  return <BlogJsonPage data={data} />
}
