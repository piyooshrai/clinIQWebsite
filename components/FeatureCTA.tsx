import Link from 'next/link';
import styles from './FeatureCTA.module.css';

interface FeatureCTAProps {
  title?: React.ReactNode;
  description?: string;
}

export default function FeatureCTA({
  title = <>Ready to see it <em>in action?</em></>,
  description = "We'll walk through your clinic's workflow and show you exactly how it works. No pressure.",
}: FeatureCTAProps) {
  return (
    <section className={styles.section}>
      <div className={`${styles.orb} ${styles.orb1}`} />
      <div className={`${styles.orb} ${styles.orb2}`} />

      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <div className={styles.buttons}>
          <Link href="/demo" className="btn btn-hero btn-hero-primary">
            Request Demo
          </Link>
          <Link href="/contact" className="btn btn-hero btn-hero-secondary">
            Contact Sales
          </Link>
        </div>
      </div>
    </section>
  );
}
