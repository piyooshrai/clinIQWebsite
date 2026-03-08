import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'Analytics for Physical Therapy Clinics | Therapist Utilization & Visit Completion | clinIQ',
  description: 'Visit completion rates, therapist utilization, and insurance cap tracking — measured. clinIQ gives PT practices data on the metrics that prevent revenue loss.',
}

export default function AnalyticsPhysicalTherapyPage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="analytics"
      featureName="Analytics"
      specialtySlug="physical-therapy"
      specialtyName="Physical Therapy"
      h1="Visit completion rates, therapist utilization, insurance cap tracking."
      problemStatement="PT practices need to know which therapists are running behind on their schedules, which patients are approaching their insurance visit cap without a renewal in place, and which plan of care sequences have the highest dropout rates. Without these numbers, revenue loss is invisible until the claim denies."
      solutionStatement="clinIQ analytics tracks visit completion by therapist and plan of care type. Insurance cap proximity alerts prevent surprise authorization denials. Dropout patterns at each visit sequence step identify where patient engagement breaks down — and where early intervention prevents plan incompletion."
    />
  )
}
