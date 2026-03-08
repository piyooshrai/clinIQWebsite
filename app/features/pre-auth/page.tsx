import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FeatureHero from '@/components/FeatureHero';
import FeatureProblem from '@/components/FeatureProblem';
import FeatureHowItWorks from '@/components/FeatureHowItWorks';
import FeatureCTA from '@/components/FeatureCTA';

export const metadata: Metadata = {
  title: 'Pre-Authorization — clinIQ',
  description: 'Smart forms, auto-suggest CPT/ICD, document upload, case tracking.',
};

const painPoints = [
  {
    heading: 'Hours on hold with insurers',
    body: 'Your staff spends entire afternoons on the phone chasing approvals. That time has a real dollar cost.',
  },
  {
    heading: 'Denials from missing documentation',
    body: 'A denied PA often comes down to a missing note or wrong code — not the clinical case itself.',
  },
  {
    heading: 'Lost paperwork and no audit trail',
    body: 'When a PA gets denied and you need to appeal, you can\'t find what was submitted or when.',
  },
  {
    heading: 'No status visibility',
    body: 'Patients call asking about their approval. Your staff has no idea where it stands. Everyone is frustrated.',
  },
];

const steps: [
  { title: string; body: string },
  { title: string; body: string },
  { title: string; body: string },
] = [
  {
    title: 'Start PA request',
    body: 'Open a case for any patient directly from their profile. Select the procedure and payer in seconds.',
  },
  {
    title: 'System suggests codes, attaches docs',
    body: 'Auto-suggest fills in CPT and ICD-10 codes. Required documentation is pulled from the patient record.',
  },
  {
    title: 'Track status, get alerts',
    body: 'Every case has a live status. You\'re notified on approval, denial, or when action is required.',
  },
];

export default function PreAuthPage() {
  return (
    <>
      <Nav />
      <main>
        <FeatureHero
          badge="Pre-Authorization"
          title={<>Prior auth that doesn&rsquo;t require <em>babysitting</em></>}
          subtitle="Smart forms, auto-suggest CPT/ICD, document upload, case tracking."
        />
        <FeatureProblem points={painPoints} />
        <FeatureHowItWorks steps={steps} />
        <FeatureCTA
          title={<>Fewer denials. <em>Faster approvals.</em></>}
          description="See how clinIQ pre-auth handles your highest-volume payers and procedures from day one."
        />
      </main>
      <Footer />
    </>
  );
}
