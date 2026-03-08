import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'Analytics for Psychiatry Clinics | Session Completion & Waitlist Data | clinIQ',
  description: 'Session completion rates, new patient access windows, and provider capacity — measured. clinIQ gives psychiatry practices data to reduce waitlists and improve access.',
}

export default function AnalyticsPsychiatryPage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="analytics"
      featureName="Analytics"
      specialtySlug="psychiatry"
      specialtyName="Psychiatry"
      h1="Session completion rates, scheduling wait times, and provider capacity — measured."
      problemStatement="Psychiatry practices struggle to measure the right things. Provider availability data is hard to get. Scheduling wait times are tracked by asking staff. No-show rates are estimated. Without real data, operational decisions are made on instinct — and waitlists grow without explanation."
      solutionStatement="clinIQ analytics measures session completion, no-show rates by appointment type, and new patient access window trends over time. Bottlenecks in new patient scheduling are visible before the waitlist grows to crisis length."
    />
  )
}
