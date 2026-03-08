import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'Patient Flow for Oncology Clinics | Cancer Center Patient Tracking | clinIQ',
  description: 'Oncology patients move through labs, provider visits, and infusion in one day. clinIQ tracks every step so nothing falls between departments.',
}

export default function PatientFlowOncologyPage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="patient-flow"
      featureName="Patient Flow"
      specialtySlug="oncology"
      specialtyName="Oncology"
      h1="Multi-step visits, one clear view."
      problemStatement="Oncology patients don't have simple visits. They come for labs, then wait for results, then see the provider, then go to infusion — all in one day. Without a tracking system that understands sequential workflows, anyone can get lost between steps, and delays compound."
      solutionStatement="clinIQ tracks multi-step oncology visits as a sequential workflow. Each stage advances automatically when the previous is complete. Your care team always knows where every patient is in their visit — and what they're waiting for next."
    />
  )
}
