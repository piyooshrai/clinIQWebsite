import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import ResourceHero from '@/components/ResourceHero'
import ResourcePreview from '@/components/ResourcePreview'
import ResourceForm from '@/components/ResourceForm'
import type { FormField } from '@/components/ResourceForm'

export const metadata: Metadata = {
  title: 'FQHC Operations Efficiency Checklist — clinIQ Resources',
  description:
    '20-point checklist for FQHC operations: UDS reporting readiness, sliding-fee schedule accuracy, grant compliance documentation, and operational throughput.',
}

const previewItems = [
  'UDS reporting readiness — 12 data fields most FQHCs submit incorrectly and how to fix them before HRSA review',
  'Sliding-fee schedule accuracy audit — verification steps for income documentation, discount tiers, and annual update cycles',
  'Grant compliance documentation — operational records required for Section 330 grant renewals and site visits',
  'Patient throughput benchmarks for community health centers by clinic size and service type',
  'Front desk workflow gaps that inflate per-visit administrative cost above FQHC benchmarks',
  'Health IT requirements for UDS electronic submission and meaningful use attestation',
  'Credentialing and privileging documentation requirements specific to FQHC deemed status',
  'Board governance records that frequently trigger HRSA findings during operational reviews',
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
    options: ['CEO / Executive Director', 'COO / Operations Director', 'CFO', 'Clinical Director', 'Practice Manager', 'Other'],
    required: true,
  },
  {
    name: 'fqhcSize',
    label: 'Annual patient visits',
    type: 'select',
    options: ['Under 5,000', '5,000–15,000', '15,000–30,000', '30,000–75,000', 'Over 75,000'],
    required: true,
  },
]

export default function FQHCEfficiencyChecklistPage() {
  return (
    <>
      <NavInner />
      <main>
        <ResourceHero
          type="Checklist"
          title="FQHC Operations Efficiency Checklist"
          subtitle="20 operational checks every FQHC should run before the next HRSA review — UDS readiness, sliding-fee accuracy, grant compliance, and throughput benchmarks."
        />
        <ResourcePreview items={previewItems} />
        <ResourceForm
          resourceSlug="fqhc-efficiency-checklist"
          resourceTitle="FQHC Operations Efficiency Checklist"
          fields={fields}
          submitLabel="Get the checklist"
          successMessage="Check your inbox — the checklist is on its way."
        />
      </main>
      <FooterInner />
    </>
  )
}
