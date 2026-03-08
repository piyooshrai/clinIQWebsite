'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from './Nav.module.css'
import LanguageSwitcher from './LanguageSwitcher'

// ─── Types ────────────────────────────────────────────────────────────────────

interface NavLink {
  label: string
  href: string
  desc?: string
}

interface NavGroup {
  heading: string
  links: NavLink[]
  viewAll?: NavLink
}

interface NavSection {
  label: string
  flat?: NavLink[]       // simple grid of links (Features, Compare)
  grouped?: NavGroup[]   // categorised groups (Specialties, Locations, Resources)
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const NAV_SECTIONS: NavSection[] = [
  {
    label: 'Features',
    flat: [
      { label: 'Patient Flow',      href: '/features/patient-flow', desc: 'Real-time queue tracking' },
      { label: 'Check-In',          href: '/features/check-in',     desc: 'Digital intake & verification' },
      { label: 'Scheduling',        href: '/features/scheduling',   desc: 'Multi-provider calendar' },
      { label: 'RTM Billing',       href: '/features/rtm',          desc: 'CPT 98975–98981 automation' },
      { label: 'Pre-Authorization', href: '/features/pre-auth',     desc: 'Payer approval workflows' },
      { label: 'Analytics',         href: '/features/analytics',    desc: 'Bottleneck detection' },
      { label: 'LobbyView',         href: '/features/lobbyview',    desc: 'Patient-facing wait display' },
    ],
  },
  {
    label: 'Specialties',
    grouped: [
      {
        heading: 'Behavioral Health',
        links: [
          { label: 'Addiction Medicine', href: '/specialties/addiction-medicine', desc: 'MAT protocol workflows' },
          { label: 'Psychiatry',         href: '/specialties/psychiatry',         desc: 'No-show reduction & RTM' },
          { label: 'Behavioral Health',  href: '/specialties/behavioral-health',  desc: 'Therapeutic flow management' },
        ],
        viewAll: { label: 'View all specialties →', href: '/specialties' },
      },
      {
        heading: 'Pain & Rehabilitation',
        links: [
          { label: 'Pain Management',  href: '/specialties/pain-management',  desc: 'High-volume procedure flow' },
          { label: 'Physical Therapy', href: '/specialties/physical-therapy', desc: 'Multi-patient room tracking' },
          { label: 'Chiropractic',     href: '/specialties/chiropractic',     desc: 'High-volume intake' },
        ],
      },
      {
        heading: 'Surgery & Procedures',
        links: [
          { label: 'Orthopedic Surgery', href: '/specialties/orthopedic-surgery', desc: 'Pre-op & post-op flow' },
          { label: 'Spine Surgery',      href: '/specialties/spine-surgery',      desc: 'Conservative care tracking' },
          { label: 'General Surgery',    href: '/specialties/general-surgery',    desc: 'OR-clinic coordination' },
        ],
      },
      {
        heading: 'Primary & Specialty Care',
        links: [
          { label: 'Primary Care', href: '/specialties/primary-care', desc: 'Same-day demand management' },
          { label: 'Cardiology',   href: '/specialties/cardiology',   desc: 'Echo & device coordination' },
          { label: 'Urgent Care',  href: '/specialties/urgent-care',  desc: 'Cut LWBS, crush wait times' },
        ],
      },
    ],
  },
  {
    label: 'Compare',
    flat: [
      { label: 'vs Phreesia',      href: '/compare/phreesia',      desc: 'Track beyond check-in' },
      { label: 'vs Clearwave',     href: '/compare/clearwave',     desc: 'Full operations vs check-in' },
      { label: 'vs Tebra',         href: '/compare/tebra',         desc: 'Real-time vs static' },
      { label: 'vs SimplePractice',href: '/compare/simplepractice', desc: 'Clinical ops vs notes' },
      { label: 'vs athenahealth',  href: '/compare/athenahealth',  desc: 'Flow layer vs EHR' },
      { label: 'View all →',       href: '/compare',               desc: 'All comparisons' },
    ],
  },
  {
    label: 'Locations',
    grouped: [
      {
        heading: 'North America',
        links: [
          { label: 'United States', href: '/locations/united-states', desc: 'Insurance & prior auth' },
          { label: 'Canada',        href: '/locations/canada',        desc: 'Provincial billing workflows' },
        ],
        viewAll: { label: 'View all locations →', href: '/locations' },
      },
      {
        heading: 'Middle East',
        links: [
          { label: 'UAE',          href: '/locations/uae',          desc: 'NABIDH, medical tourism' },
          { label: 'Saudi Arabia', href: '/locations/saudi-arabia', desc: 'Vision 2030 digitalization' },
          { label: 'Qatar',        href: '/locations/qatar',        desc: 'Hamad Health workflows' },
        ],
      },
      {
        heading: 'Europe',
        links: [
          { label: 'United Kingdom', href: '/locations/united-kingdom', desc: 'Private practice efficiency' },
        ],
      },
    ],
  },
  {
    label: 'Resources',
    grouped: [
      {
        heading: 'Learn',
        links: [
          { label: 'Blog',                   href: '/blog',                                  desc: 'Insights & best practices' },
          { label: 'ROI Calculator',         href: '/resources/roi-calculator',             desc: 'See your savings' },
          { label: 'RTM Implementation Guide', href: '/resources/rtm-implementation-guide', desc: 'Step-by-step RTM setup' },
        ],
        viewAll: { label: 'All Resources →', href: '/resources' },
      },
    ],
  },
]

// ─── Icons ────────────────────────────────────────────────────────────────────

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

// ─── Dropdown content ─────────────────────────────────────────────────────────

function FlatDropdown({ links }: { links: NavLink[] }) {
  return (
    <div className={styles.dropdownInner}>
      {links.map((link) => (
        <Link key={link.href} href={link.href} className={styles.dropdownLink}>
          <span className={styles.dropdownLabel}>{link.label}</span>
          {link.desc && <span className={styles.dropdownDesc}>{link.desc}</span>}
        </Link>
      ))}
    </div>
  )
}

function GroupedDropdown({ groups }: { groups: NavGroup[] }) {
  return (
    <div className={styles.groupedInner}>
      {groups.map((group) => (
        <div key={group.heading} className={styles.group}>
          <div className={styles.groupHeading}>{group.heading}</div>
          {group.links.map((link) => (
            <Link key={link.href} href={link.href} className={styles.dropdownLink}>
              <span className={styles.dropdownLabel}>{link.label}</span>
              {link.desc && <span className={styles.dropdownDesc}>{link.desc}</span>}
            </Link>
          ))}
          {group.viewAll && (
            <Link href={group.viewAll.href} className={styles.viewAll}>
              {group.viewAll.label}
            </Link>
          )}
        </div>
      ))}
    </div>
  )
}

// ─── Mobile grouped content ───────────────────────────────────────────────────

function MobileGroupLinks({
  section,
  isOpen,
  onClose,
}: {
  section: NavSection
  isOpen: boolean
  onClose: () => void
}) {
  if (!isOpen) return null

  if (section.flat) {
    return (
      <div className={styles.mobileGroupLinks}>
        {section.flat.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={styles.mobileGroupLink}
            onClick={onClose}
          >
            <span className={styles.mobileLinkLabel}>{link.label}</span>
            {link.desc && <span className={styles.mobileLinkDesc}>{link.desc}</span>}
          </Link>
        ))}
      </div>
    )
  }

  if (section.grouped) {
    return (
      <div className={styles.mobileGroupLinks}>
        {section.grouped.map((group) => (
          <div key={group.heading} className={styles.mobileCategory}>
            <div className={styles.mobileCategoryHeading}>{group.heading}</div>
            {group.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={styles.mobileGroupLink}
                onClick={onClose}
              >
                <span className={styles.mobileLinkLabel}>{link.label}</span>
                {link.desc && <span className={styles.mobileLinkDesc}>{link.desc}</span>}
              </Link>
            ))}
            {group.viewAll && (
              <Link href={group.viewAll.href} className={styles.mobileViewAll} onClick={onClose}>
                {group.viewAll.label}
              </Link>
            )}
          </div>
        ))}
      </div>
    )
  }

  return null
}

