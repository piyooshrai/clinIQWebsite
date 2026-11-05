import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import styles from './FooterInner.module.css'

export default function FooterInner() {
  const t = useTranslations('footer')
  const l = useTranslations('nav.links')

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
                <li><Link href="/features/patient-flow">{l('patientFlow')}</Link></li>
                <li><Link href="/features/check-in">{l('checkIn')}</Link></li>
                <li><Link href="/features/rtm">{l('rtm')}</Link></li>
                <li><Link href="/features/pre-auth">{t('preAuthShort')}</Link></li>
                <li><Link href="/features/scheduling">{l('schedulingLink')}</Link></li>
                <li><Link href="/features/analytics">{l('analytics')}</Link></li>
                <li><Link href="/features/telehealth">{l('telehealth')}</Link></li>
                <li><Link href="/features/patient-satisfaction">{l('patientSatisfaction')}</Link></li>
                <li><Link href="/features/wearable-integration">{l('wearable')}</Link></li>
                <li><Link href="/features/secure-messaging">{l('secureMessaging')}</Link></li>
                <li><Link href="/features/secure-file-exchange">{l('secureFile')}</Link></li>
                <li><Link href="/features/patient-app">{l('patientApp')}</Link></li>
              </ul>
            </div>

            <div className={styles.footerCol}>
              <h4 className={styles.footerHeading}>{t('specialties')}</h4>
              <ul>
                <li><Link href="/specialties/urgent-care">{l('urgentCare')}</Link></li>
                <li><Link href="/specialties/addiction-medicine">{l('addictionMedicine')}</Link></li>
                <li><Link href="/specialties/psychiatry">{l('psychiatry')}</Link></li>
                <li><Link href="/specialties/behavioral-health">{l('behavioralHealthLink')}</Link></li>
              </ul>
            </div>

            <div className={styles.footerCol}>
              <h4 className={styles.footerHeading}>{t('compare')}</h4>
              <ul>
                <li><Link href="/compare/phreesia">{l('vsPhreesia')}</Link></li>
                <li><Link href="/compare/clearwave">{l('vsClearwave')}</Link></li>
                <li><Link href="/compare/spreadsheets">{l('vsSpreadsheets')}</Link></li>
              </ul>
            </div>

            <div className={styles.footerCol}>
              <h4 className={styles.footerHeading}>{t('locations')}</h4>
              <ul>
                <li><Link href="/locations/united-states">{l('unitedStates')}</Link></li>
                <li><Link href="/locations/uae">{l('uae')}</Link></li>
                <li><Link href="/locations/united-kingdom">{l('unitedKingdom')}</Link></li>
                <li><Link href="/locations/saudi-arabia">{l('saudiArabia')}</Link></li>
              </ul>
            </div>

            <div className={styles.footerCol}>
              <h4 className={styles.footerHeading}>{t('company')}</h4>
              <ul>
                <li><Link href="/resources">{t('resources')}</Link></li>
                <li><Link href="/blog">{t('blog')}</Link></li>
                <li><Link href="/about">{t('about')}</Link></li>
                <li><Link href="/about/the-algorithm">The Algorithm</Link></li>
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
