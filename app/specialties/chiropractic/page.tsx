import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import SpecialtyHero from '@/components/SpecialtyHero'
import SpecialtyPain from '@/components/SpecialtyPain'
import SpecialtyWorkflow from '@/components/SpecialtyWorkflow'
import SpecialtyCTA from '@/components/SpecialtyCTA'
import type { WorkflowStage } from '@/components/SpecialtyWorkflow'

export const metadata: Metadata = {
  title: 'clinIQ for Chiropractic — High-Volume Intake Without the Front Desk Chaos',
  description:
    'Real-time patient flow for chiropractic clinics. Move high-volume days smoothly from check-in to adjustment to checkout without dropping anyone.',
}

const painPoints = [
  "High-volume adjustment days mean patients pile up — front desk has no way to signal the provider without interrupting.",
  "Patients who've done their paperwork wait alongside new patients who haven't — no way to differentiate status at a glance.",
  '"Ready for adjustment" gets communicated by shouting across the room or walking down the hall.',
  "Checkout bottlenecks form when patients finish at the same time — no visibility into who's waiting to pay.",
  "Missed follow-up rebooking at checkout means lost revenue that nobody tracks.",
]

const stages: WorkflowStage[] = [
  { label: 'Check-In', color: '#f59e0b' },
  { label: 'Ready', color: '#8b5cf6' },
  { label: 'Adjustment', color: '#0d9488' },
  { label: 'Therapy', color: '#3b82f6' },
  { label: 'Checkout', color: '#22c55e' },
]

export default function ChiropracticPage() {
  return (
    <>
      <NavInner />
      <main>
        <SpecialtyHero
          badge="Chiropractic"
          title={<>High-volume intake deserves a <em>high-visibility system.</em></>}
          subtitle="Real-time patient flow for chiropractic clinics. Move high-volume days smoothly from check-in to adjustment to checkout without dropping anyone."
        />
        <SpecialtyPain
          heading="Volume is the goal. Chaos is the side effect you don't have to accept."
          intro="Chiropractic practices thrive on volume — but high volume without visibility means patients stacking up, providers guessing who's next, and front desk staff stretched across too many jobs at once."
          points={painPoints}
        />
        <SpecialtyWorkflow stages={stages} />
        <SpecialtyCTA ctaLabel="See clinIQ for chiropractic" />
      </main>
      <FooterInner />
    </>
  )
}
