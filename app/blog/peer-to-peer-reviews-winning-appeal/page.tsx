import type { Metadata } from 'next'
import data from '@/data/peer-to-peer-reviews-winning-appeal.json'
import BlogJsonPage from '@/components/templates/BlogJsonPage'

export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  keywords: data.meta.keywords,
}

export default function PeerToPeerReviewsWinningAppealPage() {
  return <BlogJsonPage data={data} />
}
