import type { Metadata } from 'next'
import Link from 'next/link'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import PricingHero from '@/components/PricingHero'
import styles from './about.module.css'

export const metadata: Metadata = {
  title: 'About clinIQ — The Algorithm LLC',
  description:
    'clinIQ is a clinic operations platform built by The Algorithm LLC. Patient flow, check-in, RTM billing — the operational layer your EHR doesn\'t handle.',
  alternates: { canonical: 'https://cliniqhealthcare.com/about' },
  openGraph: {
    title: 'About clinIQ — The Algorithm LLC',
    description:
      'clinIQ is a clinic operations platform built by The Algorithm LLC. Patient flow, check-in, RTM billing — the operational layer your EHR doesn\'t handle.',
    type: 'website',
    url: 'https://cliniqhealthcare.com/about',
  },
}

export default function AboutPage() {
  return (
    <>
      <NavInner />
      <main>
        <PricingHero
          title="About clinIQ"
          subtitle="Built by people who watched clinics struggle."
        />

        <article className={styles.content}>
          <div className="container">
            <div className={styles.prose}>

              <section className={styles.section}>
                <h2 className={styles.h2}>We&rsquo;re not another EHR</h2>
                <p>clinIQ is a clinic operations platform. We work alongside your EHR, not instead of it.</p>
                <p>Patient flow, check-in, scheduling, RTM billing, pre-authorization &mdash; the operational layer your EHR doesn&rsquo;t do well.</p>
              </section>

              <section className={styles.section}>
                <h2 className={styles.h2}>Why we built this</h2>
                <ul className={styles.list}>
                  <li>We watched clinics drown in &ldquo;who&rsquo;s next?&rdquo; chaos</li>
                  <li>We saw front desk staff burn out from being human tracking systems</li>
                  <li>We found clinics leaving $150/patient/month on the table because no one told them RTM existed</li>
                  <li>We built clinIQ to fix it</li>
                </ul>
              </section>

              <section className={styles.section}>
                <h2 className={styles.h2}>The Algorithm LLC</h2>
                <p>clinIQ is built by <strong>The Algorithm LLC</strong>, based in Colorado.</p>
                <p>Healthcare technology focused. Our portfolio:</p>
                <ul className={styles.list}>
                  <li><strong>clinIQ</strong> &mdash; clinic operations platform</li>
                  <li><strong>Claire</strong> &mdash; voice AI for healthcare</li>
                  <li><strong>Vizier</strong> &mdash; healthcare analytics</li>
                </ul>
              </section>

              <section className={styles.section}>
                <h2 className={styles.h2}>Our approach</h2>
                <ul className={styles.list}>
                  <li>Built following HIPAA guidelines</li>
                  <li>Works with any EHR &mdash; no rip-and-replace</li>
                  <li>Implementation in days, not months</li>
                  <li>Transparent pricing, no per-click fees</li>
                </ul>
              </section>

              <div className={styles.cta}>
                <Link href="/demo" className="btn-inner btn-inner-lg btn-inner-primary">
                  See clinIQ in action
                </Link>
              </div>

            </div>
          </div>
        </article>
      </main>
      <FooterInner />
    </>
  )
}
