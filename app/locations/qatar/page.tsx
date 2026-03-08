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
  title: 'Clinic Software for Qatar | PHCC & Private Sector Healthcare',
  description:
    "Qatar's National Health Strategy, PHCC primary care network, Sidra Medicine standards, and a growing expat population. Private clinic operations built for Qatar's ambitions.",
  keywords: [
    'clinic management software Qatar',
    'PHCC private clinic Qatar',
    'healthcare software Doha',
  ],
}

const points: ContextPoint[] = [
  {
    title: 'National Health Strategy 2030',
    body: "Qatar's National Health Strategy 2022–2030 places measurable improvement in healthcare quality, access, and efficiency at the centre of national planning. Private clinics are expected to contribute to — not undermine — those outcomes. Demonstrating operational maturity is increasingly part of the licensing and renewal conversation.",
  },
  {
    title: 'Sidra and PHCC benchmark',
    body: "Sidra Medicine and the PHCC network have raised the operational baseline for what patients expect from any provider in Qatar. Private clinics competing for the same patients — especially in Doha's West Bay and Al Waab corridors — are implicitly measured against these institutions. Operational gaps are immediately visible.",
  },
  {
    title: 'Expat population healthcare demands',
    body: "Over 85% of Qatar's population is expatriate. These patients arrive with prior healthcare experiences from South Asia, the Arab world, Europe, and beyond — and they make decisions based on speed, clarity, and trust. Clinics that deliver a seamless experience from booking to discharge retain this highly mobile population.",
  },
  {
    title: 'Medical Commission licensing',
    body: "The Supreme Council of Health and Qatar's Medical Commission set specific requirements for private facility operations. Documentation, reporting, and data handling are all in scope. Clinics running manual or fragmented systems face unnecessary risk at renewal — and during inspections.",
  },
  {
    title: 'Arabic and English workflows',
    body: "Qatar's patient population spans Arabic-speaking Qataris and Arabic-speaking expats alongside English-speaking professionals and South Asian communities. Patient-facing communications, intake forms, and appointment confirmations need to work correctly in both Arabic and English — not as a nicety, but as an operational requirement.",
  },
]

const features: FeatureKey[] = ['patient-flow', 'check-in', 'analytics', 'scheduling']

export default function QatarPage() {
  return (
    <>
      <NavInner />
      <main>
        <LocationHero
          badge="Qatar"
          title="Qatar's private healthcare ambitions need private-grade operations."
          subtitle="National Health Strategy targets, Sidra-level patient expectations, and an expat-majority population. Your operations need to match your ambition."
        />
        <LocationContext
          heading="The Qatar private clinic landscape"
          intro="Qatar is investing significantly in becoming a regional healthcare hub. The standards being set by Sidra Medicine, PHCC, and the National Health Strategy create an expectation floor that every private clinic is now measured against. Clinics that run with operational precision attract the patients — and the referrals — that matter."
          points={points}
        />
        <LocationFeatures features={features} />
        <LocationCTA
          ctaLabel="See clinIQ for Qatar clinics"
          description="15-minute walkthrough. We'll show you patient flow, check-in, and analytics configured for Doha's private clinic environment."
        />
      </main>
      <FooterInner />
    </>
  )
}
