import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'RTM Billing for Dialysis Centers | Between-Session Remote Monitoring | clinIQ',
  description: 'Blood pressure, weight, fluid intake, and symptoms tracked between dialysis sessions — and billed. clinIQ makes between-session monitoring billable.',
}

export default function RTMDialysisPage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="rtm"
      featureName="RTM Billing"
      specialtySlug="dialysis"
      specialtyName="Dialysis Centers"
      h1="Between-session monitoring for dialysis patients, billable."
      problemStatement="Dialysis patients need health monitoring between sessions — blood pressure tracking, fluid intake compliance, dietary adherence. This monitoring is clinically valuable and clearly therapeutic. Until RTM, it was also entirely unbilled and largely unsystematic."
      solutionStatement="clinIQ RTM enables billable remote monitoring for dialysis patients between sessions. Blood pressure readings, weight, and symptom reports are captured in brief daily check-ins. RTM codes generate revenue while clinical alerts catch deterioration before the next session."
    />
  )
}
