import data from '@/data/cardiac-rtm-heart-failure-hypertension.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function CardiacRtmHeartFailureHypertensionPage() {
  return <BlogJsonPage data={data} />
}
