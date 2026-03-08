import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import ResourceHero from '@/components/ResourceHero'
import ResourcePreview from '@/components/ResourcePreview'
import ResourceForm from '@/components/ResourceForm'
import type { FormField } from '@/components/ResourceForm'

export const metadata: Metadata = {
  title: 'LWBS Reduction Playbook for Urgent Care — clinIQ Resources',
  description:
    'A 30-day action plan to cut left-without-being-seen rates in urgent care clinics. Week-by-week protocol with measurement framework.',
}

const previewItems = [
  'Week 1: Baseline measurement protocol',
  'Week 2: Triage visibility implementation',
  'Week 3: Lobby communication changes',
  'Week 4: Bottleneck alert configuration',
  'Measurement framework (pre/post)',
  'Staff communication script for LWBS reduction',
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
    name: 'currentLWBS',
    label: 'Current LWBS rate',
    type: 'select',
    options: ['Under 2%', '2–4%', '4–6%', 'Over 6%', "Don't track"],
    required: true,
  },
]

export default function LwbsReductionPlaybookPage() {
  return (
    <>
      <NavInner />
      <main>
        <ResourceHero
          type="Guide"
          title="LWBS Reduction Playbook for Urgent Care"
          subtitle="A 30-day action plan to cut left-without-being-seen rates in urgent care clinics."
        />
        <ResourcePreview items={previewItems} />
        <ResourceForm
          resourceSlug="lwbs-reduction-playbook"
          resourceTitle="LWBS Reduction Playbook for Urgent Care"
          fields={fields}
          submitLabel="Download Playbook"
          successMessage="Check your email — your LWBS Reduction Playbook is on its way."
        />
      </main>
      <FooterInner />
    </>
  )
}
