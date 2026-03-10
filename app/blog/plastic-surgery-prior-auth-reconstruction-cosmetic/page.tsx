import data from '@/data/plastic-surgery-prior-auth-reconstruction-cosmetic.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function PlasticSurgeryPriorAuthReconstructionCosmeticPage() {
  return <BlogJsonPage data={data} />
}
