import data from '@/data/phone-vs-kiosk-check-in.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function PhoneVsKioskCheckInPage() {
  return <BlogJsonPage data={data} />
}
