import data from '@/data/appointment-templates-duration.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function AppointmentTemplatesDurationPage() {
  return <BlogJsonPage data={data} />
}
