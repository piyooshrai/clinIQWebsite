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
  title: 'clinIQ + athenahealth | Better Together',
  description:
    'athenahealth manages your EHR and billing. clinIQ gives you the real-time operational layer athena doesn\'t have. No replacement needed.',
  keywords: [
    'athenahealth patient flow',
    'athena check-in alternative',
    'athenahealth operational layer',
  ],
}

const rows: TableRow[] = [
  {
    feature: 'Real-time patient queue',
    cliniq: 'Live queue with room assignment, stage, and time-in-stage',
    competitor: 'Appointment schedule — no live queue visibility',
  },
  {
    feature: 'Bottleneck detection',
    cliniq: 'Automated alerts when any patient exceeds stage time thresholds',
    competitor: 'No bottleneck detection — manual monitoring required',
  },
  {
    feature: 'RTM billing built-in',
    cliniq: 'CPT 98975–98981 captured automatically during patient journey',
    competitor: 'Billing documentation manual — RTM not automated',
  },
  {
    feature: 'Digital check-in flow',
    cliniq: 'HIPAA-safe digital check-in that feeds directly into live queue',
    competitor: 'Check-in module available but no downstream flow tracking',
  },
  {
    feature: 'Implementation speed',
    cliniq: 'Live in days alongside existing athena instance',
    competitor: 'Already live — but no real-time operational layer exists',
  },
  {
    feature: 'Works with existing EHR',
    cliniq: 'Layers on athena — zero disruption to clinical documentation',
    competitor: 'n/a — this is the EHR being augmented',
  },
]

const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const ArrowRightCircleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 16 16 12 12 8" />
    <line x1="8" y1="12" x2="16" y2="12" />
  </svg>
)

const PackageIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
)

const differences: [Difference, Difference, Difference] = [
  {
    icon: <MapPinIcon />,
    title: 'clinIQ complements athena — it doesn\'t compete with it',
    body: "athenahealth is a robust EHR and billing platform that thousands of practices rely on. clinIQ doesn't try to replace it. Instead, clinIQ adds the one thing athena was never designed to provide: a live, real-time view of every patient moving through your clinic floor, visible to every staff member at once.",
  },
  {
    icon: <ArrowRightCircleIcon />,
    title: 'Operational visibility athena wasn\'t built to give you',
    body: "athena manages your clinical documentation, billing workflows, and scheduling with excellence. What it doesn't show is where Patient #7 is right now, why the MA team is backed up at triage, or which room has been sitting empty for 20 minutes. clinIQ fills exactly that gap — giving your front desk and clinical staff a shared operational view that drives better coordination every day.",
  },
  {
    icon: <PackageIcon />,
    title: 'RTM revenue captured without extra documentation',
    body: "Most clinics using athena are leaving RTM reimbursement on the table because capturing CPT 98975–98981 requires additional documentation workflows that don't fit neatly into the EHR. clinIQ tracks RTM-eligible time automatically as patients flow through care, then surfaces the documentation athena needs — so the revenue gets captured without adding work to your clinical team.",
  },
]

export default function AthenaHealthPage() {
  return (
    <>
      <NavInner />
      <main>
        <ComparisonHero
          competitor="athenahealth"
          title="clinIQ + athenahealth"
          subtitle="athena handles your chart. clinIQ handles your clinic floor."
        />
        <ComparisonTable
          competitorName="athenahealth"
          rows={rows}
        />
        <ComparisonDifferences differences={differences} />
        <ComparisonCTA ctaLabel="See clinIQ alongside athenahealth" />
      </main>
      <FooterInner />
    </>
  )
}
