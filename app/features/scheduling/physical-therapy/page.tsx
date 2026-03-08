import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'Scheduling for Physical Therapy Clinics | Plan of Care Appointment Scheduling | clinIQ',
  description: 'Book entire plans of care in one workflow. clinIQ manages PT appointment sequences, waitlists, and cancellations across a full 30-visit plan of care.',
}

export default function SchedulingPhysicalTherapyPage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="scheduling"
      featureName="Scheduling"
      specialtySlug="physical-therapy"
      specialtyName="Physical Therapy"
      h1="Plans of care, appointment sequences, and waitlist management — handled."
      problemStatement="PT scheduling requires booking 15 to 30 appointments across a plan of care, maintaining therapist consistency, and managing frequent cancellations and reschedules — all without losing patients to a waitlist that never gets checked. Manual scheduling makes all of this harder than it needs to be."
      solutionStatement="clinIQ scheduling books entire plans of care in a single workflow. Appointment sequences are set at plan creation with recurring times and consistent therapist assignments. Cancellations automatically offer the slot to the next patient on the waitlist."
    />
  )
}
