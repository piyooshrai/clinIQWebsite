import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'LobbyView for Addiction Medicine Clinics | HIPAA-Safe MAT Waiting Room Display | clinIQ',
  description: 'Queue numbers, not names. clinIQ LobbyView gives MAT waiting rooms a HIPAA-safe display that protects patient privacy at every step.',
}

export default function LobbyViewAddictionMedicinePage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="lobbyview"
      featureName="LobbyView"
      specialtySlug="addiction-medicine"
      specialtyName="Addiction Medicine"
      h1="Queue numbers, not names. Privacy in the MAT waiting room."
      problemStatement="MAT waiting rooms can become environments where patients recognize each other, hear each other's names called, and feel exposed. Privacy is a clinical concern in addiction medicine — not just a comfort preference. A name called across a waiting room can mean a patient who doesn't come back."
      solutionStatement="clinIQ LobbyView displays queue numbers only — never patient names. The lobby screen shows position and estimated wait time. Patients know they're next without anyone knowing who they are. Privacy is built into the display, not retrofitted after a complaint."
    />
  )
}
