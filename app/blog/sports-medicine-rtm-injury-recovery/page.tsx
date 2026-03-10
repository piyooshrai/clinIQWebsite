import data from '@/data/sports-medicine-rtm-injury-recovery.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function SportsMedicineRtmInjuryRecoveryPage() {
  return <BlogJsonPage data={data} />
}
