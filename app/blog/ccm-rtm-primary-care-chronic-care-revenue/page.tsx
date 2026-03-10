import data from '@/data/ccm-rtm-primary-care-chronic-care-revenue.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function CcmRtmPrimaryCareChronicCareRevenuePage() {
  return <BlogJsonPage data={data} />
}
