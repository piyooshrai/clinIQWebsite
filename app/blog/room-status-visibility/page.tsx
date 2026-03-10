import data from '@/data/room-status-visibility.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function RoomStatusVisibilityPage() {
  return <BlogJsonPage data={data} />
}
