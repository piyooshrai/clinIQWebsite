import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import ResourceHero from '@/components/ResourceHero'
import ResourcePreview from '@/components/ResourcePreview'
import ResourceForm from '@/components/ResourceForm'
import type { FormField } from '@/components/ResourceForm'

export const metadata: Metadata = {
  title: 'RTM Patient Consent Form Template — clinIQ Resources',
  description:
    'HIPAA-compliant RTM consent form template covering monitoring scope, data use, and opt-out rights. Ready to customize for your clinic.',
}

const previewItems = [
  'RTM program description in plain language',
  'Specific data collected and how it\'s used',
  'Patient rights and opt-out process',
  'Provider responsibilities under the program',
  'Billing disclosure (what insurance covers)',
  'Signature blocks and minor/guardian provisions',
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

export default function RtmConsentTemplatePage() {
  return (
    <>
      <NavInner />
      <main>
        <ResourceHero
          type="Template"
          title="RTM Patient Consent Form Template"
          subtitle="HIPAA-compliant RTM consent form template covering monitoring scope, data use, and opt-out rights."
        />
        <ResourcePreview items={previewItems} />
        <ResourceForm
          resourceSlug="rtm-consent-template"
          resourceTitle="RTM Patient Consent Form Template"
          fields={fields}
          submitLabel="Download Template"
          successMessage="Check your email — your RTM Patient Consent Form Template is on its way."
        />
      </main>
      <FooterInner />
    </>
  )
}
