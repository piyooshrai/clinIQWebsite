import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import SpecialtyHero from '@/components/SpecialtyHero'
import SpecialtyPain from '@/components/SpecialtyPain'
import SpecialtyWorkflow from '@/components/SpecialtyWorkflow'
import SpecialtyCTA from '@/components/SpecialtyCTA'
import type { WorkflowStage } from '@/components/SpecialtyWorkflow'

export const metadata: Metadata = {
  title: 'clinIQ for Pain Management — High-Volume Procedure Flow Without the Bottlenecks',
  description:
    'Real-time visibility for pain management clinics. Coordinate procedure rooms, injections, and follow-ups without losing track of who\'s where.',
}

const painPoints = [
  "Procedure room turnover is invisible — staff don't know if a room is clean, occupied, or ready until they physically check.",
  "High no-show rates for injection appointments mean wasted room time and unpredictable provider days.",
  "Pre-procedure check lists get done verbally — no record, no consistency, no accountability.",
  "Front desk juggles new patients, follow-ups, and walk-ins with no way to signal who needs to move next.",
  "Providers waste minutes between every procedure hunting for someone to confirm the next patient is ready.",
]

const stages: WorkflowStage[] = [
  { label: 'Check-In', color: '#f59e0b' },
  { label: 'Pre-Proc', color: '#8b5cf6' },
  { label: 'Procedure', color: '#ef4444' },
  { label: 'Recovery', color: '#3b82f6' },
  { label: 'Discharge', color: '#22c55e' },
]

export default function PainManagementPage() {
  return (
    <>
      <NavInner />
      <main>
        <SpecialtyHero
          badge="Pain Management"
          title={<>High-volume procedure days need <em>high-resolution visibility.</em></>}
          subtitle="Real-time visibility for pain management clinics. Coordinate procedure rooms, injections, and follow-ups without losing track of who's where."
        />
        <SpecialtyPain
          heading="Procedure flow falls apart when no one can see the whole picture."
          intro="Pain management runs on procedures — injections, nerve blocks, spinal stimulators. Each one has prep steps, room requirements, and recovery time. Without visibility across all of it, bottlenecks compound and providers idle."
          points={painPoints}
        />
        <SpecialtyWorkflow stages={stages} />
        <SpecialtyCTA ctaLabel="See clinIQ for pain management" />
      </main>
      <FooterInner />
    </>
  )
}
