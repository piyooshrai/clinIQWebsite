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
  title: 'clinIQ for UK Private Clinics — Patient Journey Management',
  description:
    'Private practice efficiency in an NHS world. Patient choice is driving competition — operational excellence is your differentiator.',
  keywords: [
    'private clinic software UK',
    'patient journey management',
    'GDPR compliant patient portal',
  ],
}

const points: ContextPoint[] = [
  {
    title: 'NHS efficiency pressure',
    body: "Patients paying privately are implicitly comparing you to the NHS — and to each other. If your wait times, flow, and communication aren't measurably better, the value proposition weakens. You need to be visibly faster and smoother.",
  },
  {
    title: 'Private clinic differentiation',
    body: 'Speed and experience are the two reasons patients pay. A polished check-in, a clear queue, and a provider who seems prepared — these are what justify the premium. Operational chaos contradicts the brand.',
  },
  {
    title: 'Patient choice driving competition',
    body: "Google reviews, word of mouth, and GP referral patterns are all shaped by patient experience. The clinic that runs efficiently gets recommended. The one that keeps people waiting in the dark doesn't.",
  },
  {
    title: 'Digital transformation mandates',
    body: 'GDPR compliance, modern patient communication expectations, and NHS Digital initiatives all push toward platforms that handle data responsibly. Paper-based and legacy systems carry both regulatory and reputational risk.',
  },
]

const features: FeatureKey[] = ['patient-flow', 'check-in', 'scheduling', 'analytics']

export default function UnitedKingdomPage() {
  return (
    <>
      <NavInner />
      <main>
        <LocationHero
          badge="United Kingdom"
          title="Private practice efficiency in an NHS world"
          subtitle="Patient choice is driving competition. Operational excellence is your differentiator."
        />
        <LocationContext
          heading="The UK private clinic landscape"
          intro="Private clinics in the UK operate in a unique competitive environment — they're compared not just to each other, but to a free alternative. The bar for operational quality is higher than anywhere else."
          points={points}
        />
        <LocationFeatures features={features} />
        <LocationCTA
          ctaLabel="See clinIQ for UK clinics"
          description="15-minute walkthrough. We'll show you how patient flow and scheduling work for private practice in the UK."
        />
      </main>
      <FooterInner />
    </>
  )
}
