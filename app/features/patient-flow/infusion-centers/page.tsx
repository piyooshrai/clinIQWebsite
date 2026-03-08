import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'Patient Flow for Infusion Centers | Chair Utilization Tracking | clinIQ',
  description: 'Ten chairs, ten patients at different stages. clinIQ tracks every infusion from pre-medication through observation so no chair sits empty between patients.',
}

export default function PatientFlowInfusionCentersPage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="patient-flow"
      featureName="Patient Flow"
      specialtySlug="infusion-centers"
      specialtyName="Infusion Centers"
      h1="See every chair. Know every patient. Maximize every hour."
      problemStatement="An infusion center running ten chairs simultaneously has ten patients at different stages of pre-infusion, active infusion, and post-infusion observation. Without real-time visibility, chairs sit empty between patients. Staff don't know when the next chair opens until someone walks over to check."
      solutionStatement="clinIQ tracks every chair by status: occupied, cleaning, ready. Pre-infusion prep, active infusion time, and post-infusion observation are tracked in real time. You always know which chair opens next — and you can prepare for it before the previous patient leaves."
    />
  )
}
