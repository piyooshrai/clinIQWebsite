import styles from './Stats.module.css';

const stats = [
  { number: '30', suffix: '%', text: 'Faster patient check-in on average' },
  { number: '25', suffix: '%', text: 'Reduction in patient wait times' },
  { number: '150', prefix: '$', text: 'Average RTM revenue per patient monthly' },
  { number: '1', suffix: 'wk', text: 'From signup to fully operational' },
];

export default function Stats() {
  return (
    <section className={styles.statsSection}>
      <div className={styles.statsContainer}>
        <div className={styles.statsGrid}>
          {stats.map((stat, i) => (
            <div key={i} className={styles.statItem}>
              <div className={styles.statNumber}>
                {stat.prefix && <span>{stat.prefix}</span>}
                {stat.number}
                {stat.suffix && <span>{stat.suffix}</span>}
              </div>
              <p className={styles.statText}>{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
