import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import SpecialtyHero from '@/components/SpecialtyHero'
import SpecialtyPain from '@/components/SpecialtyPain'
import SpecialtyWorkflow from '@/components/SpecialtyWorkflow'
import SpecialtyCTA from '@/components/SpecialtyCTA'
import type { WorkflowStage } from '@/components/SpecialtyWorkflow'

export const metadata: Metadata = {
  title: 'clinIQ for Orthopedic Surgery — Pre-Op & Post-Op Flow Without the Confusion',
  description:
    'Real-time visibility across your orthopedic clinic and surgical workflow. Coordinate pre-op prep, OR handoffs, and post-op recovery without chasing anyone down.',
}

const painPoints = [
  "Pre-op prep status is invisible — surgical teams call the clinic to confirm patient readiness instead of seeing it in real time.",
  "Post-op patients sit in recovery longer than needed because discharge readiness never gets communicated upstream.",
  "Clinic days mixed with surgery days create scheduling collisions that nobody sees coming until they've already happened.",
  "New consult patients wait alongside post-op follow-ups with no way to prioritize or differentiate their status.",
  "X-ray and imaging results aren't flagged to providers — staff physically walk down the hall to say 'the images are ready'.",
]

const stages: WorkflowStage[] = [
  { label: 'Check-In', color: '#f59e0b' },
  { label: 'Pre-Op', color: '#8b5cf6' },
  { label: 'OR', color: '#ef4444' },
  { label: 'Recovery', color: '#3b82f6' },
  { label: 'Discharge', color: '#22c55e' },
]

export default function OrthopedicSurgeryPage() {
  return (
    <>
      <NavInner />
      <main>
        <SpecialtyHero
          badge="Orthopedic Surgery"
          title={<>Pre-op to post-op. <em>Every handoff visible in real time.</em></>}
          subtitle="Real-time visibility across your orthopedic clinic and surgical workflow. Coordinate pre-op prep, OR handoffs, and post-op recovery without chasing anyone down."
        />
        <SpecialtyPain
          heading="Surgical flow breaks down when clinic and OR can't see each other."
          intro="Orthopedic surgery practices run two worlds simultaneously — clinic visits and surgical cases. The handoffs between them depend on communication that is almost always phone calls, hallway conversations, and guesswork."
          points={painPoints}
        />
        <SpecialtyWorkflow stages={stages} />
        <SpecialtyCTA ctaLabel="See clinIQ for orthopedic surgery" />
      </main>
      <FooterInner />
    </>
  )
}
