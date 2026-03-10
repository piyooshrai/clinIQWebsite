import data from '@/data/endocrinology-prior-auth-cgm-medications.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function EndocrinologyPriorAuthCgmMedicationsPage() {
  return <BlogJsonPage data={data} />
}
