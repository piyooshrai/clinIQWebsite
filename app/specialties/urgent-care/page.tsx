import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import SpecialtyHero from '@/components/SpecialtyHero'
import SpecialtyPain from '@/components/SpecialtyPain'
import SpecialtyWorkflow from '@/components/SpecialtyWorkflow'
import SpecialtyCTA from '@/components/SpecialtyCTA'
import type { WorkflowStage } from '@/components/SpecialtyWorkflow'

export const metadata: Metadata = {
  title: 'clinIQ for Urgent Care — Cut Wait Times, Stop LWBS',
  description:
    'Real-time visibility from arrival to discharge. Cut LWBS. Crush wait times. Stop the front desk drowning.',
}

const painPoints = [
  "LWBS kills revenue — every walkout is $150–300 lost and a Google review waiting to happen.",
  '"Who\'s next?" huddles waste provider time between every patient.',
  "Front desk drowning: phones + walk-ins + check-ins all at once — no room to breathe.",
  "No visibility into triage bottlenecks until the lobby is already overflowing.",
  "Wait time is THE competitive differentiator — patients check Google reviews before choosing your clinic over the ER.",
]

const stages: WorkflowStage[] = [
  { label: 'Arrival', color: '#f59e0b' },
  { label: 'Triage', color: '#8b5cf6' },
  { label: 'Waiting', color: '#3b82f6' },
  { label: 'Provider', color: '#0d9488' },
  { label: 'Discharge', color: '#22c55e' },
]

export default function UrgentCarePage() {
  return (
    <>
      <NavInner />
      <main>
        <SpecialtyHero
          badge="Urgent Care"
          title={<>Urgent care runs on chaos. <em>It doesn&rsquo;t have to.</em></>}
          subtitle="Real-time visibility from arrival to discharge. Cut LWBS. Crush wait times. Stop the front desk drowning."
        />
        <SpecialtyPain
          heading="The wait time problem is your reputation problem."
          intro="Patients chose your clinic over the ER. That decision lives and dies on wait time. Every LWBS is revenue lost and a Google review waiting to happen."
          points={painPoints}
        />
        <SpecialtyWorkflow stages={stages} />
        <SpecialtyCTA ctaLabel="See clinIQ for urgent care" />
      </main>
      <FooterInner />
    </>
  )
}
