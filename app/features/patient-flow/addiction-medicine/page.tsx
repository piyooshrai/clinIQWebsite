import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'Patient Flow for Addiction Medicine Clinics | clinIQ',
  description: 'MAT clinics juggle intake, UDS collection, injection, and observation. clinIQ gives you real-time visibility across every stage.',
}

export default function PatientFlowAddictionMedicinePage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="patient-flow"
      featureName="Patient Flow"
      specialtySlug="addiction-medicine"
      specialtyName="Addiction Medicine"
      h1="See every patient from intake to observation."
      problemStatement="MAT clinics live in controlled chaos. Patients cycling through intake, urine collection, provider visits, and injection observation — and nobody knows who's next. Staff coordinate by shouting across hallways or checking a whiteboard that's already three patients behind."
      solutionStatement="Real-time patient tracking shows every patient's current stage. Your front desk sees the queue. Providers see who's ready. Observation staff sees who's completing their 30 minutes. Nobody has to ask — the system answers."
    />
  )
}
