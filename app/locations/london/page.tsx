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
  title: 'Clinic Software for London | Private Practice Operations',
  description: 'clinIQ helps London private practices meet Harley Street standards, manage AXA and Bupa insurance complexity, and serve international patients efficiently.',
}

const points: ContextPoint[] = [
  {
    title: 'Harley Street sets the expectation baseline for all London private practice',
    body: 'The Harley Street and Wimpole Street corridor establishes a premium patient experience standard that influences expectations across all London private practice — whether you\'re in Marylebone, Chelsea, or the City. Patients who\'ve been seen in this corridor apply the same standards elsewhere. Every friction point in scheduling, intake, or waiting room management is a competitive liability.',
  },
  {
    title: 'AXA, Bupa, and Cigna each require distinct claim and auth workflows',
    body: 'London private practices typically hold contracts with AXA Health, Bupa, Aviva, Vitality, and Cigna — each with different preauthorisation requirements, claim formats, and reimbursement timelines. Managing multiple insurer relationships without a systematic tracking layer results in delayed payments and front-desk staff spending hours on hold.',
  },
  {
    title: 'International patient arrivals demand a premium first impression',
    body: 'London attracts private patients from the Middle East, Russia, West Africa, and Europe seeking specialist care at a premium. These self-pay patients arrive with high expectations and often limited tolerance for administrative friction. A seamless intake process — from booking through check-in — is not a nice-to-have for this patient segment. It\'s the first clinical judgment they make about your practice.',
  },
  {
    title: 'Central London overhead makes throughput efficiency critical',
    body: 'Consulting room and clinic space in W1 and SW1 is among the most expensive real estate in the world. Every unutilised appointment slot and every unnecessarily long patient visit represents a measurable cost. Practices that can optimise scheduling, reduce average check-in time, and maximise daily throughput protect their margins without sacrificing care quality.',
  },
]

const features: FeatureKey[] = ['patient-flow', 'check-in', 'scheduling', 'analytics']

export default function LondonPage() {
  return (
    <>
      <NavInner />
      <main>
        <LocationHero
          badge="London, UK"
          title="London private practice. Harley Street standards. Operational reality."
          subtitle="London's private clinics face the highest patient expectations in the UK, multiple insurer relationships, and overhead costs that make every wasted appointment slot expensive."
        />
        <LocationContext
          heading="What London private practice demands"
          intro="London is the UK's most competitive private healthcare market — and one of the most operationally complex. Multiple insurer contracts, international patient arrivals, premium real estate costs, and the expectation standards set by Harley Street create a clinic environment where operational precision is not optional."
          points={points}
        />
        <LocationFeatures features={features} />
        <LocationCTA
          ctaLabel="See clinIQ for London private practices"
          description="Built for London's multi-insurer environment, international patient mix, and premium throughput requirements. Request a walkthrough for your specialty."
        />
      </main>
      <FooterInner />
    </>
  )
}
