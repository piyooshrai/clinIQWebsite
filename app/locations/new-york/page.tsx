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
  title: 'Clinic Software for New York City | NYC Healthcare Operations',
  description: 'clinIQ helps New York City clinics manage high patient volume, Medicaid complexity, and multilingual intake across the five boroughs.',
}

const points: ContextPoint[] = [
  {
    title: 'High volume and high Medicaid complexity',
    body: 'NYC clinics routinely see 40–80 patients per provider per day, with Medicaid enrollment among the highest of any US metro. Prior authorization delays and payer rejections hit harder here than almost anywhere else. clinIQ surfaces auth status in real time so nothing falls through the cracks.',
  },
  {
    title: 'Multi-language intake is a clinical necessity',
    body: 'Over 800 languages are spoken in New York. In practices across the Bronx, Jackson Heights, and Flushing, intake forms and communication that default to English-only create real care gaps. clinIQ supports multilingual patient-facing workflows that reduce front-desk friction.',
  },
  {
    title: 'Staff turnover is a structural problem',
    body: 'NYC front-desk and medical assistant turnover runs well above the national average — cost of living, competitive labor market, and burnout are real factors. Systems that require weeks of training to use effectively are a liability. clinIQ is built so new staff are functional on day one.',
  },
  {
    title: 'Specialty clusters demand referral coordination',
    body: 'Manhattan, the Bronx, and Brooklyn each have distinct specialty concentrations — and patients move between them. Whether you\'re in a multispecialty group near Lenox Hill or a community health center in Crown Heights, smooth referral and follow-up tracking keeps care continuous.',
  },
]

const features: FeatureKey[] = ['patient-flow', 'check-in', 'analytics', 'pre-auth']

export default function NewYorkPage() {
  return (
    <>
      <NavInner />
      <main>
        <LocationHero
          badge="New York, NY"
          title="New York City clinics. High volume. High expectations."
          subtitle="NYC practices face the most complex mix of volume, payer rules, and patient diversity of any US market. clinIQ is built for that."
        />
        <LocationContext
          heading="Why NYC clinics run differently"
          intro="New York's healthcare market is unlike any other in the country — in scale, in payer complexity, and in the diversity of patients who walk through the door. Operations that work in other cities often don't survive contact with NYC realities."
          points={points}
        />
        <LocationFeatures features={features} />
        <LocationCTA
          ctaLabel="See clinIQ for New York City clinics"
          description="Built for high-volume, high-complexity practices across all five boroughs. Get a walkthrough tailored to your specialty and payer mix."
        />
      </main>
      <FooterInner />
    </>
  )
}
