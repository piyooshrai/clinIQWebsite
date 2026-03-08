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
  title: 'Replace Your Patient Whiteboard | Digital Patient Tracking',
  description:
    'Your patient tracking whiteboard was updated 30 minutes ago. clinIQ shows you where every patient is right now, on every device, automatically.',
  keywords: [
    'replace patient whiteboard',
    'digital patient tracking board',
    'HIPAA patient tracking',
  ],
}

const rows: TableRow[] = [
  {
    feature: 'Real-time accuracy',
    cliniq: 'Automatically updated as patients move — always current to the second',
    competitor: 'Updated manually by staff — typically 20–45 minutes stale',
  },
  {
    feature: 'HIPAA compliance',
    cliniq: 'Role-based access, no PHI visible on shared or public screens',
    competitor: 'Patient names exposed on hallway walls visible to anyone nearby',
  },
  {
    feature: 'Remote visibility',
    cliniq: 'Accessible from any device — phone, tablet, workstation — anywhere',
    competitor: 'Physical wall only — invisible to anyone not in that room',
  },
  {
    feature: 'Automated updates',
    cliniq: 'Triggered by patient check-in, stage transitions, and provider actions',
    competitor: 'Requires a staff member to walk to the board and write manually',
  },
  {
    feature: 'Bottleneck alerts',
    cliniq: 'Proactive alerts pushed to staff when thresholds are exceeded',
    competitor: 'No alerts — bottlenecks only noticed when someone looks at the board',
  },
  {
    feature: 'Multi-provider view',
    cliniq: 'All providers, rooms, and stages visible in one unified live dashboard',
    competitor: 'Space-limited — complex multi-provider environments are illegible',
  },
]

const RefreshCwIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 4 23 10 17 10" />
    <polyline points="1 20 1 14 7 14" />
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
  </svg>
)

const LockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
)

const SmartphoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </svg>
)

const differences: [Difference, Difference, Difference] = [
  {
    icon: <RefreshCwIcon />,
    title: 'Always current — automatically',
    body: "A whiteboard is only accurate at the moment someone updates it, which means it's almost always wrong. clinIQ updates automatically every time a patient checks in, transitions between stages, or gets assigned to a room — so every staff member is always looking at the same accurate picture without anyone having to pick up a marker or eraser.",
  },
  {
    icon: <LockIcon />,
    title: 'HIPAA-safe — no PHI on your walls',
    body: "A patient whiteboard with names, conditions, and room assignments visible in a hallway is a HIPAA violation waiting to happen — and many practices don't realize it until an audit. clinIQ keeps all patient information behind role-based access controls, visible only to authenticated staff on secured devices, with no sensitive information ever displayed on a shared wall screen.",
  },
  {
    icon: <SmartphoneIcon />,
    title: 'Visible from anywhere, on any device',
    body: "Your whiteboard is stuck to one wall in one room. A provider between patients, a care coordinator in a back office, or a supervisor working remotely can't see it. clinIQ puts the live clinic floor view on every phone, tablet, and workstation in your practice — so everyone who needs to know what's happening always knows, regardless of where they are.",
  },
]

export default function WhiteboardsPage() {
  return (
    <>
      <NavInner />
      <main>
        <ComparisonHero
          competitor="Whiteboards"
          title="clinIQ vs Whiteboards"
          subtitle="The whiteboard was accurate two hours ago. Maybe."
        />
        <ComparisonTable
          competitorName="Whiteboard"
          rows={rows}
        />
        <ComparisonDifferences differences={differences} />
        <ComparisonCTA ctaLabel="See the digital alternative to your whiteboard" />
      </main>
      <FooterInner />
    </>
  )
}
