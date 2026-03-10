import data from '@/data/oncology-prior-auth-chemotherapy-imaging.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function OncologyPriorAuthChemotherapyImagingPage() {
  return <BlogJsonPage data={data} />
}
