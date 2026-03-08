import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'Analytics for Dialysis Centers | Session Compliance & Chair Utilization | clinIQ',
  description: 'Session attendance, adverse event rates, and chair downtime — tracked across shifts and locations. clinIQ gives dialysis centers the operational data for CMS quality reporting.',
}

export default function AnalyticsDialysisPage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="analytics"
      featureName="Analytics"
      specialtySlug="dialysis"
      specialtyName="Dialysis Centers"
      h1="Session compliance, adverse events, and chair utilization — tracked."
      problemStatement="Dialysis centers need to track missed sessions, adverse events, chair downtime between patients, and compliance trends — across multiple shifts, sometimes multiple locations. Without a unified analytics system, each of these is tracked separately or not at all."
      solutionStatement="clinIQ analytics tracks dialysis session attendance, adverse event rates, and chair downtime across all shifts. Compliance trends by patient cohort are visible over time. Quality metrics required for CMS reporting are calculated from existing session data — no separate data entry required."
    />
  )
}
