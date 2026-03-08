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
  title: 'clinIQ vs Spreadsheets & Whiteboards — Replace Manual Patient Tracking',
  description:
    'Your whiteboard is out of date the moment someone writes on it. clinIQ gives every staff member the same real-time truth without manual updates.',
  keywords: [
    'patient tracking software',
    'replace whiteboard patient tracking',
    'clinic workflow automation tools',
  ],
}

const rows: TableRow[] = [
  {
    feature: 'Real-time accuracy',
    cliniq: 'Always current — updates on every status change',
    competitor: 'Outdated instantly',
    competitorLoses: true,
  },
  {
    feature: 'Multi-user access',
    cliniq: 'Everyone sees the same data, simultaneously',
    competitor: 'Version conflicts, overwritten cells',
    competitorLoses: true,
  },
  {
    feature: 'Mobile access',
    cliniq: 'Yes — any device, any browser',
    competitor: 'Not really',
    competitorLoses: true,
  },
  {
    feature: 'Historical data',
    cliniq: 'Automatic — every visit logged, searchable',
    competitor: 'Manual if at all',
    competitorLoses: true,
  },
  {
    feature: 'Bottleneck alerts',
    cliniq: 'Automatic — fires before the lobby overflows',
    competitor: 'You notice when the lobby explodes',
    competitorLoses: true,
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

const AutoIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
)

const ChartIcon = () => (
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
    title: 'Everyone sees the same truth',
    body: "With a whiteboard, the person in the hall sees different information than the person at the desk. clinIQ gives every staff member the same real-time view — no walking the hall to verify, no conflicting information.",
  },
  {
    icon: <AutoIcon />,
    title: 'No manual updates',
    body: "Every status change takes one tap. It propagates instantly to every screen in the clinic. Nobody has to remember to update the whiteboard. Nobody erases the wrong thing.",
  },
  {
    icon: <ChartIcon />,
    title: 'Data you can actually use',
    body: "Your whiteboard gets erased every day. clinIQ retains everything — historical wait times, bottleneck patterns, peak hours, throughput by provider. Proof for leadership. Leverage for staffing decisions.",
  },
]

export default function SpreadsheetsPage() {
  return (
    <>
      <NavInner />
      <main>
        <ComparisonHero
          competitor="Spreadsheets & Whiteboards"
          title="clinIQ vs Spreadsheets & Whiteboards"
          subtitle="Your whiteboard is lying to you. It was wrong the moment someone wrote on it."
        />
        <ComparisonTable
          competitorName="Spreadsheets / Whiteboards"
          rows={rows}
        />
        <ComparisonDifferences differences={differences} />
        <ComparisonCTA
          ctaLabel="See the difference"
          description="15-minute walkthrough. We'll show you exactly what your team would see — in real time, on any device."
        />
      </main>
      <FooterInner />
    </>
  )
}
