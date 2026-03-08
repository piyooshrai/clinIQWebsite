import type { Metadata } from 'next';
import NavInner from '@/components/NavInner';
import FooterInner from '@/components/FooterInner';
import FeatureHero from '@/components/FeatureHero';
import FeatureProblem from '@/components/FeatureProblem';
import FeatureHowItWorks from '@/components/FeatureHowItWorks';
import FeatureCTA from '@/components/FeatureCTA';

export const metadata: Metadata = {
  title: 'Patient Check-In Software — clinIQ',
  description: "Kiosk, tablet, or phone. No app download. Patients confirm arrival, update info, and you know they're here.",
};

const painPoints = [
  {
    heading: 'Phones ringing while patients wait at the window',
    body: "Front desk staff can't do two things at once. Every ringing phone means a patient standing there, getting impatient.",
  },
  {
    heading: 'Digital intake forms that don\'t sync with your EHR',
    body: "Patients fill out forms online, then fill them out again on paper. Broken integrations destroy the point of going digital.",
  },
  {
    heading: 'Patients repeating information they already gave online',
    body: '"Didn\'t I already fill this out?" Yes. And your staff is about to ask you to fill it out again. It shouldn\'t work this way.',
  },
  {
    heading: 'Front desk doing data entry instead of patient care',
    body: "Manually transcribing intake forms is not what your staff was hired for. It's error-prone, slow, and demoralizing.",
  },
  {
    heading: 'Paper forms still floating around in 2026',
    body: 'Clipboards, pens, illegible handwriting, lost forms. Every paper touchpoint is a compliance and efficiency problem waiting to happen.',
  },
];

const steps: [
  { title: string; body: string },
  { title: string; body: string },
  { title: string; body: string },
] = [
  {
    title: 'Patient arrives → checks in on any device',
    body: 'Kiosk in the lobby, tablet handed to them, or a link on their phone. No app download. No account creation. Just check in.',
  },
  {
    title: 'Data syncs to EHR bi-directionally',
    body: 'Confirmed demographics, updated insurance, completed forms — all written back to eClinicalWorks, Athena, or your EHR automatically.',
  },
  {
    title: 'Queue number assigned, staff notified, patient seated',
    body: "The front desk sees the arrival instantly. The patient gets a confirmation. No one has to ask if they're checked in.",
  },
];

export default function CheckInPage() {
  return (
    <>
      <NavInner />
      <main>
        <FeatureHero
          badge="Check-In"
          title={<>Check-in that doesn&rsquo;t need <em>your front desk.</em></>}
          subtitle="Kiosk, tablet, or phone. No app download. Patients confirm arrival, update info, and you know they're here."
        />
        <FeatureProblem points={painPoints} />
        <FeatureHowItWorks steps={steps} />
        <FeatureCTA
          title={<>Free your front desk <em>to actually care.</em></>}
          description="See how clinIQ check-in integrates with your EHR and reduces front desk workload from day one."
        />
      </main>
      <FooterInner />
    </>
  );
}
