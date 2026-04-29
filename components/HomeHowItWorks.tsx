import s from './HomeSections.module.css'

const STEPS = [
  {
    n: '01',
    h3: 'Patient Books or Walks In — Check-In Starts Instantly',
    text:
      'Your patient checks in from a kiosk, tablet, or their own phone. No app download. No paper form. The digital patient check-in system captures intake, verifies identity, and drops them into the live queue — automatically.',
  },
  {
    n: '02',
    h3: 'Your Team Gets a Live View of Every Patient, Every Stage',
    text:
      "The moment check-in is complete, your front desk and providers see a real-time dashboard — who's waiting, who's with a provider, which room is ready, and where the bottleneck is forming. clinIQ's patient queue management system replaces the whiteboard, the clipboard, and the hallway shout.",
  },
  {
    n: '03',
    h3: 'Providers See Patients — clinIQ Handles Everything Running Parallel',
    text:
      'While your provider is in the room, clinIQ is running pre-authorization automation on pending cases, tracking RTM thresholds, firing appointment reminders, and flagging any compliance gaps — all without touching the clinical workflow.',
  },
  {
    n: '04',
    h3: 'RTM Billing Runs Automatically — Revenue Captures Itself',
    text:
      "CPT codes 98975–98981 are tracked, compliance is monitored, and alerts fire before a qualifying patient falls out of range. Your RTM billing software doesn't need a separate login, a separate team, or extra charting — it runs inside the same platform your front desk already uses.",
  },
  {
    n: '05',
    h3: 'Analytics Close the Loop — You See What\'s Actually Costing You',
    text:
      "End of day, end of week, end of month — clinIQ's analytics surface wait time patterns, no-show rates, provider utilization gaps, and revenue leaks your EHR reporting never shows. Fix problems before they compound.",
  },
]

export default function HomeHowItWorks() {
  return (
    <section className={s.section} id="how-it-works">
      <div className={s.container}>
        <div className={s.label}>
          <span className={s.labelLine} />
          <span>How It Works</span>
        </div>
        <h2 className={s.title}>
          How clinIQ&apos;s Patient Flow Software{' '}
          <em className={s.titleEm}>Turns Clinic Chaos Into a System That Runs Itself</em>
        </h2>
        <p className={s.intro}>
          Most clinic operations break in the same three places — the front desk, the
          billing team, and the gap between them. clinIQ closes all three with one
          connected clinic workflow software that runs from the moment a patient books
          to the moment the claim goes out.
        </p>

        <div className={s.steps}>
          {STEPS.map((step) => (
            <div key={step.n} className={s.step}>
              <div className={s.stepNum}>{step.n}</div>
              <div className={s.stepBody}>
                <h3 className={s.stepH3}>{step.h3}</h3>
                <p className={s.stepText}>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
