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
  title: 'Clinic Software for Bahrain | NHRA Compliant Clinic Management',
  description:
    'NHRA compliance, medical tourism positioning, GCC cross-border referrals, and private insurance complexity. Clinic operations built for the pace of Bahrain\'s healthcare growth.',
  keywords: [
    'clinic management software Bahrain',
    'NHRA compliant clinic software',
    'private healthcare Manama',
  ],
}

const points: ContextPoint[] = [
  {
    title: 'NHRA compliance requirements',
    body: "Bahrain's National Health Regulatory Authority sets licensing, inspection, and operational standards that private clinics must meet and maintain. The NHRA's quality framework extends into record-keeping, patient rights documentation, and facility reporting. Clinics running on manual or legacy systems face disproportionate compliance exposure when standards tighten.",
  },
  {
    title: 'Medical tourism positioning',
    body: "Bahrain is actively positioning itself as a regional medical tourism destination, particularly for GCC patients seeking specialist care outside Saudi Arabia or Kuwait. International patients carry higher expectations for operational polish — clear communication, minimal waiting, and digital convenience. Operational gaps undermine the destination brand.",
  },
  {
    title: 'GCC cross-border referrals',
    body: "Bahrain's proximity to the Eastern Province of Saudi Arabia and its well-established relationship with Kuwaiti and Qatari patients creates a referral economy that private clinics can actively cultivate. Managing incoming referrals, coordinating with referring providers, and following up across borders requires structured workflows that ad hoc systems can't support.",
  },
  {
    title: 'Private insurance landscape',
    body: "Bahrain's mandatory health insurance framework covers a significant portion of the private sector workforce. Managing claims across multiple insurers — each with different fee schedules, approval processes, and rejection patterns — creates administrative load that compounds as a clinic scales. Structured workflows reduce that burden materially.",
  },
  {
    title: 'Pace of sector growth',
    body: "Bahrain Health Week and ongoing government investment signal a healthcare sector in active expansion. New private facilities are entering the market, and patient expectations are rising in step. Clinics that build strong operational foundations now are better placed to absorb growth without quality degrading under volume.",
  },
]

const features: FeatureKey[] = ['patient-flow', 'check-in', 'analytics', 'scheduling']

export default function BahrainPage() {
  return (
    <>
      <NavInner />
      <main>
        <LocationHero
          badge="Bahrain"
          title="Bahrain's healthcare is growing. Operate at the pace."
          subtitle="NHRA compliance, medical tourism expectations, and GCC cross-border referrals. Your operations need to scale as fast as the market."
        />
        <LocationContext
          heading="The Bahrain private clinic landscape"
          intro="Bahrain has built a healthcare ecosystem that punches above its size. NHRA standards, a genuine medical tourism pipeline, and a cross-border patient base from across the Gulf create both opportunity and operational demand. The clinics rising in this market are the ones that run cleanly — from first contact to last claim."
          points={points}
        />
        <LocationFeatures features={features} />
        <LocationCTA
          ctaLabel="See clinIQ for Bahrain clinics"
          description="15-minute walkthrough. We'll show you patient flow, check-in, and analytics configured for Bahrain's private clinic environment."
        />
      </main>
      <FooterInner />
    </>
  )
}
