import data from '@/data/rtm-cpt-codes-explained.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function RtmCptCodesExplainedPage() {
  return <BlogJsonPage data={data} />
}
