import data from '@/data/no-show-reduction-scheduling.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function NoShowReductionSchedulingPage() {
  return <BlogJsonPage data={data} />
}
