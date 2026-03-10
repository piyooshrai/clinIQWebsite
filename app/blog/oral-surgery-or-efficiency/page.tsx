import data from '@/data/oral-surgery-or-efficiency.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function OralSurgeryOrEfficiencyPage() {
  return <BlogJsonPage data={data} />
}
