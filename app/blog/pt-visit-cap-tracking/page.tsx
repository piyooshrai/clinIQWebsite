import data from '@/data/pt-visit-cap-tracking.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function PtVisitCapTrackingPage() {
  return <BlogJsonPage data={data} />
}
