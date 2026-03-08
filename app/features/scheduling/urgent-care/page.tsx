import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'Scheduling for Urgent Care | Shift & Provider Capacity Management | clinIQ',
  description: 'Walk-ins don\'t need appointments, but your providers still need a schedule. clinIQ manages urgent care provider shifts and capacity without requiring patient pre-booking.',
}

export default function SchedulingUrgentCarePage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="scheduling"
      featureName="Scheduling"
      specialtySlug="urgent-care"
      specialtyName="Urgent Care"
      h1="Walk-ins don't need appointments. But your providers still need a schedule."
      problemStatement="Urgent care providers don't see scheduled patients — but they still need visibility into their shift capacity, double-coverage windows, and historical volume patterns. Without a scheduling system that handles this, staffing decisions are made from gut instinct rather than data."
      solutionStatement="clinIQ scheduling manages provider shifts and capacity without requiring patient pre-booking. Providers see their coverage windows. Volume trends from historical data inform staffing decisions. When walk-in volume surges, you already have the coverage infrastructure to handle it."
    />
  )
}
