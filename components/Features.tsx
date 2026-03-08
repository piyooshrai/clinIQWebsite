import Link from 'next/link'
import styles from './Features.module.css'

const FEATURES = [
  {
    number: '01',
    title: 'Patient Check-In',
    description:
      'Kiosk, tablet, or phone — no app downloads required. Patients check in, get a queue position, and see their estimated wait. Your front desk stops fielding "how much longer?" all day.',
    href: '/features/check-in',
  },
  {
    number: '02',
    title: 'Real-Time Patient Flow',
    description:
      "See every patient's exact stage — waiting, intake, with provider, pending discharge. Room status, provider load, bottleneck alerts. Know what's wrong before patients start leaving.",
    href: '/features/patient-flow',
  },
  {
    number: '03',
    title: 'RTM Billing',
    description:
      'Remote Therapeutic Monitoring built in. Automatic CPT 98975–98981 tracking and compliance alerts. Clinics adding $120–$150 per qualifying patient per month with zero extra charting.',
    href: '/features/rtm',
  },
  {
    number: '04',
    title: 'Pre-Authorization',
    description:
      'Smart PA forms that auto-populate from the patient record. Document upload, payer-specific rules, case status tracking. Fewer denials, fewer callbacks, faster treatment starts.',
    href: '/features/pre-auth',
  },
  {
    number: '05',
    title: 'Scheduling',
    description:
      'Multi-provider, multi-location scheduling with online patient booking and automated reminders. Intelligent waitlist fills cancellations automatically — no manual follow-up calls.',
    href: '/features/scheduling',
  },
  {
    number: '06',
    title: 'Analytics',
    description:
      'Wait times, throughput, provider utilization, no-show rates — daily, weekly, monthly. Surface the patterns your EHR never shows you. Fix problems before they compound.',
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
            Six tools. One platform. Every patient, start to finish.
          </h2>
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
