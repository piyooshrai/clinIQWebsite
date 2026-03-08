import Link from 'next/link'
import styles from './Footer.module.css'

const COLUMNS = [
  {
    heading: 'Product',
    links: [
      { label: 'Patient Flow',  href: '/features/patient-flow' },
      { label: 'Check-In',      href: '/features/check-in' },
      { label: 'RTM Billing',   href: '/features/rtm' },
      { label: 'Pre-Auth',      href: '/features/pre-auth' },
    ],
  },
  {
    heading: 'Specialties',
    links: [
      { label: 'Addiction Medicine', href: '/specialties/addiction' },
      { label: 'Psychiatry',         href: '/specialties/psychiatry' },
      { label: 'Pain Management',    href: '/specialties/pain' },
      { label: 'Orthopedics',        href: '/specialties/ortho' },
    ],
  },
  {
    heading: 'Integrations',
    links: [
      { label: 'Ritten',           href: '/integrations/ritten' },
      { label: 'eClinicalWorks',   href: '/integrations/ecw' },
      { label: 'Athena',           href: '/integrations/athena' },
      { label: 'All Integrations', href: '/integrations' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About',   href: '/about' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Contact', href: '/contact' },
      { label: 'Blog',    href: '/blog' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoClin}>clin</span>
              <span className={styles.logoIq}>IQ</span>
            </Link>
            <p className={styles.brandDesc}>
              Clinic operations platform. Patient flow, check-in, scheduling,
              RTM, and pre-authorization. Built to work with your EHR.
            </p>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <div key={col.heading} className={styles.column}>
              <h4>{col.heading}</h4>
              <ul className={styles.links}>
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; 2025 The Algorithm LLC. All rights reserved.
          </p>
          <nav className={styles.legal} aria-label="Legal links">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/security">Security</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
