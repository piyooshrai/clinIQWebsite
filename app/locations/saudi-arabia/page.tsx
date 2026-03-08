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
  title: 'clinIQ for Saudi Arabia Clinics — Healthcare Digitalization KSA',
  description:
    'Vision 2030 sets a 70% patient activity digitalization target. clinIQ helps Saudi clinics get there — Riayati-aligned, real-time, and built for scale.',
  keywords: [
    'clinic management system Saudi Arabia',
    'Riayati compliant software',
    'healthcare digitalization KSA',
  ],
}

const points: ContextPoint[] = [
  {
    title: 'Vision 2030 healthcare transformation',
    body: "Saudi Vision 2030's healthcare pillar sets a 70% digitalization target for patient activity. Clinics that haven't built the operational infrastructure to meet that mandate are already behind. The window to do it cleanly is now.",
  },
  {
    title: 'Riayati compliance',
    body: 'The national health information exchange requires private facilities to meet data and integration standards. Your operational platform needs to align with how the Kingdom is building its health data infrastructure.',
  },
  {
    title: 'Medical tourism growth',
    body: 'Saudi Arabia is investing heavily in positioning the Kingdom as a regional healthcare destination. Clinics that can demonstrate international-standard operations will capture referrals as that market develops.',
  },
  {
    title: 'Quality expectations rising',
    body: 'Saudi patients — both domestic and returning from abroad — increasingly expect modern, efficient care experiences. Long waits, paper-based check-in, and poor communication are no longer acceptable in the private sector.',
  },
]

const features: FeatureKey[] = ['patient-flow', 'check-in', 'analytics']

export default function SaudiArabiaPage() {
  return (
    <>
      <NavInner />
      <main>
        <LocationHero
          badge="Saudi Arabia"
          title="Vision 2030 starts in your waiting room"
          subtitle="70% patient activity digitalization target. We help you get there."
        />
        <LocationContext
          heading="The Saudi healthcare landscape"
          intro="Vision 2030 has set one of the most ambitious healthcare transformation targets in the world. Private clinics that build digital infrastructure now will define what Saudi healthcare looks like for the next decade."
          points={points}
        />
        <LocationFeatures features={features} />
        <LocationCTA
          ctaLabel="See clinIQ for Saudi clinics"
          description="15-minute walkthrough. We'll show you patient flow and check-in configured for KSA clinic operations."
        />
      </main>
      <FooterInner />
    </>
  )
}
