import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'Analytics for Infusion Centers | Chair Utilization & Revenue per Chair | clinIQ',
  description: 'Chair utilization by shift, adverse event rates, and revenue per chair — tracked. clinIQ gives infusion center leadership the data to optimize capacity and profitability.',
}

export default function AnalyticsInfusionCentersPage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="analytics"
      featureName="Analytics"
      specialtySlug="infusion-centers"
      specialtyName="Infusion Centers"
      h1="Chair utilization by shift, adverse event tracking, revenue per chair."
      problemStatement="Infusion center profitability lives in chair utilization data that most centers don't have. Revenue per chair, downtime between infusions, and adverse event rates are tracked on spreadsheets — if at all. Without this data, capacity decisions are guesses and staffing ratios are set by habit."
      solutionStatement="clinIQ analytics tracks chair utilization by shift, drug type, and payer. Adverse event rates are tracked and flagged for quality review. Revenue per chair and per provider shift give leadership the data to make decisions about staffing, scheduling, and capacity expansion."
    />
  )
}
