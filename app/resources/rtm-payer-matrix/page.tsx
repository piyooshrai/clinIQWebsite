import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import ResourceHero from '@/components/ResourceHero'
import ResourcePreview from '@/components/ResourcePreview'
import ResourceForm from '@/components/ResourceForm'
import type { FormField } from '@/components/ResourceForm'

export const metadata: Metadata = {
  title: 'RTM Payer Coverage Matrix 2026 — clinIQ Resources',
  description:
    'Which payers cover RTM codes in 2026 — and what each requires for reimbursement. Medicare, commercial, and Medicaid coverage with denial prevention checklists.',
}

const previewItems = [
  'Medicare RTM coverage and rates (CPT 98975–98981)',
  'Top 10 commercial payer RTM policies',
  'State Medicaid RTM coverage status',
  'Documentation requirements by payer',
  'Denial prevention checklist per payer',
  'Appeals success strategies',
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
    name: 'primaryPayer',
    label: 'Primary payer mix',
    type: 'select',
    options: [
      'Medicare',
      'Medicaid',
      'Commercial (BCBS/Aetna/UHC)',
      'Multiple payers',
      'Self-pay',
    ],
    required: true,
  },
]

export default function RtmPayerMatrixPage() {
  return (
    <>
      <NavInner />
      <main>
        <ResourceHero
          type="Guide"
          title="RTM Payer Coverage Matrix 2026"
          subtitle="Which payers cover RTM codes in 2026 — and what each requires for reimbursement."
        />
        <ResourcePreview items={previewItems} />
        <ResourceForm
          resourceSlug="rtm-payer-matrix"
          resourceTitle="RTM Payer Coverage Matrix 2026"
          fields={fields}
          submitLabel="Download Matrix"
          successMessage="Check your email — your RTM Payer Coverage Matrix is on its way."
        />
      </main>
      <FooterInner />
    </>
  )
}
