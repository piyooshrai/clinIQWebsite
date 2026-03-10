import data from '@/data/post-op-rtm-neurosurgery.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function PostOpRtmNeurosurgeryPage() {
  return <BlogJsonPage data={data} />
}
