import type { Metadata } from 'next';
import NavInner from '@/components/NavInner';
import FooterInner from '@/components/FooterInner';
import FeatureHero from '@/components/FeatureHero';
import FeatureProblem from '@/components/FeatureProblem';
import FeatureHowItWorks from '@/components/FeatureHowItWorks';
import FeatureCTA from '@/components/FeatureCTA';

export const metadata: Metadata = {
  title: 'Clinic Scheduling Software — clinIQ',
  description: 'Multi-provider, multi-location. Online booking, automated reminders, intelligent waitlist.',
};

const painPoints = [
  {
    heading: 'One call-out shifts the entire day',
    body: "When a provider is out, the schedule doesn't just have a gap — it cascades. Patients get moved, staff scramble, and someone gets an angry call.",
  },
  {
    heading: '25% new-patient no-shows vs 13% for established',
    body: 'New patients are nearly twice as likely to no-show. Without targeted reminders and easy rescheduling, that gap stays wide.',
  },
  {
    heading: 'Reception-booked follow-ups have higher no-show rates',
    body: 'Patients booked at the front desk — not in the room — no-show more often. The moment of commitment matters, and most clinics miss it.',
  },
  {
    heading: 'Double bookings and scheduling conflicts',
    body: 'Without real-time sync across locations and providers, double bookings happen. The cost is patient trust, not just staff frustration.',
  },
  {
    heading: 'Manual reminder calls eating staff time',
    body: "Calling patients to confirm appointments is time-consuming and inconsistent. Automated reminders shouldn't still be a luxury in 2026.",
  },
];

const steps: [
  { title: string; body: string },
  { title: string; body: string },
  { title: string; body: string },
] = [
  {
    title: 'Patient books online or staff books in-room',
    body: 'Online booking captures the commitment when patient intent is highest. In-room booking at discharge locks in the follow-up before they leave.',
  },
  {
    title: 'Automated reminders sent at right intervals',
    body: 'SMS and email reminders go out at 72 hours, 24 hours, and day-of. Cadence is configurable per appointment type and patient preference.',
  },
  {
    title: 'Cancellations auto-fill from waitlist',
    body: 'When a slot opens, clinIQ notifies the next waitlisted patient automatically. No staff time spent playing phone tag to fill the gap.',
  },
];

export default function SchedulingPage() {
  return (
    <>
      <NavInner />
      <main>
        <FeatureHero
          badge="Scheduling"
          title={<>Schedules that flex <em>without breaking.</em></>}
          subtitle="Multi-provider, multi-location. Online booking, automated reminders, intelligent waitlist."
        />
        <FeatureProblem points={painPoints} />
        <FeatureHowItWorks steps={steps} />
        <FeatureCTA
          title={<>Fewer no-shows. <em>Fuller schedules.</em></>}
          description="See how clinIQ scheduling reduces no-shows and keeps your providers fully booked without extra staff effort."
        />
      </main>
      <FooterInner />
    </>
  );
}
