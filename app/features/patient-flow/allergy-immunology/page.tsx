import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'Patient Flow for Allergy & Immunology Clinics | Shot Clinic Tracking | clinIQ',
  description: 'Allergy shot schedules and clinic visits in one system. clinIQ eliminates the verbal coordination between injection nurses and front desk.',
}

export default function PatientFlowAllergyImmunologyPage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="patient-flow"
      featureName="Patient Flow"
      specialtySlug="allergy-immunology"
      specialtyName="Allergy & Immunology"
      h1="Shot clinic and clinic visits. Tracked without confusion."
      problemStatement="Allergy practices manage injection patients on separate shot schedules from clinic patients. Without visibility, shot nurses and front desk are in constant verbal communication — checking who's arrived, who's in their 20-minute observation window, and who's cleared to leave."
      solutionStatement="clinIQ gives shot clinic patients their own queue. Injection nurses see who's arrived, which patients are in their observation wait, and who's cleared to go — without touching the phone or calling across the room. Clinic patients flow separately."
    />
  )
}
