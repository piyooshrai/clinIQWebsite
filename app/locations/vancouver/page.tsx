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
  title: 'Clinic Software for Vancouver | BC Private Practice',
  description: 'clinIQ helps Vancouver clinics manage BC Health Authority referral dynamics, a competitive integrative medicine market, and the healthcare needs of a growing immigrant population.',
}

const points: ContextPoint[] = [
  {
    title: 'Vancouver\'s cost of living makes operational efficiency a survival issue',
    body: 'Clinic overhead in Vancouver — commercial lease costs, labour costs, and staff retention expenses — is among the highest in Canada. In a market where margins are already compressed, operational inefficiency is existential. Practices that reduce administrative labour through automation, cut no-show rates with intelligent reminders, and maximise daily throughput protect their economics without cutting clinical corners.',
  },
  {
    title: 'BC Health Authority referral dynamics favour well-coordinated practices',
    body: 'Vancouver Coastal Health and Fraser Health\'s referral management processes create specific documentation and communication expectations for private practices receiving referrals from the public system. Practices that can demonstrate closed-loop referral documentation — with timely return communications to referring GPs — maintain their position in those referral pathways.',
  },
  {
    title: 'Integrative and naturopathic medicine market is well-established',
    body: 'Vancouver has one of the highest concentrations of naturopathic doctors, acupuncturists, and integrative medicine practitioners in North America. This market predominantly operates on self-pay or extended health benefits — which creates specific scheduling and billing workflow requirements distinct from MSP-billed primary care. clinIQ adapts to both without requiring separate platforms.',
  },
  {
    title: 'Richmond and Surrey suburban growth is driving clinic demand',
    body: 'Richmond and Surrey are among the fastest-growing municipalities in BC, with large and growing populations — particularly among immigrant communities from Mainland China, South Asia, and the Philippines. New practices in these markets serving recently arrived patients need multilingual intake and efficient new-patient onboarding workflows to establish care relationships quickly.',
  },
]

const features: FeatureKey[] = ['patient-flow', 'scheduling', 'analytics', 'check-in']

export default function VancouverPage() {
  return (
    <>
      <NavInner />
      <main>
        <LocationHero
          badge="Vancouver, BC"
          title="Vancouver clinics. BC's most competitive healthcare market."
          subtitle="Vancouver private practices manage high operating costs, a sophisticated integrative medicine market, and a growing immigrant patient population — all in Canada's most expensive clinic market."
        />
        <LocationContext
          heading="What Vancouver's clinic market demands"
          intro="Vancouver's combination of high overhead, sophisticated patients, and diverse referral pathways makes it BC's most operationally demanding private healthcare market. Practices that get efficiency right protect their margins. Those that don't get squeezed out of one of Canada's most competitive markets."
          points={points}
        />
        <LocationFeatures features={features} />
        <LocationCTA
          ctaLabel="See clinIQ for Vancouver clinics"
          description="Built for BC's high-overhead clinic market — from integrative medicine practices to specialist referral networks. Request a walkthrough today."
        />
      </main>
      <FooterInner />
    </>
  )
}
