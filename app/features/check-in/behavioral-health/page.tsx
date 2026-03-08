import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'Patient Check-In for Behavioral Health Clinics | Therapy Practice Check-In | clinIQ',
  description: 'Send intake forms before appointments, check in patients digitally when they arrive. clinIQ reduces behavioral health check-in to seconds.',
}

export default function CheckInBehavioralHealthPage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="check-in"
      featureName="Check-In"
      specialtySlug="behavioral-health"
      specialtyName="Behavioral Health"
      h1="Intake paperwork before they arrive. Check-in when they do."
      problemStatement="New behavioral health patients complete lengthy intake paperwork at the front desk on arrival — adding 20 minutes to a first visit and creating a bottleneck for everyone behind them. Staff stop other work to assist. Established patients wait longer."
      solutionStatement="clinIQ sends intake forms before the appointment via text or email. Patients complete them at home, on their own time. When they arrive, check-in takes under 30 seconds. Paperwork is already in the system. The first session starts on time."
    />
  )
}
