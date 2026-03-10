import data from '@/data/general-surgery-authorization-case-approval.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function GeneralSurgeryAuthorizationCaseApprovalPage() {
  return <BlogJsonPage data={data} />
}
