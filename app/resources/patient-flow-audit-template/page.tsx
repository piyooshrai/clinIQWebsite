import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import ResourceHero from '@/components/ResourceHero'
import ResourcePreview from '@/components/ResourcePreview'
import ResourceForm from '@/components/ResourceForm'
import type { FormField } from '@/components/ResourceForm'

export const metadata: Metadata = {
  title: 'Patient Flow Audit Template — clinIQ Resources',
  description:
    'Measure your current patient flow, identify bottlenecks, and prioritize fixes. Includes time-motion study sheets, bottleneck scoring, and a 90-day roadmap.',
}

const previewItems = [
  'Current state flow mapping worksheet',
  'Bottleneck scoring matrix (1–5 severity)',
  'Time-motion study data collection sheet',
  'Staff role and responsibility audit',
  'Technology gap analysis',
  '90-day improvement roadmap template',
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

export default function PatientFlowAuditTemplatePage() {
  return (
    <>
      <NavInner />
      <main>
        <ResourceHero
          type="Template"
          title="Patient Flow Audit Template"
          subtitle="Measure your current patient flow, identify bottlenecks, and prioritize fixes."
        />
        <ResourcePreview items={previewItems} />
        <ResourceForm
          resourceSlug="patient-flow-audit-template"
          resourceTitle="Patient Flow Audit Template"
          fields={fields}
          submitLabel="Download Template"
          successMessage="Check your email — your Patient Flow Audit Template is on its way."
        />
      </main>
      <FooterInner />
    </>
  )
}
