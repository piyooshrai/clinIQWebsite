import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'Analytics for Addiction Medicine Clinics | MAT Retention & No-Show Data | clinIQ',
  description: 'No-show rates, treatment retention, and visit frequency — measured. clinIQ gives addiction medicine practices data to improve outcomes, not just track them.',
}

export default function AnalyticsAddictionMedicinePage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="analytics"
      featureName="Analytics"
      specialtySlug="addiction-medicine"
      specialtyName="Addiction Medicine"
      h1="No-show rates, treatment retention, and visit frequency — visible."
      problemStatement="Addiction medicine practices track patient retention informally. Without data, it's impossible to know whether your no-show rate has improved, which appointment types are most missed, or whether patients who disengage are doing so gradually or all at once. You can't improve what you're not measuring."
      solutionStatement="clinIQ analytics tracks no-show and cancellation rates by appointment type, provider, and patient cohort. Treatment retention trends are visible over time. You know which patients are at risk of disengaging — before they stop showing up entirely."
    />
  )
}
