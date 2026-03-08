import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'Scheduling for Behavioral Health Clinics | Group & Individual Session Scheduling | clinIQ',
  description: 'Group sessions, individual therapy, and medication management — scheduled without conflicts. clinIQ handles behavioral health scheduling across all visit types.',
}

export default function SchedulingBehavioralHealthPage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="scheduling"
      featureName="Scheduling"
      specialtySlug="behavioral-health"
      specialtyName="Behavioral Health"
      h1="Group sessions, individual therapy, med management — same calendar."
      problemStatement="Behavioral health practices schedule individual therapy, group sessions, and medication management simultaneously. Most scheduling systems treat them as the same type of appointment — they don't track group capacity separately, and they can't apply different booking rules per visit type."
      solutionStatement="clinIQ scheduling handles group capacity separately from individual slots. Group sessions show remaining seats. Medication management books with the prescriber. Individual therapy respects therapist caseload limits. One calendar — the right rules for every visit type."
    />
  )
}
