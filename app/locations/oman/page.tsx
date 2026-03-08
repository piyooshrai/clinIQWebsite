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
  title: 'Clinic Software for Oman | MOH Oman & Muscat Healthcare',
  description:
    "Oman Vision 2040 healthcare targets, MOH Oman private clinic licensing, OCCI data exchange requirements, and Muscat's growing private sector. Operations built for Oman's transformation.",
  keywords: [
    'clinic management software Oman',
    'MOH Oman private clinic software',
    'healthcare software Muscat',
    'Oman Vision 2040 clinic operations',
  ],
}

const points: ContextPoint[] = [
  {
    title: 'Oman Vision 2040 mandates',
    body: "Oman's Vision 2040 sets explicit targets for healthcare quality, access, and digital transformation. The Ministry of Health is actively encouraging private sector participation in achieving those targets. Private clinics that align operationally with national health priorities are better positioned for licensing, expansion, and long-term partnership opportunities.",
  },
  {
    title: 'MOH licensing and compliance',
    body: "The Ministry of Health Oman operates rigorous licensing and inspection requirements for private clinics. Documentation, record-keeping, and reporting obligations are substantive and increasing. Clinics running on fragmented or paper-based systems create unnecessary risk at inspection — and slow their own growth by absorbing staff time in compliance preparation.",
  },
  {
    title: 'OCCI data exchange readiness',
    body: "Oman's health data exchange infrastructure is developing, and private facilities that invest in structured, interoperable data management now will avoid costly retrofits when integration becomes mandatory. Early movers in health data readiness gain a credibility advantage with MOH and with referring public sector facilities.",
  },
  {
    title: 'Muscat private sector growth',
    body: "Muscat's private clinic density is growing as Oman's middle class expands and patient expectations rise. Patients in Muscat Al Khuwair, Bausher, and Madinat Sultan Qaboos are increasingly choosing private providers based on experience quality — not just clinical reputation. Operational polish is now part of the competitive landscape.",
  },
  {
    title: 'Arabic-primary patient workflows',
    body: "Oman's patient base is predominantly Arabic-speaking, and patient-facing touchpoints — appointment reminders, intake forms, queue updates — that default to English create immediate friction. Arabic-primary workflow design is not a localisation add-on; it is the correct default for the Omani market.",
  },
]

const features: FeatureKey[] = ['patient-flow', 'check-in', 'scheduling', 'analytics']

export default function OmanPage() {
  return (
    <>
      <NavInner />
      <main>
        <LocationHero
          badge="Oman"
          title="Oman's healthcare transformation. Operational readiness required."
          subtitle="Vision 2040 targets, MOH licensing standards, and a Muscat private sector that's accelerating. Your clinic operations need to move with it."
        />
        <LocationContext
          heading="The Oman private clinic landscape"
          intro="Oman is investing deliberately in healthcare transformation — in infrastructure, in regulation, and in the private sector's role within the national system. Clinics that treat operational readiness as a strategic asset are the ones that will lead this market as it matures. Low technology adoption across the sector means early movers hold a genuine competitive advantage."
          points={points}
        />
        <LocationFeatures features={features} />
        <LocationCTA
          ctaLabel="See clinIQ for Oman clinics"
          description="15-minute walkthrough. We'll show you patient flow, check-in, and scheduling built for Muscat's growing private clinic market."
        />
      </main>
      <FooterInner />
    </>
  )
}
