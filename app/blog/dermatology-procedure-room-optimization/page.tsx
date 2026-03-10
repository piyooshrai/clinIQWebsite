import data from '@/data/dermatology-procedure-room-optimization.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function DermatologyProcedureRoomOptimizationPage() {
  return <BlogJsonPage data={data} />
}
