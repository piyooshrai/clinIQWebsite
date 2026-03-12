import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import ResourceHero from '@/components/ResourceHero'
import ResourcePreview from '@/components/ResourcePreview'
import ResourceForm from '@/components/ResourceForm'
import type { FormField } from '@/components/ResourceForm'

export const metadata: Metadata = {
  title: 'Clinic Technology Stack Audit — clinIQ Resources',
  description:
    'Evaluate your EHR, scheduling, check-in, billing, and patient engagement tools. Identify gaps, redundancies, and integration opportunities.',
}

const previewItems = [
  'EHR assessment — API availability, integration maturity, and data export capabilities that determine what you can add on top',
  'Patient check-in audit — paper vs. digital, insurance capture accuracy rates, and check-in time benchmarks by method',
  'Scheduling system evaluation — online booking availability, reminder automation, and no-show rate by current method',
  'Billing and revenue cycle gaps — denial rate benchmarks, claim scrubbing quality, and A/R aging red flags',
  'Patient communication tools — secure messaging, portal engagement rates, and missed communication opportunities',
  'RTM and remote monitoring readiness — whether your current stack supports compliant RTM billing or blocks it',
  'Integration map — which tools talk to each other, which require manual data re-entry, and where staff time is lost',
  'Technology cost-per-patient analysis — how to calculate your current spend and identify consolidation opportunities',
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
    options: ['CEO / Medical Director', 'Operations Manager', 'IT / Health IT', 'Practice Administrator', 'Billing Manager', 'Other'],
    required: true,
  },
  {
    name: 'currentEHR',
    label: 'Primary EHR',
    type: 'text',
    placeholder: 'e.g. Epic, Athena, eClinicalWorks…',
    required: false,
  },
]

export default function ClinicTechAuditPage() {
  return (
    <>
      <NavInner />
      <main>
        <ResourceHero
          type="Checklist"
          title="Clinic Technology Stack Audit"
          subtitle="Evaluate every tool in your clinic tech stack — EHR, scheduling, check-in, billing, and patient engagement. Find the gaps that are costing you time and revenue."
        />
        <ResourcePreview items={previewItems} />
        <ResourceForm
          resourceSlug="clinic-tech-audit"
          resourceTitle="Clinic Technology Stack Audit"
          fields={fields}
          submitLabel="Get the audit checklist"
          successMessage="Check your inbox — the audit is on its way."
        />
      </main>
      <FooterInner />
    </>
  )
}
