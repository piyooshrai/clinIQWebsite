import data from '@/data/dermatology-prior-auth-biologics-psoriasis.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function DermatologyPriorAuthBiologicsPsoriasisPage() {
  return <BlogJsonPage data={data} />
}
