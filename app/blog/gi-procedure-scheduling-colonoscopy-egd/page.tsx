import data from '@/data/gi-procedure-scheduling-colonoscopy-egd.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function GiProcedureSchedulingColonoscopyEgdPage() {
  return <BlogJsonPage data={data} />
}
