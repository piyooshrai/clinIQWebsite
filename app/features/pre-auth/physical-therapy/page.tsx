import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'Pre-Authorization for Physical Therapy | PT Visit Authorization Tracking | clinIQ',
  description: 'PT authorizations tracked by patient, payer, and visit count. clinIQ alerts you before visit limits are reached and queues renewal requests automatically.',
}

export default function PreAuthPhysicalTherapyPage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="pre-auth"
      featureName="Pre-Authorization"
      specialtySlug="physical-therapy"
      specialtyName="Physical Therapy"
      h1="PT authorization management that doesn't require a full-time coordinator."
      problemStatement="Physical therapy practices manage authorizations for dozens of patients simultaneously — each with different payers, different visit limits, and different renewal timelines. Without tracking, therapists see a patient for a visit that isn't covered, and the claim denies weeks later."
      solutionStatement="clinIQ tracks PT authorizations by patient, payer, and visit count remaining. Alerts fire before authorization limits are reached so renewal requests are submitted in advance. What used to require constant manual oversight runs as an automated workflow."
    />
  )
}
