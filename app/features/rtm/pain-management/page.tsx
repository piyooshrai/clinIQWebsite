import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'RTM Billing for Pain Management Clinics | Functional Outcome Monitoring | clinIQ',
  description: 'Pain scores, functional status, and medication adherence — tracked between visits and billed. clinIQ captures $120-150 per eligible pain management patient per month.',
}

export default function RTMPainManagementPage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="rtm"
      featureName="RTM Billing"
      specialtySlug="pain-management"
      specialtyName="Pain Management"
      h1="Pain tracking, functional outcomes. $150/patient/month you're missing."
      problemStatement="Pain management providers want functional outcome data between appointments — pain scores, activity levels, medication adherence. Without RTM, they're asking patients to recall months-old symptoms during a visit. Without billing, they're performing monitoring work that doesn't appear on any claim."
      solutionStatement="clinIQ RTM captures pain scores, functional status, and medication adherence data daily. CPT 98977 and 98980 generate $120–150 per eligible patient per 30-day monitoring period. Better data at the next visit. Additional revenue on every eligible patient."
    />
  )
}
