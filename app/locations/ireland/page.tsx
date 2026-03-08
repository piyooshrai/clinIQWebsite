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
  title: 'Clinic Software for Ireland | Private Practice & HSE Alternative',
  description:
    'HSE wait time pressure driving private pay growth, VHI and Laya insurance workflows, GDPR and DPC compliance, and rising demand across Dublin and regional cities. Clinic operations for Irish private practice.',
  keywords: [
    'clinic management software Ireland',
    'VHI Laya Irish Life private clinic software',
    'private healthcare Dublin Ireland',
    'GDPR DPC compliant clinic software',
  ],
}

const points: ContextPoint[] = [
  {
    title: 'HSE wait times driving growth',
    body: "Ireland's public health system is under sustained pressure, with specialist outpatient wait times frequently exceeding twelve months. Patients who can afford private care are not waiting. This is creating a structural shift in Irish healthcare — private clinics and specialist practices are absorbing demand that the HSE cannot service. The growth opportunity is real and ongoing.",
  },
  {
    title: 'VHI, Laya, and Irish Life landscape',
    body: "Ireland's private health insurance market is dominated by VHI Healthcare, Laya Healthcare, and Irish Life Health — each with distinct plan structures, excess requirements, and pre-authorisation processes. Managing insurer-specific workflows, communicating patient liability clearly, and tracking authorisation status across multiple insurers is a daily operational task that compounds without structure.",
  },
  {
    title: 'GP referral pathway to specialists',
    body: "In Ireland, GP referrals remain the primary entry point to specialist private care. Managing incoming referrals — tracking receipt, acknowledging to the referring GP, scheduling appropriately, and following up on non-attendances — is operationally critical. Referring GPs notice when a specialist practice handles this well, and they notice when it doesn't.",
  },
  {
    title: 'GDPR and DPC compliance',
    body: "Ireland's Data Protection Commission (DPC) is one of Europe's most active GDPR enforcement bodies, partly because it serves as the lead supervisory authority for many major technology companies. Healthcare data is among the most sensitive categories under GDPR. Irish private clinics need operational platforms that treat data governance with corresponding seriousness.",
  },
  {
    title: 'Dublin and regional city demand',
    body: "Private clinic demand is concentrated in Dublin — particularly in Sandyford, Blackrock, and the city centre — but is growing meaningfully in Cork, Limerick, and Galway as regional economies strengthen. Clinics expanding beyond a single site need operational infrastructure that scales without proportionally scaling administrative headcount.",
  },
]

const features: FeatureKey[] = ['patient-flow', 'scheduling', 'check-in', 'analytics']

export default function IrelandPage() {
  return (
    <>
      <NavInner />
      <main>
        <LocationHero
          badge="Ireland"
          title="Private healthcare in Ireland. The HSE queue isn't your problem."
          subtitle="VHI and Laya insurance workflows, GP referral management, GDPR compliance, and demand growing faster than the public system can absorb. Operate accordingly."
        />
        <LocationContext
          heading="The Irish private clinic landscape"
          intro="Ireland's private healthcare sector is in a sustained growth phase, driven by HSE wait time pressure, rising insurance penetration, and a patient population that has decided not to wait. Private clinics and specialist practices capturing this demand need operational infrastructure that scales cleanly — from first referral to final claim."
          points={points}
        />
        <LocationFeatures features={features} />
        <LocationCTA
          ctaLabel="See clinIQ for Irish clinics"
          description="15-minute walkthrough. We'll show you patient flow, scheduling, and check-in built for Irish private practice."
        />
      </main>
      <FooterInner />
    </>
  )
}
