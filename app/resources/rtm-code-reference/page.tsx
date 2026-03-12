import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import ResourceHero from '@/components/ResourceHero'
import ResourcePreview from '@/components/ResourcePreview'
import ResourceForm from '@/components/ResourceForm'
import type { FormField } from '@/components/ResourceForm'

export const metadata: Metadata = {
  title: 'RTM Billing Code Reference Card — clinIQ Resources',
  description:
    'Quick-reference card for all RTM CPT codes — descriptions, 2025 Medicare rates, documentation requirements, and billing rules for each code.',
}

const previewItems = [
  'Full RTM code set: CPT 98975–98981 with plain-English descriptions and the clinical scenario each code covers',
  '2025 Medicare national average reimbursement rates for each code — and how geographic adjustments affect your actual payment',
  'Documentation requirements per code — what must be in the chart to support each claim if audited',
  '16-day data transmission rule explained — what counts, what does not, and how to track compliance per patient',
  'Billing combinations that work vs. those that trigger automatic denials — which codes to pair and which to never combine',
  'Provider type eligibility — which clinical staff can bill which codes under direct vs. general supervision',
  'Payer coverage quick guide — Medicare, Medicare Advantage, and the 10 largest commercial payers summarized',
  'Monthly billing timeline — the sequence of events from patient enrollment to claim submission to payment',
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
      'Pulmonology / Respiratory',
      'Behavioral Health / Psychiatry',
      'Primary Care',
      'Other',
    ],
    required: true,
  },
]

export default function RTMCodeReferencePage() {
  return (
    <>
      <NavInner />
      <main>
        <ResourceHero
          type="Reference"
          title="RTM Billing Code Reference Card"
          subtitle="Every RTM CPT code in one place — descriptions, Medicare rates, documentation rules, billing combinations, and provider eligibility."
        />
        <ResourcePreview items={previewItems} />
        <ResourceForm
          resourceSlug="rtm-code-reference"
          resourceTitle="RTM Billing Code Reference Card"
          fields={fields}
          submitLabel="Get the reference card"
          successMessage="Check your inbox — the RTM code reference card is on its way."
        />
      </main>
      <FooterInner />
    </>
  )
}
