import data from '@/data/check-in-completion-rates.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function CheckInCompletionRatesPage() {
  return <BlogJsonPage data={data} />
}
