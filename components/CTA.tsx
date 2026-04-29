import Link from 'next/link'
import styles from './CTA.module.css'

export default function CTA() {
  return (
    <section className={styles.section}>
      <div className={styles.orb} style={{ top: '-200px', left: '-200px', background: 'var(--teal)' }} aria-hidden="true" />
      <div className={styles.orb} style={{ bottom: '-200px', right: '-200px', background: 'var(--blue)' }} aria-hidden="true" />

      <div className={styles.container}>
        <h2 className={styles.title}>
          Ready to Run Your Clinic on a{' '}
          <em className={styles.titleEm}>Real Patient Queue Management System?</em>
        </h2>
        <p className={styles.description}>
          See clinIQ configured for your specialty, your team size, and your EHR.
          Whether you need automated patient intake software, a complete clinic
          operations platform, or just want to stop losing RTM revenue — we&apos;ll
          walk through your exact workflow and show you what changes on day one.
        </p>
        <div className={styles.buttons}>
          <Link href="/demo" className={`${styles.btnBase} ${styles.btnPrimary}`}>
            Request Demo
          </Link>
          <Link href="/contact" className={`${styles.btnBase} ${styles.btnSecondary}`}>
            Contact Sales
          </Link>
        </div>
      </div>
    </section>
  )
}
