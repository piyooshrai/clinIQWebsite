import { Fragment } from 'react'
import styles from './Marquee.module.css'

const SPECIALTIES = [
  'Addiction Medicine',
  'Psychiatry',
  'Pain Management',
  'Orthopedic Surgery',
  'Physical Therapy',
  'Urgent Care',
  'Behavioral Health',
  'Cardiology',
  'Dermatology',
  'Primary Care',
  'Chiropractic',
  'Neurology',
  'Pediatrics',
  'Ophthalmology',
  'Spine Surgery',
  'OB-GYN',
]

function MarqueeContent() {
  return (
    <div className={styles.content} aria-hidden="true">
      {SPECIALTIES.map((name, i) => (
        <Fragment key={i}>
          <span className={styles.item}>{name}</span>
          <span className={styles.divider} />
        </Fragment>
      ))}
    </div>
  )
}

export default function Marquee() {
  return (
    <section className={styles.section} aria-label="Specialties served">
      <div className={styles.track}>
        {/* Duplicated for seamless loop */}
        <MarqueeContent />
        <MarqueeContent />
      </div>
    </section>
  )
}
