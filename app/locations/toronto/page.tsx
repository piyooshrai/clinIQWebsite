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
  title: 'Clinic Software for Toronto | Ontario Private Practice',
  description: 'clinIQ helps Toronto clinics manage OHIP billing alongside growing self-pay demand, multilingual intake, and Ontario specialist wait time pressures.',
}

const points: ContextPoint[] = [
  {
    title: 'OHIP and private pay coexist — and both require systematic management',
    body: 'Toronto clinics increasingly operate across both OHIP-billed and private-pay streams — particularly specialists offering uninsured services, physiotherapy, and psychotherapy alongside OHIP-covered consultations. Managing billing correctly across both streams, without mixing up patient entitlements or creating billing errors, requires a structured workflow layer that generic EMRs don\'t provide by default.',
  },
  {
    title: 'Ontario specialist wait times are driving private market growth',
    body: 'OHIP-funded specialist wait times across Ontario — for orthopaedics, dermatology, ophthalmology, and many other specialties — have created a meaningful and growing private-pay conversion market. Patients with extended health benefits through their employer or willing to self-fund are choosing private access. Practices positioned to serve this demand efficiently are capturing a structurally expanding market.',
  },
  {
    title: 'Toronto\'s multicultural population demands multilingual intake',
    body: 'Toronto is one of the most ethnically diverse cities in the world, with significant Mandarin, Cantonese, Tamil, Punjabi, Tagalog, and Urdu-speaking patient communities alongside dozens of other language groups. Practices in North York, Scarborough, and Brampton that offer language-appropriate intake workflows see measurably better completion rates and patient satisfaction.',
  },
  {
    title: 'Health tech adoption is high in Toronto\'s innovation corridor',
    body: 'Toronto\'s MaRS and University Avenue health tech ecosystem means that clinic operators in the city are generally early adopters of operational technology. Patient expectations for digital booking, automated reminders, and online intake are higher than in most Canadian markets — and practices that lag on these dimensions lose patients to more tech-enabled competitors.',
  },
]

const features: FeatureKey[] = ['scheduling', 'patient-flow', 'check-in', 'analytics']

export default function TorontoPage() {
  return (
    <>
      <NavInner />
      <main>
        <LocationHero
          badge="Toronto, ON"
          title="Toronto clinics. Ontario's health system complexity. Fixed."
          subtitle="Toronto practices navigate OHIP alongside a growing private-pay market, multilingual patient populations, and patients who expect digital-first healthcare experiences."
        />
        <LocationContext
          heading="What Toronto's clinic market demands"
          intro="Toronto is Canada's largest and most complex private healthcare market. OHIP billing, private-pay growth, a multilingual patient base, and high patient expectations for technology create an operational environment where the right clinic management platform is a genuine competitive advantage."
          points={points}
        />
        <LocationFeatures features={features} />
        <LocationCTA
          ctaLabel="See clinIQ for Toronto clinics"
          description="Built for Ontario's OHIP-plus-private billing environment and Toronto's multilingual patient population. Request a walkthrough for your specialty."
        />
      </main>
      <FooterInner />
    </>
  )
}
