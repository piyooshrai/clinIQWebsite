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
                <li><Link href="/features/scheduling">Scheduling</Link></li>
                <li><Link href="/features/rtm">RTM Billing</Link></li>
                <li><Link href="/features/pre-auth">Pre-Authorization</Link></li>
              </ul>
            </div>

            <div className={styles.footerCol}>
              <h4 className={styles.footerHeading}>Specialties</h4>
              <ul>
                <li><Link href="/specialties/addiction-medicine">Addiction Medicine</Link></li>
                <li><Link href="/specialties/pain-management">Pain Management</Link></li>
                <li><Link href="/specialties/psychiatry">Psychiatry</Link></li>
                <li><Link href="/specialties/urgent-care">Urgent Care</Link></li>
                <li><Link href="/specialties/physical-therapy">Physical Therapy</Link></li>
              </ul>
            </div>

            <div className={styles.footerCol}>
              <h4 className={styles.footerHeading}>Resources</h4>
              <ul>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/resources">Guides</Link></li>
                <li><Link href="/roi-calculator">ROI Calculator</Link></li>
                <li><Link href="/support">Support</Link></li>
              </ul>
            </div>

            <div className={styles.footerCol}>
              <h4 className={styles.footerHeading}>Company</h4>
              <ul>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/privacy">Privacy</Link></li>
                <li><Link href="/terms">Terms</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; 2025 The Algorithm LLC. All rights reserved.</p>
          <p>Built following HIPAA guidelines.</p>
        </div>
      </div>
    </footer>
  );
}
