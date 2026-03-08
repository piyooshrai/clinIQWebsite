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
  title: 'Clinic Software for Edinburgh | Scottish Private Practice',
  description: 'clinIQ helps Edinburgh private practices serve Scotland\'s affluent professional population, manage seasonal demand spikes, and capture healthcare tourism from the Highlands.',
}

const points: ContextPoint[] = [
  {
    title: 'Edinburgh\'s professional population supports a strong private-pay market',
    body: 'Edinburgh\'s economy — anchored in financial services, legal, technology, and government — creates a concentrated base of professionally employed patients with employer-sponsored PMI or willingness to self-fund. This segment expects scheduling flexibility, minimal waiting, and a clinical experience that doesn\'t feel like a public system. Practices that deliver on those expectations build strong retention.',
  },
  {
    title: 'Healthcare tourism from the Highlands and Islands',
    body: 'Edinburgh functions as the specialist care destination for patients travelling from the Scottish Highlands, Islands, and rural Scotland — particularly for procedures and consultations not available locally or subject to long NHS waits. These patients have often planned their visit carefully and expect reliable appointment management, clear pre-visit communication, and efficient use of their travel day.',
  },
  {
    title: 'Edinburgh Festival creates a predictable August demand spike',
    body: 'The Edinburgh Festival and Fringe bring hundreds of thousands of visitors and performers to the city every August — many of whom require urgent or acute care access during their stay. Practices with efficient same-day and urgent access scheduling capture this seasonal demand without disrupting their established patient panel.',
  },
  {
    title: 'Murrayfield and New Town clinic concentrations are competitive',
    body: 'Edinburgh\'s private practice market clusters around Murrayfield, the New Town, and Morningside. In these areas, practices compete directly for insurer contracts and self-pay referrals within walking distance of each other. Operational efficiency and patient experience quality are the differentiators when clinical credentials are comparable.',
  },
]

const features: FeatureKey[] = ['scheduling', 'analytics', 'patient-flow', 'check-in']

export default function EdinburghPage() {
  return (
    <>
      <NavInner />
      <main>
        <LocationHero
          badge="Edinburgh, UK"
          title="Edinburgh private practice. Scotland's capital. Premium standards."
          subtitle="Edinburgh's private clinic market serves an affluent professional population, healthcare tourists from across Scotland, and seasonal Festival visitors — all with high expectations."
        />
        <LocationContext
          heading="What Edinburgh's private clinic market demands"
          intro="Edinburgh is Scotland's private healthcare capital — and a market defined by patient sophistication. A professional patient base, significant healthcare tourism from rural Scotland, and predictable seasonal demand spikes from the Festival all require an operational platform built for flexibility and precision."
          points={points}
        />
        <LocationFeatures features={features} />
        <LocationCTA
          ctaLabel="See clinIQ for Edinburgh clinics"
          description="Purpose-built for Scotland's private practice market — from New Town specialist clinics to healthcare tourism from the Highlands. Request a walkthrough."
        />
      </main>
      <FooterInner />
    </>
  )
}
