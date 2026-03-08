import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'LobbyView for Behavioral Health Clinics | Multi-Queue Waiting Room Display | clinIQ',
  description: 'Individual therapy, group sessions, and med management — displayed with separate queues on one screen. clinIQ LobbyView handles multiple visit types without confusion.',
}

export default function LobbyViewBehavioralHealthPage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="lobbyview"
      featureName="LobbyView"
      specialtySlug="behavioral-health"
      specialtyName="Behavioral Health"
      h1="Session types separated. Queue numbers respected."
      problemStatement="Behavioral health waiting rooms mix individual therapy patients, group session participants, and medication management appointments. Without a display system, everyone waits in the same room uncertain about different things — and the only way to know status is to ask the already-busy front desk."
      solutionStatement="clinIQ LobbyView supports multiple queues on one display. Group participants see their session name and start time. Individual patients see their queue number and estimated wait. Medication management patients see their own queue. No one needs to ask — and no one needs to overhear."
    />
  )
}
