import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'Scheduling for Pain Management Clinics | Procedure Day Scheduling | clinIQ',
  description: 'Procedure days and clinic days in one calendar. clinIQ prevents double-booking of procedure rooms and keeps pain management scheduling conflict-free.',
}

export default function SchedulingPainManagementPage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="scheduling"
      featureName="Scheduling"
      specialtySlug="pain-management"
      specialtyName="Pain Management"
      h1="Procedure days and clinic days don't conflict when the system understands both."
      problemStatement="Pain management clinics alternate between clinic days for medication management and procedure days for injections. A scheduling system that doesn't distinguish them double-books procedure rooms, conflicts providers, and creates the kind of errors that require staff intervention to untangle every week."
      solutionStatement="clinIQ scheduling blocks procedure days correctly — procedure rooms reserved, providers assigned, prep time built in. Clinic days keep exam rooms available. The rules are set once. Every subsequent booking respects them without staff having to remember which day is which."
    />
  )
}
