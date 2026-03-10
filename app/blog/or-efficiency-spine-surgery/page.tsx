import data from '@/data/or-efficiency-spine-surgery.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function OrEfficiencySpineSurgeryPage() {
  return <BlogJsonPage data={data} />
}
