import data from '@/data/prior-auth-denial-prevention-guide.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function PriorAuthDenialPreventionGuidePage() {
  return <BlogJsonPage data={data} />
}
