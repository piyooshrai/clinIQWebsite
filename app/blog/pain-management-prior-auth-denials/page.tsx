import data from '@/data/pain-management-prior-auth-denials.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function PainManagementPriorAuthPage() {
  return <BlogJsonPage data={data} />
}
