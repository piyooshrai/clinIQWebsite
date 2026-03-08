import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'Patient Flow for Cardiology Clinics | Stress Test & Echo Tracking | clinIQ',
  description: 'Cardiology patients move through diagnostic services and clinic visits in the same day. clinIQ tracks every stage so nothing gets lost between departments.',
}

export default function PatientFlowCardiologyPage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="patient-flow"
      featureName="Patient Flow"
      specialtySlug="cardiology"
      specialtyName="Cardiology"
      h1="Stress tests, echo, clinic visits — visible across all three."
      problemStatement="Cardiology clinics run diagnostic services and clinic visits simultaneously. A patient arriving for a stress test and a follow-up appointment has a two-service workflow that no one is explicitly tracking. Without visibility, delays in diagnostics cascade into clinic schedule backup."
      solutionStatement="clinIQ tracks cardiology patients through multi-service visits. Diagnostic and clinical stages advance sequentially. Your team always knows which patients are between steps — and which services are running behind schedule before they create downstream delays."
    />
  )
}
