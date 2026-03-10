import data from '@/data/chiropractic-visit-cap-tracking.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function ChiropracticVisitCapTrackingPage() {
  return <BlogJsonPage data={data} />
}
