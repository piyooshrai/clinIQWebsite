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
  title: 'Clinic Software for Montreal | Quebec Private Practice',
  description: 'clinIQ helps Montréal private clinics navigate RAMQ alongside growing private pay, Bill 96 French-first requirements, and the referral influence of McGill and UdeM academic medicine.',
}

const points: ContextPoint[] = [
  {
    title: 'RAMQ and private pay require careful workflow separation',
    body: 'Quebec\'s RAMQ system covers many medical services — but the growing market for uninsured services, specialist access, and integrative care means Montréal practices increasingly operate across both funded and private streams. Managing the boundary between RAMQ-covered and private-pay services, with correct patient communication and billing for each, requires a structured workflow layer that prevents errors and patient confusion.',
  },
  {
    title: 'Bill 96 creates French-first compliance obligations for patient communications',
    body: 'Quebec\'s language legislation — including Bill 96 — establishes French as the primary language of commerce and service delivery in the province. For private clinics, this has practical implications for patient-facing communications, intake forms, consent documents, and reminder workflows. Practices whose software defaults to English-only patient communications face both compliance exposure and patient friction with French-speaking patients.',
  },
  {
    title: 'McGill and UdeM academic medicine shapes private referral patterns',
    body: 'McGill University Health Centre and Université de Montréal\'s hospital network generate significant outpatient referral volume for the private sector — particularly for elective consultations, aesthetic procedures, and services with long RAMQ wait lists. Practices that maintain strong referral relationships with academic clinicians need documentation and communication workflows that support closed-loop referral management.',
  },
  {
    title: 'Westmount and Plateau clinic clusters anchor different patient segments',
    body: 'Westmount and NDG support affluent English and bilingual private-pay practices; the Plateau and Mile End anchor a younger, French-dominant patient base with growing demand for integrative and direct-care models. Practices in both clusters need intake and scheduling workflows that adapt to their patient segment without requiring separate platforms for each.',
  },
]

const features: FeatureKey[] = ['scheduling', 'patient-flow', 'check-in', 'analytics']

export default function MontrealPage() {
  return (
    <>
      <NavInner />
      <main>
        <LocationHero
          badge="Montréal, QC"
          title="Montréal private clinics. French. Fast. Efficient."
          subtitle="Montréal private practices navigate RAMQ alongside growing self-pay demand, Bill 96 French-first obligations, and the academic referral networks of McGill and UdeM."
        />
        <LocationContext
          heading="What Montréal's private clinic market demands"
          intro="Montréal is Quebec's largest and most complex private healthcare market — defined by the coexistence of RAMQ-funded and private-pay care, French-first compliance requirements, and strong academic medicine influence on referral patterns. Practices that operate cleanly across all of these dimensions build sustainable advantages."
          points={points}
        />
        <LocationFeatures features={features} />
        <LocationCTA
          ctaLabel="See clinIQ for Montréal clinics"
          description="Built for Quebec's bilingual private market — RAMQ workflow separation, French-first patient communications, and academic referral coordination. Request a walkthrough."
        />
      </main>
      <FooterInner />
    </>
  )
}
