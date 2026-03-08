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
  title: 'Clinic Software for Manchester | Northern Private Practice',
  description: 'clinIQ helps Manchester private clinics capture NHS-to-private conversion, manage multi-insurer workflows, and serve Northern England\'s expanding healthcare market.',
}

const points: ContextPoint[] = [
  {
    title: 'NHS wait pressures are converting patients to private care',
    body: 'NHS wait times in Greater Manchester — particularly for orthopaedic, dermatological, and diagnostic services — have created significant private market conversion opportunity. Patients who have waited months on an NHS list and decide to self-fund or use PMI are often seeking reassurance that private care will be different. A friction-free intake and scheduling experience is the first evidence that it is.',
  },
  {
    title: 'Manchester serves Lancashire, Yorkshire, and Cheshire',
    body: 'Private clinics in central Manchester function as the regional hub for patients travelling from across the North West and Yorkshire. These patients are commuting specifically for specialist access — which means scheduling reliability and appointment punctuality matter more than in urban markets where patients have multiple nearby alternatives.',
  },
  {
    title: 'Sports medicine demand runs deep in the Manchester market',
    body: 'Manchester City and Manchester United\'s global profiles support a broader ecosystem of grassroots and amateur sport across Greater Manchester. The resulting demand for sports medicine, physiotherapy, and orthopaedic consultations — predominantly from commercially insured and self-pay patients — represents a premium private market segment with high expectations for service quality.',
  },
  {
    title: 'Salford and Stockport private clinic clusters are growing',
    body: 'Private clinic development in Salford Quays and Stockport is providing alternatives to Manchester city centre for patients in those catchment areas. New facilities entering these markets need to establish efficient operations from day one to compete with established practices in the Manchester core.',
  },
]

const features: FeatureKey[] = ['scheduling', 'patient-flow', 'check-in', 'analytics']

export default function ManchesterPage() {
  return (
    <>
      <NavInner />
      <main>
        <LocationHero
          badge="Manchester, UK"
          title="Manchester private clinics. Northern England's healthcare hub."
          subtitle="Greater Manchester's growing private market is capturing NHS-to-private conversion across the North West — with patients travelling from Lancashire, Yorkshire, and Cheshire for specialist access."
        />
        <LocationContext
          heading="What Manchester's private clinic market demands"
          intro="Manchester is the private healthcare hub for Northern England. NHS wait pressures, strong commercial insurance penetration, and a sports-active population are all driving private clinic growth — and the practices that operate most efficiently are winning the largest share of a rapidly expanding market."
          points={points}
        />
        <LocationFeatures features={features} />
        <LocationCTA
          ctaLabel="See clinIQ for Manchester clinics"
          description="Purpose-built for Northern England's private market — from NHS conversion to sports medicine. Request a walkthrough for your specialty."
        />
      </main>
      <FooterInner />
    </>
  )
}
