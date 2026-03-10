import data from '@/data/nephrology-prior-auth-dialysis-transplant.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function NephrologyPriorAuthDialysisTransplantPage() {
  return <BlogJsonPage data={data} />
}
