import data from '@/data/rtm-vs-rpm-comparison.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function RtmVsRpmComparisonPage() {
  return <BlogJsonPage data={data} />
}
