import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'Patient Flow for Primary Care Practices | Multi-Provider Tracking | clinIQ',
  description: 'Twenty-five patients, four providers, one dashboard. clinIQ gives primary care practices real-time visibility across every provider and every room.',
}

export default function PatientFlowPrimaryCarePage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="patient-flow"
      featureName="Patient Flow"
      specialtySlug="primary-care"
      specialtyName="Primary Care"
      h1="Twenty-five patients. Four providers. One dashboard."
      problemStatement="A busy primary care practice with multiple providers running simultaneous schedules creates invisible bottlenecks. Who's in a room, who's waiting, who's with a provider — nobody knows all three at once. Staff roam the hallway to answer a question that a screen should answer."
      solutionStatement="clinIQ shows every patient across every provider in real time. Rooming status, provider location, and wait time trends are visible to every staff member who needs it. Questions that took a walk now take a glance."
    />
  )
}
