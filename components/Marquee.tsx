import styles from './Marquee.module.css'

const SPECIALTIES = [
  'Addiction Medicine',
  'Psychiatry',
  'Pain Management',
  'Orthopedics',
  'Physical Therapy',
  'Infusion Centers',
  'Urgent Care',
  'Behavioral Health',
]

function MarqueeContent() {
  return (
    <div className={styles.content} aria-hidden="true">
      {SPECIALTIES.map((name, i) => (
        <>
          <span key={`item-${i}`} className={styles.item}>{name}</span>
          <span key={`div-${i}`} className={styles.divider} />
        </>
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
