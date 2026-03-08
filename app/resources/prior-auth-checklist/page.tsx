import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import ResourceHero from '@/components/ResourceHero'
import ResourcePreview from '@/components/ResourcePreview'
import ResourceForm from '@/components/ResourceForm'
import type { FormField } from '@/components/ResourceForm'

export const metadata: Metadata = {
  title: 'Prior Authorization Workflow Checklist — clinIQ Resources',
  description:
    '18-step checklist to reduce prior auth delays and denial rates. Covers eligibility checks, documentation, submission timing, and appeals.',
}

const previewItems = [
  'Patient eligibility pre-check workflow',
  'Documentation requirements by payer type',
  'Submission timing rules to avoid delays',
  'Denial response workflow',
  'Appeals process checklist',
  'RTM and specialist auth templates',
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
    name: 'specialty',
    label: 'Specialty',
    type: 'select',
    options: [
      'Pain Management',
      'Physical Therapy',
      'Behavioral Health',
      'Cardiology',
      'Orthopedics',
      'Other',
    ],
    required: true,
  },
]

export default function PriorAuthChecklistPage() {
  return (
    <>
      <NavInner />
      <main>
        <ResourceHero
          type="Checklist"
          title="Prior Authorization Workflow Checklist"
          subtitle="18-step checklist to reduce prior auth delays and denial rates."
        />
        <ResourcePreview items={previewItems} />
        <ResourceForm
          resourceSlug="prior-auth-checklist"
          resourceTitle="Prior Authorization Workflow Checklist"
          fields={fields}
          submitLabel="Download Checklist"
          successMessage="Check your email — your Prior Authorization Workflow Checklist is on its way."
        />
      </main>
      <FooterInner />
    </>
  )
}
