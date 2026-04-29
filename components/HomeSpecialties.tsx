import Link from 'next/link'
import s from './HomeSections.module.css'

const SPECS = [
  {
    tag: 'Urgent Care',
    h3: 'Urgent Care Management Software — Cut LWBS, Crush Wait Times',
    body:
      'Live queue visibility, real-time room status, and digital check-in built for high-volume same-day demand. Your urgent care moves faster when every patient stage is visible.',
    href: '/specialties/urgent-care',
  },
  {
    tag: 'Behavioral Health',
    h3: 'Behavioral Health Clinic Software With RTM and No-Show Reduction',
    body:
      'Missed appointments and uncharged RTM time are the two biggest revenue leaks in behavioral health. clinIQ closes both — automated reminders, RTM compliance tracking, and therapeutic flow management in one system.',
    href: '/specialties/behavioral-health',
  },
  {
    tag: 'Addiction Medicine',
    h3: 'Addiction Medicine — MAT Protocols, RTM Billing, and Zero Gaps in Care',
    body:
      'High-sensitivity workflows need precision operations. clinIQ manages MAT protocol tracking, urine drug screen flow, and RTM billing alongside standard patient queue management — all HIPAA-compliant, all real-time.',
    href: '/specialties/addiction-medicine',
  },
]

export default function HomeSpecialties() {
  return (
    <section className={s.section} id="specialties">
      <div className={s.container}>
        <div className={s.label}>
          <span className={s.labelLine} />
          <span>Specialty Workflows</span>
        </div>
        <h2 className={s.title}>
          One Clinic Operations Platform.{' '}
          <em className={s.titleEm}>Every Specialty. Zero Compromises.</em>
        </h2>
        <p className={s.intro}>
          Generic software breaks in specialty environments. clinIQ is configured around
          the actual workflows of addiction medicine, psychiatry, pain management,
          physical therapy, urgent care, and more. Whether you need urgent care
          management software to cut LWBS rates or behavioral health clinic software
          with no-show reduction and RTM built in — clinIQ runs your specialty the way
          your specialty actually runs.
        </p>

        <div className={s.specGrid}>
          {SPECS.map((spec) => (
            <Link key={spec.tag} href={spec.href} className={s.specCard}>
              <span className={s.specTag}>{spec.tag}</span>
              <h3 className={s.specH3}>{spec.h3}</h3>
              <p className={s.specBody}>{spec.body}</p>
              <span className={s.specLink}>Explore →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
