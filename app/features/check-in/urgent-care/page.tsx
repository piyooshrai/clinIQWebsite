import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'Patient Check-In for Urgent Care | Walk-In Registration Without the Wait | clinIQ',
  description: 'Walk-in patients see current wait times at check-in, make an informed decision to stay, and are kept updated on a lobby display. LWBS rates drop.',
}

export default function CheckInUrgentCarePage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="check-in"
      featureName="Check-In"
      specialtySlug="urgent-care"
      specialtyName="Urgent Care"
      h1="Walk in, check in, wait informed."
      problemStatement="Walk-in patients at urgent care don't know how long the wait is. They check in at the desk, get a number, and guess. When they don't know — or when they hear the wrong estimate from a frustrated staff member — they leave. LWBS rates climb when patients have no information."
      solutionStatement="clinIQ check-in kiosk shows current wait time estimates at the point of check-in. Patients see expected time, decide to stay, and receive queue number updates on the lobby display. Accurate information keeps patients in the building. LWBS drops."
    />
  )
}
