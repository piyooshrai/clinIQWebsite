import type { Metadata } from 'next';
import NavInner from '@/components/NavInner';
import FooterInner from '@/components/FooterInner';
import FeatureHero from '@/components/FeatureHero';
import FeatureProblem from '@/components/FeatureProblem';
import FeatureHowItWorks from '@/components/FeatureHowItWorks';
import FeatureCTA from '@/components/FeatureCTA';

export const metadata: Metadata = {
  title: 'RTM Billing — clinIQ',
  description: 'CPT 98975-98981. Average $120-150 per patient monthly. Built into your workflow.',
};

const painPoints = [
  {
    heading: 'Leaving money on the table',
    body: "If you're seeing patients for chronic conditions, you're likely eligible for RTM billing — and not collecting it.",
  },
  {
    heading: 'Manual tracking is unsustainable',
    body: "Spreadsheets and memory don't cut it for compliance. One audit and the whole house of cards falls.",
  },
  {
    heading: 'Missed billing windows',
    body: "RTM codes have monthly thresholds. Without automated tracking, you miss them and the revenue disappears.",
  },
  {
    heading: 'No visibility into eligible patients',
    body: "You don't know which patients qualify, who's been enrolled, or what's been billed. That uncertainty is costly.",
  },
];

const steps: [
  { title: string; body: string },
  { title: string; body: string },
  { title: string; body: string },
] = [
  {
    title: 'Patient enrolled',
    body: 'Flag eligible patients at check-in or during scheduling. Consent is captured digitally in seconds.',
  },
  {
    title: 'Monitoring logged automatically',
    body: 'clinIQ tracks time, interactions, and thresholds required for CPT 98975-98981 without manual entry.',
  },
  {
    title: 'Bill generated monthly',
    body: 'At the end of each billing period, completed RTM claims are ready to submit. Average $120-150 per patient.',
  },
];

export default function RTMPage() {
  return (
    <>
      <NavInner />
      <main>
        <FeatureHero
          badge="RTM Billing"
          title={<>You&rsquo;re already monitoring patients. Now <em>get paid for it.</em></>}
          subtitle="CPT 98975-98981. Average $120-150 per patient monthly."
        />
        <FeatureProblem points={painPoints} />
        <FeatureHowItWorks steps={steps} />
        <FeatureCTA
          title={<>Revenue you&rsquo;re <em>already earning.</em></>}
          description="See how clinIQ RTM billing integrates with your patient roster and existing EHR billing workflow."
        />
      </main>
      <FooterInner />
    </>
  );
}
