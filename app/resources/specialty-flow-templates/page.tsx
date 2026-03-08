import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import ResourceHero from '@/components/ResourceHero'
import ResourcePreview from '@/components/ResourcePreview'
import ResourceForm from '@/components/ResourceForm'
import type { FormField } from '@/components/ResourceForm'

export const metadata: Metadata = {
  title: 'Specialty-Specific Patient Flow Templates — clinIQ Resources',
  description:
    'Pre-built patient flow templates for 10 specialties — ready to configure in your clinic. Urgent care, pain management, physical therapy, behavioral health, and more.',
}

const previewItems = [
  'Urgent care high-volume flow template',
  'Pain management procedure day template',
  'Physical therapy multi-patient simultaneous template',
  'Behavioral health discreet queue template',
  'Orthopedic surgery pre-op/post-op template',
  'Plus 5 more specialty templates',
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
      'Urgent Care',
      'Pain Management',
      'Physical Therapy',
      'Behavioral Health',
      'Orthopedics',
      'Psychiatry',
      'Other',
    ],
    required: true,
  },
]

export default function SpecialtyFlowTemplatesPage() {
  return (
    <>
      <NavInner />
      <main>
        <ResourceHero
          type="Template"
          title="Specialty-Specific Patient Flow Templates"
          subtitle="Pre-built patient flow templates for 10 specialties — ready to configure in your clinic."
        />
        <ResourcePreview items={previewItems} />
        <ResourceForm
          resourceSlug="specialty-flow-templates"
          resourceTitle="Specialty-Specific Patient Flow Templates"
          fields={fields}
          submitLabel="Download Templates"
          successMessage="Check your email — your Specialty-Specific Patient Flow Templates are on their way."
        />
      </main>
      <FooterInner />
    </>
  )
}
