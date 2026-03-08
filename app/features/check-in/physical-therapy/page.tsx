import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'Patient Check-In for Physical Therapy | Recurring PT Appointment Check-In | clinIQ',
  description: 'PT patients attend 2-3 sessions per week for months. clinIQ makes check-in a single tap every time — fast at visit 1, still fast at visit 30.',
}

export default function CheckInPhysicalTherapyPage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="check-in"
      featureName="Check-In"
      specialtySlug="physical-therapy"
      specialtyName="Physical Therapy"
      h1="Thirty visits over twelve weeks. Check-in that's fast every time."
      problemStatement="Physical therapy patients attend two or three sessions per week for months. A check-in process that takes even three minutes per visit adds hours of accumulated delay over a plan of care. For busy PT practices, that friction affects every patient behind them in the schedule."
      solutionStatement="clinIQ PT check-in is a single-tap arrival confirmation. The patient taps the kiosk or checks in on their phone, their session loads automatically, and their therapist is notified. Under 10 seconds at visit 1. Still under 10 seconds at visit 30."
    />
  )
}
