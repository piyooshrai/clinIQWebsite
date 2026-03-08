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
  title: 'Clinic Software for Australia | Medicare & Private Health',
  description:
    'Bulk billing vs private health insurance, My Health Record integration, GP referral pathways, and telehealth workflows. Clinic operations built for Australia\'s dual-payer system.',
  keywords: [
    'clinic management software Australia',
    'Medicare bulk billing software',
    'private health insurance clinic workflow',
  ],
}

const points: ContextPoint[] = [
  {
    title: 'Bulk billing vs private gap',
    body: "Australian clinics constantly navigate the decision between bulk billing and charging a gap fee — and patient communication around that distinction is operationally loaded. Patients need to know what they're paying before they arrive, not at the reception desk. Clear pre-appointment communication prevents friction and front-desk conflict.",
  },
  {
    title: 'Private health insurer complexity',
    body: "Bupa, Medibank, HCF, NIB, and dozens of smaller funds each carry different ancillary extras schedules. Allied health clinics in particular face constant variation in what's covered, to what limit, and on what terms. Your patient management layer needs to surface this before treatment, not after.",
  },
  {
    title: 'My Health Record integration',
    body: 'The Australian Digital Health Agency has made My Health Record the national shared health record infrastructure. Private clinics that operate in isolation from this system create continuity gaps — and miss the opportunity to position as a digitally integrated provider in the eyes of referring GPs.',
  },
  {
    title: 'GP referral pathway management',
    body: "In Australia's gated specialist model, the GP referral is the entry point to specialist care. Managing incoming referrals, tracking their validity, and following up on expiry — especially for ongoing patients — is an operational function that too many clinics handle ad hoc. It leaks appointments and frustrates referring GPs.",
  },
  {
    title: 'Telehealth is now standard',
    body: "COVID normalised telehealth for Australian patients and Medicare adapted to fund it. Patients now expect clinics to offer both in-person and virtual appointments without confusion about booking, consent, or billing. A disjointed telehealth bolt-on creates as many problems as it solves.",
  },
]

const features: FeatureKey[] = ['patient-flow', 'check-in', 'scheduling', 'analytics']

export default function AustraliaPage() {
  return (
    <>
      <NavInner />
      <main>
        <LocationHero
          badge="Australia"
          title="Australia's dual-payer system. One workflow layer."
          subtitle="Medicare bulk billing, private health funds, GP referral pathways, and telehealth — all running through the same clinic. Operations matter."
        />
        <LocationContext
          heading="The Australian private clinic landscape"
          intro="Australian clinics operate in one of the world's most complex payer environments. Medicare sets the floor, private health funds layer on top, and patients increasingly expect seamless digital experiences across both. The clinics getting this right operationally are pulling ahead — in referrals, in retention, and in revenue."
          points={points}
        />
        <LocationFeatures features={features} />
        <LocationCTA
          ctaLabel="See clinIQ for Australian clinics"
          description="15-minute walkthrough. We'll show you patient flow, check-in, and scheduling built for the dual-payer Australian market."
        />
      </main>
      <FooterInner />
    </>
  )
}
