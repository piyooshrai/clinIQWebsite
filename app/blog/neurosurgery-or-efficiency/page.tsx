import data from '@/data/neurosurgery-or-efficiency.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function NeurosurgeryOrEfficiencyPage() {
  return <BlogJsonPage data={data} />
}
