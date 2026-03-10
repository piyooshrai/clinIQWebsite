import data from '@/data/group-therapy-scheduling.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function GroupTherapySchedulingPage() {
  return <BlogJsonPage data={data} />
}
