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
  title: 'Clinic Software for Miami | South Florida Healthcare Operations',
  description: 'clinIQ helps Miami clinics manage international patients, high Medicare Advantage complexity, and bilingual Spanish/Portuguese workflows.',
}

const points: ContextPoint[] = [
  {
    title: 'International patients expect a premium, frictionless experience',
    body: 'Miami is a primary destination for medical tourism from Brazil, Venezuela, Colombia, Argentina, and beyond. International self-pay patients travel with high expectations and zero tolerance for administrative disorganization. First impressions at intake set the tone for the entire clinical relationship.',
  },
  {
    title: 'Medicare Advantage penetration is among the highest in the US',
    body: 'South Florida\'s large retiree population drives exceptionally high Medicare Advantage enrollment. MA plans from Humana, United, Aetna, and Devoted Health each carry distinct prior auth rules, referral requirements, and formularies. clinIQ tracks plan-specific requirements so your front desk stays current without manual research.',
  },
  {
    title: 'Spanish and Portuguese bilingual workflows are non-negotiable',
    body: 'From Little Havana to Brickell to Doral, a significant share of Miami\'s patient population communicates primarily in Spanish or Portuguese. Intake workflows, consent forms, and reminder communications that default to English create friction and increase no-show rates. clinIQ supports bilingual patient-facing workflows natively.',
  },
  {
    title: 'Concierge market concentration in Brickell and Coral Gables',
    body: 'Miami\'s professional and high-net-worth residential concentration supports a thriving concierge and direct primary care market, particularly in Brickell, Coral Gables, and Key Biscayne. These practices compete on experience — and every friction point in the patient journey is a competitive liability.',
  },
]

const features: FeatureKey[] = ['check-in', 'patient-flow', 'scheduling', 'analytics']

export default function MiamiPage() {
  return (
    <>
      <NavInner />
      <main>
        <LocationHero
          badge="Miami, FL"
          title="Miami clinics. International patients. Diverse demand."
          subtitle="South Florida practices serve international medical tourists, one of the nation's highest Medicare Advantage populations, and a bilingual community with high expectations."
        />
        <LocationContext
          heading="What makes Miami's clinic market unique"
          intro="No other US city combines Miami's mix of international self-pay patients, Medicare Advantage complexity, and bilingual care requirements. The practices that thrive here are the ones that handle all three without operational strain."
          points={points}
        />
        <LocationFeatures features={features} />
        <LocationCTA
          ctaLabel="See clinIQ for Miami clinics"
          description="Purpose-built for South Florida's international patient mix, Medicare Advantage complexity, and bilingual intake requirements. Request a walkthrough."
        />
      </main>
      <FooterInner />
    </>
  )
}
