import Link from 'next/link'
import styles from './Features.module.css'

const FEATURES = [
  {
    number: '01',
    title: 'Digital Patient Check-In System',
    description:
      'Kiosk, tablet, or phone-based automated patient intake software that collects everything upfront. No paper. No clipboard. No front desk bottleneck.',
    href: '/features/check-in',
  },
  {
    number: '02',
    title: 'Real-Time Patient Queue Management System',
    description:
      "Every patient, every stage — waiting, intake, with provider, pending discharge. clinIQ's patient flow software shows you room status, provider load, and bottleneck alerts before patients start walking out.",
    href: '/features/patient-flow',
  },
  {
    number: '03',
    title: 'Built-In RTM Billing Software',
    description:
      'Remote Therapeutic Monitoring tracking built directly into your workflow. clinIQ runs CPT 98975–98981 compliance alerts and time tracking without extra charting — clinics add $120–$150 per qualifying patient per month.',
    href: '/features/rtm',
  },
  {
    number: '04',
    title: 'Pre-Authorization Automation',
    description:
      'Smart PA forms auto-populate from the patient record. Pre-authorization automation handles payer-specific rules, document uploads, and case tracking — fewer denials, faster treatment starts.',
    href: '/features/pre-auth',
  },
  {
    number: '05',
    title: 'Multi-Provider Healthcare Scheduling Software',
    description:
      'Online booking, automated reminders, and a waitlist that fills cancellations without a single callback call. The healthcare scheduling software your front desk actually wants to use.',
    href: '/features/scheduling',
  },
  {
    number: '06',
    title: 'Clinic Analytics',
    description:
      'Wait times, throughput, no-show rates, provider utilization — daily, weekly, monthly. Fix the patterns driving revenue loss before they compound. No-show reduction software built into your operations layer, not bolted on after the fact.',
    href: '/features/analytics',
  },
]

export default function Features() {
  return (
    <section className={styles.section} id="features">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.label}>
            <span className={styles.labelLine} />
            <span className={styles.labelText}>Capabilities</span>
          </div>
          <h2 className={styles.title}>
            Six Capabilities. One Clinic Workflow Software That Runs Start to Finish.
          </h2>
          <p className={styles.intro}>
            Most clinics run their front desk on guesswork and their billing on hope.
            clinIQ is the clinic operations platform that replaces both — a single
            healthcare operations layer sitting on top of your existing EHR, connecting
            patient intake, flow, revenue, and communication without replacing the
            systems your providers already know.
          </p>
        </div>

        <div className={styles.grid}>
          {FEATURES.map((f) => (
            <Link key={f.number} href={f.href} className={styles.card}>
              <div className={styles.number}>{f.number}</div>
              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardDesc}>{f.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
