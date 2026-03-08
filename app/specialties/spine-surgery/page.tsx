import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import SpecialtyHero from '@/components/SpecialtyHero'
import SpecialtyPain from '@/components/SpecialtyPain'
import SpecialtyWorkflow from '@/components/SpecialtyWorkflow'
import SpecialtyCTA from '@/components/SpecialtyCTA'
import type { WorkflowStage } from '@/components/SpecialtyWorkflow'

export const metadata: Metadata = {
  title: 'clinIQ for Spine Surgery — Conservative Care & Surgical Tracking in One View',
  description:
    'Real-time patient flow for spine surgery practices. Coordinate conservative care, injections, and surgical prep without losing anyone between stages.',
}

const painPoints = [
  "Conservative care patients cycle through PT referrals, injections, and imaging before surgery — no one tracks where they are in that progression.",
  "Surgical candidates get lost in the pre-authorization process with no visibility into status until someone calls to ask.",
  "Post-op follow-up visits compete with new consults for the same exam rooms, with no way to signal urgency or differentiate.",
  "MRI and imaging review takes provider time that could be spent if imaging was flagged the moment it arrived.",
  "Staff spend time on the phone confirming pre-surgical clearances that could be visible in a shared dashboard.",
]

const stages: WorkflowStage[] = [
  { label: 'Consult', color: '#f59e0b' },
  { label: 'Conservative', color: '#8b5cf6' },
  { label: 'Pre-Auth', color: '#ef4444' },
  { label: 'Pre-Op', color: '#3b82f6' },
  { label: 'Post-Op', color: '#22c55e' },
]

export default function SpineSurgeryPage() {
  return (
    <>
      <NavInner />
      <main>
        <SpecialtyHero
          badge="Spine Surgery"
          title={<>From first consult to surgical clearance. <em>Every stage in one view.</em></>}
          subtitle="Real-time patient flow for spine surgery practices. Coordinate conservative care, injections, and surgical prep without losing anyone between stages."
        />
        <SpecialtyPain
          heading="Spine surgery has the longest patient journey. You need to see all of it."
          intro="Most spine surgery patients don't go straight to the OR — they go through conservative care, imaging, injections, and pre-auth first. That's months of touchpoints where patients can get lost and referrals can stall."
          points={painPoints}
        />
        <SpecialtyWorkflow stages={stages} />
        <SpecialtyCTA ctaLabel="See clinIQ for spine surgery" />
      </main>
      <FooterInner />
    </>
  )
}
