import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'Patient Flow for Occupational Therapy Clinics | OT Practice Tracking | clinIQ',
  description: 'Multiple patients across evaluation, treatment, and equipment training simultaneously. clinIQ gives OT clinics real-time visibility across every zone.',
}

export default function PatientFlowOccupationalTherapyPage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="patient-flow"
      featureName="Patient Flow"
      specialtySlug="occupational-therapy"
      specialtyName="Occupational Therapy"
      h1="Multiple patients, multiple zones, one clear queue."
      problemStatement="OT clinics manage patients across evaluation, treatment, adaptive equipment training, and home assessment planning — often concurrently. Therapists lose track of which patients are in which phase. Without a tracking system, coordination happens verbally or not at all."
      solutionStatement="clinIQ tracks each OT patient through their current activity zone. Staff see the full clinic picture at a glance without interrupting ongoing sessions. When a patient is ready to advance, the system alerts the right therapist automatically."
    />
  )
}
