import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import SpecialtyHero from '@/components/SpecialtyHero'
import SpecialtyPain from '@/components/SpecialtyPain'
import SpecialtyWorkflow from '@/components/SpecialtyWorkflow'
import SpecialtyCTA from '@/components/SpecialtyCTA'
import type { WorkflowStage } from '@/components/SpecialtyWorkflow'

export const metadata: Metadata = {
  title: 'clinIQ for Addiction Medicine — MAT Clinic Operations',
  description:
    'Urine collection, injection scheduling, crisis walk-ins, complex psych. One view. No chaos.',
}

const painPoints = [
  'MAs administering injections, handling phone communications, interpreting urine tests, monitoring blood pressure — constant context-switching all day.',
  'UDS label mix-ups and staffing gaps block patient progress. These aren\'t edge cases — "this kinda shit happens all the time."',
  '"20% Suboxone management, 80% complex psych + urgent-care-like issues stacked on top." Generic tools aren\'t built for that ratio.',
  'Injection scheduling chaos for Sublocade/Vivitrol — benefit vs. drug classification confusion creates constant back-and-forth.',
  'Walk-in crisis patients disrupt scheduled MAT visits with no warning, derailing the entire day.',
]

const stages: WorkflowStage[] = [
  { label: 'Intake', color: '#f59e0b' },
  { label: 'Urine Collection', color: '#8b5cf6' },
  { label: 'With MA', color: '#3b82f6' },
  { label: 'With Provider', color: '#0d9488' },
  { label: 'Injection', color: '#ec4899' },
  { label: 'Observation', color: '#6366f1' },
  { label: 'Checkout', color: '#22c55e' },
]

export default function AddictionMedicinePage() {
  return (
    <>
      <NavInner />
      <main>
        <SpecialtyHero
          badge="Addiction Medicine"
          title={<>MAT clinics aren&rsquo;t like other practices. <em>We built for that.</em></>}
          subtitle="Urine collection, injection scheduling, crisis walk-ins, complex psych. One view. No chaos."
        />
        <SpecialtyPain
          heading="Your workflow is unlike any other practice."
          intro="You're managing injections, urine collection, crises, and complex psych — all at the same time. Generic clinic tools weren't designed for this kind of complexity."
          points={painPoints}
        />
        <SpecialtyWorkflow stages={stages} />
        <SpecialtyCTA ctaLabel="See clinIQ for MAT clinics" />
      </main>
      <FooterInner />
    </>
  )
}
