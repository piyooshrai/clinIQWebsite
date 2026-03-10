import data from '@/data/ckd-rtm-chronic-kidney-disease-monitoring.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function CkdRtmChronicKidneyDiseaseMonitoringPage() {
  return <BlogJsonPage data={data} />
}
