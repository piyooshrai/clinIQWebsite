import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'Patient Flow for Physical Therapy Clinics | PT Patient Tracking | clinIQ',
  description: 'Multiple patients across exercise zones, treatment rooms, and equipment stations. clinIQ tracks every PT patient through every zone in real time.',
}

export default function PatientFlowPhysicalTherapyPage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="patient-flow"
      featureName="Patient Flow"
      specialtySlug="physical-therapy"
      specialtyName="Physical Therapy"
      h1="Four patients, three zones, complete visibility."
      problemStatement="Physical therapy clinics treat multiple patients simultaneously across exercise areas, treatment rooms, and equipment stations. Therapists split their attention and patients wait between activities without knowing how long. The result is uneven treatment times and underutilized staff."
      solutionStatement="clinIQ tracks each patient through their session zones. When a patient finishes in the exercise area, their therapist is automatically alerted. No patient waits unnoticed. No therapist is surprised when a patient is ready. The whole session runs on schedule."
    />
  )
}
