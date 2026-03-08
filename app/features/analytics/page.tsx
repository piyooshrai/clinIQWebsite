import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FeatureHero from '@/components/FeatureHero';
import FeatureProblem from '@/components/FeatureProblem';
import FeatureHowItWorks from '@/components/FeatureHowItWorks';
import FeatureCTA from '@/components/FeatureCTA';

export const metadata: Metadata = {
  title: 'Analytics — clinIQ',
  description: 'Wait times, throughput, utilization. Daily, weekly, monthly.',
};

const painPoints = [
  {
    heading: 'Running on gut instinct',
    body: 'Without data, every operational decision is a guess. You improve things based on complaints, not evidence.',
  },
  {
    heading: 'Can\'t prove ROI to stakeholders',
    body: 'Leadership wants numbers. If you can\'t show what\'s improved and by how much, budgets get cut.',
  },
  {
    heading: 'Surprised by bottlenecks',
    body: 'Problems surface when patients complain, not before. By then the damage is done.',
  },
  {
    heading: 'No view across providers or locations',
    body: 'Even if one provider\'s numbers are available, comparing across your whole operation is nearly impossible.',
  },
];

const steps: [
  { title: string; body: string },
  { title: string; body: string },
  { title: string; body: string },
] = [
  {
    title: 'Data captured automatically',
    body: 'Every check-in, status change, and handoff is timestamped. No manual data entry. No gaps.',
  },
  {
    title: 'Dashboards update in real-time',
    body: 'Wait times, throughput, and utilization are visible live — and broken down by provider, room, or location.',
  },
  {
    title: 'Alerts flag problems early',
    body: 'Set thresholds and get notified before a long wait becomes a patient complaint or a bottleneck blows up your day.',
  },
];

export default function AnalyticsPage() {
  return (
    <>
      <Nav />
      <main>
        <FeatureHero
          badge="Analytics"
          title={<>See where time goes. <em>Fix what&rsquo;s broken.</em></>}
          subtitle="Wait times, throughput, utilization. Daily, weekly, monthly."
        />
        <FeatureProblem points={painPoints} />
        <FeatureHowItWorks steps={steps} />
        <FeatureCTA
          title={<>Data that <em>drives decisions.</em></>}
          description="See clinIQ analytics dashboards populated with your clinic's real data in a live demo."
        />
      </main>
      <Footer />
    </>
  );
}
