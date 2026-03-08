import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'LobbyView for Infusion Centers | Chair Assignment Display | clinIQ',
  description: 'Chair assignments shown on the lobby display when ready. clinIQ LobbyView eliminates the repeated desk check-ins that interrupt infusion nurses.',
}

export default function LobbyViewInfusionCentersPage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="lobbyview"
      featureName="LobbyView"
      specialtySlug="infusion-centers"
      specialtyName="Infusion Centers"
      h1="Chair assignments on the lobby screen. No one waits wondering."
      problemStatement="Infusion patients arrive uncertain when their chair will be ready. Without information, they approach the desk repeatedly — and each interaction takes a nurse or receptionist away from clinical work. On a busy infusion day, these interruptions add up to significant time lost."
      solutionStatement="clinIQ LobbyView shows chair assignment status on the lobby display. When a chair is ready, the queue number advances on screen. Patients walk to their chair without a verbal announcement. Staff aren't interrupted. The floor runs without the overhead of constant status updates."
    />
  )
}
