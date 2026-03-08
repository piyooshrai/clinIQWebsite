import styles from './Marquee.module.css';

const specialties = [
  'Addiction Medicine',
  'Psychiatry',
  'Pain Management',
  'Orthopedics',
  'Physical Therapy',
  'Infusion Centers',
  'Urgent Care',
  'Behavioral Health',
];

function MarqueeTrack({ prefix }: { prefix: string }) {
  return (
    <div className={styles.marqueeContent}>
      {specialties.map((specialty, i) => (
        <span key={`${prefix}-item-${i}`} className={styles.marqueeItem}>
          {specialty}
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <section className={styles.marqueeSection}>
      <div className={styles.marquee}>
        {/* Duplicate content for seamless loop */}
        <MarqueeTrack prefix="a" />
        <MarqueeTrack prefix="b" />
      </div>
    </section>
  );
}
