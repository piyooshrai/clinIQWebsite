import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import SpecialtyHero from '@/components/SpecialtyHero'
import SpecialtyPain from '@/components/SpecialtyPain'
import SpecialtyWorkflow from '@/components/SpecialtyWorkflow'
import SpecialtyCTA from '@/components/SpecialtyCTA'
import type { WorkflowStage } from '@/components/SpecialtyWorkflow'

export const metadata: Metadata = {
  title: 'clinIQ for Psychiatry — Scheduling That Actually Works',
  description:
    '15-minute med checks. 60-minute therapy. Crisis walk-ins. One schedule that actually works.',
}

const painPoints = [
  '25% new-patient no-shows vs. 13% for established — "significant wasted time each month" with no system to recover it.',
  '"Reception-booked follow-ups see more missed appointments" than in-room booking — but there\'s no easy way to change the workflow.',
  'Portal message overload: "How do you set boundaries... balance access with safety and burnout?" No good answer without the right tools.',
  'Variable appointment lengths (15-min med checks to 60-min therapy) make scheduling a daily puzzle with no clean solution.',
  'Crisis walk-ins blow up the entire day\'s schedule — and staff have no visibility into how bad the ripple effect will be.',
]

const stages: WorkflowStage[] = [
  { label: 'Check-In', color: '#f59e0b' },
  { label: 'Waiting', color: '#3b82f6' },
  { label: 'With Provider', color: '#0d9488' },
  { label: 'Checkout', color: '#22c55e' },
]

export default function PsychiatryPage() {
  return (
    <>
      <NavInner />
      <main>
        <SpecialtyHero
          badge="Psychiatry"
          title={<>Variable appointments. <em>Predictable operations.</em></>}
          subtitle="15-minute med checks. 60-minute therapy. Crisis walk-ins. One schedule that actually works."
        />
        <SpecialtyPain
          heading="The administrative weight is eating your clinical capacity."
          intro="Variable appointment lengths, high no-show rates, and portal message overload. The system wasn't designed for psychiatric practice — so clinicians absorb the cost."
          points={painPoints}
        />
        <SpecialtyWorkflow stages={stages} />
        <SpecialtyCTA ctaLabel="See clinIQ for psychiatry practices" />
      </main>
      <FooterInner />
    </>
  )
}
