import data from '@/data/pulmonary-function-testing-scheduling.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function PulmonaryFunctionTestingSchedulingPage() {
  return <BlogJsonPage data={data} />
}
