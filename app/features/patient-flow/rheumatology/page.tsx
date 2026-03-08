import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'Patient Flow for Rheumatology Clinics | Infusion Suite & Clinic Tracking | clinIQ',
  description: 'Rheumatology practices with infusion suites need to track both clinic and infusion patients. clinIQ provides real-time visibility across both service lines.',
}

export default function PatientFlowRheumatologyPage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="patient-flow"
      featureName="Patient Flow"
      specialtySlug="rheumatology"
      specialtyName="Rheumatology"
      h1="Infusion appointments, clinic visits, same building, one queue."
      problemStatement="Rheumatology practices often run infusion suites alongside clinic visits. Biologic infusion patients wait while clinic patients cycle. Without visibility across both, infusion nurses don't know when pre-meds need to start, and clinic staff can't see when a room will open."
      solutionStatement="clinIQ tracks infusion and clinic patients simultaneously. Your team knows which infusion chairs are occupied, which patients are pending pre-medications, and which clinic rooms are open — all from one screen, without leaving their station."
    />
  )
}
