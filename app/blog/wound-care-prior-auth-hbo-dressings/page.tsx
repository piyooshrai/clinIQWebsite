import data from '@/data/wound-care-prior-auth-hbo-dressings.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function WoundCarePriorAuthHboDressingsPage() {
  return <BlogJsonPage data={data} />
}
