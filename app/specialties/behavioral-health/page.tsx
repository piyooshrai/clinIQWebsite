import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import SpecialtyHero from '@/components/SpecialtyHero'
import SpecialtyPain from '@/components/SpecialtyPain'
import SpecialtyWorkflow from '@/components/SpecialtyWorkflow'
import SpecialtyCTA from '@/components/SpecialtyCTA'
import type { WorkflowStage } from '@/components/SpecialtyWorkflow'

export const metadata: Metadata = {
  title: 'clinIQ for Behavioral Health — Private Check-In, Calm Flow',
  description:
    'Private check-in. Calm waiting. Predictable flow. Respect built into every step.',
}

const painPoints = [
  '"Low-privacy area" at front desk forces patients to "divulge specific details about their health" in public — before they\'ve even seen their provider.',
  '"I hate waiting rooms... especially psych/therapy" — patients arrive anxious and the environment makes it worse, not better.',
  '"Lady screaming at staff threatening to kill herself... poor girl was really new and had no idea what to say." Staff aren\'t equipped for crisis without support systems.',
  'ABA scheduling chaos: "entire schedules shift with just one call out" — no tools to quickly redistribute or communicate the impact.',
  'Therapists doing "4–6 hours unpaid admin weekly" on notes and care coordination that should be automated or streamlined.',
]

const stages: WorkflowStage[] = [
  { label: 'Private Check-In', color: '#6366f1' },
  { label: 'Waiting', color: '#3b82f6', note: 'wait-in-car option' },
  { label: 'With Provider', color: '#0d9488' },
  { label: 'Checkout', color: '#22c55e' },
]

export default function BehavioralHealthPage() {
  return (
    <>
      <NavInner />
      <main>
        <SpecialtyHero
          badge="Behavioral Health"
          title={<>Your patients already feel vulnerable. <em>Your check-in shouldn&rsquo;t make it worse.</em></>}
          subtitle="Private check-in. Calm waiting. Predictable flow. Respect built into every step."
        />
        <SpecialtyPain
          heading="The standard clinic experience isn't built for behavioral health."
          intro="Your patients need privacy, calm, and predictability. The standard clinic check-in experience delivers none of that — and your staff absorbs the fallout."
          points={painPoints}
        />
        <SpecialtyWorkflow stages={stages} />
        <SpecialtyCTA ctaLabel="See clinIQ for behavioral health" />
      </main>
      <FooterInner />
    </>
  )
}
