import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'LobbyView for Orthopedic Surgery Centers | Family Waiting Area Display | clinIQ',
  description: 'Anonymized surgical stage updates for family members waiting during procedures. clinIQ LobbyView keeps families informed without HIPAA exposure.',
}

export default function LobbyViewOrthopedicSurgeryPage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="lobbyview"
      featureName="LobbyView"
      specialtySlug="orthopedic-surgery"
      specialtyName="Orthopedic Surgery"
      h1="Pre-op queue visible to family waiting outside."
      problemStatement="Surgical patients enter pre-op while family members wait in a separate area. Family members have no way to know where their loved one is in the surgical process without approaching staff — who are occupied with clinical work. Every question answered is a clinical interruption."
      solutionStatement="clinIQ LobbyView displays anonymized surgical stage updates — 'In Pre-Op,' 'In Surgery,' 'In Recovery' — using queue numbers, not names. Families have real-time information without HIPAA exposure. Staff aren't interrupted by status questions. The family waiting experience is calmer."
    />
  )
}
