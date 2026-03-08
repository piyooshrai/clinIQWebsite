import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FeatureHero from '@/components/FeatureHero';
import FeatureProblem from '@/components/FeatureProblem';
import FeatureHowItWorks from '@/components/FeatureHowItWorks';
import FeatureCTA from '@/components/FeatureCTA';

export const metadata: Metadata = {
  title: 'Patient Flow — clinIQ',
  description: 'Real-time visibility into every patient, every room, every provider.',
};

const painPoints = [
  {
    heading: 'Constant interruptions',
    body: 'Staff stop what they\'re doing every few minutes to answer "who\'s next?" No one should have to ask.',
  },
  {
    heading: 'No visibility across rooms',
    body: 'Providers don\'t know if their next patient is ready. Rooms sit empty. Time gets wasted.',
  },
  {
    heading: 'Staff drowning in coordination',
    body: 'Every handoff is a verbal message, a sticky note, or a text. It breaks down constantly.',
  },
  {
    heading: 'Patients wondering if they\'re forgotten',
    body: 'Patients wait with no idea where they are in the process. That silence breeds anxiety and complaints.',
  },
];

const steps: [
  { title: string; body: string },
  { title: string; body: string },
  { title: string; body: string },
] = [
  {
    title: 'Patient checks in',
    body: 'Kiosk, tablet, or phone — patient arrives and confirms. They\'re instantly in the system.',
  },
  {
    title: 'Status updates in real-time',
    body: 'As the patient moves through intake, exam, and checkout, every status change is reflected immediately.',
  },
  {
    title: 'Everyone sees the queue',
    body: 'Providers, front desk, and back office all work from the same live view. No guessing. No lag.',
  },
];

export default function PatientFlowPage() {
  return (
    <>
      <Nav />
      <main>
        <FeatureHero
          badge="Patient Flow"
          title={<>Stop asking &ldquo;who&rsquo;s next?&rdquo; Start knowing.</>}
          subtitle="Real-time visibility into every patient, every room, every provider."
        />
        <FeatureProblem points={painPoints} />
        <FeatureHowItWorks steps={steps} />
        <FeatureCTA
          title={<>Flow that <em>actually flows.</em></>}
          description="See clinIQ's patient flow dashboard configured for your clinic. We'll walk through every screen."
        />
      </main>
      <Footer />
    </>
  );
}
