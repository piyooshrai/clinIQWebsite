import data from '@/data/orthopedic-prior-auth-joint-replacement.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function OrthopedicPriorAuthJointReplacementPage() {
  return <BlogJsonPage data={data} />
}
