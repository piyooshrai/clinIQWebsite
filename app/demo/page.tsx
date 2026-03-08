import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import PricingHero from '@/components/PricingHero'
import DemoForm from '@/components/DemoForm'
import styles from './demo.module.css'

export const metadata: Metadata = {
  title: 'Request a Demo — clinIQ',
  description:
    '15 minutes. We\'ll configure clinIQ for your workflow. No 47-slide deck.',
}

export default function DemoPage() {
  return (
    <>
      <NavInner />
      <main>
        <PricingHero
          title="Request a Demo"
          subtitle="15 minutes. We'll configure it for your workflow. No 47-slide deck."
        />

        <section className={styles.section}>
          <div className="container">
            <div className={styles.layout}>
              <div className={styles.formCol}>
                <DemoForm />
              </div>

              <div className={styles.sideCol}>
                <h2 className={styles.sideTitle}>What to expect</h2>
                <ul className={styles.expectList}>
                  <li>A 15-minute walkthrough of clinIQ configured for your specialty</li>
                  <li>We&rsquo;ll show you exactly how it works with your current workflow</li>
                  <li>Your questions answered in real time</li>
                  <li>No pressure. No 47-slide deck.</li>
                </ul>

                <div className={styles.statRow}>
                  <div className={styles.stat}>
                    <span className={styles.statValue}>15 min</span>
                    <span className={styles.statLabel}>Average demo length</span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statValue}>&lt;24 hrs</span>
                    <span className={styles.statLabel}>Time to hear back</span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statValue}>Days</span>
                    <span className={styles.statLabel}>Implementation time</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterInner />
    </>
  )
}
