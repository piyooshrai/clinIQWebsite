import data from '@/data/diabetes-rtm-glucose-monitoring.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function DiabetesRtmGlucoseMonitoringPage() {
  return <BlogJsonPage data={data} />
}
