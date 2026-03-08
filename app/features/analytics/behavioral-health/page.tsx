import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'Analytics for Behavioral Health Clinics | Group Utilization & Caseload Data | clinIQ',
  description: 'Group utilization, individual session completion, and staff caseload — in one analytics view. clinIQ gives behavioral health practices operational visibility across all service lines.',
}

export default function AnalyticsBehavioralHealthPage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="analytics"
      featureName="Analytics"
      specialtySlug="behavioral-health"
      specialtyName="Behavioral Health"
      h1="Group utilization, individual session completion, staff capacity — all in one view."
      problemStatement="Behavioral health analytics requires tracking group session census, individual appointment completion rates, and staff caseload distribution simultaneously. No historical reporting tool has handled all three in one view — so practices pull data from different places and make decisions from incomplete pictures."
      solutionStatement="clinIQ analytics shows group session utilization by census per session, individual appointment completion by provider, and caseload distribution across your clinical team. Understaffed and overstaffed providers are visible in the data before staff burnout makes it obvious."
    />
  )
}
