import data from '@/data/allergy-prior-auth-biologics-asthma.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function AllergyPriorAuthBiologicsAsthmaPage() {
  return <BlogJsonPage data={data} />
}
