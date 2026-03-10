import data from '@/data/group-therapy-management-scale.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function GroupTherapyManagementScalePage() {
  return <BlogJsonPage data={data} />
}
