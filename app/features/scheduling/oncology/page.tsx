import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'Scheduling for Oncology Clinics | Multi-Step Visit & Infusion Scheduling | clinIQ',
  description: 'Lab visits, provider appointments, and infusion slots in one day. clinIQ links multi-step oncology visits into single-day workflows with one booking action.',
}

export default function SchedulingOncologyPage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="scheduling"
      featureName="Scheduling"
      specialtySlug="oncology"
      specialtyName="Oncology"
      h1="Multi-visit days, clinical trials, and infusion slots — scheduled together."
      problemStatement="Oncology scheduling involves lab visits, provider appointments, and infusion slots that often need to happen in the same day — plus clinical trial patients on separate protocols. Booking these separately creates time gaps, missed connections, and coordination failures between departments."
      solutionStatement="clinIQ scheduling links multi-step oncology visits into single-day workflows. Lab to provider to infusion is one booking action that creates all three appointments with correct sequencing. Trial patients are flagged and sequenced on their own protocols automatically."
    />
  )
}
