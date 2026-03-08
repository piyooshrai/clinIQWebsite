import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import SpecialtyHero from '@/components/SpecialtyHero'
import SpecialtyPain from '@/components/SpecialtyPain'
import SpecialtyWorkflow from '@/components/SpecialtyWorkflow'
import SpecialtyCTA from '@/components/SpecialtyCTA'
import type { WorkflowStage } from '@/components/SpecialtyWorkflow'

export const metadata: Metadata = {
  title: 'clinIQ for Physical Therapy — Multi-Patient Room Tracking That Actually Works',
  description:
    'Real-time visibility across every treatment room. Know which patients are waiting, in progress, or ready for their next exercise set — without walking the floor.',
}

const painPoints = [
  "PTs manage 3–4 patients simultaneously — losing track of who's on hold between sets wastes treatment time.",
  "Support staff don't know when a patient is ready to move to the next station without physically checking.",
  "Scheduling back-to-back evaluations with overlapping treatment patients creates invisible logjams.",
  "New patient paperwork slows check-in while everyone in the waiting room watches the clock.",
  "No way to signal a therapist from the front desk without interrupting an active treatment session.",
]

const stages: WorkflowStage[] = [
  { label: 'Check-In', color: '#f59e0b' },
  { label: 'Eval', color: '#8b5cf6' },
  { label: 'Treatment', color: '#0d9488' },
  { label: 'Exercise', color: '#3b82f6' },
  { label: 'Discharge', color: '#22c55e' },
]

export default function PhysicalTherapyPage() {
  return (
    <>
      <NavInner />
      <main>
        <SpecialtyHero
          badge="Physical Therapy"
          title={<>You&rsquo;re managing 4 patients at once. <em>You need to see all 4.</em></>}
          subtitle="Real-time visibility across every treatment room. Know which patients are waiting, in progress, or ready for their next set — without walking the floor."
        />
        <SpecialtyPain
          heading="PT clinics run on parallel care. The system needs to match."
          intro="Physical therapy is uniquely complex — one therapist, multiple patients, multiple stages of care happening simultaneously. Without real-time room status, time gets wasted between every handoff."
          points={painPoints}
        />
        <SpecialtyWorkflow stages={stages} />
        <SpecialtyCTA ctaLabel="See clinIQ for physical therapy" />
      </main>
      <FooterInner />
    </>
  )
}
