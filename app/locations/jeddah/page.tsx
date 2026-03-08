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
  title: 'Clinic Software for Jeddah | Saudi Western Region Healthcare',
  description: 'clinIQ helps Jeddah clinics manage pilgrimage season demand, medical tourism from East Africa, and the growing cosmetic and aesthetic market in the western region.',
}

const points: ContextPoint[] = [
  {
    title: 'Pilgrimage season creates extreme demand spikes',
    body: 'Jeddah serves as the gateway to Mecca and Madinah for millions of Hajj and Umrah pilgrims annually. The healthcare burden during pilgrimage seasons — particularly Hajj — generates acute surges in primary care, emergency, and infectious disease encounters across the western region. Practices near King Abdulaziz International Airport and the Haramain corridor need scheduling and intake systems that can absorb sudden volume increases without administrative breakdown.',
  },
  {
    title: 'Medical tourism from East Africa and Muslim-majority markets',
    body: 'Jeddah attracts patients from Somalia, Ethiopia, Sudan, and other East African markets, as well as from Indonesia, Malaysia, and Central Asia, seeking specialist care at Saudi standards. These international self-pay patients often arrive with complex conditions and high expectations — and without the insurer relationships that domestic patients bring. Clear, efficient self-pay intake and cost communication are essential.',
  },
  {
    title: 'Cosmetic and aesthetic market is growing fast',
    body: 'Jeddah\'s affluent professional population — particularly in Al Hamra, Obhur, and the Corniche residential districts — supports strong demand for cosmetic, dermatological, and aesthetic procedures. This self-pay and premium insurance market is highly competitive: patient experience and scheduling convenience are primary differentiators.',
  },
  {
    title: 'CCHI payer complexity spans a diverse workforce',
    body: 'Jeddah\'s economy encompasses port operations, petrochemicals, and a large commercial sector — each employer category bringing different insurer relationships and plan types. Front-desk staff managing CCHI-mandated insurance alongside self-pay international patients need real-time eligibility and benefit verification without adding to the administrative burden.',
  },
]

const features: FeatureKey[] = ['patient-flow', 'check-in', 'scheduling', 'analytics']

export default function JeddahPage() {
  return (
    <>
      <NavInner />
      <main>
        <LocationHero
          badge="Jeddah, Saudi Arabia"
          title="Jeddah clinics. Port city. Regional healthcare hub."
          subtitle="Jeddah serves pilgrims, international medical tourists, and a rapidly growing affluent population — each segment with distinct operational demands."
        />
        <LocationContext
          heading="What makes Jeddah's clinic market unique"
          intro="No other Saudi city combines Jeddah's mix of pilgrimage demand spikes, international patient arrivals, and a strong domestic private-pay market. The practices that thrive here are built to handle all three without operational strain — and without separate systems for each patient type."
          points={points}
        />
        <LocationFeatures features={features} />
        <LocationCTA
          ctaLabel="See clinIQ for Jeddah clinics"
          description="Built for Jeddah's pilgrimage season surges, international patient mix, and cosmetic medicine market. Request a walkthrough for your specialty."
        />
      </main>
      <FooterInner />
    </>
  )
}
