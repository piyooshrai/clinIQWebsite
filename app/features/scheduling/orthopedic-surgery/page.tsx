import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'Scheduling for Orthopedic Surgery Centers | OR & Clinic Calendar Management | clinIQ',
  description: 'Clinic visits, pre-op appointments, OR blocks, and post-op follow-ups in one connected calendar. clinIQ manages orthopedic scheduling across multiple locations.',
}

export default function SchedulingOrthopedicSurgeryPage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="scheduling"
      featureName="Scheduling"
      specialtySlug="orthopedic-surgery"
      specialtyName="Orthopedic Surgery"
      h1="OR slots, clinic visits, and follow-ups. One calendar."
      problemStatement="Orthopedic surgery scheduling spans clinic appointments, pre-op visits, OR blocks, and post-op follow-ups — often across multiple locations. Managing them in separate systems means gaps nobody catches until a patient calls with a conflict or a surgeon arrives at an empty OR."
      solutionStatement="clinIQ scheduling connects clinic and surgical calendars. Provider calendars show clinic and OR blocks together. Pre-op appointments link to the surgical encounter. Post-op follow-ups are suggested at the time of surgery scheduling. The full episode of care is visible from day one."
    />
  )
}
