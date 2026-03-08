import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'Pre-Authorization for Orthopedic Surgery | Surgical PA Tracking | clinIQ',
  description: 'Orthopedic surgical authorizations tracked from submission to OR confirmation. clinIQ links PA status to OR scheduling so no procedure is booked without active coverage.',
}

export default function PreAuthOrthopedicSurgeryPage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="pre-auth"
      featureName="Pre-Authorization"
      specialtySlug="orthopedic-surgery"
      specialtyName="Orthopedic Surgery"
      h1="Surgical authorizations tracked from submission to OR."
      problemStatement="Orthopedic procedures require authorization that must be obtained before surgical scheduling is confirmed. Practices holding OR time while waiting on authorization lose revenue when approvals are delayed and schedules shift. Without a tracking system, nobody knows where any authorization stands."
      solutionStatement="clinIQ tracks surgical authorizations from initial submission through approval. OR scheduling is linked to PA status — procedures can't be booked to confirmed without an active authorization. When approvals come through, the surgical coordinator is notified immediately."
    />
  )
}
