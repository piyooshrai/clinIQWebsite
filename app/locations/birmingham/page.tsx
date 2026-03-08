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
  title: 'Clinic Software for Birmingham | Midlands Private Practice',
  description: 'clinIQ helps Birmingham private clinics serve the Midlands\' diverse population, capture NHS-to-private demand, and manage multi-insurer workflows efficiently.',
}

const points: ContextPoint[] = [
  {
    title: 'Multicultural patient population requires adaptable intake workflows',
    body: 'Birmingham is one of the most ethnically and linguistically diverse cities in the UK, with significant South Asian, Caribbean, and Eastern European communities. Private practices serving these populations need intake workflows that accommodate language preferences and cultural considerations — while maintaining the same operational efficiency across every patient type.',
  },
  {
    title: 'NHS Midlands wait pressures are creating private conversion opportunity',
    body: 'NHS waiting lists across the Midlands — for orthopaedic, dermatological, ophthalmic, and diagnostic services — are driving meaningful private sector conversion. Patients choosing to self-fund or use employer-sponsored PMI are coming from a healthcare experience defined by waits and friction. The private clinic that gets intake, scheduling, and communication right captures their loyalty.',
  },
  {
    title: 'Edgbaston clinic cluster anchors the Birmingham private market',
    body: 'Edgbaston is the heart of Birmingham\'s private healthcare market, with a concentration of specialist practices, diagnostic facilities, and private hospitals. Practices in this cluster compete directly for insurer contracts and self-pay patients — and operational efficiency is a meaningful differentiator when clinical specialties and referral networks overlap.',
  },
  {
    title: 'Cosmetic and aesthetic demand is growing across the Midlands',
    body: 'Birmingham and the West Midlands support a growing cosmetic surgery, dermatology, and aesthetic medicine market. This predominantly self-pay segment is price-sensitive and experience-driven. Practices competing here need scheduling that accommodates consultation-to-procedure pathways efficiently, and intake workflows that support self-pay costing and consent.',
  },
]

const features: FeatureKey[] = ['patient-flow', 'scheduling', 'check-in', 'pre-auth']

export default function BirminghamPage() {
  return (
    <>
      <NavInner />
      <main>
        <LocationHero
          badge="Birmingham, UK"
          title="Birmingham private clinics. Midlands' largest healthcare market."
          subtitle="Birmingham's private sector is capturing NHS-to-private conversion across the Midlands, serving a diverse population and a growing cosmetic and aesthetic market."
        />
        <LocationContext
          heading="What Birmingham's private clinic market demands"
          intro="Birmingham is the UK's second-largest city and the Midlands' dominant private healthcare hub. A diverse patient population, strong NHS conversion opportunity, and a growing self-pay aesthetic market create a multi-segment clinical environment that rewards operational precision."
          points={points}
        />
        <LocationFeatures features={features} />
        <LocationCTA
          ctaLabel="See clinIQ for Birmingham clinics"
          description="Built for Birmingham's diverse patient mix, NHS conversion market, and Edgbaston private practice cluster. Request a walkthrough for your specialty."
        />
      </main>
      <FooterInner />
    </>
  )
}
