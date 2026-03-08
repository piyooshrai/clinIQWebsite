import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import ResourceHero from '@/components/ResourceHero'
import ResourcePreview from '@/components/ResourcePreview'
import ResourceForm from '@/components/ResourceForm'
import type { FormField } from '@/components/ResourceForm'

export const metadata: Metadata = {
  title: 'Healthcare Scheduling That Reduces No-Shows — clinIQ Resources',
  description:
    'Scheduling strategies that cut no-show rates by 30–40% without adding staff. Reminder cadence, overbooking, same-day fill protocols, and waitlist management.',
}

const previewItems = [
  'No-show rate benchmarks by specialty',
  'Reminder cadence that actually works (SMS vs email vs call)',
  'Overbooking strategies that don\'t backfire',
  'Same-day cancellation fill protocols',
  'Waitlist management that patients actually join',
  'Measuring scheduling efficiency',
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
    name: 'currentNoShowRate',
    label: 'Current no-show rate',
    type: 'select',
    options: ['Under 5%', '5–10%', '10–20%', 'Over 20%', "Don't track"],
    required: true,
  },
]

export default function HealthcareSchedulingGuidePage() {
  return (
    <>
      <NavInner />
      <main>
        <ResourceHero
          type="Guide"
          title="Healthcare Scheduling That Reduces No-Shows"
          subtitle="Scheduling strategies that cut no-show rates by 30–40% without adding staff."
        />
        <ResourcePreview items={previewItems} />
        <ResourceForm
          resourceSlug="healthcare-scheduling-guide"
          resourceTitle="Healthcare Scheduling That Reduces No-Shows"
          fields={fields}
          submitLabel="Download Guide"
          successMessage="Check your email — your Healthcare Scheduling Guide is on its way."
        />
      </main>
      <FooterInner />
    </>
  )
}
