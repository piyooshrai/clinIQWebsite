import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'LobbyView for Psychiatry Clinics | Private Mental Health Waiting Room Display | clinIQ',
  description: 'Psychiatric patients know their queue position without approaching the desk. clinIQ LobbyView shows queue numbers and wait estimates — never names or appointment details.',
}

export default function LobbyViewPsychiatryPage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="lobbyview"
      featureName="LobbyView"
      specialtySlug="psychiatry"
      specialtyName="Psychiatry"
      h1="Patients know their position without announcing their presence."
      problemStatement="Psychiatric patients waiting for appointments don't want to approach the desk to ask how much longer. They don't want to draw attention. Without a waiting room display, the only way to know their position is to ask — and some patients simply won't. They leave instead."
      solutionStatement="clinIQ LobbyView shows queue position and wait time estimates on a discreet waiting room display. Patients see their number advancing without approaching the desk or making eye contact with staff. LWBS drops when patients have accurate information and don't have to ask for it."
    />
  )
}
