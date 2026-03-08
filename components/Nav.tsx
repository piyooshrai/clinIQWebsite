'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from './Nav.module.css'

const NAV_ITEMS = [
  {
    label: 'Features',
    items: [
      { label: 'Patient Flow', href: '/features/patient-flow', desc: 'Real-time queue tracking' },
      { label: 'Check-In', href: '/features/check-in', desc: 'Digital intake & verification' },
      { label: 'RTM Billing', href: '/features/rtm', desc: 'CPT 98975–98981 automation' },
      { label: 'Pre-Auth', href: '/features/pre-auth', desc: 'Payer approval workflows' },
      { label: 'Scheduling', href: '/features/scheduling', desc: 'Multi-provider calendar' },
      { label: 'Analytics', href: '/features/analytics', desc: 'Bottleneck detection' },
    ],
  },
  {
    label: 'Specialties',
    items: [
      { label: 'Urgent Care', href: '/specialties/urgent-care', desc: 'Cut LWBS, crush wait times' },
      { label: 'Addiction Medicine', href: '/specialties/addiction-medicine', desc: 'MAT protocol workflows' },
      { label: 'Psychiatry', href: '/specialties/psychiatry', desc: 'No-show reduction & RTM' },
      { label: 'Behavioral Health', href: '/specialties/behavioral-health', desc: 'Therapeutic flow management' },
    ],
  },
  {
    label: 'Compare',
    items: [
      { label: 'vs Phreesia', href: '/compare/phreesia', desc: 'Track beyond check-in' },
      { label: 'vs Clearwave', href: '/compare/clearwave', desc: 'Full operations vs check-in' },
      { label: 'vs Spreadsheets', href: '/compare/spreadsheets', desc: 'Real-time vs manual' },
    ],
  },
  {
    label: 'Locations',
    items: [
      { label: 'United States', href: '/locations/united-states', desc: 'Insurance & prior auth' },
      { label: 'UAE', href: '/locations/uae', desc: 'NABIDH, medical tourism' },
      { label: 'United Kingdom', href: '/locations/united-kingdom', desc: 'Private practice efficiency' },
      { label: 'Saudi Arabia', href: '/locations/saudi-arabia', desc: 'Vision 2030 digitalization' },
    ],
  },
]

function ChevronIcon({ open }: { open?: boolean }) {
  return (
    <svg
      className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`}
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
    >
      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openSection, setOpenSection] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function closeMobile() {
    setMobileOpen(false)
    setOpenSection(null)
  }

  function toggleSection(label: string) {
    setOpenSection(openSection === label ? null : label)
  }

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.container}>
          <Link href="/" className={styles.logo} onClick={closeMobile}>
            <span className={styles.logoClin}>clin</span>
            <span className={styles.logoIq}>IQ</span>
          </Link>

          {/* Desktop nav with dropdowns */}
          <div className={styles.links}>
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className={styles.navItem}>
                <button className={styles.navTrigger} type="button" aria-haspopup="true">
                  {item.label}
                  <ChevronIcon />
                </button>

                <div className={styles.dropdown}>
                  <div className={styles.dropdownInner}>
                    {item.items.map((link) => (
                      <Link key={link.href} href={link.href} className={styles.dropdownLink}>
                        <span className={styles.dropdownLabel}>{link.label}</span>
                        <span className={styles.dropdownDesc}>{link.desc}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <Link href="/blog" className={styles.link}>Blog</Link>
            <Link href="/resources" className={styles.link}>Resources</Link>
          </div>

          <div className={styles.cta}>
            <Link href="/login" className={`${styles.btnGhost} ${styles.desktopOnly}`}>Sign In</Link>
            <Link href="/demo" className={`${styles.btnPrimary} ${styles.desktopOnly}`}>Request Demo</Link>
            <button
              className={styles.hamburger}
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile accordion menu */}
      <div
        className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileMenuOpen : ''}`}
        aria-hidden={!mobileOpen}
      >
        <div className={styles.mobileScroll}>
          {NAV_ITEMS.map((item) => {
            const isOpen = openSection === item.label
            return (
              <div key={item.label} className={styles.mobileGroup}>
                <button
                  className={styles.mobileGroupToggle}
                  type="button"
                  onClick={() => toggleSection(item.label)}
                  aria-expanded={isOpen}
                >
                  {item.label}
                  <ChevronIcon open={isOpen} />
                </button>

                <div className={`${styles.mobileGroupLinks} ${isOpen ? styles.mobileGroupLinksOpen : ''}`}>
                  {item.items.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={styles.mobileGroupLink}
                      onClick={closeMobile}
                    >
                      <span className={styles.mobileLinkLabel}>{link.label}</span>
                      <span className={styles.mobileLinkDesc}>{link.desc}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )
          })}

          <Link href="/blog" className={styles.mobileGroupToggle} onClick={closeMobile}>Blog</Link>
          <Link href="/resources" className={styles.mobileGroupToggle} onClick={closeMobile}>Resources</Link>

          <div className={styles.mobileActions}>
            <Link href="/demo" className="btn-inner btn-inner-lg btn-inner-primary" onClick={closeMobile}>
              Request Demo
            </Link>
            <Link href="/login" className={styles.mobileLogin} onClick={closeMobile}>Sign In</Link>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className={styles.backdrop} onClick={closeMobile} aria-hidden="true" />
      )}
    </>
  )
}
