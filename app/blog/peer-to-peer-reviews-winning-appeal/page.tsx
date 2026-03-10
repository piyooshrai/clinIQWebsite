import data from '@/data/peer-to-peer-reviews-winning-appeal.json'
import BlogJsonPage, { generateBlogMetadata } from '@/components/templates/BlogJsonPage'

export const metadata = generateBlogMetadata(data)

export default function PeerToPeerReviewsWinningAppealPage() {
  return <BlogJsonPage data={data} />
}
