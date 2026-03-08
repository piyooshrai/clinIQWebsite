import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'Patient Flow for GI Clinics | Endoscopy Suite & Prep Tracking | clinIQ',
  description: 'GI procedure prep, procedure suites, and recovery bays — tracked in one system. clinIQ eliminates the visibility gaps between departments.',
}

export default function PatientFlowGastroenterologyPage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="patient-flow"
      featureName="Patient Flow"
      specialtySlug="gastroenterology"
      specialtyName="Gastroenterology"
      h1="Prep, procedure, recovery — zero gaps."
      problemStatement="GI procedures require prep monitoring, procedure suites, and recovery bays. Without unified tracking, patients in different stages are invisible to the front desk and to each other's care teams. Procedure suite turnover is unpredictable. Recovery bottlenecks build silently."
      solutionStatement="clinIQ tracks every GI patient through prep, procedure suite, and recovery. Room turnover timing becomes visible and predictable. When recovery clears a patient, the procedure suite team knows a slot is opening. Scheduling improves as a result of real data."
    />
  )
}
