import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'Patient Check-In for Infusion Centers | Chair Assignment at Arrival | clinIQ',
  description: 'Infusion patients check in, get a chair assignment, and walk directly to their chair. clinIQ eliminates the three-step arrival process.',
}

export default function CheckInInfusionCentersPage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="check-in"
      featureName="Check-In"
      specialtySlug="infusion-centers"
      specialtyName="Infusion Centers"
      h1="Check in. Get a chair assignment. Skip the desk."
      problemStatement="Infusion patients arrive and wait to check in at the desk, then wait again to be assigned a chair, then wait for staff to walk them back. Three separate interactions for one arrival. For patients who come weekly, that friction compounds into real dissatisfaction."
      solutionStatement="clinIQ check-in assigns a chair at arrival based on real-time availability. The patient checks in on a tablet or their phone, receives their chair assignment, and walks directly to their chair. One interaction. One wait. Staff are notified without being interrupted."
    />
  )
}
