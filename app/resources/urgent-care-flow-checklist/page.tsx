import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import ResourceHero from '@/components/ResourceHero'
import ResourcePreview from '@/components/ResourcePreview'
import ResourceForm from '@/components/ResourceForm'
import type { FormField } from '@/components/ResourceForm'

export const metadata: Metadata = {
  title: 'Urgent Care Flow Checklist — clinIQ Resources',
  description:
    '23-point checklist to cut LWBS, reduce wait times, and stop front desk chaos in urgent care.',
}

const previewItems = [
  'Pre-arrival flow check — online scheduling, reminder cadence, digital intake setup',
  'Check-in optimization — kiosk vs window tradeoffs, data sync, queue assignment logic',
  'Triage flow — real-time visibility thresholds, alert triggers, staffing decision trees',
  'Provider flow — room status tracking, handoff protocols, documentation timing',
  'Discharge flow — checkout speed, follow-up scheduling, patient feedback capture',
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
]

export default function UrgentCareChecklistPage() {
  return (
    <>
      <NavInner />
      <main>
        <ResourceHero
          type="Checklist"
          title="Urgent Care Patient Flow Optimization Checklist"
          subtitle="23-point checklist to cut LWBS, reduce wait times, and stop front desk chaos."
        />
        <ResourcePreview items={previewItems} />
        <ResourceForm
          resourceSlug="urgent-care-flow-checklist"
          resourceTitle="Urgent Care Patient Flow Optimization Checklist"
          fields={fields}
          submitLabel="Download Checklist"
          successMessage="Check your email — checklist is on its way."
        />
      </main>
      <FooterInner />
    </>
  )
}
