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
  title: 'clinIQ vs Phreesia — Alternatives for Small Practices',
  description:
    'Phreesia handles check-in. clinIQ tracks patients through your entire workflow — and does it in days, not months.',
  keywords: [
    'Phreesia alternatives',
    'Phreesia cost per transaction 2026',
    'Phreesia alternatives for small practices',
  ],
}

const rows: TableRow[] = [
  {
    feature: 'Patient flow tracking',
    cliniq: 'Real-time queue, room status, and bottleneck alerts',
    competitor: 'No — check-in only',
  },
  {
    feature: 'Implementation time',
    cliniq: 'Days',
    competitor: 'Months',
  },
  {
    feature: 'EHR integration',
    cliniq: 'Any EHR — no rip-and-replace',
    competitor: 'Limited partner network',
  },
  {
    feature: 'RTM billing',
    cliniq: 'Built-in CPT 98975–98981 tracking',
    competitor: 'No',
  },
  {
    feature: 'Pricing',
    cliniq: 'Transparent, flat monthly',
    competitor: 'Per-transaction, complex',
  },
]

const EyeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
)

const LinkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
)

const ZapIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
)

const differences: [Difference, Difference, Difference] = [
  {
    icon: <EyeIcon />,
    title: 'We track patients after check-in',
    body: "Phreesia stops at the waiting room. clinIQ shows the full patient journey — triage, vitals, provider time, discharge — so every staff member knows what's happening without asking.",
  },
  {
    icon: <LinkIcon />,
    title: 'We work with any EHR',
    body: "No vendor lock-in. No rip-and-replace. clinIQ layers on top of whatever EHR you already have, so you get the visibility you need without touching your existing setup.",
  },
  {
    icon: <ZapIcon />,
    title: 'We implement in days, not months',
    body: "Phreesia implementations run 3–6 months. clinIQ is live in days. You see value in week one — not quarter three.",
  },
]

export default function PhreesiaPage() {
  return (
    <>
      <NavInner />
      <main>
        <ComparisonHero
          competitor="Phreesia"
          title="clinIQ vs Phreesia"
          subtitle="Both handle check-in. Only one tracks what happens after."
        />
        <ComparisonTable
          competitorName="Phreesia"
          rows={rows}
        />
        <ComparisonDifferences differences={differences} />
        <ComparisonCTA ctaLabel="See if clinIQ fits your clinic" />
      </main>
      <FooterInner />
    </>
  )
}
