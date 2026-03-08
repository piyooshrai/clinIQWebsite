import type { Metadata } from 'next';
import NavInner from '@/components/NavInner';
import FooterInner from '@/components/FooterInner';
import FeatureHero from '@/components/FeatureHero';
import FeatureProblem from '@/components/FeatureProblem';
import FeatureHowItWorks from '@/components/FeatureHowItWorks';
import FeatureCTA from '@/components/FeatureCTA';

export const metadata: Metadata = {
  title: 'Prior Authorization Software — clinIQ',
  description: 'Smart forms, auto-suggest CPT/ICD, document upload, case tracking. Fewer denials, faster approvals.',
};

const painPoints = [
  {
    heading: 'Specialty prior auth is a full-time job',
    body: "Spinal cord stimulators, pain management procedures, complex implants — each payer has different requirements and none of them make it easy.",
  },
  {
    heading: 'Hours on hold with payers',
    body: "Staff spend hours every week on hold, navigating phone trees, and re-explaining cases that should have been resolved on the first call.",
  },
  {
    heading: 'Denials from missing or incorrect documentation',
    body: 'A single missing document means a denial, an appeal, and weeks of delay. By then, the patient may have found another provider.',
  },
  {
    heading: 'No visibility into case status',
    body: "When a PA is submitted, it disappears into a black box. Staff have to call to check status — which means more hold time.",
  },
  {
    heading: 'Still chasing faxes in 2026',
    body: "Payers demanding faxes is frustrating enough. Losing track of what was sent and when turns PA management into chaos.",
  },
];

const steps: [
  { title: string; body: string },
  { title: string; body: string },
  { title: string; body: string },
] = [
  {
    title: 'Start PA request → system suggests CPT/ICD codes',
    body: 'clinIQ pre-populates codes based on diagnosis and procedure type, reducing errors before the request even leaves your office.',
  },
  {
    title: 'Attach required docs from checklist',
    body: "Payer-specific document checklists tell staff exactly what's needed. Upload once, attached automatically to the right case.",
  },
  {
    title: 'Submit and track status with alerts',
    body: "Submit electronically and track every case in a single dashboard. Get alerted when status changes — no more calling to check.",
  },
];

export default function PreAuthPage() {
  return (
    <>
      <NavInner />
      <main>
        <FeatureHero
          badge="Pre-Authorization"
          title={<>Prior auth that doesn&rsquo;t require <em>babysitting.</em></>}
          subtitle="Smart forms, auto-suggest CPT/ICD, document upload, case tracking. Fewer denials, faster approvals."
        />
        <FeatureProblem points={painPoints} />
        <FeatureHowItWorks steps={steps} />
        <FeatureCTA
          title={<>Fewer denials. <em>Faster approvals.</em></>}
          description="See how clinIQ streamlines prior auth for your specialty and reduces time-to-approval for your most complex cases."
        />
      </main>
      <FooterInner />
    </>
  );
}
