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
  title: 'Clinic Software for Abu Dhabi | Malaffi & HAAD Compliant',
  description: 'clinIQ helps Abu Dhabi clinics meet Malaffi HIE integration requirements, DOH licensing standards, and the complexity of Thiqa and Daman insurance.',
}

const points: ContextPoint[] = [
  {
    title: 'Malaffi integration is a regulatory requirement, not an option',
    body: 'Abu Dhabi\'s Health Information Exchange — Malaffi — requires all licensed private healthcare facilities to share patient data through the platform. Meeting Malaffi\'s data standards means that every intake workflow, every clinical note, and every visit record needs to conform to structured data requirements. Practices that haven\'t built their operations around this create reconciliation work that compounds over time.',
  },
  {
    title: 'Thiqa and Daman insurance requires plan-specific claim workflows',
    body: 'The dominant insurers in Abu Dhabi — Thiqa (for UAE nationals) and Daman — carry distinct pre-authorization rules, referral requirements, and claim submission standards. Front-desk staff managing both plan types simultaneously need real-time eligibility and auth status surfaced at check-in, not retrieved after the patient has already been seen.',
  },
  {
    title: 'DOH licensing standards demand documented operational processes',
    body: 'Abu Dhabi\'s Department of Health facility licensing and inspection process evaluates operational management alongside clinical standards. Systematic patient consent workflows, data handling documentation, and incident tracking are part of the inspection scope. Practices with structured operational systems are better positioned for renewal and expansion.',
  },
  {
    title: 'Premium expat market on Al Maryah Island expects consumer-grade experience',
    body: 'Al Maryah Island, Saadiyat, and Al Reem Island house a high concentration of premium expat professionals who benchmark their healthcare experience against international standards. This segment — often on high-tier Daman or international insurance plans — expects efficient scheduling, minimal waiting, and frictionless intake.',
  },
]

const features: FeatureKey[] = ['patient-flow', 'check-in', 'analytics', 'scheduling']

export default function AbuDhabiPage() {
  return (
    <>
      <NavInner />
      <main>
        <LocationHero
          badge="Abu Dhabi, UAE"
          title="Abu Dhabi clinics. Malaffi compliance. Premium standards."
          subtitle="Abu Dhabi private clinics navigate Malaffi HIE requirements, DOH licensing, and a payer mix led by Thiqa and Daman — all while serving patients with high expectations."
        />
        <LocationContext
          heading="What Abu Dhabi's clinic market demands"
          intro="Abu Dhabi's private healthcare market operates under some of the most structured regulatory requirements in the GCC. Malaffi data integration, DOH licensing standards, and the complexity of the Thiqa/Daman payer environment mean that operational excellence is not a differentiator — it's a baseline requirement."
          points={points}
        />
        <LocationFeatures features={features} />
        <LocationCTA
          ctaLabel="See clinIQ for Abu Dhabi clinics"
          description="Configured for Abu Dhabi's Malaffi requirements and DOH standards. Request a walkthrough for your facility."
        />
      </main>
      <FooterInner />
    </>
  )
}
