import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'LobbyView for Pain Management Clinics | Procedure & Clinic Queue Display | clinIQ',
  description: 'Clinic and procedure patients see separate queues on the same display. clinIQ LobbyView shows pain management patients exactly where they stand without staff fielding questions.',
}

export default function LobbyViewPainManagementPage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="lobbyview"
      featureName="LobbyView"
      specialtySlug="pain-management"
      specialtyName="Pain Management"
      h1="Procedure and clinic patients see where they stand."
      problemStatement="Pain management practices mix clinic day patients with procedure day patients in the same waiting area. Without a display, both groups wait in uncertainty — and staff field questions from both while trying to manage the room. The 'how much longer?' question has no answer because nobody has the data."
      solutionStatement="clinIQ LobbyView separates clinic and procedure queues on the lobby display. Patients know whether they're waiting for an exam room or a procedure suite. Expected wait times update in real time. Staff questions drop when patients have their own information source."
    />
  )
}
