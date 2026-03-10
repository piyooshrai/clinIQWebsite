import data from '@/data/behavioral-health-rtm-psychiatry.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function BehavioralHealthRtmPsychiatryPage() {
  return <BlogJsonPage data={data} />
}
