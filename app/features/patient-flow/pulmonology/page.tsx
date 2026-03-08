import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'Patient Flow for Pulmonology Clinics | PFT & Respiratory Tracking | clinIQ',
  description: 'Pulmonology patients move through PFTs, provider visits, and respiratory education in one appointment. clinIQ tracks the handoffs between departments.',
}

export default function PatientFlowPulmonologyPage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="patient-flow"
      featureName="Patient Flow"
      specialtySlug="pulmonology"
      specialtyName="Pulmonology"
      h1="PFT, clinic visit, education — one workflow."
      problemStatement="Pulmonology patients often need spirometry, a provider visit, and respiratory therapy education in the same appointment. Handoffs between departments are verbal. When pulmonary function testing runs long, the provider schedule backs up — and nobody knows until the provider is waiting."
      solutionStatement="clinIQ tracks pulmonology patients through sequential service steps. Each department sees when a patient is inbound and confirms when they've arrived. PFT delays show on the dashboard before they become provider delays."
    />
  )
}
