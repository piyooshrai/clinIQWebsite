import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import SpecialtyHero from '@/components/SpecialtyHero'
import SpecialtyPain from '@/components/SpecialtyPain'
import SpecialtyWorkflow from '@/components/SpecialtyWorkflow'
import SpecialtyCTA from '@/components/SpecialtyCTA'
import type { WorkflowStage } from '@/components/SpecialtyWorkflow'

export const metadata: Metadata = {
  title: 'clinIQ for Cardiology — Echo, Device Clinic & Follow-Up Flow in One View',
  description:
    'Real-time patient flow for cardiology practices. Coordinate echo studies, device interrogations, and provider follow-ups without the status guesswork.',
}

const painPoints = [
  "Echo and stress test results aren't flagged to providers — someone physically walks over to say the study is done.",
  "Device clinic days pack in interrogations back-to-back — with no real-time board, staff lose track of who's been seen.",
  "High-risk patients who miss follow-ups fall through the cracks with no system to flag overdue visits.",
  "New referrals from hospitalists land in the queue with no visibility into urgency or wait time until it becomes a complaint.",
  "Providers finish a visit but the next patient isn't roomed — minutes lost between every appointment because no one saw the signal.",
]

const stages: WorkflowStage[] = [
  { label: 'Check-In', color: '#f59e0b' },
  { label: 'Echo/Test', color: '#8b5cf6' },
  { label: 'Rooming', color: '#3b82f6' },
  { label: 'Provider', color: '#0d9488' },
  { label: 'Discharge', color: '#22c55e' },
]

export default function CardiologyPage() {
  return (
    <>
      <NavInner />
      <main>
        <SpecialtyHero
          badge="Cardiology"
          title={<>Echo done. Device interrogated. <em>Is the provider ready? Does anyone know?</em></>}
          subtitle="Real-time patient flow for cardiology practices. Coordinate echo studies, device interrogations, and provider follow-ups without the status guesswork."
        />
        <SpecialtyPain
          heading="Cardiology visits have multiple steps. Each one needs a handoff. None of them should be a phone call."
          intro="Cardiology is rarely a simple in-and-out visit — it's an echo, a stress test, a device check, then a provider review. Each stage depends on the last. Without real-time visibility, the handoffs between them slow everything down."
          points={painPoints}
        />
        <SpecialtyWorkflow stages={stages} />
        <SpecialtyCTA ctaLabel="See clinIQ for cardiology" />
      </main>
      <FooterInner />
    </>
  )
}
