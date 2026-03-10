import data from '@/data/musculoskeletal-rtm-physical-therapy.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function MusculoskeletalRtmPhysicalTherapyPage() {
  return <BlogJsonPage data={data} />
}
