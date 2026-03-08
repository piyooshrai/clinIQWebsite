import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'Pre-Authorization for Dialysis Centers | Dialysis & Procedure PA Tracking | clinIQ',
  description: 'Quarterly and annual dialysis authorizations tracked with calendar-based renewal alerts. clinIQ prevents coverage gaps from missed renewal deadlines.',
}

export default function PreAuthDialysisPage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="pre-auth"
      featureName="Pre-Authorization"
      specialtySlug="dialysis"
      specialtyName="Dialysis Centers"
      h1="Dialysis authorization — quarterly, annual, and specialty referrals tracked."
      problemStatement="Dialysis centers manage authorization for dialysis services, specialty procedures, and high-cost medications. Quarterly and annual renewals must be filed on time — a missed renewal date means a patient session without active coverage, creating a billing nightmare after the fact."
      solutionStatement="clinIQ tracks dialysis authorizations with calendar-based renewal alerts that fire in advance of every deadline. Specialty procedure PAs are tracked separately with their own approval timelines. No renewal falls through because a date was missed while staff were managing a shift change."
    />
  )
}
