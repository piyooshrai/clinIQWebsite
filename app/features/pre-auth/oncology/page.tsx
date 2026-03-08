import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'Pre-Authorization for Oncology Clinics | Chemotherapy PA Tracking | clinIQ',
  description: 'Chemotherapy authorizations tracked through every cycle. clinIQ monitors payer timelines and alerts teams before treatment is delayed by missing authorization.',
}

export default function PreAuthOncologyPage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="pre-auth"
      featureName="Pre-Authorization"
      specialtySlug="oncology"
      specialtyName="Oncology"
      h1="Chemotherapy authorizations, tracked through every cycle."
      problemStatement="Cancer treatment authorizations must be obtained before each chemotherapy cycle, with payer timelines that don't align with treatment schedules. A delayed authorization delays life-saving treatment. Managing this manually across a busy oncology practice means someone's treatment gets delayed because of paperwork."
      solutionStatement="clinIQ tracks oncology authorizations by cycle and drug. Authorization requests are queued in advance of scheduled infusions. Payer timelines are monitored with escalating alerts that fire before a delay becomes a crisis. Treatment schedules are protected by the system, not by a coordinator's memory."
    />
  )
}
