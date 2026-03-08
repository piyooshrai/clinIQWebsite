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
  title: 'Clinic Software for Atlanta | Georgia Healthcare Operations',
  description: 'clinIQ helps Atlanta clinics manage rapid population growth, Georgia Medicaid CMO complexity, and the referral dynamics of a fast-expanding market.',
}

const points: ContextPoint[] = [
  {
    title: 'Population growth is opening new clinics faster than systems can keep up',
    body: 'Metro Atlanta is one of the fastest-growing regions in the Southeast. New clinics in Buckhead, Alpharetta, Johns Creek, and Peachtree City are opening into a competitive market where first impressions matter. Getting operations right from day one — scheduling, intake, and flow — is a competitive advantage, not a nice-to-have.',
  },
  {
    title: 'Georgia Medicaid CMO complexity requires plan-level tracking',
    body: 'Georgia\'s Medicaid program operates through managed care organizations — Amerigroup, Caresource, Peach State, and WellCare — each with distinct prior auth rules and referral requirements. Practices serving Medicaid patients in Atlanta need plan-specific workflows that update automatically, not binders of printed payer policies.',
  },
  {
    title: 'Emory and Grady drive private referral patterns across the metro',
    body: 'Emory Healthcare and Grady Memorial Hospital generate significant outpatient referral volume for independent specialists throughout the Atlanta metro. Practices that can demonstrate efficient follow-up documentation and closed-loop referral communication are the ones that stay on those referral lists.',
  },
  {
    title: 'Corporate Atlanta supports a strong employer-sponsored insurance market',
    body: 'With Delta, Coca-Cola, Home Depot, UPS, and dozens of other Fortune 500 headquarters based in Atlanta, the commercial insurance market is robust. The flip side: large employer self-insured plans each carry their own auth requirements. Practices with automated eligibility and auth tracking handle this mix without additional headcount.',
  },
]

const features: FeatureKey[] = ['patient-flow', 'pre-auth', 'scheduling', 'check-in']

export default function AtlantaPage() {
  return (
    <>
      <NavInner />
      <main>
        <LocationHero
          badge="Atlanta, GA"
          title="Atlanta clinics. Fast-growing market. Efficient operations."
          subtitle="Atlanta's rapid expansion is creating new clinic opportunities and new operational challenges simultaneously. The practices winning in this market are built to scale."
        />
        <LocationContext
          heading="What defines Atlanta's clinic market"
          intro="Atlanta is growing fast — and the healthcare market is growing with it. New patients, new competitors, and new payer complexity are arriving simultaneously. The clinics that establish efficient operations early build the durable advantages that sustain them as the market matures."
          points={points}
        />
        <LocationFeatures features={features} />
        <LocationCTA
          ctaLabel="See clinIQ for Atlanta clinics"
          description="Built for Atlanta's fast-growing clinic market — from Medicaid CMO complexity to corporate employer insurance. Get a walkthrough tailored to your specialty."
        />
      </main>
      <FooterInner />
    </>
  )
}
