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
  title: 'clinIQ vs AdvancedMD | Real-Time Flow Your PM Can\'t See',
  description:
    'AdvancedMD handles billing and scheduling. It doesn\'t show you where every patient is right now. clinIQ does.',
  keywords: [
    'AdvancedMD alternatives',
    'AdvancedMD patient flow',
    'AdvancedMD add-on',
  ],
}

const rows: TableRow[] = [
  {
    feature: 'Real-time queue visibility',
    cliniq: 'Live queue with room status, stage, and time-in-stage per patient',
    competitor: 'Appointment schedule only — no live queue view',
  },
  {
    feature: 'Patient flow tracking',
    cliniq: 'Check-in → triage → vitals → provider → discharge, tracked live',
    competitor: 'Appointment status only — no clinical stage tracking',
  },
  {
    feature: 'Implementation time',
    cliniq: 'Live in days alongside your existing AdvancedMD setup',
    competitor: 'Already implemented — but no operational visibility layer',
  },
  {
    feature: 'RTM billing automation',
    cliniq: 'CPT 98975–98981 captured automatically as patients progress',
    competitor: 'Manual RTM documentation — no automated capture',
  },
  {
    feature: 'Bottleneck alerts',
    cliniq: 'Proactive alerts when patients stall in any stage beyond threshold',
    competitor: 'No bottleneck detection — reactive only',
  },
  {
    feature: 'Works alongside EHR',
    cliniq: 'Layers on top of AdvancedMD — no replacement, no migration',
    competitor: 'n/a — this is the PM/EHR being augmented',
  },
]

const ScanIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 7V5a2 2 0 0 1 2-2h2" />
    <path d="M17 3h2a2 2 0 0 1 2 2v2" />
    <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
    <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
    <line x1="7" y1="12" x2="17" y2="12" />
  </svg>
)

const PlusCircleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="16" />
    <line x1="8" y1="12" x2="16" y2="12" />
  </svg>
)

const TimerIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="13" r="8" />
    <path d="M12 9v4l2 2" />
    <path d="M5 3l-2 2" />
    <path d="M19 3l2 2" />
    <line x1="12" y1="5" x2="12" y2="1" />
  </svg>
)

const differences: [Difference, Difference, Difference] = [
  {
    icon: <ScanIcon />,
    title: 'The operational layer AdvancedMD doesn\'t provide',
    body: "AdvancedMD is an excellent practice management and billing platform. But it shows you a schedule, not a live clinic floor. clinIQ adds the real-time layer that tells every staff member where every patient is right now — which room, which stage, how long they've been waiting — without replacing a single piece of your existing AdvancedMD setup.",
  },
  {
    icon: <PlusCircleIcon />,
    title: 'Adds visibility without touching your PM',
    body: "There's no migration, no retraining on a new billing system, and no risk of disrupting the workflows your team already knows. clinIQ runs alongside AdvancedMD as a dedicated operational layer, so you gain real-time patient flow intelligence while your billing, scheduling, and clinical documentation continue exactly as they do today.",
  },
  {
    icon: <TimerIcon />,
    title: 'Fast implementation, immediate value',
    body: "Because clinIQ doesn't require changing your EHR or PM, the path to go-live is measured in days rather than months. Your staff sees the live patient queue in week one, bottleneck alerts start surfacing immediately, and RTM billing begins capturing automatically — creating a measurable return on investment before your next billing cycle.",
  },
]

export default function AdvancedMDPage() {
  return (
    <>
      <NavInner />
      <main>
        <ComparisonHero
          competitor="AdvancedMD"
          title="clinIQ vs AdvancedMD"
          subtitle="Practice management vs real-time operational visibility. Both have a role."
        />
        <ComparisonTable
          competitorName="AdvancedMD"
          rows={rows}
        />
        <ComparisonDifferences differences={differences} />
        <ComparisonCTA ctaLabel="See clinIQ alongside AdvancedMD" />
      </main>
      <FooterInner />
    </>
  )
}
