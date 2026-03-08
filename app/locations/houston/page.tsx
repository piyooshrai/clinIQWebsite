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
  title: 'Clinic Software for Houston | Texas Medical Center Area',
  description: 'clinIQ helps Houston clinics handle sophisticated patients from the Texas Medical Center, large uninsured populations, and rapid suburban growth.',
}

const points: ContextPoint[] = [
  {
    title: 'TMC proximity raises patient expectations for everyone',
    body: 'The Texas Medical Center — the largest in the world — sets a baseline that Houston patients apply to every clinic visit. Patients who\'ve been through MD Anderson or Houston Methodist expect operational precision, clear communication, and minimal friction. That expectation doesn\'t stay inside the medical center\'s gates.',
  },
  {
    title: 'A large uninsured population demands efficient charity workflows',
    body: 'Harris County has one of the highest rates of uninsured residents among major US metros. Practices serving these patients need efficient charity care screening, sliding-scale workflows, and HCPC/HRSA documentation if applicable — all without slowing the clinical operation for commercially insured patients.',
  },
  {
    title: 'Oil and gas drives a premium self-pay segment',
    body: 'Executive and professional workforce in the energy sector represents a meaningful concierge and premium self-pay market in Houston. These patients pay out of pocket for convenience, speed, and quality — and they notice when operations are slow or disorganized.',
  },
  {
    title: 'Suburban growth is outpacing existing clinic infrastructure',
    body: 'The Woodlands, Sugar Land, Katy, and Pearland are among the fastest-growing suburbs in the US. New clinic locations in these markets need to come online quickly and operate efficiently from day one. clinIQ deploys fast, with no long implementation cycles.',
  },
]

const features: FeatureKey[] = ['patient-flow', 'pre-auth', 'analytics', 'check-in']

export default function HoustonPage() {
  return (
    <>
      <NavInner />
      <main>
        <LocationHero
          badge="Houston, TX"
          title="Houston clinics. Texas Medical Center in your backyard."
          subtitle="Houston practices compete in the shadow of the world's largest medical complex — and serve one of the most economically diverse patient populations in the US."
        />
        <LocationContext
          heading="What defines Houston's clinic market"
          intro="Houston's healthcare market is defined by extremes: world-leading academic medicine setting the bar on one end, a massive uninsured and underinsured population on the other, and rapid suburban growth stretching both ends of the market simultaneously."
          points={points}
        />
        <LocationFeatures features={features} />
        <LocationCTA
          ctaLabel="See clinIQ for Houston clinics"
          description="Designed for Houston's unique mix of high-acuity patients, payer complexity, and suburban growth. Request a walkthrough for your specialty."
        />
      </main>
      <FooterInner />
    </>
  )
}
