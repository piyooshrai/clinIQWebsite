import data from '@/data/no-show-reduction-addiction-medicine.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function NoShowReductionAddictionMedicinePage() {
  return <BlogJsonPage data={data} />
}
