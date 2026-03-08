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
  title: 'Clinic Software for France | Cabinet Médical & Clinique Privée',
  description:
    "CPAM and complémentaires santé workflows, CNIL data compliance, Carte Vitale integration context, and patient expectations shaped by Doctolib. Clinic operations built for the French private healthcare market.",
  keywords: [
    'logiciel cabinet médical France',
    'clinique privée software France',
    'CPAM complémentaire santé workflow',
    'CNIL GDPR clinic software',
  ],
}

const points: ContextPoint[] = [
  {
    title: 'Sécu and complémentaires workflow',
    body: "French private clinics operate at the intersection of CPAM (Assurance Maladie) reimbursements and complémentaires santé — the supplementary insurers covering patient co-payments and above-tariff fees. Managing the two-tier reimbursement clearly, communicating patient liability before the appointment, and handling télétransmission accurately are daily operational requirements that compound quickly at volume.",
  },
  {
    title: 'Doctolib-shaped patient expectations',
    body: "Doctolib has redefined what French patients expect from a booking experience. Online availability, instant confirmation, and automated reminders are now the baseline — not a differentiator. Clinics that don't match this experience lose bookings to those that do, regardless of clinical reputation. Your operations platform needs to meet the standard Doctolib set.",
  },
  {
    title: 'CPTS coordination requirements',
    body: "Communautés Professionnelles Territoriales de Santé (CPTS) are reshaping how French primary and specialist care coordinates locally. Private practitioners participating in CPTS arrangements need operational systems that support shared care pathways, referral tracking, and coordinated patient management — without duplicating administrative effort across participating practices.",
  },
  {
    title: 'GDPR and CNIL data residency',
    body: "France's Commission Nationale de l'Informatique et des Libertés (CNIL) enforces GDPR with particular attention to healthcare data. French patient data residency requirements, consent management standards, and breach notification obligations apply in full to private clinical operators. Platforms that take data governance seriously reduce risk and simplify compliance audit preparation.",
  },
  {
    title: 'Carte Vitale integration context',
    body: "Carte Vitale is the universal patient identifier in French healthcare. While clinical software handles the core ADRi and télétransmission functions, your operational layer needs to work cleanly alongside these systems — ensuring patient identity verification, session linkage, and appointment records are coherent without duplication or reconciliation errors.",
  },
]

const features: FeatureKey[] = ['scheduling', 'patient-flow', 'check-in', 'analytics']

export default function FrancePage() {
  return (
    <>
      <NavInner />
      <main>
        <LocationHero
          badge="France"
          title="La médecine privée française. Des opérations à la hauteur."
          subtitle="CPAM, complémentaires santé, CNIL compliance, and patient expectations shaped by Doctolib. French private practice deserves operations that match."
        />
        <LocationContext
          heading="The French private clinic landscape"
          intro="French private healthcare sits in a system of structured complexity — a two-tier reimbursement model, a dominant booking platform that has reset patient expectations, and a regulatory environment shaped by CNIL and GDPR. The cabinets médicaux and cliniques privées that operate cleanly within this complexity build patient loyalty and referrer trust that generic tools can't support."
          points={points}
        />
        <LocationFeatures features={features} />
        <LocationCTA
          ctaLabel="See clinIQ for French clinics"
          description="15-minute walkthrough. We'll show you scheduling, patient flow, and check-in built for the French private healthcare market."
        />
      </main>
      <FooterInner />
    </>
  )
}
