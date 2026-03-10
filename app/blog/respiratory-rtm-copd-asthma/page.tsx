import data from '@/data/respiratory-rtm-copd-asthma.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function RespiratoryRtmCopdAsthmaPage() {
  return <BlogJsonPage data={data} />
}
