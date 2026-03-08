import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'RTM Billing for Orthopedic Surgery | Post-Op Recovery Monitoring | clinIQ',
  description: 'Post-surgical recovery monitored daily — pain scores, range of motion, activity compliance — and billed through RTM. clinIQ turns the 90-day post-op period into a revenue opportunity.',
}

export default function RTMOrthopedicSurgeryPage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="rtm"
      featureName="RTM Billing"
      specialtySlug="orthopedic-surgery"
      specialtyName="Orthopedic Surgery"
      h1="Post-op recovery monitoring that generates revenue."
      problemStatement="Post-surgical recovery is monitored through follow-up appointments weeks apart. In between, patients report symptoms by phone — calls that are received, triaged, and handled without ever generating a billable code. The monitoring work is real. The revenue is zero."
      solutionStatement="clinIQ RTM monitors post-surgical recovery with brief daily check-ins. Range of motion, pain levels, swelling, and activity compliance are captured and documented. CPT 98977 and 98980 billing applies. The 90-day global post-op period becomes a structured, billable monitoring period."
    />
  )
}
