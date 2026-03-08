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
  title: 'clinIQ + NextGen | Visibility Your PM Doesn\'t Provide',
  description:
    'NextGen handles scheduling and billing. clinIQ gives you the real-time operational layer — patient tracking, RTM billing, and bottleneck detection.',
  keywords: [
    'NextGen alternatives',
    'NextGen patient flow',
    'NextGen real-time tracking',
  ],
}

const rows: TableRow[] = [
  {
    feature: 'Real-time patient visibility',
    cliniq: 'Live queue with stage, room, provider, and time-in-stage per patient',
    competitor: 'Appointment schedule only — no live operational view',
  },
  {
    feature: 'Queue management',
    cliniq: 'Dynamic queue that updates automatically as patients move through care',
    competitor: 'Static appointment list — no real-time queue management',
  },
  {
    feature: 'RTM billing',
    cliniq: 'Automated CPT 98975–98981 capture as patients flow through stages',
    competitor: 'Manual documentation required — no automated RTM tracking',
  },
  {
    feature: 'Pre-auth tracking',
    cliniq: 'Prior auth status visible in flow before provider enters room',
    competitor: 'Pre-auth managed separately — not integrated into live workflow',
  },
  {
    feature: 'Bottleneck alerts',
    cliniq: 'Proactive notifications when any stage exceeds time thresholds',
    competitor: 'No automated bottleneck detection or alerting',
  },
  {
    feature: 'Implementation speed',
    cliniq: 'Live in days alongside existing NextGen instance',
    competitor: 'Already implemented — but operational layer is absent',
  },
]

const NavigationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="3 11 22 2 13 21 11 13 3 11" />
  </svg>
)

const RepeatIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="17 1 21 5 17 9" />
    <path d="M3 11V9a4 4 0 0 1 4-4h14" />
    <polyline points="7 23 3 19 7 15" />
    <path d="M21 13v2a4 4 0 0 1-4 4H3" />
  </svg>
)

const RocketIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
)

const differences: [Difference, Difference, Difference] = [
  {
    icon: <NavigationIcon />,
    title: 'The real-time visibility layer NextGen doesn\'t have',
    body: "NextGen Healthcare is a capable PM and EHR platform for scheduling, billing, and clinical workflows. But it shows you a schedule — not a live view of where every patient is in your clinic right now. clinIQ adds that operational layer, giving your front desk and MA team a shared, continuously updated view of every patient across every room and stage.",
  },
  {
    icon: <RepeatIcon />,
    title: 'Revenue features NextGen doesn\'t automate',
    body: "NextGen handles fee schedules and claim submission with depth. What it doesn't do is automatically track RTM-eligible time as patients move through clinical stages or surface prior auth status at the point of care. clinIQ captures both — turning data that already exists in your patient flow into documented, billable encounters without adding work to your clinical team.",
  },
  {
    icon: <RocketIcon />,
    title: 'Weeks, not months, to full operational visibility',
    body: "Because clinIQ runs alongside NextGen rather than replacing it, there's no migration project, no data conversion, and no retraining on a new billing system. Your team gets a live operational dashboard in days, and clinIQ begins capturing RTM billing and surfacing bottlenecks immediately — delivering a measurable return before your next monthly review.",
  },
]

export default function NextGenPage() {
  return (
    <>
      <NavInner />
      <main>
        <ComparisonHero
          competitor="NextGen"
          title="clinIQ + NextGen"
          subtitle="NextGen manages your practice. clinIQ shows you what's happening right now."
        />
        <ComparisonTable
          competitorName="NextGen"
          rows={rows}
        />
        <ComparisonDifferences differences={differences} />
        <ComparisonCTA ctaLabel="See clinIQ alongside NextGen" />
      </main>
      <FooterInner />
    </>
  )
}
