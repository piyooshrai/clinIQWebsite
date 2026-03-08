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
  title: 'Clinic Software for Kuwait | MOH & Private Clinic Management',
  description:
    "MOH Kuwait compliance, DHAMAN insurance network management, Arabic-first patient workflows, and Kuwait's growing private healthcare sector. Operations built for the Kuwaiti market.",
  keywords: [
    'clinic management software Kuwait',
    'DHAMAN insurance clinic Kuwait',
    'private healthcare software Kuwait City',
  ],
}

const points: ContextPoint[] = [
  {
    title: 'MOH Kuwait private compliance',
    body: "Kuwait's Ministry of Health sets licensing and operational standards for private clinics that go well beyond physical infrastructure. Record-keeping, reporting, and patient data handling are all in scope. Clinics that treat compliance as an operational priority — not an annual exercise — avoid costly disruptions at inspection time.",
  },
  {
    title: 'DHAMAN insurance network',
    body: "DHAMAN administers health insurance for a large portion of Kuwait's expat workforce. Managing DHAMAN approvals, claim submissions, and rejection handling is a daily operational task for most private clinics. Without structured workflows for this, front-desk staff absorb the complexity — and patients experience the delay.",
  },
  {
    title: 'Arabic-first patient experience',
    body: "Kuwait's patient base — Kuwaiti nationals and Arabic-speaking expats — expects Arabic as the default language for all patient-facing interactions. Appointment reminders, intake forms, and queue notifications that arrive in English create friction. Arabic-first design is not optional; it is the baseline expectation.",
  },
  {
    title: 'Rising private investment',
    body: "New private hospitals, speciality clinics, and day surgery centres are opening across Kuwait City and Hawalli. The market is competitive and patients have real choices. Clinics that invest in operational quality — not just clinical excellence — differentiate themselves in a crowded field.",
  },
  {
    title: 'Vision New Kuwait 2035',
    body: "Kuwait's Vision 2035 targets a diversified, knowledge-based economy with a modernised healthcare sector as a core pillar. Private clinics that align with digital health infrastructure now position themselves as long-term partners in that transformation — and gain preferential standing with regulators and insurers as a result.",
  },
]

const features: FeatureKey[] = ['patient-flow', 'check-in', 'scheduling', 'pre-auth']

export default function KuwaitPage() {
  return (
    <>
      <NavInner />
      <main>
        <LocationHero
          badge="Kuwait"
          title="Kuwait's private clinics. World-class operations."
          subtitle="MOH compliance, DHAMAN insurance workflows, Arabic-first patient experience, and a private sector that's growing fast. Operate accordingly."
        />
        <LocationContext
          heading="The Kuwait private clinic landscape"
          intro="Kuwait's private healthcare sector is expanding at pace, fuelled by rising patient expectations, growing insurance penetration, and national modernisation goals. The clinics capturing this growth are those that match clinical quality with operational precision — from the first patient interaction to claim submission."
          points={points}
        />
        <LocationFeatures features={features} />
        <LocationCTA
          ctaLabel="See clinIQ for Kuwait clinics"
          description="15-minute walkthrough. We'll show you patient flow, scheduling, and pre-authorisation configured for Kuwait's private clinic market."
        />
      </main>
      <FooterInner />
    </>
  )
}
