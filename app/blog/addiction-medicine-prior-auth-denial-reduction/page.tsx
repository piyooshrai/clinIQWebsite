import data from '@/data/addiction-medicine-prior-auth-denial-reduction.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function AddictionMedicinePriorAuthDenialReductionPage() {
  return <BlogJsonPage data={data} />
}
