import data from '@/data/post-op-rtm-spine-surgery.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function PostOpRtmSpineSurgeryPage() {
  return <BlogJsonPage data={data} />
}
