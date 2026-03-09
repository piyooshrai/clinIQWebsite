import type { Metadata } from 'next'
import data from '@/data/rtm-billing-pain-management-cpt-codes.json'
import BlogJsonPage from '@/components/templates/BlogJsonPage'

export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  keywords: data.meta.keywords,
}

export default function RtmBillingPainManagementPage() {
  return <BlogJsonPage data={data} />
}
