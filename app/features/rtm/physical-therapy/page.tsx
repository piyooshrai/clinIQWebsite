import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'RTM Billing for Physical Therapy | Home Exercise Program Monitoring | clinIQ',
  description: 'HEP compliance, pain response, and functional progress tracked between PT sessions — and billed. clinIQ makes home exercise monitoring a revenue source.',
}

export default function RTMPhysicalTherapyPage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="rtm"
      featureName="RTM Billing"
      specialtySlug="physical-therapy"
      specialtyName="Physical Therapy"
      h1="Home exercise compliance is therapeutic monitoring. Now it's billable."
      problemStatement="Physical therapists prescribe home exercise programs but have no way to track compliance, monitor pain response, or adjust programs between visits. This between-visit clinical work is valuable and time-consuming — and historically, it's entirely unbilled."
      solutionStatement="clinIQ RTM tracks home exercise completion, pain response, and functional progress between sessions. CPT 98981 reimburses the monitoring time. HEP compliance data that was previously guessed at becomes clinical information you can act on — and bill for."
    />
  )
}
