import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import ResourceHero from '@/components/ResourceHero'
import ResourcePreview from '@/components/ResourcePreview'
import ResourceForm from '@/components/ResourceForm'
import type { FormField } from '@/components/ResourceForm'

export const metadata: Metadata = {
  title: 'Prior Auth Denial Playbook: Win More Appeals — clinIQ Resources',
  description:
    'The documentation, timing, and language that reverses prior auth denials. Peer-to-peer review protocols, appeal scripts, and payer-specific timing rules.',
}

const previewItems = [
  'Common denial reason codes and what they mean',
  'Peer-to-peer review request protocol',
  'Clinical documentation that supports appeal',
  'Timing rules for each payer\'s appeals process',
  'Scripts for physician-to-physician calls',
  'Tracking denial rates and appeal success',
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
    name: 'denialRate',
    label: 'Current denial rate',
    type: 'select',
    options: ['Under 10%', '10-20%', '20-30%', 'Over 30%', "Don't track"],
    required: true,
  },
]

export default function PreAuthDenialPlaybookPage() {
  return (
    <>
      <NavInner />
      <main>
        <ResourceHero
          type="Guide"
          title="Prior Auth Denial Playbook: Win More Appeals"
          subtitle="The documentation, timing, and language that reverses prior auth denials."
        />
        <ResourcePreview items={previewItems} />
        <ResourceForm
          resourceSlug="pre-auth-denial-playbook"
          resourceTitle="Prior Auth Denial Playbook: Win More Appeals"
          fields={fields}
          submitLabel="Download Playbook"
          successMessage="Check your email — your Prior Auth Denial Playbook is on its way."
        />
      </main>
      <FooterInner />
    </>
  )
}
