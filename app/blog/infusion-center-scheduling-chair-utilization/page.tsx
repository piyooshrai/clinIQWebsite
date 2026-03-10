import data from '@/data/infusion-center-scheduling-chair-utilization.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function InfusionCenterSchedulingChairUtilizationPage() {
  return <BlogJsonPage data={data} />
}
