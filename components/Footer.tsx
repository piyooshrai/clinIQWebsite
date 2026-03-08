import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerGrid}>
          {/* Brand column */}
          <div className={styles.footerBrand}>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoClin}>clin</span>
              <span className={styles.logoIq}>IQ</span>
            </Link>
            <p>
              Clinic operations platform. Patient flow, check-in, scheduling, RTM,
              and pre-authorization. Built to work with your EHR.
            </p>
          </div>

          {/* Product column */}
          <div className={styles.footerColumn}>
            <h4>Product</h4>
            <ul className={styles.footerLinks}>
              <li><Link href="/features/patient-flow">Patient Flow</Link></li>
              <li><Link href="/features/check-in">Check-In</Link></li>
              <li><Link href="/features/rtm">RTM Billing</Link></li>
              <li><Link href="/features/pre-auth">Pre-Auth</Link></li>
            </ul>
          </div>

          {/* Specialties column */}
          <div className={styles.footerColumn}>
            <h4>Specialties</h4>
            <ul className={styles.footerLinks}>
              <li><Link href="/specialties/addiction">Addiction Medicine</Link></li>
              <li><Link href="/specialties/psychiatry">Psychiatry</Link></li>
              <li><Link href="/specialties/pain">Pain Management</Link></li>
              <li><Link href="/specialties/ortho">Orthopedics</Link></li>
            </ul>
          </div>

          {/* Integrations column */}
          <div className={styles.footerColumn}>
            <h4>Integrations</h4>
            <ul className={styles.footerLinks}>
              <li><Link href="/integrations/ritten">Ritten</Link></li>
              <li><Link href="/integrations/ecw">eClinicalWorks</Link></li>
              <li><Link href="/integrations/athena">Athena</Link></li>
              <li><Link href="/integrations">All Integrations</Link></li>
            </ul>
          </div>

          {/* Company column */}
          <div className={styles.footerColumn}>
            <h4>Company</h4>
            <ul className={styles.footerLinks}>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/blog">Blog</Link></li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.footerCopyright}>
            &copy; 2025 The Algorithm LLC. All rights reserved.
          </p>
          <div className={styles.footerLegal}>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/security">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
