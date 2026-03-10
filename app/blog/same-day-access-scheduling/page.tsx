import data from '@/data/same-day-access-scheduling.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function SameDayAccessSchedulingPage() {
  return <BlogJsonPage data={data} />
}
