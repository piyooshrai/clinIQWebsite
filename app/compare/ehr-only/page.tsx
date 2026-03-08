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
  title: 'Your EHR Doesn\'t Do Operations | Add clinIQ',
  description:
    'EHRs document care. They don\'t show you where every patient is in real time. clinIQ is the operational layer that works on top of any EHR.',
  keywords: [
    'EHR patient flow',
    'EHR check-in limitations',
    'clinic operations software',
  ],
}

const rows: TableRow[] = [
  {
    feature: 'Real-time patient queue',
    cliniq: 'Live queue with room, stage, provider, and time-in-stage per patient',
    competitor: 'Appointment schedule — no live queue or room status',
  },
  {
    feature: 'Bottleneck alerts',
    cliniq: 'Automated alerts when any patient or stage exceeds time thresholds',
    competitor: 'No proactive alerting — staff must notice delays manually',
  },
  {
    feature: 'RTM billing automation',
    cliniq: 'CPT 98975–98981 captured automatically as patients progress through care',
    competitor: 'Manual documentation — RTM capture varies by EHR and requires extra steps',
  },
  {
    feature: 'Pre-auth tracking',
    cliniq: 'Prior auth status surfaced in real time before provider enters room',
    competitor: 'Managed in separate workflow — not visible in live patient flow',
  },
  {
    feature: 'Digital check-in flow',
    cliniq: 'Self-service digital check-in that feeds directly into live clinical queue',
    competitor: 'Check-in modules vary by EHR — rarely connected to live operational view',
  },
  {
    feature: 'Implementation speed',
    cliniq: 'Live in days alongside your existing EHR — no migration required',
    competitor: 'n/a — EHR is already in place but operational layer is missing',
  },
]

const LayersIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
)

const TargetIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
)

const GitMergeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18" cy="18" r="3" />
    <circle cx="6" cy="6" r="3" />
    <path d="M6 21V9a9 9 0 0 0 9 9" />
  </svg>
)

const differences: [Difference, Difference, Difference] = [
  {
    icon: <LayersIcon />,
    title: 'EHRs document. clinIQ operates.',
    body: "Your EHR was designed to capture clinical notes, manage billing codes, and store patient records. It was never designed to show you, in real time, where every patient is in your clinic right now. clinIQ is the operational layer that lives on top of your EHR — not competing with it, but filling the gap it was never built to address.",
  },
  {
    icon: <TargetIcon />,
    title: 'RTM revenue your EHR misses automatically',
    body: "Most EHRs require a provider or coder to manually identify and document RTM-eligible encounters, which means they're captured inconsistently at best and missed entirely at worst. clinIQ automatically tracks RTM time as patients move through clinical stages and flags documentation requirements — so CPT 98975–98981 codes get captured on every eligible encounter, not just the ones someone remembered to check.",
  },
  {
    icon: <GitMergeIcon />,
    title: 'Works with any EHR you already have',
    body: "You don't need to switch EHRs to get real-time operational visibility. clinIQ is designed to layer on top of any EHR — Epic, athena, eCW, NextGen, AdvancedMD, Tebra, or anything else — without disrupting your existing clinical documentation workflow. Your team keeps working in the EHR they know, and gains the operational visibility they've never had.",
  },
]

export default function EHROnlyPage() {
  return (
    <>
      <NavInner />
      <main>
        <ComparisonHero
          competitor="EHR-Only"
          title="Your EHR vs clinIQ"
          subtitle="Your EHR does charts. It doesn't do operations."
        />
        <ComparisonTable
          competitorName="EHR-Only"
          rows={rows}
        />
        <ComparisonDifferences differences={differences} />
        <ComparisonCTA ctaLabel="Add the operational layer your EHR is missing" />
      </main>
      <FooterInner />
    </>
  )
}
