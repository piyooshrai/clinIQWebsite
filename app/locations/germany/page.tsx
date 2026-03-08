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
  title: 'Clinic Software for Germany | Privatpraxis & KV System',
  description:
    'GOÄ private billing, KV ambulatory care complexity, GDPR-compliant patient data management, and high-volume queue management for German private practices. Precision operations for the German market.',
  keywords: [
    'Praxissoftware Deutschland',
    'Privatpraxis Software Germany',
    'KV Kassenärztliche Vereinigung clinic management',
    'GOÄ billing software Germany',
  ],
}

const points: ContextPoint[] = [
  {
    title: 'KV vs Privatpraxis distinction',
    body: "Germany's ambulatory care market divides sharply between GKV-contracted KV physicians — operating within Budgetierung caps and quarterly billing ceilings — and Privatärzte billing under GOÄ. The operational requirements of each are fundamentally different. Clinics straddling both models need systems that understand the distinction, not ones that blur it.",
  },
  {
    title: 'GOÄ private billing complexity',
    body: "The Gebührenordnung für Ärzte (GOÄ) is the fee schedule governing private medical billing in Germany. Factor multipliers, analogue billing for unlisted procedures, and insurer-specific acceptance rates create a billing environment where precision matters. Administrative errors in GOÄ claims delay payment and strain patient relationships.",
  },
  {
    title: 'Patient queue management at volume',
    body: "High-volume German ambulatory practices — particularly in urban centres like Munich, Berlin, and Hamburg — manage patient throughput that would overwhelm underprepared front-desk systems. Queue visibility, dynamic appointment slot management, and real-time wait time communication are operational necessities, not enhancements.",
  },
  {
    title: 'GDPR and German data protection',
    body: "Germany's data protection culture is strict even within GDPR's already demanding framework. The Bundesdatenschutzgesetz (BDSG) adds national requirements on top of GDPR baselines. Patient data handling, consent documentation, and data processor agreements must be airtight. Operational platforms that treat this seriously provide material risk reduction.",
  },
  {
    title: 'Privatpatient expectation premium',
    body: "Patients paying privately — or covered by private Krankenversicherung (PKV) — arrive with expectations commensurate with their premium. Waiting room experience, appointment punctuality, and administrative clarity are evaluated alongside clinical quality. Privatpraxen that deliver operational excellence command and justify premium fee positions.",
  },
]

const features: FeatureKey[] = ['scheduling', 'analytics', 'patient-flow', 'check-in']

export default function GermanyPage() {
  return (
    <>
      <NavInner />
      <main>
        <LocationHero
          badge="Germany"
          title="German private practice. Precision operations."
          subtitle="GOÄ billing complexity, KV system distinctions, GDPR compliance, and Privatpatient expectations. German healthcare demands operational exactness."
        />
        <LocationContext
          heading="The German private clinic landscape"
          intro="Germany's healthcare system is among the most complex in the world — and its private sector reflects that complexity in full. Privatpraxen and KV-contracted practices operate in fundamentally different billing realities, and patients covered by private Krankenversicherung set a high bar for operational quality. Getting the operations right is what makes the clinical excellence visible."
          points={points}
        />
        <LocationFeatures features={features} />
        <LocationCTA
          ctaLabel="See clinIQ for German clinics"
          description="15-minute walkthrough. We'll show you scheduling, queue management, and analytics configured for German private practice."
        />
      </main>
      <FooterInner />
    </>
  )
}
