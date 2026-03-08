import type { Metadata } from 'next';
import NavInner from '@/components/NavInner';
import FooterInner from '@/components/FooterInner';
import FeatureHero from '@/components/FeatureHero';
import FeatureProblem from '@/components/FeatureProblem';
import FeatureHowItWorks from '@/components/FeatureHowItWorks';
import FeatureCTA from '@/components/FeatureCTA';

export const metadata: Metadata = {
  title: 'Clinic Analytics Software — clinIQ',
  description: 'Wait times, throughput, utilization. Daily, weekly, monthly. Identify problems before patients do.',
};

const painPoints = [
  {
    heading: 'No data to justify the spend on patient flow software',
    body: 'Leadership wants ROI. Without before-and-after metrics, you can\'t prove value — and budgets get cut even when things are working.',
  },
  {
    heading: 'Gut decisions without evidence',
    body: 'Every operational change is a guess. You think something helped, but you don\'t actually know. Data replaces instinct with certainty.',
  },
  {
    heading: 'Can\'t identify which provider or step causes delays',
    body: 'You know wait times are long, but you don\'t know where the bottleneck is. Fixing the wrong thing wastes time and creates new problems.',
  },
  {
    heading: 'Surprised by bottlenecks after the fact',
    body: 'You find out something went wrong when a patient complains or a provider is still there at 7pm. Reactive is expensive.',
  },
  {
    heading: 'Reporting to leadership with incomplete information',
    body: 'Monthly ops reports built from memory and gut feel don\'t inspire confidence. Real dashboards change how leadership sees your operation.',
  },
];

const steps: [
  { title: string; body: string },
  { title: string; body: string },
  { title: string; body: string },
] = [
  {
    title: 'Data captured automatically from patient flow',
    body: 'Every check-in, status change, and handoff is timestamped. No manual data entry, no gaps, no retrospective guessing.',
  },
  {
    title: 'Dashboards update in real-time',
    body: 'Wait times, throughput, and utilization broken down by provider, room, and location — visible live and in daily, weekly, and monthly views.',
  },
  {
    title: 'Alerts flag anomalies before they become crises',
    body: 'Set thresholds and get notified when something is trending wrong — early enough to adjust staffing, redirect patients, or call in backup.',
  },
];

export default function AnalyticsPage() {
  return (
    <>
      <NavInner />
      <main>
        <FeatureHero
          badge="Analytics"
          title={<>See where time goes. <em>Fix what&rsquo;s broken.</em></>}
          subtitle="Wait times, throughput, utilization. Daily, weekly, monthly. Identify problems before patients do."
        />
        <FeatureProblem points={painPoints} />
        <FeatureHowItWorks steps={steps} />
        <FeatureCTA
          title={<>Data that <em>drives decisions.</em></>}
          description="See clinIQ analytics dashboards populated with your clinic's real data in a live demo."
        />
      </main>
      <FooterInner />
    </>
  );
}
