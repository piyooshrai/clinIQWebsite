import styles from './FeatureProblem.module.css';

interface PainPoint {
  heading: string;
  body: string;
}

interface FeatureProblemProps {
  points: PainPoint[];
}

function AlertIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}

export default function FeatureProblem({ points }: FeatureProblemProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.label}>
            <span className={styles.labelLine} />
            <span className={styles.labelText}>The Problem</span>
          </div>
          <h2 className={styles.title}>Sound familiar?</h2>
        </div>

        <div className={styles.grid}>
          {points.map((point, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.iconWrap}>
                <AlertIcon />
              </div>
              <div className={styles.cardContent}>
                <h3>{point.heading}</h3>
                <p>{point.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
