import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'Pre-Authorization for Psychiatry | Psychiatric Medication PA Tracking | clinIQ',
  description: 'Step therapy documentation, denial tracking, and appeals management for psychiatric medications. clinIQ tracks every PA from submission to approval.',
}

export default function PreAuthPsychiatryPage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="pre-auth"
      featureName="Pre-Authorization"
      specialtySlug="psychiatry"
      specialtyName="Psychiatry"
      h1="Psychiatric medication prior auth — tracked from submission to approval."
      problemStatement="Brand psychiatric medications increasingly require step therapy documentation and prior authorization. Failed authorization attempts delay treatment starts. Without a tracking system, denials get missed, appeals expire, and patients wait on medications they need while paperwork sits in someone's inbox."
      solutionStatement="clinIQ tracks every psychiatric PA from submission through approval or appeal. Step therapy documentation is captured at intake and attached to the authorization request. Denial reasons trigger an appeal workflow automatically. No authorization expires without a decision."
    />
  )
}
