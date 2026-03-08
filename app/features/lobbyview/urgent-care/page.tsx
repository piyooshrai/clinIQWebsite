import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'LobbyView for Urgent Care | Real-Time Wait Time Display | clinIQ',
  description: 'Real-time wait times on the lobby screen. clinIQ LobbyView answers "how much longer?" before patients have to ask — and keeps them from leaving.',
}

export default function LobbyViewUrgentCarePage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="lobbyview"
      featureName="LobbyView"
      specialtySlug="urgent-care"
      specialtyName="Urgent Care"
      h1="Real-time wait times on the screen. 'How much longer?' answered."
      problemStatement="Urgent care lobbies are where LWBS happens. Patients with no information make decisions to leave based on perception, not reality. A 40-minute actual wait feels like 90 minutes without a display. The patients who leave aren't just lost revenue — they're patients who may seek care elsewhere for the wrong reasons."
      solutionStatement="clinIQ LobbyView shows real-time wait estimates on the lobby display, updated every few minutes as patients move through triage and rooms. When patients see the number moving, they stay. Accurate wait time information is the single highest-return intervention for reducing LWBS."
    />
  )
}
