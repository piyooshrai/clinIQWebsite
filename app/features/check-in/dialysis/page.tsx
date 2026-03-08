import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'Patient Check-In for Dialysis Centers | Recurring Patient Check-In | clinIQ',
  description: 'Dialysis patients check in three times a week. clinIQ recognizes recurring patients on arrival and confirms their session in two taps.',
}

export default function CheckInDialysisPage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="check-in"
      featureName="Check-In"
      specialtySlug="dialysis"
      specialtyName="Dialysis Centers"
      h1="Same patient, three times a week. Check-in that knows them."
      problemStatement="Dialysis patients check in three times a week, every week, for years. A manual check-in process that asks the same questions and collects the same information every visit wastes their time and yours. Over a year of treatment, that friction adds up to hours of unnecessary process."
      solutionStatement="clinIQ recognizes recurring dialysis patients on arrival from their profile. Check-in confirms their identity and session assignment in two taps. No forms to refill. No questions to re-answer. Just confirmation that they're there and that their chair is ready."
    />
  )
}
