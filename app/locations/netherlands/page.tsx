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
  title: 'Clinic Software for Netherlands | Zorgverzekeringswet & Private Clinics',
  description:
    'Zvw basic insurance, eigen risico admin burden, DBC/DOT billing complexity, AVG data requirements, and GP gatekeeping workflows. Clinic operations built for the Dutch private healthcare market.',
  keywords: [
    'kliniek software Nederland',
    'Zorgverzekeringswet clinic management Netherlands',
    'DBC DOT billing private clinic Netherlands',
    'AVG GDPR zorgverlener software',
  ],
}

const points: ContextPoint[] = [
  {
    title: 'Zvw and eigen risico burden',
    body: "The Zorgverzekeringswet (Zvw) mandates basic health insurance for all Dutch residents, but the eigen risico — the annual deductible, currently €385 — creates significant administrative friction. Patients often don't know if their deductible is exhausted, and clinics absorb the uncertainty at the billing stage. Clear upfront communication about patient liability reduces disputes and non-payment.",
  },
  {
    title: 'DBC and DOT billing complexity',
    body: "Dutch specialist care is billed through the Diagnose Behandeling Combinatie (DBC) and subsequent DOT (DBC's Op weg naar Transparantie) system. Each patient episode is coded and priced as a complete care package — a fundamentally different model from fee-for-service billing. Private clinics operating outside the DBC system need robust alternative billing workflows that don't compromise on accuracy.",
  },
  {
    title: 'GP gatekeeping model',
    body: "In the Netherlands, the huisarts (general practitioner) functions as the mandatory gateway to specialist care. Private clinics receiving specialist referrals must manage the huisarts relationship carefully — acknowledging referrals promptly, communicating outcomes clearly, and handling return referrals in a way that keeps the GP engaged. This referral relationship is the primary growth lever for most Dutch specialist practices.",
  },
  {
    title: 'AVG data compliance requirements',
    body: "The Algemene Verordening Gegevensbescherming (AVG) — the Dutch implementation of GDPR — applies with full force to healthcare data. The Autoriteit Persoonsgegevens actively enforces these requirements, including explicit consent standards, data processor agreement obligations, and patient rights around access and deletion. Private clinics need operational platforms that support AVG compliance without creating administrative overhead.",
  },
  {
    title: 'Amsterdam and Rotterdam clinic density',
    body: "Private clinic concentration is highest in Amsterdam's Oud-Zuid and Zuidas corridors, and Rotterdam's city centre — where competition for privately insured patients is intense. In dense urban markets, patient experience quality becomes the primary differentiator. Operational efficiency — booking ease, wait time management, communication clarity — is what patients notice and act on.",
  },
]

const features: FeatureKey[] = ['scheduling', 'patient-flow', 'analytics', 'check-in']

export default function NetherlandsPage() {
  return (
    <>
      <NavInner />
      <main>
        <LocationHero
          badge="Netherlands"
          title="Dutch private practice. Efficient by design."
          subtitle="Zvw eigen risico admin, DBC billing complexity, GP gatekeeping, and AVG compliance. Dutch healthcare rewards operational precision."
        />
        <LocationContext
          heading="The Dutch private clinic landscape"
          intro="The Netherlands operates one of Europe's most structured healthcare systems — universal basic insurance, a GP gatekeeping model, and DBC-based specialist billing. Private clinics operating within or alongside this system face a distinct set of operational demands. Those that handle them with precision build the GP relationships and patient trust that sustain long-term growth."
          points={points}
        />
        <LocationFeatures features={features} />
        <LocationCTA
          ctaLabel="See clinIQ for Dutch clinics"
          description="15-minute walkthrough. We'll show you scheduling, patient flow, and analytics configured for the Dutch private clinic market."
        />
      </main>
      <FooterInner />
    </>
  )
}
