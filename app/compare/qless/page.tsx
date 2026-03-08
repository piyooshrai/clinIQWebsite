import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import ComparisonHero from '@/components/ComparisonHero'
import ComparisonTable from '@/components/ComparisonTable'
import ComparisonDifferences from '@/components/ComparisonDifferences'
import ComparisonCTA from '@/components/ComparisonCTA'
import type { TableRow } from '@/components/ComparisonTable'
import type { Difference } from '@/components/ComparisonDifferences'

export const metadata: Metadata = {
  title: 'clinIQ vs Qless | Queue Management Built for Healthcare',
  description:
    'Qless handles general queues. clinIQ handles patients — with RTM billing, prior auth, and real-time clinical workflow tracking built in.',
  keywords: [
    'Qless healthcare',
    'Qless alternatives',
    'patient queue management software',
  ],
}

const rows: TableRow[] = [
  {
    feature: 'Patient flow tracking',
    cliniq: 'Real-time queue, room status, triage stage, and provider assignment',
    competitor: 'Queue position only — no clinical context',
  },
  {
    feature: 'Clinical workflow stages',
    cliniq: 'Check-in → triage → vitals → provider → discharge, tracked live',
    competitor: 'No — generic queue stages only',
  },
  {
    feature: 'RTM billing',
    cliniq: 'Built-in CPT 98975–98981 tracking and documentation',
    competitor: 'No — not a healthcare billing tool',
  },
  {
    feature: 'Prior authorization',
    cliniq: 'Pre-auth tracking integrated into patient workflow',
    competitor: 'No — not supported',
  },
  {
    feature: 'Healthcare-specific alerts',
    cliniq: 'Bottleneck detection, wait threshold alerts, provider idle flags',
    competitor: 'Generic wait-time notifications only',
  },
  {
    feature: 'Pricing model',
    cliniq: 'Transparent flat monthly, no per-patient fees',
    competitor: 'Per-queue or per-location pricing',
  },
]

const HospitalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
    <line x1="12" y1="5" x2="12" y2="9" />
    <line x1="10" y1="7" x2="14" y2="7" />
  </svg>
)

const StagesIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="5" cy="12" r="2" />
    <circle cx="12" cy="12" r="2" />
    <circle cx="19" cy="12" r="2" />
    <line x1="7" y1="12" x2="10" y2="12" />
    <line x1="14" y1="12" x2="17" y2="12" />
  </svg>
)

const DollarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
)

const differences: [Difference, Difference, Difference] = [
  {
    icon: <HospitalIcon />,
    title: 'Built for healthcare, not retail lines',
    body: "Qless was designed for DMVs, banks, and restaurants — places where queue position is all that matters. clinIQ is built specifically for clinical environments where triage stage, provider assignment, room status, and HIPAA compliance are non-negotiable requirements, not afterthoughts.",
  },
  {
    icon: <StagesIcon />,
    title: 'Clinical workflow stages, not just position',
    body: "Knowing a patient is \"number 4 in line\" tells your staff nothing useful. clinIQ tracks every patient through discrete clinical stages — check-in, triage, vitals, provider time, and discharge — so your entire team knows exactly where each patient is and what needs to happen next without a single radio call.",
  },
  {
    icon: <DollarIcon />,
    title: 'Revenue features that queue tools skip',
    body: "Qless has no billing infrastructure because it was never meant for healthcare revenue cycles. clinIQ captures RTM billing codes automatically as patients move through care, and tracks prior authorization status so nothing falls through the cracks — turning operational data into reimbursable revenue.",
  },
]

export default function QlessPage() {
  return (
    <>
      <NavInner />
      <main>
        <ComparisonHero
          competitor="Qless"
          title="clinIQ vs Qless"
          subtitle="Queue management vs patient operations. Not the same thing."
        />
        <ComparisonTable
          competitorName="Qless"
          rows={rows}
        />
        <ComparisonDifferences differences={differences} />
        <ComparisonCTA ctaLabel="See clinIQ's healthcare-specific patient flow" />
      </main>
      <FooterInner />
    </>
  )
}
