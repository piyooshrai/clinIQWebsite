'use client'

import Link from 'next/link'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Gradient orbs */}
      <div className={`${styles.orb} ${styles.orb1}`} aria-hidden="true" />
      <div className={`${styles.orb} ${styles.orb2}`} aria-hidden="true" />
      <div className={`${styles.orb} ${styles.orb3}`} aria-hidden="true" />

      <div className={styles.container}>
        {/* Label */}
        <div className={styles.label}>
          <span className={styles.labelLine} />
          <span className={styles.labelText}>Clinic Operations Platform</span>
        </div>

        {/* Title */}
        <h1 className={styles.title}>
          <span className={styles.titleLine}>
            <span className={styles.titleWord}>Patient flow</span>
          </span>
          <span className={styles.titleLine}>
            <span className={styles.titleWord}>
              that <em className={styles.titleEm}>actually</em>
            </span>
          </span>
          <span className={styles.titleLine}>
            <span className={styles.titleWord}>works.</span>
          </span>
        </h1>

        <p className={styles.description}>
          From check-in to checkout. Real-time visibility. Zero chaos.
          Built for clinics that refuse to settle for broken workflows.
        </p>

        <div className={styles.ctaRow}>
          <Link href="/demo" className={`${styles.btnBase} ${styles.btnPrimary}`}>
            Request Demo
          </Link>
          <Link href="/features" className={`${styles.btnBase} ${styles.btnSecondary}`}>
            See How It Works
          </Link>
        </div>
      </div>

      {/* Dashboard visual */}
      <div className={styles.visual} aria-hidden="true">
        <div className={styles.dashboard}>
          <div className={styles.dashHeader}>
            <span className={`${styles.dot} ${styles.dotRed}`} />
            <span className={`${styles.dot} ${styles.dotYellow}`} />
            <span className={`${styles.dot} ${styles.dotGreen}`} />
          </div>

          <div className={styles.dashStats}>
            <div className={styles.statCard}>
              <div className={`${styles.statValue} ${styles.teal}`}>12</div>
              <div className={styles.statLabel}>In Clinic</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statValue}>4</div>
              <div className={styles.statLabel}>Waiting</div>
            </div>
            <div className={styles.statCard}>
              <div className={`${styles.statValue} ${styles.blue}`}>8</div>
              <div className={styles.statLabel}>Completed</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statValue}>11m</div>
              <div className={styles.statLabel}>Avg Wait</div>
            </div>
          </div>

          <div className={styles.queue}>
            <div className={styles.queueHeader}>
              <span className={styles.queueTitle}>Patient Queue</span>
              <span className={styles.queueLive}>
                <span className={styles.liveDot} />
                Live
              </span>
            </div>

            <div className={styles.queueItems}>
              <div className={styles.queueItem}>
                <div className={styles.queuePatient}>
                  <div className={styles.avatar}>ET</div>
                  <div>
                    <div className={styles.patientName}>E. Til</div>
                    <div className={styles.patientDept}>General</div>
                  </div>
                </div>
                <span className={`${styles.statusBadge} ${styles.statusProvider}`}>
                  With Provider
                </span>
              </div>

              <div className={styles.queueItem}>
                <div className={styles.queuePatient}>
                  <div className={styles.avatar}>KJ</div>
                  <div>
                    <div className={styles.patientName}>K. Joh</div>
                    <div className={styles.patientDept}>Addiction</div>
                  </div>
                </div>
                <span className={`${styles.statusBadge} ${styles.statusIntake}`}>
                  Intake
                </span>
              </div>

              <div className={styles.queueItem}>
                <div className={styles.queuePatient}>
                  <div className={styles.avatar}>RG</div>
                  <div>
                    <div className={styles.patientName}>R. Gar</div>
                    <div className={styles.patientDept}>Urine</div>
                  </div>
                </div>
                <span className={`${styles.statusBadge} ${styles.statusWaiting}`}>
                  Waiting
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator} aria-hidden="true">
        <span className={styles.scrollText}>Scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  )
}
