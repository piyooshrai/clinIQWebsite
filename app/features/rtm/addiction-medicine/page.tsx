import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'RTM Billing for Addiction Medicine Clinics | Remote Therapeutic Monitoring | clinIQ',
  description: 'Behavioral health monitoring between MAT visits is now billable. clinIQ tracks RTM contact minutes automatically and captures CPT 98975-98981 revenue.',
}

export default function RTMAddictionMedicinePage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="rtm"
      featureName="RTM Billing"
      specialtySlug="addiction-medicine"
      specialtyName="Addiction Medicine"
      h1="Behavioral health monitoring between visits. Billable with RTM."
      problemStatement="Addiction medicine providers know their patients need support between visits. Cravings, life stressors, and medication side effects don't wait for the next appointment. But between-visit monitoring has historically been unbillable — so practices don't build systems around it."
      solutionStatement="RTM CPT codes 98975–98981 make behavioral health monitoring billable. clinIQ tracks required contact minutes and patient interactions automatically. A patient on a 30-day monitoring period generates $120–150 in captured revenue — and better clinical outcomes."
    />
  )
}
