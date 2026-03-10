import data from '@/data/procedure-room-turnover-pain-management.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function ProcedureRoomTurnoverPage() {
  return <BlogJsonPage data={data} />
}
