import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'Analytics for Orthopedic Surgery Centers | OR Utilization & Case Volume | clinIQ',
  description: 'OR utilization, clinic throughput, and surgical case volume — connected in one view. clinIQ shows orthopedic practices how clinical volume converts to surgical revenue.',
}

export default function AnalyticsOrthopedicSurgeryPage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="analytics"
      featureName="Analytics"
      specialtySlug="orthopedic-surgery"
      specialtyName="Orthopedic Surgery"
      h1="OR utilization, clinic throughput, and case volume — one view."
      problemStatement="Orthopedic surgery centers separate OR analytics from clinic analytics — if they track either. The result is no visibility into how clinical consultation volume converts to surgical volume, or where OR time is lost to late starts, case cancellations, and extended recovery."
      solutionStatement="clinIQ analytics connects clinic and surgical data. Case conversion rates from consultation to surgical scheduling are measured. OR utilization, late start rates, and cancellation patterns are tracked. Post-op follow-up completion rates close the loop on the full episode of care."
    />
  )
}
