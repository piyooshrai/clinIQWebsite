import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'Pre-Authorization for Behavioral Health | Level of Care Authorization | clinIQ',
  description: 'PHP, IOP, and individual therapy authorizations tracked with concurrent review alerts. clinIQ prevents behavioral health authorization gaps and treatment delays.',
}

export default function PreAuthBehavioralHealthPage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="pre-auth"
      featureName="Pre-Authorization"
      specialtySlug="behavioral-health"
      specialtyName="Behavioral Health"
      h1="Level of care authorizations, managed."
      problemStatement="Behavioral health practices requiring insurance authorization for PHP, IOP, and individual therapy face frequent denials, concurrent review requirements, and strict timeline adherence. Without a tracking system, authorizations lapse mid-treatment — forcing clinical decisions driven by paperwork, not patient need."
      solutionStatement="clinIQ tracks level of care authorizations with end-date alerts that fire before coverage expires. Concurrent reviews are queued before their submission deadlines. Denial workflows trigger automatically. Authorization status is always visible — and treatment is never interrupted by a missed renewal."
    />
  )
}
