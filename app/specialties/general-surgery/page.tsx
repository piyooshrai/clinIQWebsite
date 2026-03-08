import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import SpecialtyHero from '@/components/SpecialtyHero'
import SpecialtyPain from '@/components/SpecialtyPain'
import SpecialtyWorkflow from '@/components/SpecialtyWorkflow'
import SpecialtyCTA from '@/components/SpecialtyCTA'
import type { WorkflowStage } from '@/components/SpecialtyWorkflow'

export const metadata: Metadata = {
  title: 'clinIQ for General Surgery — Clinic-to-OR Coordination Without the Phone Tag',
  description:
    'Real-time visibility across your general surgery practice. Coordinate clinic visits, pre-op prep, and post-op follow-ups without staff hunting for status updates.',
}

const painPoints = [
  "OR-clinic coordination depends on phone calls — staff call the hospital to confirm status instead of seeing it in real time.",
  "Post-op follow-up visits get squeezed into already packed clinic schedules with no prioritization system.",
  "Wound checks and staple removals need rooms, supplies, and staff — none of which gets signaled until the patient is already roomed.",
  "Pre-surgical clearance paperwork gets lost between referring providers and your office with no tracking.",
  "Patients who've been cleared for surgery wait weeks for a call-back that should take hours — no visibility into the bottleneck.",
]

const stages: WorkflowStage[] = [
  { label: 'Consult', color: '#f59e0b' },
  { label: 'Pre-Op', color: '#8b5cf6' },
  { label: 'OR', color: '#ef4444' },
  { label: 'Post-Op', color: '#3b82f6' },
  { label: 'Follow-Up', color: '#22c55e' },
]

export default function GeneralSurgeryPage() {
  return (
    <>
      <NavInner />
      <main>
        <SpecialtyHero
          badge="General Surgery"
          title={<>Clinic and OR, finally <em>on the same page.</em></>}
          subtitle="Real-time visibility across your general surgery practice. Coordinate clinic visits, pre-op prep, and post-op follow-ups without staff hunting for status updates."
        />
        <SpecialtyPain
          heading="General surgery lives across two worlds. Visibility has to bridge them."
          intro="General surgery practices split their time between clinic and the OR. The gap between those two environments is where communication breaks down — and where patients, paperwork, and prep steps get lost."
          points={painPoints}
        />
        <SpecialtyWorkflow stages={stages} />
        <SpecialtyCTA ctaLabel="See clinIQ for general surgery" />
      </main>
      <FooterInner />
    </>
  )
}
