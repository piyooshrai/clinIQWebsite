import type { Metadata } from 'next';
import NavInner from '@/components/NavInner';
import FooterInner from '@/components/FooterInner';
import FeatureHero from '@/components/FeatureHero';
import FeatureProblem from '@/components/FeatureProblem';
import FeatureHowItWorks from '@/components/FeatureHowItWorks';
import FeatureCTA from '@/components/FeatureCTA';

export const metadata: Metadata = {
  title: 'RTM Billing Software — clinIQ',
  description: 'CPT 98975–98981. Average $120–150 per patient monthly. Automated tracking and documentation for remote therapeutic monitoring.',
};

const painPoints = [
  {
    heading: 'Leaving $120–150 per patient per month on the table',
    body: "Most clinics already do the monitoring work. They just don't have a system to document it in a way that gets reimbursed.",
  },
  {
    heading: 'RTM billing confusion across CPT codes',
    body: 'Which codes can be billed together? What are the time thresholds? What documentation does each payer require? Getting it wrong means denials.',
  },
  {
    heading: 'Manual tracking in spreadsheets',
    body: "Someone has to remember to log each patient's monitoring minutes. Spreadsheets get out of date, entries get missed, revenue is lost.",
  },
  {
    heading: "Documentation doesn't meet payer requirements",
    body: "Even when monitoring happens, if the documentation doesn't meet payer standards, the claim gets denied. Compliance is non-negotiable.",
  },
  {
    heading: "Staff don't know which patients qualify",
    body: 'Without a clear enrollment workflow, RTM-eligible patients slip through unidentified. Revenue opportunity missed, every single month.',
  },
];

const steps: [
  { title: string; body: string },
  { title: string; body: string },
  { title: string; body: string },
] = [
  {
    title: 'Patient enrolled with qualifying diagnosis',
    body: 'clinIQ flags RTM-eligible patients and walks staff through enrollment — consent, qualifying codes, and device assignment.',
  },
  {
    title: 'Monitoring logged automatically during visits',
    body: 'Every interaction is timestamped and attributed to the right CPT code. No manual tracking. No missed minutes.',
  },
  {
    title: 'Monthly bill generated with compliant documentation',
    body: 'At month end, clinIQ produces claim-ready documentation for 98975–98981 that meets payer requirements and survives audit.',
  },
];

export default function RTMPage() {
  return (
    <>
      <NavInner />
      <main>
        <FeatureHero
          badge="RTM Billing"
          title={<>You&rsquo;re already monitoring patients. <em>Now get paid for it.</em></>}
          subtitle="CPT 98975–98981. Average $120–150 per patient monthly. Automated tracking and documentation."
        />
        <FeatureProblem points={painPoints} />
        <FeatureHowItWorks steps={steps} />
        <FeatureCTA
          title={<>Start capturing RTM revenue <em>this month.</em></>}
          description="See how clinIQ identifies eligible patients and generates compliant RTM documentation without adding staff workload."
        />
      </main>
      <FooterInner />
    </>
  );
}
