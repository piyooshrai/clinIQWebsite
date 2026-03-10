import data from '@/data/pediatric-vaccine-scheduling-tracking.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function PediatricVaccineSchedulingTrackingPage() {
  return <BlogJsonPage data={data} />
}