// ─── Main component ───────────────────────────────────────────────────────────

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

          {/* Desktop nav */}
          <div className={styles.links}>
            {NAV_SECTIONS.map((section) => (
              <div key={section.label} className={styles.navItem}>
                <button className={styles.navTrigger} type="button" aria-haspopup="true">
                  {section.label}
                  <ChevronIcon />
                </button>

                <div className={`${styles.dropdown} ${section.grouped ? styles.dropdownWide : ''}`}>
                  {section.flat && <FlatDropdown links={section.flat} />}
                  {section.grouped && <GroupedDropdown groups={section.grouped} />}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.cta}>
            <LanguageSwitcher />
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

      {/* Mobile accordion */}
      <div
        className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileMenuOpen : ''}`}
        aria-hidden={!mobileOpen}
      >
        <div className={styles.mobileScroll}>
          {NAV_SECTIONS.map((section) => {
            const isOpen = openSection === section.label
            return (
              <div key={section.label} className={styles.mobileGroup}>
                <button
                  className={styles.mobileGroupToggle}
                  type="button"
                  onClick={() => toggleSection(section.label)}
                  aria-expanded={isOpen}
                >
                  {section.label}
                  <ChevronIcon open={isOpen} />
                </button>
                <MobileGroupLinks section={section} isOpen={isOpen} onClose={closeMobile} />
              </div>
            )
          })}

          <div className={styles.mobileActions}>
            <Link href="/demo" className="btn-inner btn-inner-lg btn-inner-primary" onClick={closeMobile}>
              Request Demo
            </Link>
            <Link href="/login" className={styles.mobileLogin} onClick={closeMobile}>Sign In</Link>
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className={styles.backdrop} onClick={closeMobile} aria-hidden="true" />
      )}
    </>
  )
}
