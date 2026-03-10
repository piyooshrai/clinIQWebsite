import data from '@/data/reducing-wait-times-data-driven.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function ReducingWaitTimesDataDrivenPage() {
  return <BlogJsonPage data={data} />
}
