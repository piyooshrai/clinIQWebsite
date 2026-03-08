import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'Patient Check-In for Pain Management Clinics | Procedure Day Check-In | clinIQ',
  description: 'Compliance documentation, controlled substance agreements, and co-pay collection at check-in. clinIQ handles all of it digitally before patients reach the desk.',
}

export default function CheckInPainManagementPage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="check-in"
      featureName="Check-In"
      specialtySlug="pain-management"
      specialtyName="Pain Management"
      h1="Compliance documentation starts at check-in."
      problemStatement="Pain management check-in involves controlled substance agreements, urine screening consent, and co-pay collection — all before the patient enters the clinical area. It's slow, paper-heavy, and creates a desk bottleneck that delays the entire clinic."
      solutionStatement="clinIQ check-in collects required consent signatures digitally, confirms the visit type, and flags required documentation before the patient reaches the front desk. By the time they're at the window, compliance is handled. The clinical encounter can start immediately."
    />
  )
}
