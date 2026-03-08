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
  title: 'Clinic Software for Phoenix | Arizona Healthcare Operations',
  description: 'clinIQ helps Phoenix clinics manage snowbird seasonal demand, Medicare-heavy patient panels, and the rapid growth of East Valley suburbs.',
}

const points: ContextPoint[] = [
  {
    title: 'Snowbird season doubles patient volume — predictably',
    body: 'From October through April, the Phoenix metro population swells as seasonal residents from the Midwest and Canada arrive. For primary care and specialist practices, this means a near-doubling of scheduling demand followed by a sharp drop-off in May. Practices that can\'t scale intake and scheduling capacity up and down efficiently lose revenue on both ends of the cycle.',
  },
  {
    title: 'Medicare and Medicare Advantage dominate the payer mix',
    body: 'Phoenix\'s large retiree population means Medicare and Medicare Advantage plans — Humana, UnitedHealthcare, AARP — drive a disproportionate share of payer complexity. MA plan authorization rules, referral requirements, and annual benefit changes require constant tracking. clinIQ surfaces plan-level requirements without requiring staff to memorize them.',
  },
  {
    title: 'Banner Health dominance shapes independent practice referral strategy',
    body: 'Banner Health operates the largest health system in Arizona, with strong referral capture across the metro. Independent practices competing for patients need to differentiate on experience and accessibility — and need to ensure that out-of-network or direct referral relationships are actively managed, not left to chance.',
  },
  {
    title: 'East Valley growth is creating new clinic markets',
    body: 'Chandler, Gilbert, Mesa, and Tempe are among the fastest-growing communities in the US. New residents arriving in these suburbs need to establish care quickly — and independent practices that operate efficiently can capture this demand before health system affiliates do.',
  },
]

const features: FeatureKey[] = ['scheduling', 'patient-flow', 'analytics', 'pre-auth']

export default function PhoenixPage() {
  return (
    <>
      <NavInner />
      <main>
        <LocationHero
          badge="Phoenix, AZ"
          title="Phoenix clinics. Desert sun. Seasonal demand spikes."
          subtitle="Greater Phoenix practices manage one of the most predictable — and operationally demanding — seasonal demand patterns in American healthcare."
        />
        <LocationContext
          heading="What defines the Phoenix clinic market"
          intro="Phoenix is a market defined by seasonality, retirees, and suburban expansion. Practices that build operations capable of flexing with these cycles — and capturing demand in fast-growing East Valley communities — grow. Those that treat every month like January struggle."
          points={points}
        />
        <LocationFeatures features={features} />
        <LocationCTA
          ctaLabel="See clinIQ for Phoenix clinics"
          description="Purpose-built for Phoenix's seasonal demand patterns, Medicare Advantage complexity, and East Valley growth. Request a demo tailored to your specialty."
        />
      </main>
      <FooterInner />
    </>
  )
}
