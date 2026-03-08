import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Animated gradient orbs */}
      <div className={`${styles.heroOrb} ${styles.heroOrb1}`} />
      <div className={`${styles.heroOrb} ${styles.heroOrb2}`} />
      <div className={`${styles.heroOrb} ${styles.heroOrb3}`} />

      <div className={styles.heroContainer}>
        <div className={styles.heroLabel}>
          <span className={styles.heroLabelLine} />
          <span className={styles.heroLabelText}>Clinic Operations Platform</span>
        </div>

        <h1 className={styles.heroTitle}>
          <span className={styles.heroTitleLine}>
            <span className={styles.heroTitleWord}>Patient flow</span>
          </span>
          <span className={styles.heroTitleLine}>
            <span className={styles.heroTitleWord}>
              that <em>actually</em>
            </span>
          </span>
          <span className={styles.heroTitleLine}>
            <span className={styles.heroTitleWord}>works.</span>
          </span>
        </h1>

        <p className={styles.heroDescription}>
          From check-in to checkout. Real-time visibility. Zero chaos.
          Built for clinics that refuse to settle for broken workflows.
        </p>

        <div className={styles.heroCta}>
          <Link href="/demo" className="btn btn-hero btn-hero-primary">
            Request Demo
          </Link>
          <Link href="/features" className="btn btn-hero btn-hero-secondary">
            See How It Works
          </Link>
        </div>
      </div>

      {/* Dashboard visual */}
      <div className={styles.heroVisual}>
        <div className={styles.heroDashboard}>
          <div className={styles.dashboardHeader}>
            <span className={`${styles.dashboardDot} ${styles.dashboardDotRed}`} />
            <span className={`${styles.dashboardDot} ${styles.dashboardDotYellow}`} />
            <span className={`${styles.dashboardDot} ${styles.dashboardDotGreen}`} />
          </div>

          <div className={styles.dashboardStats}>
            <div className={styles.statCard}>
              <div className={`${styles.statValue} ${styles.statValueTeal}`}>12</div>
              <div className={styles.statLabel}>In Clinic</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statValue}>4</div>
              <div className={styles.statLabel}>Waiting</div>
            </div>
            <div className={styles.statCard}>
              <div className={`${styles.statValue} ${styles.statValueBlue}`}>8</div>
              <div className={styles.statLabel}>Completed</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statValue}>11m</div>
              <div className={styles.statLabel}>Avg Wait</div>
            </div>
          </div>

          <div className={styles.dashboardQueue}>
            <div className={styles.queueHeader}>
              <span className={styles.queueTitle}>Patient Queue</span>
              <span className={styles.queueLive}>
                <span className={styles.queueLiveDot} />
                Live
              </span>
            </div>

            <div className={styles.queueItems}>
              <div className={styles.queueItem}>
                <div className={styles.queuePatient}>
                  <div className={styles.queueAvatar}>ET</div>
                  <div>
                    <div className={styles.queueName}>E. Til</div>
                    <div className={styles.queueDept}>General</div>
                  </div>
                </div>
                <span className={`${styles.queueStatus} ${styles.queueStatusProvider}`}>
                  With Provider
                </span>
              </div>

              <div className={styles.queueItem}>
                <div className={styles.queuePatient}>
                  <div className={styles.queueAvatar}>KJ</div>
                  <div>
                    <div className={styles.queueName}>K. Joh</div>
                    <div className={styles.queueDept}>Addiction</div>
                  </div>
                </div>
                <span className={`${styles.queueStatus} ${styles.queueStatusIntake}`}>
                  Intake
                </span>
              </div>

              <div className={styles.queueItem}>
                <div className={styles.queuePatient}>
                  <div className={styles.queueAvatar}>RG</div>
                  <div>
                    <div className={styles.queueName}>R. Gar</div>
                    <div className={styles.queueDept}>Urine</div>
                  </div>
                </div>
                <span className={`${styles.queueStatus} ${styles.queueStatusWaiting}`}>
                  Waiting
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>Scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
