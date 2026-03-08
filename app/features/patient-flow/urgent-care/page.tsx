import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'Patient Flow for Urgent Care | LWBS Reduction & Wait Time Visibility | clinIQ',
  description: 'Triage to discharge, tracked in real time. clinIQ reduces LWBS rates by giving urgent care staff full visibility across every patient stage.',
}

export default function PatientFlowUrgentCarePage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="patient-flow"
      featureName="Patient Flow"
      specialtySlug="urgent-care"
      specialtyName="Urgent Care"
      h1="Triage to discharge, visible in real-time."
      problemStatement="Urgent care is unpredictable by design. Walk-ins arrive faster than rooms open. Without real-time visibility, patients wait in the dark, staff can't prioritize, and LWBS rates climb. Nobody knows what the actual wait is — not patients, not staff."
      solutionStatement="clinIQ shows every patient from arrival through triage, room assignment, and discharge. Wait times update in real time. Staff see the full queue. Patients see their position on the lobby display. LWBS drops when patients have accurate information."
    />
  )
}
