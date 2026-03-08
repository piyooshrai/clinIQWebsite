import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'Patient Flow for Pain Management Clinics | Procedure Day Visibility | clinIQ',
  description: 'Clinic days and procedure days in one system. clinIQ tracks pain management patients from exam room to procedure suite in real time.',
}

export default function PatientFlowPainManagementPage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="patient-flow"
      featureName="Patient Flow"
      specialtySlug="pain-management"
      specialtyName="Pain Management"
      h1="Clinic days and procedure days — one system handles both."
      problemStatement="Pain management clinics run two parallel operations: clinic visits for medication management and procedure days for injections. Without a unified tracking system, nobody knows what's happening across both. Exam rooms back up while procedure rooms sit empty."
      solutionStatement="clinIQ tracks both visit types simultaneously. Procedure rooms and exam rooms share one queue view. Your front desk always knows which patients are where — and what's next. Procedure day runs like a system, not a guess."
    />
  )
}
