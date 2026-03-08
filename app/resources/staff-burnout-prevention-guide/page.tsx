import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import ResourceHero from '@/components/ResourceHero'
import ResourcePreview from '@/components/ResourcePreview'
import ResourceForm from '@/components/ResourceForm'
import type { FormField } from '@/components/ResourceForm'

export const metadata: Metadata = {
  title: 'Preventing Front Desk Burnout: An Operational Approach — clinIQ Resources',
  description:
    'The workflow and technology changes that reduce cognitive load and improve front desk retention. 30-day implementation checklist included.',
}

const previewItems = [
  'The burnout-workflow connection (research summary)',
  '8 workflow changes that reduce cognitive load',
  'Automation that removes repetitive tasks',
  'Visibility tools that eliminate \'status hunt\' interruptions',
  'Measuring staff satisfaction and burnout risk',
  '30-day implementation checklist',
]

const fields: FormField[] = [
  {
    name: 'email',
    label: 'Work email',
    type: 'email',
    placeholder: 'you@yourclinic.com',
    required: true,
  },
  {
    name: 'role',
    label: 'Your role',
    type: 'select',
    options: ['Administrator', 'Office Manager', 'Provider', 'Front Desk', 'Other'],
    required: true,
  },
  {
    name: 'clinicSize',
    label: 'Clinic size',
    type: 'select',
    options: ['1–5 providers', '6–15 providers', '16+ providers'],
    required: true,
  },
  {
    name: 'currentTurnoverRate',
    label: 'Current front desk turnover rate',
    type: 'select',
    options: ['Under 20%/yr', '20–40%/yr', 'Over 40%/yr', "Don't track"],
    required: true,
  },
]

export default function StaffBurnoutPreventionGuidePage() {
  return (
    <>
      <NavInner />
      <main>
        <ResourceHero
          type="Guide"
          title="Preventing Front Desk Burnout: An Operational Approach"
          subtitle="The workflow and technology changes that reduce cognitive load and improve retention."
        />
        <ResourcePreview items={previewItems} />
        <ResourceForm
          resourceSlug="staff-burnout-prevention-guide"
          resourceTitle="Preventing Front Desk Burnout: An Operational Approach"
          fields={fields}
          submitLabel="Download Guide"
          successMessage="Check your email — your Staff Burnout Prevention Guide is on its way."
        />
      </main>
      <FooterInner />
    </>
  )
}
