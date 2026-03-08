import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'Patient Flow for Psychiatry Clinics | Mental Health Practice Visibility | clinIQ',
  description: 'Psychiatric patients need privacy at every stage. clinIQ tracks patient flow without calling names or announcing appointments.',
}

export default function PatientFlowPsychiatryPage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="patient-flow"
      featureName="Patient Flow"
      specialtySlug="psychiatry"
      specialtyName="Psychiatry"
      h1="Real-time visibility without compromising privacy."
      problemStatement="Psychiatric patients don't want to be called by name in the waiting room. But your staff still needs to know who's arrived, who's been seen, and who's waiting for prescriptions. Managing that without a system means constant verbal coordination — and occasional privacy lapses."
      solutionStatement="clinIQ tracks every patient through every stage without broadcasting their presence. Staff see the queue on their workstation. Queue numbers — not names — appear on any lobby display. Patient flow is visible. Privacy is intact."
    />
  )
}
