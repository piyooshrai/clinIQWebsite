import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import ResourceHero from '@/components/ResourceHero'
import ResourcePreview from '@/components/ResourcePreview'
import ResourceForm from '@/components/ResourceForm'
import type { FormField } from '@/components/ResourceForm'

export const metadata: Metadata = {
  title: 'Patient Check-In Solutions Comparison Guide — clinIQ Resources',
  description:
    'Compare kiosk, iPad, web, and paper check-in across HIPAA compliance, cost, and patient experience. Includes a decision matrix for your clinic size.',
}

const previewItems = [
  'Four check-in modalities compared side by side',
  'HIPAA compliance scorecard for each',
  'Implementation cost and timeline estimates',
  'Patient satisfaction data by check-in type',
  'Integration requirements by EHR',
  'Decision matrix for your clinic size',
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
    name: 'currentCheckIn',
    label: 'Current check-in method',
    type: 'select',
    options: [
      'Paper forms',
      'Front desk manual entry',
      'Tablet/iPad kiosk',
      'Existing digital solution',
      'None',
    ],
    required: true,
  },
]

export default function CheckInComparisonGuidePage() {
  return (
    <>
      <NavInner />
      <main>
        <ResourceHero
          type="Guide"
          title="Patient Check-In Solutions Comparison Guide"
          subtitle="Compare kiosk, iPad, web, and paper check-in across HIPAA compliance, cost, and patient experience."
        />
        <ResourcePreview items={previewItems} />
        <ResourceForm
          resourceSlug="check-in-comparison-guide"
          resourceTitle="Patient Check-In Solutions Comparison Guide"
          fields={fields}
          submitLabel="Download Guide"
          successMessage="Check your email — your Check-In Comparison Guide is on its way."
        />
      </main>
      <FooterInner />
    </>
  )
}
