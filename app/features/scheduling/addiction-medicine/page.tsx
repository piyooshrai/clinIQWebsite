import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'Scheduling for Addiction Medicine Clinics | MAT Appointment Management | clinIQ',
  description: 'Injection schedules, refill appointments, and crisis slots in one system. clinIQ handles addiction medicine scheduling with visit-type rules that actually match your workflow.',
}

export default function SchedulingAddictionMedicinePage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="scheduling"
      featureName="Scheduling"
      specialtySlug="addiction-medicine"
      specialtyName="Addiction Medicine"
      h1="Injection schedules, refill appointments, and crisis slots — one system."
      problemStatement="Addiction medicine practices schedule across multiple visit types: naltrexone injection appointments, buprenorphine refill visits, new patient intakes, and urgent crisis slots. Most scheduling systems treat them all the same. They're not — and booking them wrong wastes time that patients in crisis don't have."
      solutionStatement="clinIQ scheduling handles each visit type with its own rules. Injection appointments block the room and clinical time. Refill visits are shorter. Crisis slots stay open until filled. One calendar, all visit types — and the right rules applied automatically to each."
    />
  )
}
