import data from '@/data/obgyn-prior-auth-imaging-surgery.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function ObgynPriorAuthImagingSurgeryPage() {
  return <BlogJsonPage data={data} />
}
