import data from '@/data/post-surgical-rtm-orthopedic.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function PostSurgicalRtmOrthopedicPage() {
  return <BlogJsonPage data={data} />
}
