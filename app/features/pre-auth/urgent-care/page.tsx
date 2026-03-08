import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'Pre-Authorization for Urgent Care | Imaging & Referral PA Tracking | clinIQ',
  description: 'Most urgent care visits don\'t need prior auth — but imaging orders and specialty referrals do. clinIQ flags and tracks the PAs that urgent care teams tend to miss.',
}

export default function PreAuthUrgentCarePage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="pre-auth"
      featureName="Pre-Authorization"
      specialtySlug="urgent-care"
      specialtyName="Urgent Care"
      h1="Urgent care rarely needs prior auth. But when it does, track it."
      problemStatement="Most urgent care encounters don't require prior authorization — but imaging orders, specialty referrals, and some procedures do. Without a system to flag these encounters, the requests fall through. The patient has a procedure ordered and nobody checks whether it's covered."
      solutionStatement="clinIQ flags urgent care encounters that require authorization at the point of order. Imaging referrals and specialty visits link to their PA status. Nothing is missed because a visit seemed simple — and the follow-through happens automatically, not manually."
    />
  )
}
