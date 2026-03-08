import Link from 'next/link';
import styles from './CTA.module.css';

export default function CTA() {
  return (
    <section className={styles.ctaSection}>
      <div className={`${styles.ctaOrb} ${styles.ctaOrb1}`} />
      <div className={`${styles.ctaOrb} ${styles.ctaOrb2}`} />

      <div className={styles.ctaContainer}>
        <h2 className={styles.ctaTitle}>
          Ready to fix your <em>patient flow?</em>
        </h2>
        <p className={styles.ctaDescription}>
          See clinIQ configured for your clinic. We&apos;ll walk through your workflow
          and show you exactly how it works.
        </p>
        <div className={styles.ctaButtons}>
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
