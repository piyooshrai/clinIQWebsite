import data from '@/data/rheumatology-rtm-ra-lupus-autoimmune.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function RheumatologyRtmRaLupusAutoimmmunePage() {
  return <BlogJsonPage data={data} />
}
