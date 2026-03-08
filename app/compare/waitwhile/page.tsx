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
  title: 'clinIQ vs Waitwhile | Clinic-Specific Patient Flow Software',
  description:
    'Waitwhile manages retail wait lines. clinIQ manages patient journeys — through triage, vitals, provider time, and billing in real time.',
  keywords: [
    'Waitwhile healthcare alternative',
    'Waitwhile vs cliniq',
    'digital waitlist for clinics',
  ],
}

const rows: TableRow[] = [
  {
    feature: 'Clinical stage tracking',
    cliniq: 'Triage, vitals, provider, discharge — tracked live per patient',
    competitor: 'Wait time only — no clinical stages',
  },
  {
    feature: 'HIPAA compliance',
    cliniq: 'HIPAA-compliant by design, BAA available',
    competitor: 'Not purpose-built for HIPAA — BAA not standard',
  },
  {
    feature: 'RTM billing',
    cliniq: 'Automated CPT 98975–98981 capture during patient journey',
    competitor: 'No — billing not supported',
  },
  {
    feature: 'Pre-authorization',
    cliniq: 'Pre-auth status tracked and surfaced before provider time',
    competitor: 'No — not supported',
  },
  {
    feature: 'Specialty-specific workflows',
    cliniq: 'Configurable for PT, OT, urgent care, primary care, and more',
    competitor: 'Generic queue flows only',
  },
  {
    feature: 'EHR compatibility',
    cliniq: 'Works alongside any EHR — no replacement required',
    competitor: 'No EHR integration',
  },
]

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
)

const ActivityIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
)

const CreditCardIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
    <line x1="1" y1="10" x2="23" y2="10" />
    <line x1="6" y1="16" x2="10" y2="16" />
  </svg>
)

const differences: [Difference, Difference, Difference] = [
  {
    icon: <ShieldIcon />,
    title: 'HIPAA-compliant by design',
    body: "Waitwhile was built for salons and coffee shops — environments where HIPAA is irrelevant. clinIQ is purpose-built for clinical settings with HIPAA compliance at the architecture level, a Business Associate Agreement available, and no PHI ever exposed on shared screens or public-facing displays.",
  },
  {
    icon: <ActivityIcon />,
    title: 'Multi-stage clinical tracking, not just wait time',
    body: "A retail waitlist tells you how long someone has been waiting. clinIQ tells you which stage every patient is in — triage, vitals, with provider, awaiting discharge — so your front desk, MA team, and providers are all looking at the same ground truth without constant verbal check-ins slowing everyone down.",
  },
  {
    icon: <CreditCardIcon />,
    title: 'Healthcare revenue features built in',
    body: "Waitwhile has no concept of RTM billing, CPT codes, or prior authorization because it was never designed for clinical revenue cycles. clinIQ captures billable remote therapeutic monitoring time automatically as patients move through care, turning operational tracking into direct reimbursement without extra documentation burden.",
  },
]

export default function WaitwhilePage() {
  return (
    <>
      <NavInner />
      <main>
        <ComparisonHero
          competitor="Waitwhile"
          title="clinIQ vs Waitwhile"
          subtitle="Retail waitlist software vs clinic patient flow. Different tools."
        />
        <ComparisonTable
          competitorName="Waitwhile"
          rows={rows}
        />
        <ComparisonDifferences differences={differences} />
        <ComparisonCTA ctaLabel="See clinIQ's clinic-specific patient flow" />
      </main>
      <FooterInner />
    </>
  )
}
