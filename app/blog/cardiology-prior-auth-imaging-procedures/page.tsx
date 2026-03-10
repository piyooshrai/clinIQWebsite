import data from '@/data/cardiology-prior-auth-imaging-procedures.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function CardiologyPriorAuthImagingProceduresPage() {
  return <BlogJsonPage data={data} />
}
