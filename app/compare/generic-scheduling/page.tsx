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
  title: 'clinIQ vs Calendly | Healthcare Scheduling Built for Clinics',
  description:
    'Calendly handles meeting bookings. clinIQ handles prior auth, insurance verification, specialty-specific appointment types, and RTM billing. Different tools.',
  keywords: [
    'medical scheduling vs Calendly',
    'healthcare appointment software',
    'Calendly alternative clinics',
  ],
}

const rows: TableRow[] = [
  {
    feature: 'Prior auth integration',
    cliniq: 'Prior authorization status tracked and surfaced within scheduling flow',
    competitor: 'No — appointment booking only, no clinical authorization support',
  },
  {
    feature: 'Insurance verification',
    cliniq: 'Real-time eligibility verification at booking and again at check-in',
    competitor: 'No — no insurance data collected or verified',
  },
  {
    feature: 'Specialty appointment types',
    cliniq: 'PT initial eval, OT follow-up, urgent care, new patient — fully configurable',
    competitor: 'Generic time blocks only — no clinical appointment type logic',
  },
  {
    feature: 'RTM billing',
    cliniq: 'RTM-eligible time tracked automatically from first appointment forward',
    competitor: 'No — billing entirely outside scope',
  },
  {
    feature: 'Patient flow tracking',
    cliniq: 'Scheduling connects directly to live queue and clinical stage tracking',
    competitor: 'Scheduling only — no connection to clinical workflow after booking',
  },
  {
    feature: 'HIPAA compliance',
    cliniq: 'HIPAA-compliant by design with BAA available',
    competitor: 'Not purpose-built for HIPAA — BAA availability varies',
  },
]

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <line x1="8" y1="14" x2="8" y2="14" />
    <line x1="12" y1="14" x2="12" y2="14" />
    <line x1="16" y1="14" x2="16" y2="14" />
    <line x1="8" y1="18" x2="8" y2="18" />
    <line x1="12" y1="18" x2="12" y2="18" />
  </svg>
)

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
)

const DatabaseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
)

const differences: [Difference, Difference, Difference] = [
  {
    icon: <CalendarIcon />,
    title: 'Healthcare-specific — not generic meetings',
    body: "Calendly is elegant for booking a 30-minute discovery call. It has no concept of a new patient evaluation, a prior authorization requirement, specialty-specific intake forms, or clinical appointment durations that vary by insurance plan. clinIQ understands healthcare scheduling at a clinical level — because it was built for clinics, not for sales teams booking demos.",
  },
  {
    icon: <HeartIcon />,
    title: 'Revenue integration from first booking',
    body: "The moment a patient books through clinIQ, the system begins tracking insurance eligibility, RTM enrollment eligibility, and prior authorization requirements — before the patient ever walks in the door. Generic scheduling tools hand off a calendar invite. clinIQ hands off a patient that's already been verified, pre-screened for RTM, and flagged if authorization is needed.",
  },
  {
    icon: <DatabaseIcon />,
    title: 'Scheduling that connects to clinical workflow',
    body: "With Calendly or similar tools, the scheduling event ends the moment the appointment is booked. clinIQ's scheduling connects directly to the live patient queue, so when a booked patient checks in, they automatically appear in the clinical flow — no manual handoff, no staff lookup, and no gap between the scheduling system and the clinic floor.",
  },
]

export default function GenericSchedulingPage() {
  return (
    <>
      <NavInner />
      <main>
        <ComparisonHero
          competitor="Generic Scheduling Tools"
          title="clinIQ vs Generic Scheduling"
          subtitle="Calendly wasn't built for 45-minute follow-ups and prior auths."
        />
        <ComparisonTable
          competitorName="Generic Scheduling"
          rows={rows}
        />
        <ComparisonDifferences differences={differences} />
        <ComparisonCTA ctaLabel="See healthcare-specific scheduling" />
      </main>
      <FooterInner />
    </>
  )
}
