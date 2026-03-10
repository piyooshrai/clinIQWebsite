import data from '@/data/behavioral-health-no-shows.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function BehavioralHealthNoShowsPage() {
  return <BlogJsonPage data={data} />
}
