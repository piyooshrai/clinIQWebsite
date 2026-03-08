import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'Patient Check-In for Surgery Centers | Pre-Op Check-In | clinIQ',
  description: 'Surgical check-in that confirms consent, NPO status, and medication review before the patient arrives. Nothing delays the OR because of missing paperwork.',
}

export default function CheckInOrthopedicSurgeryPage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="check-in"
      featureName="Check-In"
      specialtySlug="orthopedic-surgery"
      specialtyName="Orthopedic Surgery"
      h1="Surgical check-in that confirms everything before they gown up."
      problemStatement="Surgical day check-in involves consent forms, NPO status confirmation, medication review, and anesthesia pre-screening. Missing any item on arrival delays the OR — and OR delays are expensive. Paper-based surgical check-in is the weakest link in a high-stakes process."
      solutionStatement="clinIQ surgical check-in sends a pre-arrival checklist 24 hours before surgery. Consent forms are signed digitally. Morning check-in confirms checklist completion and alerts staff to any missing items before the patient enters pre-op. The OR starts on schedule."
    />
  )
}
