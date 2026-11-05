import data from '@/data/rtm-billing-2026-short-duration-codes.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function RtmBilling2026ShortDurationCodesPage() {
  return <BlogJsonPage data={data} />
}
