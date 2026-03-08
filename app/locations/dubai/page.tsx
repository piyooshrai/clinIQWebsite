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
  title: 'Clinic Software for Dubai | NABIDH Compliant Operations',
  description: 'clinIQ helps Dubai private clinics meet NABIDH data compliance, DHA licensing standards, and the premium experience expectations of medical tourism patients.',
}

const points: ContextPoint[] = [
  {
    title: 'NABIDH compliance is mandatory — and operationally consequential',
    body: 'Dubai Health Authority requires all private healthcare facilities to connect to NABIDH, the Dubai unified health record platform. Compliance is not optional, and the data accuracy standards it demands flow through into every intake and clinical documentation workflow. Practices that treat NABIDH as an afterthought face audit exposure and licensing risk.',
  },
  {
    title: 'DHA licensing demands operational documentation',
    body: 'Dubai Health Authority facility and practitioner licensing requirements include operational standards that go beyond clinical credentialing. Practices undergoing DHA inspection need to demonstrate systematic patient flow management, consent documentation, and data handling processes — not just clinical protocols.',
  },
  {
    title: 'Medical tourism patients have zero tolerance for friction',
    body: 'Dubai Healthcare City, Jumeirah, and DIFC clinic corridors attract patients from across the GCC, South Asia, and beyond who have chosen Dubai specifically for quality of care. International self-pay patients arriving for elective or specialist procedures judge the entire clinical experience — and every friction point in intake or scheduling reflects on the brand.',
  },
  {
    title: 'JCI accreditation demands systematic operational standards',
    body: 'Joint Commission International accreditation — pursued by premium Dubai facilities — requires evidence of systematic patient safety and operational management processes. Practices building toward JCI accreditation need clinic management infrastructure that generates the documentation and audit trails that accreditation assessors expect.',
  },
]

const features: FeatureKey[] = ['patient-flow', 'check-in', 'analytics', 'scheduling']

export default function DubaiPage() {
  return (
    <>
      <NavInner />
      <main>
        <LocationHero
          badge="Dubai, UAE"
          title="Dubai clinics. World-class city. World-class operations."
          subtitle="Dubai private clinics operate under DHA licensing, NABIDH compliance requirements, and the premium expectations of medical tourism patients. Operations have to match."
        />
        <LocationContext
          heading="What Dubai's clinic market demands"
          intro="Dubai is the UAE's most competitive private healthcare market — and one of the most compliance-intensive. NABIDH data standards, DHA licensing requirements, and the expectations of international patients create an operational environment where generic practice management tools fall short."
          points={points}
        />
        <LocationFeatures features={features} />
        <LocationCTA
          ctaLabel="See clinIQ for Dubai clinics"
          description="Built for Dubai's compliance requirements and premium patient expectations. Request a walkthrough configured for DHA-licensed facilities."
        />
      </main>
      <FooterInner />
    </>
  )
}
