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
  title: 'clinIQ + eClinicalWorks | Operations eCW Wasn\'t Built For',
  description:
    'eCW handles your clinical documentation. clinIQ adds the real-time patient flow layer that shows where every patient is, right now.',
  keywords: [
    'eClinicalWorks patient flow',
    'eCW check-in',
    'eClinicalWorks add-on',
  ],
}

const rows: TableRow[] = [
  {
    feature: 'Live patient queue',
    cliniq: 'Real-time queue with room status, stage, and time-in-queue per patient',
    competitor: 'Appointment schedule — no live queue visibility',
  },
  {
    feature: 'Room status tracking',
    cliniq: 'Occupied, ready, and cleaning status visible across all rooms live',
    competitor: 'No room status tracking — manual coordination required',
  },
  {
    feature: 'RTM billing',
    cliniq: 'Automated CPT 98975–98981 capture integrated into patient flow',
    competitor: 'Manual RTM documentation — no automated tracking',
  },
  {
    feature: 'Pre-auth automation',
    cliniq: 'Prior auth status surfaced within flow before provider time',
    competitor: 'Separate pre-auth workflow — not integrated into live flow',
  },
  {
    feature: 'Bottleneck alerts',
    cliniq: 'Proactive alerts when patients or rooms exceed time thresholds',
    competitor: 'No automated bottleneck detection',
  },
  {
    feature: 'EHR replacement needed',
    cliniq: 'No — clinIQ layers on top of eCW with zero disruption',
    competitor: 'n/a — eCW remains your EHR of record',
  },
]

const MonitorIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
)

const RadioIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="2" />
    <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14" />
  </svg>
)

const CheckSquareIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 11 12 14 22 4" />
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
  </svg>
)

const differences: [Difference, Difference, Difference] = [
  {
    icon: <MonitorIcon />,
    title: 'Zero disruption to your eCW workflow',
    body: "Your clinical team has spent years building documentation habits inside eClinicalWorks. clinIQ doesn't ask them to change a thing. It layers on top of eCW as a dedicated operational display — giving your front desk and MAs a live clinic floor view while every provider continues documenting exactly where they always have.",
  },
  {
    icon: <RadioIcon />,
    title: 'Real-time visibility eCW was never built to provide',
    body: "eClinicalWorks is one of the most capable EHRs in the market for clinical documentation and scheduling. But it shows you an appointment list, not a live clinic floor. clinIQ adds the operational layer that tells your whole team which patient is in which room, what stage they're in, and where the current bottleneck is — in real time, on any screen.",
  },
  {
    icon: <CheckSquareIcon />,
    title: 'RTM and pre-auth revenue you\'re currently missing',
    body: "Most eCW practices are underreporting RTM-eligible encounters because the capture process doesn't fit naturally into the EHR documentation flow. clinIQ automatically tracks RTM time as patients progress through care stages and surfaces prior auth status before providers walk into the room — capturing revenue that currently slips through manual processes.",
  },
]

export default function EClinicalWorksPage() {
  return (
    <>
      <NavInner />
      <main>
        <ComparisonHero
          competitor="eClinicalWorks"
          title="clinIQ + eClinicalWorks"
          subtitle="eCW runs your chart. clinIQ runs your clinic floor."
        />
        <ComparisonTable
          competitorName="eClinicalWorks"
          rows={rows}
        />
        <ComparisonDifferences differences={differences} />
        <ComparisonCTA ctaLabel="See clinIQ alongside eClinicalWorks" />
      </main>
      <FooterInner />
    </>
  )
}
