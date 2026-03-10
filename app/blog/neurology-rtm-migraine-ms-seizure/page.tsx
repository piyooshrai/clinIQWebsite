import data from '@/data/neurology-rtm-migraine-ms-seizure.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function NeurologyRtmMigraineMsSeizurePage() {
  return <BlogJsonPage data={data} />
}
