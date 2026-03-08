import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'Patient Flow for Orthopedic Surgery Centers | ASC Patient Tracking | clinIQ',
  description: 'Pre-op, OR, recovery, discharge — tracked in one system. clinIQ connects every stage of the surgical visit so nothing falls through between departments.',
}

export default function PatientFlowOrthopedicSurgeryPage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="patient-flow"
      featureName="Patient Flow"
      specialtySlug="orthopedic-surgery"
      specialtyName="Orthopedic Surgery"
      h1="Pre-op to discharge, nothing falls through."
      problemStatement="Ambulatory surgery centers handle patients through pre-op, anesthesia, OR, recovery, and discharge. Each department hands off to the next verbally or by phone. Without a unified system, patients fall through the cracks — and delays in one stage cascade into OR schedule slippage."
      solutionStatement="clinIQ connects every stage of the surgical visit. Pre-op clearance, OR ready, procedure complete, recovery, discharge — one unified queue visible across departments. When pre-op clears a patient, the OR sees it immediately. Nothing waits for a phone call."
    />
  )
}
