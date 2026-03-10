import data from '@/data/rtm-enrollment-participation.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function RtmEnrollmentParticipationPage() {
  return <BlogJsonPage data={data} />
}
