import data from '@/data/phreesia-alternatives.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function PhreesiaAlternativesPage() {
  return <BlogJsonPage data={data} />
}
