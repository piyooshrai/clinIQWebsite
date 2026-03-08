import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'RTM Billing for Infusion Centers | Post-Infusion Remote Monitoring | clinIQ',
  description: 'Post-infusion monitoring between treatments is therapeutic — and billable. clinIQ tracks infusion patient symptoms between visits and captures RTM revenue.',
}

export default function RTMInfusionCentersPage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="rtm"
      featureName="RTM Billing"
      specialtySlug="infusion-centers"
      specialtyName="Infusion Centers"
      h1="Post-infusion monitoring is therapeutic. It's also billable."
      problemStatement="Infusion center patients need monitoring between treatments — symptom tracking, adverse reaction reporting, medication adherence between infusion cycles. Without RTM, this monitoring is unstructured, often verbal, and entirely unbilled."
      solutionStatement="clinIQ RTM enables billable post-infusion remote monitoring. Patients report symptoms through brief daily check-ins between treatments. Adverse events trigger automatic clinical alerts. Contact time is documented and coded for RTM billing. Monitoring that was happening anyway now generates revenue."
    />
  )
}
