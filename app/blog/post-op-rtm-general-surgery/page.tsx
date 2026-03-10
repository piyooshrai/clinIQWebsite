import data from '@/data/post-op-rtm-general-surgery.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function PostOpRtmGeneralSurgeryPage() {
  return <BlogJsonPage data={data} />
}
