import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'Analytics for Urgent Care | Door-to-Door Time & LWBS Rate Tracking | clinIQ',
  description: 'Door-to-triage, room-to-discharge, LWBS rate, and provider throughput — calculated automatically. clinIQ gives urgent care practices the dashboard their competitors are missing.',
}

export default function AnalyticsUrgentCarePage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="analytics"
      featureName="Analytics"
      specialtySlug="urgent-care"
      specialtyName="Urgent Care"
      h1="Door-to-door time, LWBS rate, provider throughput. One dashboard."
      problemStatement="Urgent care metrics — door-to-triage, triage-to-room, room-to-discharge, LWBS rate — require extracting timestamps from multiple systems and computing timelines manually. Most practices give up and track LWBS by asking staff at end of shift. The result is no useful data."
      solutionStatement="clinIQ captures every patient timestamp automatically from arrival through discharge. Door-to-discharge time, LWBS rate, and provider throughput are calculated and displayed in a single dashboard. Bottlenecks by hour, shift, and provider are visible — and actionable."
    />
  )
}
