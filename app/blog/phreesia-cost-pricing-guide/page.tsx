import data from '@/data/phreesia-cost-pricing-guide.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function PhreesiaCostPricingGuidePage() {
  return <BlogJsonPage data={data} />
}
