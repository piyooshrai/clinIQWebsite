import type { Metadata } from 'next';
import NavInner from '@/components/NavInner';
import FooterInner from '@/components/FooterInner';
import FeatureHero from '@/components/FeatureHero';
import FeatureProblem from '@/components/FeatureProblem';
import FeatureHowItWorks from '@/components/FeatureHowItWorks';
import FeatureCTA from '@/components/FeatureCTA';

export const metadata: Metadata = {
  title: 'Patient Flow Software — clinIQ',
  description: 'Real-time visibility into every patient, every room, every provider. No more huddles. No more radio silence.',
};

const painPoints = [
  {
    heading: '"Who\'s next?" huddles waste 30+ minutes daily',
    body: 'Every morning and midday, staff stop working to figure out what\'s happening. That time adds up — fast.',
  },
  {
    heading: 'Providers interrupt front desk for status updates',
    body: 'When providers don\'t know who\'s ready, they walk up to ask. Every interruption costs the front desk 3-5 minutes of focus.',
  },
  {
    heading: 'No visibility into bottlenecks until the lobby overflows',
    body: 'You find out there\'s a problem when patients start complaining — not with enough time to fix it.',
  },
  {
    heading: 'Whiteboards and spreadsheets out of date the moment they\'re written',
    body: 'By the time someone updates the board, three things have already changed. Static tools don\'t work in dynamic environments.',
  },
  {
    heading: 'Staff can\'t answer "how much longer?" without walking the hall',
    body: 'Patients ask. Staff have to physically investigate. Neither party is happy with that answer.',
  },
];

const steps: [
  { title: string; body: string },
  { title: string; body: string },
  { title: string; body: string },
] = [
  {
    title: 'Patient checks in → appears on queue instantly',
    body: 'The moment a patient arrives, every authorized staff member sees them on the live queue — no manual entry required.',
  },
  {
    title: 'Staff updates status with one tap → everyone sees it',
    body: 'Move a patient from waiting to vitals to provider with a single tap. The whole team stays in sync automatically.',
  },
  {
    title: 'Bottleneck alerts fire before problems escalate',
    body: 'Set thresholds for wait times and room occupancy. Get notified early enough to actually do something about it.',
  },
];

export default function PatientFlowPage() {
  return (
    <>
      <NavInner />
      <main>
        <FeatureHero
          badge="Patient Flow"
          title={<>Stop asking &ldquo;who&rsquo;s next?&rdquo; <em>Start knowing.</em></>}
          subtitle="Real-time visibility into every patient, every room, every provider. No more huddles. No more radio silence."
        />
        <FeatureProblem points={painPoints} />
        <FeatureHowItWorks steps={steps} />
        <FeatureCTA
          title={<>See your clinic <em>in real time.</em></>}
          description="Get a live demo with your clinic's layout and see exactly how patient flow visibility changes how you operate."
        />
      </main>
      <FooterInner />
    </>
  );
}
