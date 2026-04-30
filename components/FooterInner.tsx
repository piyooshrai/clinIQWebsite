import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import styles from './FooterInner.module.css'

export default function FooterInner() {
  const t = useTranslations('footer')

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          <div>
            <Link href="/" className={styles.footerBrand}>
              <Image
                src="/clinIQ_new_logo.png"
                alt="clinIQ"
                height={64}
                width={214}
                style={{ height: '64px', width: 'auto' }}
              />
            </Link>
            <p className={styles.footerTagline}>{t('tagline')}</p>
            <ul className={styles.footerContact}>
              <li><a href="tel:+17203347249">720.334.7249</a></li>
              <li><a href="mailto:info@cliniqhealthcare.com">info@cliniqhealthcare.com</a></li>
              <li><a href="mailto:sales@cliniqhealthcare.com">sales@cliniqhealthcare.com</a></li>
              <li><a href="mailto:support@cliniqhealthcare.com">support@cliniqhealthcare.com</a></li>
            </ul>
          </div>

          <div className={styles.footerLinks}>
            <div className={styles.footerCol}>
              <h4 className={styles.footerHeading}>{t('product')}</h4>
              <ul>
                <li><Link href="/features/patient-flow">Patient Flow</Link></li>
                <li><Link href="/features/check-in">Check-In</Link></li>
                <li><Link href="/features/rtm">RTM Billing</Link></li>
                <li><Link href="/features/pre-auth">Pre-Auth</Link></li>
                <li><Link href="/features/scheduling">Scheduling</Link></li>
                <li><Link href="/features/analytics">Analytics</Link></li>
                <li><Link href="/features/telehealth">Telehealth</Link></li>
                <li><Link href="/features/patient-satisfaction">Patient Satisfaction</Link></li>
                <li><Link href="/features/wearable-integration">Wearable Integration</Link></li>
                <li><Link href="/features/secure-messaging">Secure Messaging</Link></li>
                <li><Link href="/features/secure-file-exchange">Secure File Exchange</Link></li>
                <li><Link href="/features/patient-app">Patient App</Link></li>
              </ul>
            </div>

            <div className={styles.footerCol}>
              <h4 className={styles.footerHeading}>{t('specialties')}</h4>
              <ul>
                <li><Link href="/specialties/urgent-care">Urgent Care</Link></li>
                <li><Link href="/specialties/addiction-medicine">Addiction Medicine</Link></li>
                <li><Link href="/specialties/psychiatry">Psychiatry</Link></li>
                <li><Link href="/specialties/behavioral-health">Behavioral Health</Link></li>
              </ul>
            </div>

            <div className={styles.footerCol}>
              <h4 className={styles.footerHeading}>{t('compare')}</h4>
              <ul>
                <li><Link href="/compare/phreesia">vs Phreesia</Link></li>
                <li><Link href="/compare/clearwave">vs Clearwave</Link></li>
                <li><Link href="/compare/spreadsheets">vs Spreadsheets</Link></li>
              </ul>
            </div>

            <div className={styles.footerCol}>
              <h4 className={styles.footerHeading}>{t('locations')}</h4>
              <ul>
                <li><Link href="/locations/united-states">United States</Link></li>
                <li><Link href="/locations/uae">UAE</Link></li>
                <li><Link href="/locations/united-kingdom">United Kingdom</Link></li>
                <li><Link href="/locations/saudi-arabia">Saudi Arabia</Link></li>
              </ul>
            </div>

            <div className={styles.footerCol}>
              <h4 className={styles.footerHeading}>{t('company')}</h4>
              <ul>
                <li><Link href="/resources">{t('resources')}</Link></li>
                <li><Link href="/blog">{t('blog')}</Link></li>
                <li><Link href="/about">{t('about')}</Link></li>
                <li><Link href="/contact">{t('contact')}</Link></li>
                <li><Link href="/pricing">{t('pricing')}</Link></li>
                <li><Link href="/privacy">{t('privacy')}</Link></li>
                <li><Link href="/terms">{t('terms')}</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>{t('copyright')}</p>
          <p>{t('hipaa')}</p>
        </div>
      </div>
    </footer>
  )
}
