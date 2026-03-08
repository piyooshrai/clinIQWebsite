import type { Metadata } from 'next';
import NavInner from '@/components/NavInner';
import FooterInner from '@/components/FooterInner';
import FeatureHero from '@/components/FeatureHero';
import FeatureProblem from '@/components/FeatureProblem';
import FeatureHowItWorks from '@/components/FeatureHowItWorks';
import FeatureCTA from '@/components/FeatureCTA';

export const metadata: Metadata = {
  title: 'Patient Check-In — clinIQ',
  description: "Kiosk, tablet, or phone. No app download. Patients confirm arrival, you know they're here.",
};

const painPoints = [
  {
    heading: 'Phones ringing while patients wait',
    body: "Your front desk is juggling incoming calls and a waiting room at the same time. Something always slips.",
  },
  {
    heading: 'Manual paperwork on arrival',
    body: "Clipboards, handwriting, re-entering data into your EHR. Every minute of that is a minute wasted.",
  },
  {
    heading: 'Patients repeating their information',
    body: "\"Didn't I fill this out last time?\" Yes, they did. A modern check-in system shouldn't require that.",
  },
  {
    heading: 'No confirmation the patient actually arrived',
    body: "A scheduled appointment doesn't mean the patient is here. Without check-in, you're just guessing.",
  },
];

const steps: [
  { title: string; body: string },
  { title: string; body: string },
  { title: string; body: string },
] = [
  {
    title: 'Patient arrives',
    body: "They walk up to a kiosk, tap their phone, or use a tablet. No app download. No account needed.",
  },
  {
    title: 'Checks in on any device',
    body: "They confirm their details, sign any required forms, and complete intake — all in under two minutes.",
  },
  {
    title: 'Queue number assigned, staff notified',
    body: "The patient gets a number and an estimated wait. Staff see the arrival instantly on their dashboard.",
  },
];

export default function CheckInPage() {
  return (
    <>
      <NavInner />
      <main>
        <FeatureHero
          badge="Check-In"
          title="Check-in that doesn't need your front desk"
          subtitle="Kiosk, tablet, or phone. No app download. Patients confirm arrival, you know they're here."
        />
        <FeatureProblem points={painPoints} />
        <FeatureHowItWorks steps={steps} />
        <FeatureCTA
          title={<>Check-in that <em>just works.</em></>}
          description="See how clinIQ check-in fits into your existing lobby and EHR setup. Takes less than a week to go live."
        />
      </main>
      <FooterInner />
    </>
  );
}
