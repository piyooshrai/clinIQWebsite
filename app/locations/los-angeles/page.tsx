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
  title: 'Clinic Software for Los Angeles | LA Healthcare Operations',
  description: 'clinIQ helps Los Angeles clinics handle Medi-Cal complexity, high patient expectations, and the operational pressures of the LA Basin market.',
}

const points: ContextPoint[] = [
  {
    title: 'Medi-Cal is the dominant payer — and the most demanding',
    body: 'Medi-Cal enrollment across LA County is massive, and managed care plan rules vary significantly between L.A. Care, Health Net, Molina, and others. Prior auth requirements shift constantly. clinIQ tracks payer-specific auth workflows so your front desk isn\'t guessing.',
  },
  {
    title: 'Traffic means patients arrive late — or not at all',
    body: 'LA Basin geography and freeway congestion are not abstractions for a clinic scheduler. A 3pm appointment in Culver City can represent a 90-minute commute from the Valley. Smart scheduling buffers and patient reminders that account for travel patterns reduce no-show rates meaningfully.',
  },
  {
    title: 'Two very different markets exist simultaneously',
    body: 'From high-volume Federally Qualified Health Centers in Compton to concierge practices in Beverly Hills and Brentwood charging membership fees, the LA market spans the full spectrum. clinIQ adapts to both operational models without requiring two separate platforms.',
  },
  {
    title: 'Spanish-first intake is a competitive advantage',
    body: 'Spanish is the primary language for a significant share of LA\'s patient population, particularly in East LA, the San Fernando Valley, and South Central. Practices that offer native-language intake workflows see measurably better intake completion and patient satisfaction.',
  },
]

const features: FeatureKey[] = ['patient-flow', 'scheduling', 'check-in', 'analytics']

export default function LosAngelesPage() {
  return (
    <>
      <NavInner />
      <main>
        <LocationHero
          badge="Los Angeles, CA"
          title="LA clinics. Sprawl. Traffic. High expectations."
          subtitle="From Medi-Cal-heavy community health to concierge practices in the Westside, LA clinics need operations that flex across the whole market."
        />
        <LocationContext
          heading="What makes the LA clinic market unique"
          intro="Los Angeles is the second-largest metro in the US — and its healthcare market reflects that complexity. High payer diversity, geographic sprawl, and a culturally diverse patient base create operational demands that generic practice management tools aren't designed to handle."
          points={points}
        />
        <LocationFeatures features={features} />
        <LocationCTA
          ctaLabel="See clinIQ for Los Angeles clinics"
          description="Purpose-built for the LA Basin market — whether you're a community health practice in the Valley or a specialist in Santa Monica. Request a walkthrough today."
        />
      </main>
      <FooterInner />
    </>
  )
}
