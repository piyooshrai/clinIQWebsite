import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'RTM Billing for Urgent Care | Post-Visit Remote Monitoring | clinIQ',
  description: 'Acute care follow-up monitoring — wound care, illness recovery, medication adherence — tracked after discharge and billed. clinIQ adds RTM revenue to urgent care.',
}

export default function RTMUrgentCarePage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="rtm"
      featureName="RTM Billing"
      specialtySlug="urgent-care"
      specialtyName="Urgent Care"
      h1="Acute care follow-up monitoring — captured and billed."
      problemStatement="Urgent care providers discharge patients without the infrastructure to monitor post-visit recovery. Wound care, acute illness resolution, and medication adherence all happen outside your visibility. Appropriate post-discharge monitoring could be billable — but without a system, it never happens."
      solutionStatement="clinIQ RTM enables 30-day post-discharge monitoring for appropriate urgent care patients. Recovery check-ins are brief, automated, and generate additional RTM revenue on qualifying cases. Better follow-up. Better outcomes. Revenue on work that used to be invisible."
    />
  )
}
