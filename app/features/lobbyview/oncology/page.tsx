import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'LobbyView for Oncology Clinics | Infusion Wait Time Display | clinIQ',
  description: 'Infusion chair queue status visible in the waiting area. clinIQ LobbyView reduces oncology patient anxiety by showing where they stand without requiring desk interaction.',
}

export default function LobbyViewOncologyPage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="lobbyview"
      featureName="LobbyView"
      specialtySlug="oncology"
      specialtyName="Oncology"
      h1="Infusion wait times, visible. Anxiety, reduced."
      problemStatement="Oncology waiting rooms carry significant emotional weight. Patients undergoing active treatment are anxious about delays — not because delays are that consequential to their treatment, but because uncertainty is its own burden. Without a display, not knowing feels worse than knowing the actual wait."
      solutionStatement="clinIQ LobbyView shows infusion chair queue status and wait estimates in the waiting area. Patients see where they are in the queue without approaching the desk. The wait is predictable. The uncertainty that compounds anxiety is replaced with information that doesn't require human interaction to access."
    />
  )
}
