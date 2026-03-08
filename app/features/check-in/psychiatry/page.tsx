import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'Patient Check-In for Psychiatry Clinics | Private Mental Health Check-In | clinIQ',
  description: 'Psychiatric patients need private check-in. clinIQ uses tablet or QR code check-in so patients don\'t have to announce their appointment at a reception window.',
}

export default function CheckInPsychiatryPage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="check-in"
      featureName="Check-In"
      specialtySlug="psychiatry"
      specialtyName="Psychiatry"
      h1="Privacy at check-in. Dignity in the waiting room."
      problemStatement="Psychiatric patients check in through the same reception window as everyone else in the building. Their presence — and their provider — can be seen by anyone walking by. A verbal check-in in a shared space isn't just uncomfortable. For some patients, it's a reason not to come back."
      solutionStatement="clinIQ check-in uses a private tablet or a QR code on their phone. Patients check in before they even reach the waiting room. Staff are notified silently. No verbal exchange. No audience. The appointment begins with respect for the patient's privacy."
    />
  )
}
