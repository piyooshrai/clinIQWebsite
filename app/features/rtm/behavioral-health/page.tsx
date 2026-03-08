import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'RTM Billing for Behavioral Health Clinics | Between-Visit Monitoring | clinIQ',
  description: 'Between-visit patient touchpoints tracked and billed. clinIQ captures behavioral health RTM revenue on contacts that were always happening but never generating revenue.',
}

export default function RTMBehavioralHealthPage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="rtm"
      featureName="RTM Billing"
      specialtySlug="behavioral-health"
      specialtyName="Behavioral Health"
      h1="Between-visit touchpoints, tracked and billed."
      problemStatement="Behavioral health practices invest significant time in between-visit patient contact — phone calls, message responses, care coordination. Most of it is unbilled and invisible. Staff do the work. It never appears on a claim."
      solutionStatement="clinIQ RTM captures therapeutic monitoring interactions and staff contact time. Remote monitoring services for behavioral health patients are billable under appropriate RTM codes. Work that was always happening now generates revenue — without adding work."
    />
  )
}
