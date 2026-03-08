import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'Patient Check-In for Addiction Medicine Clinics | Private MAT Check-In | clinIQ',
  description: 'MAT patients deserve privacy at check-in. clinIQ offers tablet and phone-based check-in that never requires patients to announce why they\'re there.',
}

export default function CheckInAddictionMedicinePage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="check-in"
      featureName="Check-In"
      specialtySlug="addiction-medicine"
      specialtyName="Addiction Medicine"
      h1="Check-in that doesn't announce why they're here."
      problemStatement="MAT patients face enough stigma without announcing 'I'm here for Suboxone' at a shared front desk. Verbal check-in at a reception window puts patients in a position nobody should be in — and it costs you patients who won't come back because of it."
      solutionStatement="Private tablet or phone check-in assigns a queue number and notifies staff silently. No names called. No reasons stated. Patients arrive, check in, and wait with dignity. Staff see the queue. Patients see a number. Nobody sees anything they shouldn't."
    />
  )
}
