import data from '@/data/sports-medicine-prior-auth-imaging-procedures.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function SportsMedicinePriorAuthImagingProceduresPage() {
  return <BlogJsonPage data={data} />
}
