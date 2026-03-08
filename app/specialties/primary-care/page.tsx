import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import SpecialtyHero from '@/components/SpecialtyHero'
import SpecialtyPain from '@/components/SpecialtyPain'
import SpecialtyWorkflow from '@/components/SpecialtyWorkflow'
import SpecialtyCTA from '@/components/SpecialtyCTA'
import type { WorkflowStage } from '@/components/SpecialtyWorkflow'

export const metadata: Metadata = {
  title: 'clinIQ for Primary Care — Manage Same-Day Demand Without the Chaos',
  description:
    'Real-time patient flow visibility for primary care. Handle walk-ins, sick visits, and scheduled patients without losing control of your day.',
}

const painPoints = [
  "Same-day demand spikes blow up your schedule before 10am — and there's no system to absorb it.",
  "Providers don't know if a room is clean, occupied, or has been sitting empty for 20 minutes.",
  '"Who\'s next?" decisions get made in the hallway — inconsistent, slow, and frustrating.',
  "Front desk is the last to know when a provider is ready — patients wait while rooms sit open.",
  "Sick-visit overflow means scheduled patients get bumped with no visibility into why they're running late.",
]

const stages: WorkflowStage[] = [
  { label: 'Check-In', color: '#f59e0b' },
  { label: 'Rooming', color: '#8b5cf6' },
  { label: 'Provider', color: '#0d9488' },
  { label: 'Orders', color: '#3b82f6' },
  { label: 'Discharge', color: '#22c55e' },
]

export default function PrimaryCarePage() {
  return (
    <>
      <NavInner />
      <main>
        <SpecialtyHero
          badge="Primary Care"
          title={<>Same-day demand is unpredictable. <em>Your response doesn&rsquo;t have to be.</em></>}
          subtitle="Real-time patient flow visibility for primary care. Handle walk-ins, sick visits, and scheduled patients without losing control of your day."
        />
        <SpecialtyPain
          heading="Your schedule fills up. Your visibility doesn't."
          intro="Primary care runs on volume and variety. Scheduled well-visits, urgent sick calls, chronic-care follow-ups — all competing for the same rooms and the same staff. Without real-time visibility, the day runs you."
          points={painPoints}
        />
        <SpecialtyWorkflow stages={stages} />
        <SpecialtyCTA ctaLabel="See clinIQ for primary care" />
      </main>
      <FooterInner />
    </>
  )
}
