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
  title: 'clinIQ vs Clearwave — Full Clinic Operations vs Check-In',
  description:
    'Clearwave checks patients in. clinIQ runs your entire operation — flow tracking, RTM billing, pre-auth, and specialty-specific workflows.',
  keywords: [
    'Clearwave vs Phreesia',
    'Clearwave check in alternatives',
  ],
}

const rows: TableRow[] = [
  {
    feature: 'Patient flow tracking',
    cliniq: 'Full journey — arrival to discharge, every stage visible',
    competitor: 'Check-in focused',
  },
  {
    feature: 'RTM billing',
    cliniq: 'Built-in CPT 98975–98981 — $120–150/patient/month',
    competitor: 'No',
  },
  {
    feature: 'Pre-authorization',
    cliniq: 'Smart forms, auto-suggest, document upload, case tracking',
    competitor: 'No',
  },
  {
    feature: 'Multi-specialty workflows',
    cliniq: 'Configurable per specialty — addiction, psych, urgent care',
    competitor: 'Generic one-size-fits-all',
  },
  {
    feature: 'Analytics',
    cliniq: 'Real-time bottleneck detection, wait time trends, utilization',
    competitor: 'Basic reporting',
  },
]

const FlowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
)

const DollarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
)

const GridIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>
)

const differences: [Difference, Difference, Difference] = [
  {
    icon: <FlowIcon />,
    title: 'End-to-end flow, not just check-in',
    body: "Clearwave gets patients through the door. clinIQ shows you everything after — triage, rooms, providers, discharge. From arrival to checkout, every step is visible to every staff member.",
  },
  {
    icon: <DollarIcon />,
    title: 'RTM revenue built in',
    body: "If you're already monitoring patients, you're eligible for $120–150/patient/month in RTM reimbursement. Clearwave doesn't touch it. clinIQ tracks CPT 98975–98981 automatically.",
  },
  {
    icon: <GridIcon />,
    title: 'Specialty-specific workflows',
    body: "Addiction medicine runs differently than urgent care. Psychiatry isn't like physical therapy. clinIQ workflows are configurable by specialty — not forced into a generic template.",
  },
]

export default function ClearwavePage() {
  return (
    <>
      <NavInner />
      <main>
        <ComparisonHero
          competitor="Clearwave"
          title="clinIQ vs Clearwave"
          subtitle="Clearwave checks patients in. clinIQ runs your entire operation."
        />
        <ComparisonTable
          competitorName="Clearwave"
          rows={rows}
        />
        <ComparisonDifferences differences={differences} />
        <ComparisonCTA
          ctaLabel="See clinIQ in action"
          description="See the full workflow — check-in through discharge — in a 15-minute walkthrough configured for your specialty."
        />
      </main>
      <FooterInner />
    </>
  )
}
