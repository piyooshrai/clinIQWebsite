import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import ResourceHero from '@/components/ResourceHero'
import ResourcePreview from '@/components/ResourcePreview'
import ResourceForm from '@/components/ResourceForm'
import type { FormField } from '@/components/ResourceForm'

export const metadata: Metadata = {
  title: 'MAT Clinic Workflow Template — clinIQ Resources',
  description:
    'Medication-assisted treatment clinic workflow template from intake to medication dispensing. Covers buprenorphine induction, monitoring visits, and insurance pre-auth.',
}

const previewItems = [
  'New patient MAT intake workflow',
  'Buprenorphine induction visit sequence',
  'Weekly and monthly monitoring visit flow',
  'Group therapy session coordination',
  'Urine drug screen workflow integration',
  'Insurance pre-auth for MAT medications',
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
    name: 'clinicType',
    label: 'Clinic type',
    type: 'select',
    options: [
      'Outpatient MAT Clinic',
      'Primary Care with MAT',
      'Hospital-Based MAT',
      'Other',
    ],
    required: true,
  },
]

export default function MatClinicWorkflowTemplatePage() {
  return (
    <>
      <NavInner />
      <main>
        <ResourceHero
          type="Template"
          title="MAT Clinic Workflow Template"
          subtitle="Medication-assisted treatment clinic workflow from intake to medication dispensing."
        />
        <ResourcePreview items={previewItems} />
        <ResourceForm
          resourceSlug="mat-clinic-workflow-template"
          resourceTitle="MAT Clinic Workflow Template"
          fields={fields}
          submitLabel="Download Template"
          successMessage="Check your email — your MAT Clinic Workflow Template is on its way."
        />
      </main>
      <FooterInner />
    </>
  )
}
