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
  title: 'clinIQ vs SimplePractice | Multi-Provider Clinic Operations',
  description:
    'SimplePractice is built for solo therapists. clinIQ is built for multi-provider clinics that need real-time patient flow across rooms and providers.',
  keywords: [
    'SimplePractice alternatives',
    'SimplePractice multi-provider',
    'SimplePractice patient flow',
  ],
}

const rows: TableRow[] = [
  {
    feature: 'Multi-provider queue',
    cliniq: 'Unified queue across all providers, rooms, and clinical stages',
    competitor: 'Single-provider focus — no shared queue view',
  },
  {
    feature: 'Real-time patient tracking',
    cliniq: 'Live status per patient: check-in, triage, vitals, provider, discharge',
    competitor: 'Appointment calendar only — no live flow visibility',
  },
  {
    feature: 'RTM billing',
    cliniq: 'Automated CPT 98975–98981 tracking across all providers',
    competitor: 'No RTM billing automation',
  },
  {
    feature: 'Prior authorization',
    cliniq: 'Pre-auth status surfaced within patient flow before provider time',
    competitor: 'Manual tracking — not integrated into workflow',
  },
  {
    feature: 'Waiting room management',
    cliniq: 'Live waiting room view with time-in-queue and bottleneck alerts',
    competitor: 'No waiting room visibility — notes-focused tool',
  },
  {
    feature: 'Scalability',
    cliniq: 'Built for multi-provider, multi-room, multi-location clinics',
    competitor: 'Designed for solo or small independent practitioners',
  },
]

const UsersIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
)

const GridIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
  </svg>
)

const BarChart2Icon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
    <line x1="2" y1="20" x2="22" y2="20" />
  </svg>
)

const differences: [Difference, Difference, Difference] = [
  {
    icon: <UsersIcon />,
    title: 'Designed for multi-provider clinics from the start',
    body: "SimplePractice excels for an individual therapist managing their own notes and schedule. The moment you add a second provider, shared rooms, or a front-desk team that needs visibility across all patients at once, you've exceeded what it was built to do. clinIQ is built from the ground up for exactly that multi-provider, multi-room environment.",
  },
  {
    icon: <GridIcon />,
    title: 'Real-time operational visibility across your entire floor',
    body: "SimplePractice shows you an appointment calendar. clinIQ shows you where every patient is right now — in the waiting room, at triage, with which provider, in which room. Your front desk and MA team can coordinate without constant verbal check-ins, and your providers always know what's ready for them before they walk into a room.",
  },
  {
    icon: <BarChart2Icon />,
    title: 'Revenue automation your notes tool doesn\'t touch',
    body: "SimplePractice is optimized for therapy session notes and basic scheduling. clinIQ adds RTM billing automation (CPT 98975–98981) and prior authorization tracking directly into the patient flow — capturing reimbursable time that would otherwise require manual documentation or be missed entirely across your multi-provider operation.",
  },
]

export default function SimplePracticePage() {
  return (
    <>
      <NavInner />
      <main>
        <ComparisonHero
          competitor="SimplePractice"
          title="clinIQ vs SimplePractice"
          subtitle="Solo practice notes tool vs multi-provider operations platform."
        />
        <ComparisonTable
          competitorName="SimplePractice"
          rows={rows}
        />
        <ComparisonDifferences differences={differences} />
        <ComparisonCTA ctaLabel="See clinIQ for multi-provider clinics" />
      </main>
      <FooterInner />
    </>
  )
}
