import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'Patient Flow for Behavioral Health Clinics | Therapy Practice Management | clinIQ',
  description: 'Individual sessions, group therapy, and crisis management running simultaneously. clinIQ gives behavioral health clinics one dashboard for all of it.',
}

export default function PatientFlowBehavioralHealthPage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="patient-flow"
      featureName="Patient Flow"
      specialtySlug="behavioral-health"
      specialtyName="Behavioral Health"
      h1="One dashboard for individual sessions, groups, and crisis management."
      problemStatement="Individual therapy, group sessions, medication management, and crisis interventions all happen simultaneously in a behavioral health clinic. Tracking them separately requires parallel systems. Tracking them together requires a system that understands the difference."
      solutionStatement="clinIQ separates visit types into concurrent queues. Individual sessions, group check-ins, and urgent walk-ins each have their own tracking — visible in one dashboard. Staff see the full clinic picture without navigating between screens."
    />
  )
}
