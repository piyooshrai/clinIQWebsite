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
  title: 'clinIQ for UAE Clinics — Clinic Management System Dubai',
  description:
    'NABIDH compliant, built for medical tourism expectations, and designed for the expat and local patient mix. Premium patient experience for a premium market.',
  keywords: [
    'clinic management system Dubai',
    'NABIDH compliant software',
    'patient flow software UAE',
  ],
}

const points: ContextPoint[] = [
  {
    title: 'Vision 2030 alignment',
    body: "Digital transformation mandates are reshaping UAE healthcare. Clinics that can't demonstrate operational efficiency and data readiness will fall behind — not just on patient experience, but on regulatory standing.",
  },
  {
    title: 'Medical tourism expectations',
    body: 'International patients arriving in Dubai or Abu Dhabi expect world-class operational flow. The waiting room experience is part of the product. Inefficiency is visible — and it costs you referrals.',
  },
  {
    title: 'NABIDH / Malaffi compliance',
    body: 'Abu Dhabi Malaffi and Dubai NABIDH set data standards and integration requirements for private facilities. Your operational platform needs to align with the national health information exchange framework.',
  },
  {
    title: 'Expat and local patient mix',
    body: 'UAE clinics serve a uniquely diverse population — locals, Gulf nationals, expats from dozens of countries. Operational systems need to handle variation in expectations, language preferences, and care patterns.',
  },
  {
    title: 'Rapid private sector growth',
    body: "New clinics and day surgical centres are opening across the Emirates. Getting your operational infrastructure right at launch is easier than retrofitting it after you're at capacity.",
  },
]

const features: FeatureKey[] = ['patient-flow', 'check-in', 'analytics', 'scheduling']

export default function UAEPage() {
  return (
    <>
      <NavInner />
      <main>
        <LocationHero
          badge="United Arab Emirates"
          title="Premium patient experience for a premium market"
          subtitle="Medical tourism expectations, NABIDH compliance, expat and local mix. Operational excellence required."
        />
        <LocationContext
          heading="The UAE private clinic landscape"
          intro="The UAE has positioned itself as a regional healthcare destination. Clinics that operate at international standards win referrals. Those that don't are invisible in an increasingly competitive market."
          points={points}
        />
        <LocationFeatures features={features} />
        <LocationCTA
          ctaLabel="See clinIQ for UAE clinics"
          description="15-minute walkthrough. We'll show you patient flow and check-in configured for international patient volumes."
        />
      </main>
      <FooterInner />
    </>
  )
}
