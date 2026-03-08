import type { ReactNode } from 'react';
import Link from 'next/link';
import styles from './FeatureCTA.module.css';

interface FeatureCTAProps {
  title?: ReactNode;
  description?: string;
}

export default function FeatureCTA({
  title,
  description = "15-minute walkthrough. We'll configure it for your workflow. No pressure, no 47-slide deck.",
}: FeatureCTAProps) {
  const displayTitle = title ?? (
    <>Ready to see it <em>in action?</em></>
  );

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.content}>
          <h2 className={styles.title}>{displayTitle}</h2>
          <p className={styles.description}>{description}</p>
          <Link href="/demo" className="btn-inner btn-inner-lg btn-inner-primary">
            Schedule Demo
          </Link>
          <span className={styles.note}>No credit card required</span>
        </div>
      </div>
    </section>
  );
}
