import Link from 'next/link'
import styles from './Features.module.css'

const FEATURES = [
  {
    number: '01',
    title: 'Patient Check-In',
    description:
      'Kiosk, tablet, or phone. No app downloads. Patients get a queue number and estimated wait instantly.',
    href: '/features/check-in',
  },
  {
    number: '02',
    title: 'Real-Time Flow',
    description:
      "See every patient's stage. Queue view, provider view, room status. Bottleneck alerts before they happen.",
    href: '/features/patient-flow',
  },
  {
    number: '03',
    title: 'RTM Billing',
    description:
      'Remote Therapeutic Monitoring built in. CPT 98975–98981 tracking. $120–150 per patient monthly.',
    href: '/features/rtm',
  },
  {
    number: '04',
    title: 'Pre-Authorization',
    description:
      'Smart PA forms with auto-suggest. Document upload, case tracking. Fewer denials, faster approvals.',
    href: '/features/pre-auth',
  },
  {
    number: '05',
    title: 'Scheduling',
    description:
      'Multi-provider, multi-location. Online booking, automated reminders, intelligent waitlist management.',
    href: '/features/scheduling',
  },
  {
    number: '06',
    title: 'Analytics',
    description:
      'Wait times, throughput, utilization. Daily, weekly, monthly. Identify problems before patients do.',
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
            Everything your clinic needs. Nothing it doesn&apos;t.
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
