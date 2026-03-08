import type { Metadata } from 'next'
import FeatureSpecialtyPage from '@/components/templates/FeatureSpecialtyPage'

export const metadata: Metadata = {
  title: 'Pre-Authorization for Pain Management | Injection & Procedure PA Tracking | clinIQ',
  description: 'Epidural steroid injections, nerve blocks, and spinal cord stimulator trials tracked from PA submission through procedure scheduling. clinIQ manages pain management authorizations at scale.',
}

export default function PreAuthPainManagementPage() {
  return (
    <FeatureSpecialtyPage
      featureSlug="pre-auth"
      featureName="Pre-Authorization"
      specialtySlug="pain-management"
      specialtyName="Pain Management"
      h1="Prior auth for injections without the prior auth headache."
      problemStatement="Every epidural steroid injection, nerve block, and spinal cord stimulator trial requires prior authorization. Pain management practices submit dozens of PAs per week — tracking each one through payer timelines, approval windows, and expiration dates manually is unsustainable and error-prone."
      solutionStatement="clinIQ tracks pain management PAs by procedure type and payer. Submissions are confirmed. Payer timelines are monitored. Approvals attach to scheduled procedures automatically. Denials enter appeal workflows. What used to take a coordinator's full attention runs on its own."
    />
  )
}
