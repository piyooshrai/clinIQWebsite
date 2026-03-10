import data from '@/data/urgent-care-check-in-kiosk-phone.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function UrgentCareCheckInKioskPhonePage() {
  return <BlogJsonPage data={data} />
}
