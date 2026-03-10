import data from '@/data/allergy-shot-scheduling-tracking.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function AllergyShottSchedulingTrackingPage() {
  return <BlogJsonPage data={data} />
}
