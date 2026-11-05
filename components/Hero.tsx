import Link from 'next/link'
import { useTranslations } from 'next-intl'
import styles from './Hero.module.css'

export default function Hero() {
  const t = useTranslations('hero')

  return (
    <section className={styles.hero}>
      <div className={`${styles.orb} ${styles.orb1}`} aria-hidden="true" />
      <div className={`${styles.orb} ${styles.orb2}`} aria-hidden="true" />
      <div className={`${styles.orb} ${styles.orb3}`} aria-hidden="true" />

      <div className={styles.layout}>
        <div className={styles.content}>
          <div className={styles.label}>
            <span className={styles.labelLine} />
            <span className={styles.labelText}>{t('badge')}</span>
          </div>

          <h1 className={styles.title}>
            <span className={styles.titleLine}>
              <span className={styles.titleWord}>{t('title1')}</span>
            </span>
            <span className={styles.titleLine}>
              <span className={styles.titleWord}>
                {t('title2')} <em className={styles.titleEm}>{t('titleEm')}</em>
              </span>
            </span>
          </h1>

          <p className={styles.description}>{t('description')}</p>

          <div className={styles.ctaRow}>
            <Link href="/demo" className={`${styles.btnBase} ${styles.btnPrimary}`}>
              {t('requestDemo')}
            </Link>
            <Link href="/features" className={`${styles.btnBase} ${styles.btnSecondary}`}>
              {t('seeHowItWorks')}
            </Link>
          </div>
        </div>

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
                <div className={styles.statLabel}>{t('dashboard.inClinic')}</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statValue}>4</div>
                <div className={styles.statLabel}>{t('dashboard.waiting')}</div>
              </div>
              <div className={styles.statCard}>
                <div className={`${styles.statValue} ${styles.blue}`}>8</div>
                <div className={styles.statLabel}>{t('dashboard.completed')}</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statValue}>11m</div>
                <div className={styles.statLabel}>{t('dashboard.avgWait')}</div>
              </div>
            </div>

            <div className={styles.queue}>
              <div className={styles.queueHeader}>
                <span className={styles.queueTitle}>{t('dashboard.queue')}</span>
                <span className={styles.queueLive}>
                  <span className={styles.liveDot} />
                  {t('dashboard.live')}
                </span>
              </div>

              <div className={styles.queueItems}>
                <div className={styles.queueItem}>
                  <div className={styles.queuePatient}>
                    <div className={styles.avatar}>ET</div>
                    <div>
                      <div className={styles.patientName}>E. Til</div>
                      <div className={styles.patientDept}>{t('dashboard.general')}</div>
                    </div>
                  </div>
                  <span className={`${styles.statusBadge} ${styles.statusProvider}`}>
                    {t('dashboard.withProvider')}
                  </span>
                </div>

                <div className={styles.queueItem}>
                  <div className={styles.queuePatient}>
                    <div className={styles.avatar}>KJ</div>
                    <div>
                      <div className={styles.patientName}>K. Joh</div>
                      <div className={styles.patientDept}>{t('dashboard.addiction')}</div>
                    </div>
                  </div>
                  <span className={`${styles.statusBadge} ${styles.statusIntake}`}>
                    {t('dashboard.intake')}
                  </span>
                </div>

                <div className={styles.queueItem}>
                  <div className={styles.queuePatient}>
                    <div className={styles.avatar}>RG</div>
                    <div>
                      <div className={styles.patientName}>R. Gar</div>
                      <div className={styles.patientDept}>{t('dashboard.urology')}</div>
                    </div>
                  </div>
                  <span className={`${styles.statusBadge} ${styles.statusWaiting}`}>
                    {t('dashboard.waiting')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator} aria-hidden="true">
        <span className={styles.scrollText}>{t('scroll')}</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  )
}
