import styles from './FeatureHowItWorks.module.css';

interface Step {
  title: string;
  body: string;
}

interface FeatureHowItWorksProps {
  steps: [Step, Step, Step];
}

export default function FeatureHowItWorks({ steps }: FeatureHowItWorksProps) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.sectionLabel}>How It Works</span>
          <h2 className={styles.sectionTitle}>Three steps. That&apos;s it.</h2>
        </div>

        <div className={styles.steps}>
          {steps.map((step, i) => (
            <div key={i} className={styles.step}>
              <div className={styles.stepCircle}>
                <span className={styles.stepNum}>{i + 1}</span>
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepBody}>{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
