import Link from 'next/link';
import styles from './FooterInner.module.css';

export default function FooterInner() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          <div>
            <Link href="/" className={styles.footerBrand}>
              clin<span>IQ</span>
            </Link>
            <p className={styles.footerTagline}>Clinic operations that just work.</p>
          </div>

          <div className={styles.footerLinks}>
            <div className={styles.footerCol}>
              <h4 className={styles.footerHeading}>Product</h4>
              <ul>
                <li><Link href="/features/patient-flow">Patient Flow</Link></li>
                <li><Link href="/features/check-in">Check-In</Link></li>
                <li><Link href="/features/rtm">RTM Billing</Link></li>
                <li><Link href="/features/pre-auth">Pre-Auth</Link></li>
                <li><Link href="/features/scheduling">Scheduling</Link></li>
                <li><Link href="/features/analytics">Analytics</Link></li>
              </ul>
            </div>

            <div className={styles.footerCol}>
              <h4 className={styles.footerHeading}>Specialties</h4>
              <ul>
                <li><Link href="/specialties/urgent-care">Urgent Care</Link></li>
                <li><Link href="/specialties/addiction-medicine">Addiction Medicine</Link></li>
                <li><Link href="/specialties/psychiatry">Psychiatry</Link></li>
                <li><Link href="/specialties/behavioral-health">Behavioral Health</Link></li>
              </ul>
            </div>

            <div className={styles.footerCol}>
              <h4 className={styles.footerHeading}>Compare</h4>
              <ul>
                <li><Link href="/compare/phreesia">vs Phreesia</Link></li>
                <li><Link href="/compare/clearwave">vs Clearwave</Link></li>
                <li><Link href="/compare/spreadsheets">vs Spreadsheets</Link></li>
              </ul>
            </div>

            <div className={styles.footerCol}>
              <h4 className={styles.footerHeading}>Locations</h4>
              <ul>
                <li><Link href="/locations/united-states">United States</Link></li>
                <li><Link href="/locations/uae">UAE</Link></li>
                <li><Link href="/locations/united-kingdom">United Kingdom</Link></li>
                <li><Link href="/locations/saudi-arabia">Saudi Arabia</Link></li>
              </ul>
            </div>

            <div className={styles.footerCol}>
              <h4 className={styles.footerHeading}>Company</h4>
              <ul>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/pricing">Pricing</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; 2026 The Algorithm LLC. All rights reserved.</p>
          <p>Built following HIPAA guidelines.</p>
        </div>
      </div>
    </footer>
  );
}
