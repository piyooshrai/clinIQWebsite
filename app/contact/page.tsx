import type { Metadata } from 'next'
import Link from 'next/link'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import PricingHero from '@/components/PricingHero'
import ContactForm from '@/components/ContactForm'
import styles from './contact.module.css'

export const metadata: Metadata = {
  title: 'Contact Us — clinIQ',
  description: 'Questions about clinIQ? We respond within 24 hours. Reach out via form or email.',
}

export default function ContactPage() {
  return (
    <>
      <NavInner />
      <main>
        <PricingHero
          title="Contact Us"
          subtitle="Questions? We respond within 24 hours."
        />

        <section className={styles.section}>
          <div className="container">
            <div className={styles.layout}>
              {/* Left — form */}
              <div className={styles.formCol}>
                <h2 className={styles.colTitle}>Send us a message</h2>
                <ContactForm />
              </div>

              {/* Right — info */}
              <div className={styles.infoCol}>
                <h2 className={styles.colTitle}>Get in touch</h2>

                <div className={styles.infoGroup}>
                  <span className={styles.infoLabel}>Email</span>
                  <a href="mailto:hello@cliniqhealthcare.com" className={styles.infoLink}>
                    hello@cliniqhealthcare.com
                  </a>
                </div>

                <div className={styles.infoGroup}>
                  <span className={styles.infoLabel}>Location</span>
                  <span className={styles.infoValue}>Colorado, USA</span>
                </div>

                <div className={styles.infoGroup}>
                  <span className={styles.infoLabel}>Demos</span>
                  <Link href="/demo" className={styles.infoLink}>
                    Request a 15-minute demo &rarr;
                  </Link>
                </div>

                <div className={styles.responseNote}>
                  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.25" />
                    <path d="M8 5v3.5l2 1.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
                  </svg>
                  <p>We typically respond within a few hours during business days (MT).</p>
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
