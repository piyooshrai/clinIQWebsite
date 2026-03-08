import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'Analytics for Pain Management Clinics | Procedure Room & PA Turnaround Data | clinIQ',
  description: 'Procedure room utilization, PA turnaround time, and patient flow trends — measured. clinIQ gives pain management practices data on the metrics that drive revenue.',
}

export default function AnalyticsPainManagementPage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="analytics"
      featureName="Analytics"
      specialtySlug="pain-management"
      specialtyName="Pain Management"
      h1="Procedure room utilization, PA turnaround, patient flow trends."
      problemStatement="Pain management practices invest heavily in procedure rooms and PA staffing without data on either. Procedure room utilization is tracked by memory. PA submission-to-approval time is never measured. Without these numbers, it's impossible to know where revenue is being left on the table."
      solutionStatement="clinIQ analytics tracks procedure room utilization by room, shift, and procedure type. PA submission-to-approval timelines are measured by payer. Patient flow trends by clinic day versus procedure day are visible. Decisions about room scheduling and staffing levels can be made from data."
    />
  )
}
