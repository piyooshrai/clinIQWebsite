import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import PricingHero from '@/components/PricingHero'
import styles from '../privacy/legal.module.css'

export const metadata: Metadata = {
  title: 'Terms of Service — clinIQ',
  description: 'clinIQ Terms of Service. Governed by the laws of Colorado.',
}

export default function TermsPage() {
  return (
    <>
      <NavInner />
      <main>
        <PricingHero
          title="Terms of Service"
          subtitle="Last updated: March 2026"
        />

        <article className={styles.content}>
          <div className="container">
            <div className={styles.prose}>

              <section className={styles.section}>
                <h2 className={styles.h2}>Acceptance of Terms</h2>
                <p>By accessing or using the clinIQ platform (&ldquo;Service&rdquo;), you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the Service. These terms apply to all users, including clinic administrators, staff, and any authorized representatives.</p>
              </section>

              <section className={styles.section}>
                <h2 className={styles.h2}>Description of Service</h2>
                <p>clinIQ is a clinic operations platform that provides patient flow management, digital check-in, scheduling, remote therapeutic monitoring (RTM) billing support, pre-authorization workflows, and analytics. The Service is provided by The Algorithm LLC, a Colorado limited liability company.</p>
                <p>We reserve the right to modify or discontinue the Service at any time with reasonable notice.</p>
              </section>

              <section className={styles.section}>
                <h2 className={styles.h2}>User Responsibilities</h2>
                <p>You are responsible for:</p>
                <ul className={styles.list}>
                  <li>Maintaining the confidentiality of your account credentials</li>
                  <li>Ensuring all users under your account comply with these terms</li>
                  <li>Using the Service in compliance with applicable laws, including HIPAA</li>
                  <li>Providing accurate information during registration and use</li>
                  <li>Not using the Service for any unlawful or unauthorized purpose</li>
                </ul>
                <p>You may not reverse engineer, decompile, or attempt to extract the source code of the Service.</p>
              </section>

              <section className={styles.section}>
                <h2 className={styles.h2}>Payment Terms</h2>
                <p>Subscription fees are billed monthly or annually as selected at signup. Fees are due at the beginning of each billing period. We reserve the right to suspend access for accounts with outstanding balances after reasonable notice.</p>
                <p>One-time fees (such as implementation) are due prior to service delivery. All fees are non-refundable except as required by law or as explicitly stated in your service agreement.</p>
                <p>We reserve the right to change pricing with 30 days&rsquo; written notice.</p>
              </section>

              <section className={styles.section}>
                <h2 className={styles.h2}>Limitation of Liability</h2>
                <p>To the maximum extent permitted by applicable law, The Algorithm LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of revenue, data, or goodwill, arising from your use of the Service.</p>
                <p>Our total cumulative liability for any claims arising under these terms shall not exceed the fees paid by you in the twelve months prior to the event giving rise to the claim.</p>
              </section>

              <section className={styles.section}>
                <h2 className={styles.h2}>Termination</h2>
                <p>Either party may terminate the Service with 30 days&rsquo; written notice. We may immediately suspend or terminate access if you materially breach these terms, fail to pay fees, or engage in conduct that could harm the Service or other users.</p>
                <p>Upon termination, your right to use the Service ceases. We will provide a reasonable opportunity to export your data as required by applicable law.</p>
              </section>

              <section className={styles.section}>
                <h2 className={styles.h2}>Governing Law</h2>
                <p>These Terms of Service are governed by the laws of the State of Colorado, without regard to its conflict of law provisions. Any disputes arising under these terms shall be resolved in the courts of Colorado.</p>
              </section>

              <section className={styles.section}>
                <h2 className={styles.h2}>Contact Us</h2>
                <p>For questions about these Terms of Service, contact:</p>
                <p><strong>The Algorithm LLC</strong><br />Colorado, USA<br /><a href="mailto:hello@cliniqhealthcare.com" className={styles.link}>hello@cliniqhealthcare.com</a></p>
              </section>

            </div>
          </div>
        </article>
      </main>
      <FooterInner />
    </>
  )
}
