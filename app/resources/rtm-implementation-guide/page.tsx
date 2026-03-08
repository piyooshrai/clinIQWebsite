import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import ResourceHero from '@/components/ResourceHero'
import ResourcePreview from '@/components/ResourcePreview'
import ResourceForm from '@/components/ResourceForm'
import type { FormField } from '@/components/ResourceForm'

export const metadata: Metadata = {
  title: 'RTM Implementation Guide — clinIQ Resources',
  description:
    'Step-by-step guide to launching RTM billing from scratch. CPT 98975–98981, documentation requirements, payer rules, and revenue projections.',
}

const previewItems = [
  'RTM vs RPM — which codes apply, which patients qualify, and the key legal distinction',
  'CPT 98975–98981 breakdown with 2026 Medicare reimbursement rates per code',
  'Documentation requirements that survive a payer audit — timestamps, staff logs, review records',
  'Patient enrollment scripts and consent workflows your front desk can actually use',
  'Billing timeline and cash flow projection — when to expect first reimbursement',
  'Common implementation mistakes and exactly how to avoid each one',
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
    name: 'specialty',
    label: 'Your specialty',
    type: 'select',
    options: [
      'Pain Management',
      'Physical Therapy',
      'Orthopedics',
      'Pulmonology',
      'Behavioral Health',
      'Other',
    ],
    required: true,
  },
  {
    name: 'currentEHR',
    label: 'Current EHR',
    type: 'text',
    placeholder: 'e.g. Epic, Athena, eClinicalWorks…',
    required: false,
  },
]

export default function RTMImplementationGuidePage() {
  return (
    <>
      <NavInner />
      <main>
        <ResourceHero
          type="Guide"
          title="RTM Implementation Guide: From Setup to First Bill"
          subtitle="Step-by-step guide to launching RTM billing. CPT codes, documentation, payer rules, and revenue math."
        />
        <ResourcePreview items={previewItems} />
        <ResourceForm
          resourceSlug="rtm-implementation-guide"
          resourceTitle="RTM Implementation Guide: From Setup to First Bill"
          fields={fields}
          submitLabel="Get the Guide"
          successMessage="Guide sent — check your inbox."
        />
      </main>
      <FooterInner />
    </>
  )
}
