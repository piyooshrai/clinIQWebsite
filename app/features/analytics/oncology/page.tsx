import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'Analytics for Oncology Clinics | Infusion Chair Utilization & Treatment Adherence | clinIQ',
  description: 'Infusion chair utilization, treatment adherence rates, and multi-step visit completion — measured. clinIQ gives oncology practices data on what actually drives clinical throughput.',
}

export default function AnalyticsOncologyPage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="analytics"
      featureName="Analytics"
      specialtySlug="oncology"
      specialtyName="Oncology"
      h1="Infusion chair utilization, treatment adherence, and visit patterns — measured."
      problemStatement="Oncology practices need to track infusion center utilization, patient treatment adherence, and multi-step visit completion — data that traditional analytics tools don't connect. Without it, operational decisions about capacity and staffing are made without knowing what's actually driving throughput."
      solutionStatement="clinIQ analytics measures infusion chair utilization by shift, patient treatment adherence rates across active protocols, and multi-step visit completion timing. Cancellation and no-show patterns reveal which patient populations need proactive outreach before they miss critical treatment."
    />
  )
}
