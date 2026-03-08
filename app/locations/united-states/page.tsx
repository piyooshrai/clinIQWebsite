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
  title: 'clinIQ for US Clinics — Clinic Management Software USA',
  description:
    'Insurance complexity, prior auth burden, staff shortages, value-based care pressure. clinIQ is built for the complexity of American healthcare.',
  keywords: [
    'clinic management software USA',
    'patient flow software',
    'prior authorization automation',
  ],
}

const points: ContextPoint[] = [
  {
    title: 'Insurance complexity',
    body: 'Every patient walks in with different coverage, different copays, different pre-auth requirements. The administrative overhead of managing payer rules is a full-time job — and it compounds with every new patient.',
  },
  {
    title: 'Prior auth burden',
    body: 'Hours lost to payer phone trees, fax machines, and manual follow-up. Every denied claim is revenue delayed. Every staff hour on hold is a staff hour not spent on patients.',
  },
  {
    title: 'Staff shortage crisis',
    body: 'Burnout drives turnover. Turnover drives burnout. The clinics that retain staff are the ones that reduce the cognitive load — by giving people information instead of forcing them to chase it.',
  },
  {
    title: 'Value-based care transition',
    body: 'Payers want outcomes data. ACOs want quality metrics. You need historical records, throughput analytics, and documentation that proves the care you delivered — not just that you delivered it.',
  },
]

const features: FeatureKey[] = ['pre-auth', 'rtm', 'patient-flow', 'analytics']

export default function UnitedStatesPage() {
  return (
    <>
      <NavInner />
      <main>
        <LocationHero
          badge="United States"
          title="Built for the complexity of American healthcare"
          subtitle="Insurance chaos, prior auth burden, staff shortages, value-based care pressure. We get it."
        />
        <LocationContext
          heading="The American clinic operator's reality"
          intro="US outpatient clinics operate under a level of administrative complexity that has no parallel. Every system that reduces that load — without adding a new one — is worth its weight."
          points={points}
        />
        <LocationFeatures features={features} />
        <LocationCTA
          ctaLabel="See clinIQ for US clinics"
          description="15-minute walkthrough. We'll walk through pre-auth, RTM, and flow tracking configured for your payer mix."
        />
      </main>
      <FooterInner />
    </>
  )
}
