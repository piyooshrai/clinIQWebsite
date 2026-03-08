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
  title: 'Clinic Software for Chicago | Chicagoland Healthcare Operations',
  description: 'clinIQ helps Chicago-area clinics manage BCBS Illinois complexity, academic referral networks, and behavioral health demand across the metro.',
}

const points: ContextPoint[] = [
  {
    title: 'BCBS Illinois network complexity is real',
    body: 'Blue Cross Blue Shield of Illinois dominates the commercial insurance market here. Its various network tiers — PPO, BlueChoice, Blue Precision — each carry distinct prior auth rules and referral requirements. Practices that can\'t track auth status in real time lose revenue and patient trust. clinIQ makes that tracking automatic.',
  },
  {
    title: 'Academic referrals drive private practice volume',
    body: 'Northwestern Memorial, Rush, and UIC generate significant outpatient referral volume for independent specialists across the metro. Managing referral source relationships and ensuring follow-up documentation gets back to referring providers is what keeps that pipeline healthy.',
  },
  {
    title: 'Behavioral health demand is concentrated and unmet',
    body: 'Chicago\'s South and West Sides have well-documented gaps in behavioral health access. Practices serving these communities often operate as de facto mental health providers, whether or not that\'s their stated specialty. Efficient intake and care coordination tools reduce the friction for patients who are often the hardest to retain.',
  },
  {
    title: 'Sports medicine is a growing private market',
    body: 'Proximity to the Cubs, Bears, Bulls, Blackhawks, and the amateur athletic culture they support creates a real market for sports medicine and orthopedic practices. Self-pay and high-deductible commercial patients in this segment expect consumer-grade scheduling and intake experiences.',
  },
]

const features: FeatureKey[] = ['pre-auth', 'patient-flow', 'scheduling', 'analytics']

export default function ChicagoPage() {
  return (
    <>
      <NavInner />
      <main>
        <LocationHero
          badge="Chicago, IL"
          title="Chicago clinics. Midwest efficiency demands."
          subtitle="Chicagoland practices deal with serious payer complexity, strong academic referral networks, and a patient population that spans every socioeconomic tier."
        />
        <LocationContext
          heading="What Chicago's clinic market demands"
          intro="Chicago is not a simple market. Academic health systems, dominant commercial payers, underserved communities, and a growing private-pay segment all coexist in the same metro. Practices that operate efficiently across this mix grow. Those that don't get squeezed."
          points={points}
        />
        <LocationFeatures features={features} />
        <LocationCTA
          ctaLabel="See clinIQ for Chicago clinics"
          description="Built for Chicagoland's complex payer environment and referral networks. Get a demo tailored to your practice's specialty and patient mix."
        />
      </main>
      <FooterInner />
    </>
  )
}
