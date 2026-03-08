import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'Patient Flow for Endocrinology Clinics | Diabetes Care Tracking | clinIQ',
  description: 'Endocrinology visits often include labs, diabetes education, and provider visits in one trip. clinIQ tracks the handoffs between each service.',
}

export default function PatientFlowEndocrinologyPage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="patient-flow"
      featureName="Patient Flow"
      specialtySlug="endocrinology"
      specialtyName="Endocrinology"
      h1="Diabetes education, labs, provider — visited in one trip."
      problemStatement="Endocrinology appointments often include diabetes education, lab work, and a provider visit in a single patient day. Coordinating between three services creates delays and patient frustration. Without a tracking system, patients report to the wrong area or wait in the wrong room."
      solutionStatement="clinIQ tracks endocrinology patients through multi-service days. Education, labs, and provider visits advance sequentially. Patients don't have to ask what's next — and staff don't have to track them manually between departments."
    />
  )
}
