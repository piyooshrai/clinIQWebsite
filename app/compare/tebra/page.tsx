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
  title: 'clinIQ vs Tebra | Operations Layer vs EHR Replacement',
  description:
    'Tebra is an EHR/PM combo. clinIQ is the operational layer that makes any EHR faster. No rip-and-replace required.',
  keywords: [
    'Tebra alternatives',
    'Kareo alternatives 2026',
    'Tebra patient flow',
  ],
}

const rows: TableRow[] = [
  {
    feature: 'EHR integration',
    cliniq: 'Works alongside any existing EHR — zero migration required',
    competitor: 'Requires migrating to Tebra EHR/PM platform',
  },
  {
    feature: 'Patient flow tracking',
    cliniq: 'Live queue, room status, stage tracking, and bottleneck alerts',
    competitor: 'Scheduling view only — no real-time flow visibility',
  },
  {
    feature: 'Implementation timeline',
    cliniq: 'Live in days — no data migration, no retraining',
    competitor: '3–6 months including data migration and training',
  },
  {
    feature: 'RTM billing',
    cliniq: 'Automated CPT 98975–98981 capture and documentation',
    competitor: 'Manual documentation required, no automated tracking',
  },
  {
    feature: 'Real-time queue visibility',
    cliniq: 'Every patient, every stage, visible to all staff simultaneously',
    competitor: 'Appointment list only — no live operational view',
  },
  {
    feature: 'Contract length',
    cliniq: 'Month-to-month, no long-term commitment required',
    competitor: 'Annual contract typically required',
  },
]

const LayersIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
)

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
)

const TrendingUpIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
)

const differences: [Difference, Difference, Difference] = [
  {
    icon: <LayersIcon />,
    title: 'No EHR replacement — no disruption',
    body: "Tebra asks you to migrate your entire practice — your clinical notes, billing history, patient records — onto their platform before you see a single benefit. clinIQ layers on top of whatever EHR you already use, so your staff keeps their existing workflow and you get real-time operational visibility without touching a thing you've built.",
  },
  {
    icon: <ClockIcon />,
    title: 'Live in days, not quarters',
    body: "A Tebra migration typically takes 3–6 months before your practice is fully operational on their platform, and that's before you account for retraining staff. clinIQ is configured and live in days — your team sees value in week one, not after a multi-month implementation project that strains your whole operation.",
  },
  {
    icon: <TrendingUpIcon />,
    title: 'Faster ROI, lower switching cost',
    body: "Because clinIQ doesn't require replacing your EHR, your sunk cost in your current system stays an asset rather than a liability you're abandoning. You get the operational visibility and RTM revenue capture you need immediately, and you can always evaluate your EHR separately on your own timeline.",
  },
]

export default function TebraPage() {
  return (
    <>
      <NavInner />
      <main>
        <ComparisonHero
          competitor="Tebra"
          title="clinIQ vs Tebra"
          subtitle="EHR replacement vs operational upgrade. clinIQ works with what you have."
        />
        <ComparisonTable
          competitorName="Tebra"
          rows={rows}
        />
        <ComparisonDifferences differences={differences} />
        <ComparisonCTA ctaLabel="See clinIQ alongside your current EHR" />
      </main>
      <FooterInner />
    </>
  )
}
