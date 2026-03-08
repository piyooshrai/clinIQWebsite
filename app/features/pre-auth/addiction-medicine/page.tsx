import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'Pre-Authorization for Addiction Medicine | MAT Medication PA Tracking | clinIQ',
  description: 'Buprenorphine, naltrexone, and methadone prior authorizations tracked from submission to renewal. clinIQ prevents MAT coverage gaps from missed paperwork.',
}

export default function PreAuthAddictionMedicinePage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="pre-auth"
      featureName="Pre-Authorization"
      specialtySlug="addiction-medicine"
      specialtyName="Addiction Medicine"
      h1="Prior auth for buprenorphine doesn't have to be a full-time job."
      problemStatement="MAT medications — buprenorphine, naltrexone, injectable naltrexone — require prior authorization that arrives slowly, expires quickly, and often needs annual renewal. Managing it manually means patients occasionally run out of medication because paperwork was missed. That is a clinical failure."
      solutionStatement="clinIQ pre-auth tracks every authorization by medication and patient. Expiration alerts fire 30 days before coverage ends. Renewal requests are queued automatically. No patient runs out of MAT medication because a PA renewal was missed in a paper stack."
    />
  )
}
