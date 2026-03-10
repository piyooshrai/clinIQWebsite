import data from '@/data/or-turnover-optimization-general-surgery.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function OrTurnoverOptimizationGeneralSurgeryPage() {
  return <BlogJsonPage data={data} />
}
