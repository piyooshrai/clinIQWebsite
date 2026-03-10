import data from '@/data/podiatry-procedure-room-efficiency.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function PodiatryProcedureRoomEfficiencyPage() {
  return <BlogJsonPage data={data} />
}
