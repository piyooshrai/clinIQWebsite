import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'LobbyView for Dialysis Centers | Session Queue Display | clinIQ',
  description: 'Chair readiness shown on the waiting area display without broadcasting patient names. clinIQ LobbyView handles dialysis shift arrivals without desk congestion.',
}

export default function LobbyViewDialysisPage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="lobbyview"
      featureName="LobbyView"
      specialtySlug="dialysis"
      specialtyName="Dialysis Centers"
      h1="Shift assignments visible without compromising privacy."
      problemStatement="Dialysis patients assigned to specific chairs and shifts sometimes arrive uncertain about their assignment, especially following schedule changes. Without a display, every confusion requires a desk interaction — and at shift change, multiple patients arriving simultaneously creates a bottleneck at the front."
      solutionStatement="clinIQ LobbyView shows session queue status on the waiting area display. Patients see their assigned chair number when it's ready for them. No desk interaction needed for routine confirmation. Shift arrivals flow into the floor without a desk traffic jam."
    />
  )
}
