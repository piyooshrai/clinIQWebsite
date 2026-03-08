import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'Patient Flow for Nephrology Practices | Clinic & Dialysis Tracking | clinIQ',
  description: 'Nephrology practices managing clinic visits and dialysis need one system. clinIQ tracks both workflows simultaneously without confusion.',
}

export default function PatientFlowNephrologyPage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="patient-flow"
      featureName="Patient Flow"
      specialtySlug="nephrology"
      specialtyName="Nephrology"
      h1="Clinic visits and dialysis. One system, full visibility."
      problemStatement="Nephrology practices managing both clinic patients and dialysis patients need two tracking systems — or one system that can't handle both types. Clinic patients move through exam rooms while dialysis patients cycle through chairs. Without visibility across both, coordination breaks down."
      solutionStatement="clinIQ handles both clinic and dialysis workflows simultaneously in one dashboard. Clinic patients move through exam rooms. Dialysis patients cycle through chairs. Staff in both areas see the complete picture — and nothing falls between the two service lines."
    />
  )
}
