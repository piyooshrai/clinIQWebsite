import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import PricingHero from '@/components/PricingHero'
import styles from './legal.module.css'

export const metadata: Metadata = {
  title: 'Privacy Policy — clinIQ',
  description: 'clinIQ Privacy Policy. How we collect, use, and protect your information.',
}

export default function PrivacyPage() {
  return (
    <>
      <NavInner />
      <main>
        <PricingHero
          title="Privacy Policy"
          subtitle="Last updated: March 2026"
        />

        <article className={styles.content}>
          <div className="container">
            <div className={styles.prose}>

              <section className={styles.section}>
                <h2 className={styles.h2}>Information We Collect</h2>
                <p>We collect information you provide directly, including name, email address, clinic name, and any messages submitted through our contact or demo request forms. We also collect information automatically when you visit our website, such as IP address, browser type, pages visited, and referring URLs through standard web analytics tools.</p>
                <p>For customers using the clinIQ platform, we collect operational data necessary to provide the service, including patient flow records, scheduling data, and billing workflow information as configured by your clinic.</p>
              </section>

              <section className={styles.section}>
                <h2 className={styles.h2}>How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className={styles.list}>
                  <li>Respond to inquiries and demo requests</li>
                  <li>Provide, maintain, and improve the clinIQ platform</li>
                  <li>Send service-related communications</li>
                  <li>Analyze usage to improve our products</li>
                  <li>Comply with legal obligations</li>
                </ul>
                <p>We do not sell your personal information to third parties.</p>
              </section>

              <section className={styles.section}>
                <h2 className={styles.h2}>Data Security</h2>
                <p>clinIQ is built following HIPAA guidelines. We implement administrative, technical, and physical safeguards to protect information against unauthorized access, disclosure, alteration, or destruction. Data is encrypted in transit and at rest.</p>
                <p>While we take security seriously, no system is completely secure. We encourage you to use strong passwords and report any suspected security issues to hello@cliniqhealthcare.com.</p>
              </section>

              <section className={styles.section}>
                <h2 className={styles.h2}>Third-Party Services</h2>
                <p>We may use third-party service providers to help operate our business (hosting, analytics, email delivery). These providers are contractually obligated to handle your information only as necessary to provide their services and may not use it for other purposes.</p>
                <p>Our website may contain links to third-party sites. We are not responsible for the privacy practices of those sites.</p>
              </section>

              <section className={styles.section}>
                <h2 className={styles.h2}>Your Rights</h2>
                <p>You have the right to access, correct, or delete personal information we hold about you. To exercise these rights, contact us at hello@cliniqhealthcare.com. We will respond to requests within 30 days.</p>
                <p>If you are a patient whose data is processed through the clinIQ platform, please contact your healthcare provider directly regarding your health information rights.</p>
              </section>

              <section className={styles.section}>
                <h2 className={styles.h2}>Contact Us</h2>
                <p>For questions about this Privacy Policy, contact:</p>
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
