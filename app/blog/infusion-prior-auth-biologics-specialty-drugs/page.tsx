import data from '@/data/infusion-prior-auth-biologics-specialty-drugs.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function InfusionPriorAuthBiologicsSpecialtyDrugsPage() {
  return <BlogJsonPage data={data} />
}
