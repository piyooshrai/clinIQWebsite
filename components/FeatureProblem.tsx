import styles from './FeatureProblem.module.css';

interface PainPoint {
  heading: string;
  body: string;
}

interface FeatureProblemProps {
  points: PainPoint[];
}

export default function FeatureProblem({ points }: FeatureProblemProps) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.sectionLabel}>The Problem</span>
          <h2 className={styles.sectionTitle}>Sound familiar?</h2>
          <p className={styles.sectionDesc}>
            These aren&apos;t edge cases. They happen every day in clinics like yours.
          </p>
        </div>

        <div className={styles.grid}>
          {points.map((point, i) => (
            <div key={i} className={styles.card}>
              <span className={styles.dot} aria-hidden="true" />
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
