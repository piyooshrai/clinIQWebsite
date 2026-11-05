import data from '@/data/medicare-2027-final-rule-rtm-changes.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function Medicare2027FinalRuleRtmChangesPage() {
  return <BlogJsonPage data={data} />
}
