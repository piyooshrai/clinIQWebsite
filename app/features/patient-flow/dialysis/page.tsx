import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'Patient Flow for Dialysis Centers | Shift Management & Chair Tracking | clinIQ',
  description: 'Three shifts, sixty chairs, 180 patient visits per day. clinIQ replaces the whiteboard with real-time dialysis center tracking.',
}

export default function PatientFlowDialysisPage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="patient-flow"
      featureName="Patient Flow"
      specialtySlug="dialysis"
      specialtyName="Dialysis Centers"
      h1="Three shifts, sixty chairs, complete visibility."
      problemStatement="A dialysis center running three shifts across sixty chairs manages 180 patient visits per day. Without a tracking system, shift handoffs rely on whiteboards, memory, and verbal summaries. One missed notation means a patient in the wrong chair or a missed session record."
      solutionStatement="clinIQ tracks every chair across every shift. Arrival, machine connection, session time, disconnect, and discharge — all visible in real time. Shift handoffs become data transfers. No information is lost between the outgoing and incoming team."
    />
  )
}
