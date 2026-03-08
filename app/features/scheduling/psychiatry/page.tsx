import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'Scheduling for Psychiatry Clinics | Mental Health Appointment Management | clinIQ',
  description: 'Initial evaluations, med management, therapy sessions — each with its own duration and rules. clinIQ schedules psychiatry visits correctly from the first booking.',
}

export default function SchedulingPsychiatryPage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="scheduling"
      featureName="Scheduling"
      specialtySlug="psychiatry"
      specialtyName="Psychiatry"
      h1="30-minute sessions, 60-minute sessions, new patients, established. All scheduled right."
      problemStatement="Psychiatric scheduling isn't uniform. Initial evaluations run 60 minutes. Medication management visits are 20. Therapy sessions are 50. One-size-fits-all scheduling creates gaps where there should be appointments and double-booking where there shouldn't be any."
      solutionStatement="clinIQ scheduling applies visit-type rules automatically. Each appointment type has its own duration, room requirement, and provider match. The calendar builds itself correctly — no manual adjustment required after booking, no gaps left from wrong duration estimates."
    />
  )
}
