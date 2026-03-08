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
  title: 'Clinic Software for Riyadh | Saudi Healthcare Operations',
  description: 'clinIQ helps Riyadh private clinics manage CCHI payer complexity, Riayati system integration, and the rapid clinic expansion driven by Vision 2030.',
}

const points: ContextPoint[] = [
  {
    title: 'CCHI payer management requires systematic prior auth tracking',
    body: 'Saudi Arabia\'s Council of Cooperative Health Insurance mandates employer-sponsored insurance for most private-sector workers in Riyadh. The resulting payer mix — Bupa Arabia, Tawuniya, MedGulf, and others — each carry distinct pre-authorization protocols and claim submission requirements. Managing auth status across multiple active payers simultaneously is a front-desk challenge that requires systematic tooling, not manual follow-up.',
  },
  {
    title: 'Riayati system integration is becoming standard operational expectation',
    body: 'The Ministry of Health\'s Riayati platform is progressively being adopted as the national health record standard. Private facilities in Riyadh operating aligned with national digital health infrastructure are better positioned for regulatory compliance, MOH audits, and future licensing requirements under Vision 2030\'s healthcare transformation agenda.',
  },
  {
    title: 'Large public hospitals drive significant private referral volume',
    body: 'King Salman Hospital, King Fahad Medical City, and other major Riyadh public facilities generate referral outflow to the private sector — particularly for elective procedures, specialist consultations, and follow-up care. Private practices that can demonstrate systematic care coordination and documentation continuity are the preferred referral destination.',
  },
  {
    title: 'Rapid clinic expansion demands fast operational deployment',
    body: 'Riyadh\'s private healthcare market is expanding quickly, with new clinic openings accelerating across districts from Al Olaya to Diriyah Gate. New facilities need to achieve operational efficiency quickly — without multi-month implementation cycles that delay revenue generation. clinIQ deploys fast and is functional from the first patient visit.',
  },
]

const features: FeatureKey[] = ['patient-flow', 'scheduling', 'check-in', 'pre-auth']

export default function RiyadhPage() {
  return (
    <>
      <NavInner />
      <main>
        <LocationHero
          badge="Riyadh, Saudi Arabia"
          title="Riyadh clinics. Capital city scale. Vision 2030 standards."
          subtitle="Riyadh's private clinic market is expanding rapidly under Vision 2030 — with CCHI payer complexity, Riayati integration requirements, and rising patient expectations setting the operational bar."
        />
        <LocationContext
          heading="What defines Riyadh's clinic market"
          intro="Riyadh is the center of Saudi Arabia's healthcare transformation. Vision 2030's ambitious privatization and quality targets mean that private clinic operators in the capital face both significant opportunity and rising operational expectations. Getting the fundamentals right — payer management, patient flow, and system integration — is what separates the practices that scale from those that stall."
          points={points}
        />
        <LocationFeatures features={features} />
        <LocationCTA
          ctaLabel="See clinIQ for Riyadh clinics"
          description="Built for Riyadh's CCHI payer environment and Vision 2030 operational standards. Request a walkthrough for your facility."
        />
      </main>
      <FooterInner />
    </>
  )
}
