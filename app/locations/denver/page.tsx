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
  title: 'Clinic Software for Denver | Colorado Healthcare Operations',
  description: 'clinIQ helps Denver and Front Range clinics manage high orthopedic and sports medicine volume, Colorado exchange payers, and rapid population growth.',
}

const points: ContextPoint[] = [
  {
    title: 'Active population means high orthopedic and sports medicine volume',
    body: 'Colorado\'s outdoor culture — skiing, cycling, trail running, climbing — generates one of the highest per-capita rates of orthopedic and sports medicine encounters in the US. Practices in Denver, Boulder, and along the Front Range that specialize in musculoskeletal care deal with complex prior auth workflows for imaging, PT, and surgery referrals.',
  },
  {
    title: 'Connect for Health Colorado adds payer complexity',
    body: 'Colorado\'s state insurance exchange brings a distinct mix of silver and bronze plans with high deductibles and complex cost-sharing. Patients on exchange plans often arrive uncertain about their benefits. Real-time eligibility verification at check-in prevents downstream billing surprises for both practice and patient.',
  },
  {
    title: 'Front Range growth is straining clinic capacity',
    body: 'Metro Denver, Fort Collins, and Colorado Springs are among the fastest-growing regions in the US. New residents arrive expecting to establish care quickly — and existing clinics frequently can\'t absorb the demand. Smart scheduling that fills cancellations automatically and optimizes panel capacity is no longer optional.',
  },
  {
    title: 'Behavioral health access is a Front Range crisis',
    body: 'Colorado consistently ranks among the states with the highest rates of mental health need and lowest rates of access. Primary care and specialist practices are absorbing behavioral health patients by necessity. Efficient intake screening and warm handoff workflows reduce the burden on clinical staff who weren\'t trained for this volume.',
  },
]

const features: FeatureKey[] = ['scheduling', 'patient-flow', 'analytics', 'pre-auth']

export default function DenverPage() {
  return (
    <>
      <NavInner />
      <main>
        <LocationHero
          badge="Denver, CO"
          title="Denver clinics. Active population. High care demands."
          subtitle="Front Range practices serve one of the most health-conscious patient populations in the US — and are growing faster than clinic capacity can keep up."
        />
        <LocationContext
          heading="What defines the Denver clinic market"
          intro="Denver and the Front Range corridor are growing rapidly, with a patient population that places high demands on musculoskeletal, behavioral, and primary care services. The operational challenge is meeting that demand without burning out your staff or your budget."
          points={points}
        />
        <LocationFeatures features={features} />
        <LocationCTA
          ctaLabel="See clinIQ for Denver clinics"
          description="Built for high-growth Colorado practices managing complex payer mixes and high-volume musculoskeletal care. Get a demo today."
        />
      </main>
      <FooterInner />
    </>
  )
}
