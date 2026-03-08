import type { Metadata } from 'next';
import NavInner from '@/components/NavInner';
import FooterInner from '@/components/FooterInner';
import FeatureHero from '@/components/FeatureHero';
import FeatureProblem from '@/components/FeatureProblem';
import FeatureHowItWorks from '@/components/FeatureHowItWorks';
import FeatureCTA from '@/components/FeatureCTA';

export const metadata: Metadata = {
  title: 'Scheduling — clinIQ',
  description: 'Multi-provider, multi-location. Online booking, automated reminders, intelligent waitlist.',
};

const painPoints = [
  {
    heading: 'Double bookings and gaps',
    body: "Without a single source of truth, providers get double-booked or entire time blocks sit empty with no warning.",
  },
  {
    heading: 'No-shows with no backup plan',
    body: "A no-show means lost revenue. Without a live waitlist, that slot disappears instead of getting filled.",
  },
  {
    heading: 'Phone tag for confirmations',
    body: "Staff spend 30 minutes a day calling patients to confirm appointments that could be automated entirely.",
  },
  {
    heading: 'Manual confirmations and reminders',
    body: "Every reminder your staff sends is time not spent on patient care. It shouldn't be a manual process.",
  },
];

const steps: [
  { title: string; body: string },
  { title: string; body: string },
  { title: string; body: string },
] = [
  {
    title: 'Patient books online',
    body: "Patients select their provider, location, and preferred time through a branded booking page. No phone required.",
  },
  {
    title: 'Automated reminders sent',
    body: "SMS and email reminders go out automatically at 48 hours and 2 hours before the appointment.",
  },
  {
    title: 'Waitlist fills cancellations',
    body: "When a patient cancels, the next eligible patient on the waitlist is notified and offered the slot instantly.",
  },
];

export default function SchedulingPage() {
  return (
    <>
      <NavInner />
      <main>
        <FeatureHero
          badge="Scheduling"
          title={<>Schedules that <em>flex</em> without breaking</>}
          subtitle="Multi-provider, multi-location. Online booking, automated reminders."
        />
        <FeatureProblem points={painPoints} />
        <FeatureHowItWorks steps={steps} />
        <FeatureCTA
          title={<>A schedule that <em>runs itself.</em></>}
          description="See clinIQ scheduling set up for your providers and locations. We handle the configuration."
        />
      </main>
      <FooterInner />
    </>
  );
}
