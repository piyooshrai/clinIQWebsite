import data from '@/data/podiatry-prior-auth-dme-surgery.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function PodiatryPriorAuthDmeSurgeryPage() {
  return <BlogJsonPage data={data} />
}
