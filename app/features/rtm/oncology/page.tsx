import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'RTM Billing for Oncology Clinics | Treatment Period Remote Monitoring | clinIQ',
  description: 'Side effect tracking, medication adherence, and functional status monitored between infusions — and billed. clinIQ captures RTM revenue for oncology practices.',
}

export default function RTMOncologyPage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="rtm"
      featureName="RTM Billing"
      specialtySlug="oncology"
      specialtyName="Oncology"
      h1="Treatment monitoring between infusions. Billable."
      problemStatement="Oncology patients on active treatment need monitoring between infusions — toxicity tracking, medication adherence, functional status changes. This monitoring happens through phone calls, patient-initiated contacts, and nurse triage — all of it untracked and unbilled."
      solutionStatement="clinIQ RTM captures treatment-period monitoring data through brief daily patient check-ins. Toxicity reports, functional status, and adherence data are documented and coded for CPT 98975–98981 billing. Better data at each visit. Revenue on monitoring that was already happening."
    />
  )
}
