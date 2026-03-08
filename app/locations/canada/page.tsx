import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import LocationHero from '@/components/LocationHero'
import LocationContext from '@/components/LocationContext'
import LocationFeatures from '@/components/LocationFeatures'
import LocationCTA from '@/components/LocationCTA'
import type { ContextPoint } from '@/components/LocationContext'
import type { FeatureKey } from '@/components/LocationFeatures'

export const metadata: Metadata = {
  title: 'Clinic Software for Canada | Provincial Health Systems',
  description:
    'Provincial billing rules, bilingual workflows, PIPEDA compliance, and a growing private pay market. One operations platform built for Canadian clinic complexity.',
  keywords: [
    'clinic management software Canada',
    'provincial health billing Ontario BC Quebec',
    'PIPEDA compliant clinic software',
  ],
}

const points: ContextPoint[] = [
  {
    title: 'Provincial billing variation',
    body: "Ontario's OHIP, BC's MSP, and Quebec's RAMQ each carry distinct billing rules, fee schedules, and submission processes. Clinics operating across provinces — or simply planning to expand — need an operational layer that doesn't assume a single-province world.",
  },
  {
    title: 'French and English workflows',
    body: "Quebec's language requirements aren't optional. Patient-facing communications, intake forms, and appointment flows need to work fluently in both official languages. A bilingual-capable system protects your ability to operate in every province without exception.",
  },
  {
    title: 'Growing private pay market',
    body: 'Frustrated with public system wait times, a rising share of Canadians are paying privately for specialist access, diagnostics, and elective procedures. Private clinics positioned with strong operational infrastructure are capturing this demand — and retaining those patients.',
  },
  {
    title: 'PIPEDA data obligations',
    body: "Canada's Personal Information Protection and Electronic Documents Act sets baseline requirements for how patient data is collected, stored, and shared. Clinics handling digital records need platforms that take data governance seriously — not as an afterthought.",
  },
  {
    title: 'Pre-authorisation complexity',
    body: 'Private insurers, extended health plans, and provincial supplemental coverage each have different pre-approval workflows. Managing authorisation requests manually creates delays and revenue leakage. Getting this right operationally is often the difference between a smooth patient visit and a billing dispute.',
  },
]

const features: FeatureKey[] = ['pre-auth', 'scheduling', 'patient-flow', 'analytics']

export default function CanadaPage() {
  return (
    <>
      <NavInner />
      <main>
        <LocationHero
          badge="Canada"
          title="Canadian healthcare. Provincial complexity. One operations platform."
          subtitle="Ten provinces, two official languages, and a private pay market that's growing fast. Your clinic operations need to keep up."
        />
        <LocationContext
          heading="The Canadian private clinic landscape"
          intro="Canada's healthcare system is publicly funded in principle but operationally fragmented in practice. Each province runs its own rules, and private clinics sit at the intersection of public expectations and private-pay realities. The clinics that get operational infrastructure right gain a durable competitive edge."
          points={points}
        />
        <LocationFeatures features={features} />
        <LocationCTA
          ctaLabel="See clinIQ for Canadian clinics"
          description="15-minute walkthrough. We'll show you pre-authorisation, scheduling, and patient flow configured for provincial healthcare complexity."
        />
      </main>
      <FooterInner />
    </>
  )
}
