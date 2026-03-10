import data from '@/data/same-day-access-primary-care.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function SameDayAccessPrimaryCarePage() {
  return <BlogJsonPage data={data} />
}
