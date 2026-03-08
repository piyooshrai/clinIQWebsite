import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'Pre-Authorization for Infusion Centers | Biologic Infusion PA Tracking | clinIQ',
  description: 'Every biologic infusion requires authorization. clinIQ tracks infusion PAs by drug, patient, and authorization period so no patient arrives without active coverage.',
}

export default function PreAuthInfusionCentersPage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="pre-auth"
      featureName="Pre-Authorization"
      specialtySlug="infusion-centers"
      specialtyName="Infusion Centers"
      h1="Every infusion needs authorization. Track them all."
      problemStatement="Biologic infusions require prior authorization that must be obtained before scheduling is confirmed and renewed before each authorization period expires. For high-volume infusion centers managing dozens of patients on different drugs with different payers, manual tracking fails — and a patient arrives without coverage."
      solutionStatement="clinIQ tracks infusion authorizations by drug, patient, and authorization period. Renewal alerts fire 30 days before expiration. Every infusion appointment has a linked, active authorization attached before the patient is scheduled. No surprises on infusion day."
    />
  )
}
