import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'Patient Flow for Neurology Clinics | Infusion & EMG Tracking | clinIQ',
  description: 'Neurology clinics combine clinical visits with infusion therapy and EMG testing. clinIQ tracks parallel workflows in one dashboard.',
}

export default function PatientFlowNeurologyPage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="patient-flow"
      featureName="Patient Flow"
      specialtySlug="neurology"
      specialtyName="Neurology"
      h1="Infusion, EMG, clinic — tracked in parallel."
      problemStatement="Neurology clinics often combine clinical visits with infusion therapy or EMG testing in a single patient day. Managing multiple concurrent workflows without a unified view creates delays in every service line. Staff in one area have no visibility into what's happening in another."
      solutionStatement="clinIQ tracks neurology patients through all concurrent service lines. Clinical, infusion, and diagnostic stages each have dedicated queues — visible on one dashboard. Staff in every department see the same picture. Handoffs happen on time."
    />
  )
}
