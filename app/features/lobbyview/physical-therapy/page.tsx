import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'LobbyView for Physical Therapy Clinics | Zone Availability Display | clinIQ',
  description: 'Equipment zone availability and therapist status displayed in the PT waiting area. clinIQ LobbyView guides patients through multi-zone sessions without staff coordination.',
}

export default function LobbyViewPhysicalTherapyPage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="lobbyview"
      featureName="LobbyView"
      specialtySlug="physical-therapy"
      specialtyName="Physical Therapy"
      h1="Equipment zones, wait times, therapist availability — displayed."
      problemStatement="Physical therapy clinics with multiple zones — exercise area, treatment rooms, ultrasound, traction tables — don't have a way to show patients what's currently available or when their therapist will be free. Without a display, patients sit and wait without knowing if they should move to a zone or stay put."
      solutionStatement="clinIQ LobbyView shows zone availability and therapist status in the waiting area. Patients heading into the exercise area know which stations are open. Therapists who become available are reflected on the display. Sessions flow through the clinic with less verbal coordination between every transition."
    />
  )
}
