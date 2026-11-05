import data from '@/data/track-prior-authorization-expirations.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function TrackPriorAuthorizationExpirationsPage() {
  return <BlogJsonPage data={data} />
}
