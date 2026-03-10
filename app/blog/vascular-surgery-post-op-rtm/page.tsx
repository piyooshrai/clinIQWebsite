import data from '@/data/vascular-surgery-post-op-rtm.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function VascularSurgeryPostOpRtmPage() {
  return <BlogJsonPage data={data} />
}
