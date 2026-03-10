import data from '@/data/neurology-prior-auth-imaging-biologics.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function NeurologyPriorAuthImagingBiologicsPage() {
  return <BlogJsonPage data={data} />
}
