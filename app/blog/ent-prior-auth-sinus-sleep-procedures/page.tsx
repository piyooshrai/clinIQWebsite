import data from '@/data/ent-prior-auth-sinus-sleep-procedures.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function EntPriorAuthSinusSleepProceduresPage() {
  return <BlogJsonPage data={data} />
}
