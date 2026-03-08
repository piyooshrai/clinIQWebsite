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
  title: 'Clinic Software for Dammam | Eastern Province Healthcare',
  description: 'clinIQ helps Dammam and Eastern Province clinics serve the Aramco workforce, manage occupational health complexity, and support rapid regional population growth.',
}

const points: ContextPoint[] = [
  {
    title: 'Aramco workforce creates a premium private healthcare market',
    body: 'Saudi Aramco and its extensive supplier and contractor ecosystem represent one of the most concentrated premium employer-sponsored healthcare markets in the world. Aramco employees and their families access private healthcare with high expectations of quality and efficiency — expectations formed by Aramco\'s own clinic infrastructure. Practices serving this patient segment compete on operational precision.',
  },
  {
    title: 'Occupational health needs require structured documentation',
    body: 'The Eastern Province\'s industrial workforce — in petrochemicals, refining, and port operations — generates significant occupational medicine demand. Return-to-work certifications, industrial injury follow-up, and employer reporting requirements create documentation workflows that general-purpose practice management tools aren\'t built to handle systematically.',
  },
  {
    title: 'Khobar and Al Ahsa expansion is creating new clinic markets',
    body: 'Al Khobar\'s growing commercial districts and Al Ahsa\'s agricultural and residential expansion are driving new clinic openings across the Eastern Province. New facilities in these markets need to achieve operational efficiency quickly — with scheduling, intake, and flow management configured from the start, not bolted on after months of manual workarounds.',
  },
  {
    title: 'KFSH Dammam referral network benefits practices with strong coordination',
    body: 'King Fahad Specialist Hospital in Dammam generates outpatient referral volume for the private sector, particularly for follow-up care, specialist consultations, and rehabilitation. Private practices that can demonstrate reliable documentation return and care coordination communication are the preferred referral partners for hospital discharge teams.',
  },
]

const features: FeatureKey[] = ['scheduling', 'patient-flow', 'pre-auth', 'analytics']

export default function DammamPage() {
  return (
    <>
      <NavInner />
      <main>
        <LocationHero
          badge="Dammam, Saudi Arabia"
          title="Dammam clinics. Eastern Province energy. Healthcare demand."
          subtitle="The Eastern Province's energy economy drives a premium private healthcare market — and an industrial workforce with distinct occupational health needs."
        />
        <LocationContext
          heading="What defines Dammam's clinic market"
          intro="Dammam and the broader Eastern Province sit at the center of Saudi Arabia's energy economy. That creates a clinic market defined by a premium Aramco-connected patient segment, occupational medicine complexity, and rapid suburban expansion — all simultaneously."
          points={points}
        />
        <LocationFeatures features={features} />
        <LocationCTA
          ctaLabel="See clinIQ for Dammam clinics"
          description="Built for the Eastern Province's Aramco market, occupational health workflows, and regional expansion. Request a walkthrough for your facility."
        />
      </main>
      <FooterInner />
    </>
  )
}
