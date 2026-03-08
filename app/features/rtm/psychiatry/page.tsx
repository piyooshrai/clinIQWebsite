import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'RTM Billing for Psychiatry Clinics | Mood Tracking Between Sessions | clinIQ',
  description: 'Psychiatric patients tracked between sessions with mood data, sleep logs, and medication adherence — and it\'s billable. clinIQ makes RTM work for psychiatry.',
}

export default function RTMPsychiatryPage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="rtm"
      featureName="RTM Billing"
      specialtySlug="psychiatry"
      specialtyName="Psychiatry"
      h1="Mood tracking between sessions isn't just good care. It's billable care."
      problemStatement="Psychiatrists know that weekly mood data between appointments would improve treatment decisions. But collecting it manually doesn't scale — patients don't call, staff don't have time to call, and without billing, the incentive to build the infrastructure isn't there."
      solutionStatement="clinIQ RTM enables billable remote monitoring for psychiatric patients. Daily mood check-ins, sleep data, and medication adherence reports are captured and coded for CPT 98976 or 98977 billing. The clinical benefit is real. The revenue is new."
    />
  )
}
