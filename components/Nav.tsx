'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
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
  flat?: NavLink[]         // simple grid of links
  grouped?: NavGroup[]     // categorised groups (Features, Specialties, Compare, Markets, Locations, Resources)
  extraWide?: boolean      // use wider dropdown panel
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const NAV_SECTIONS: NavSection[] = [
  {
    label: 'Features',
    extraWide: true,
    grouped: [
      {
        heading: 'Visit Operations',
        links: [
          { label: 'Patient Flow',      href: '/features/patient-flow',  desc: 'Real-time queue tracking' },
          { label: 'Check-In',          href: '/features/check-in',      desc: 'Digital intake & verification' },
          { label: 'Scheduling',        href: '/features/scheduling',    desc: 'Multi-provider calendar' },
          { label: 'Analytics',         href: '/features/analytics',     desc: 'Bottleneck detection' },
        ],
        viewAll: { label: 'All Features →', href: '/features' },
      },
      {
        heading: 'Revenue & Compliance',
        links: [
          { label: 'RTM Billing',        href: '/features/rtm',       desc: 'CPT 98975–98981 automation' },
          { label: 'Pre-Authorization',  href: '/features/pre-auth',  desc: 'Payer approval workflows' },
        ],
      },
      {
        heading: 'Patient Engagement',
        links: [
          { label: 'Telehealth',           href: '/features/telehealth',           desc: 'Virtual visit workflows' },
          { label: 'Patient Satisfaction', href: '/features/patient-satisfaction', desc: 'Feedback & experience scores' },
          { label: 'Secure Messaging',     href: '/features/secure-messaging',     desc: 'HIPAA-compliant messaging' },
          { label: 'Patient App',          href: '/features/patient-app',          desc: 'Mobile patient portal' },
        ],
      },
      {
        heading: 'Remote Care',
        links: [
          { label: 'Wearable Integration', href: '/features/wearable-integration', desc: 'Remote device data sync' },
          { label: 'Secure File Exchange', href: '/features/secure-file-exchange', desc: 'Encrypted document sharing' },
        ],
      },
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
    extraWide: true,
    grouped: [
      {
        heading: 'Patient Intake',
        links: [
          { label: 'vs Phreesia',  href: '/compare/phreesia',  desc: 'Beyond intake to full operations' },
          { label: 'vs Clearwave', href: '/compare/clearwave', desc: 'Kiosk to real-time flow' },
        ],
      },
      {
        heading: 'EHR',
        links: [
          { label: 'vs athenahealth',    href: '/compare/athenahealth',    desc: 'Operations layer for athenaOne' },
          { label: 'vs eClinicalWorks',  href: '/compare/eclinicalworks',  desc: 'Operations layer for eCW' },
          { label: 'vs NextGen',         href: '/compare/nextgen',         desc: 'Operations layer for NextGen' },
          { label: 'vs AdvancedMD',      href: '/compare/advancedmd',      desc: 'Operations layer add-on' },
          { label: 'vs Tebra',           href: '/compare/tebra',           desc: 'Operations vs marketing focus' },
        ],
      },
      {
        heading: 'Practice Management',
        links: [
          { label: 'vs SimplePractice', href: '/compare/simplepractice', desc: 'Multi-provider ops + RTM' },
        ],
        viewAll: { label: 'View all comparisons →', href: '/compare' },
      },
      {
        heading: 'Queue Management',
        links: [
          { label: 'vs QLess',    href: '/compare/qless',    desc: 'Healthcare-specific flow' },
          { label: 'vs Waitwhile', href: '/compare/waitwhile', desc: 'Full visit tracking' },
        ],
      },
      {
        heading: 'Workflow Type',
        links: [
          { label: 'vs EHR-Only',           href: '/compare/ehr-only',           desc: 'Add operations to any EHR' },
          { label: 'vs Generic Scheduling',  href: '/compare/generic-scheduling', desc: 'Beyond the calendar' },
        ],
      },
      {
        heading: 'Manual / Legacy',
        links: [
          { label: 'vs Whiteboards',   href: '/compare/whiteboards',  desc: 'Real-time digital tracking' },
          { label: 'vs Spreadsheets',  href: '/compare/spreadsheets', desc: 'Automatic vs manual' },
          { label: 'vs Paper Sign-In', href: '/compare/paper-signin', desc: 'Digital workflow' },
        ],
      },
      {
        heading: 'RTM / RPM',
        links: [
          { label: 'vs Prevounce',      href: '/compare/prevounce',      desc: 'RTM + full clinic ops' },
          { label: 'vs TimeDoc',        href: '/compare/timedoc',        desc: 'Ops layer vs CCM focus' },
          { label: 'vs Optimize Health', href: '/compare/optimize-health', desc: 'Broader than RPM' },
          { label: 'vs ChronicCareIQ', href: '/compare/chroniccareiq', desc: 'RTM + visit workflow' },
        ],
      },
    ],
  },
  {
    label: 'Markets',
    grouped: [
      {
        heading: 'Care Settings',
        links: [
          { label: 'FQHCs & Community Health', href: '/markets/fqhc-community-health',        desc: 'Sliding scale + RTM billing' },
          { label: 'Rural Health Clinics',      href: '/markets/rural-health',                desc: 'Small team, high volume' },
          { label: 'Concierge & DPC',           href: '/markets/concierge-dpc',               desc: 'Membership model ops' },
          { label: 'Surgery Centers',           href: '/markets/ambulatory-surgery-centers',  desc: 'Pre-op to post-op flow' },
        ],
        viewAll: { label: 'View all markets →', href: '/markets' },
      },
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
      <div className={`${styles.mobileGroupLinks} ${styles.mobileGroupLinksOpen}`}>
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
      <div className={`${styles.mobileGroupLinks} ${styles.mobileGroupLinksOpen}`}>
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
  // Tracks which desktop dropdown is open (keyboard / click driven)
  const [desktopOpen, setDesktopOpen] = useState<string | null>(null)

  const navRef = useRef<HTMLElement>(null)
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({})
  const dropdownRefs = useRef<Record<string, HTMLDivElement | null>>({})

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close desktop dropdown on click outside the nav
  useEffect(() => {
    if (!desktopOpen) return
    function onMouseDown(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setDesktopOpen(null)
      }
    }
    document.addEventListener('mousedown', onMouseDown)
    return () => document.removeEventListener('mousedown', onMouseDown)
  }, [desktopOpen])

  // Close desktop dropdown on Escape and return focus to trigger
  useEffect(() => {
    if (!desktopOpen) return
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        const trigger = triggerRefs.current[desktopOpen!]
        setDesktopOpen(null)
        trigger?.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [desktopOpen])

  function closeMobile() {
    setMobileOpen(false)
    setOpenSection(null)
  }

  function toggleSection(label: string) {
    setOpenSection(openSection === label ? null : label)
  }

  function handleDesktopTriggerClick(label: string) {
    setDesktopOpen(prev => (prev === label ? null : label))
  }

  function handleDesktopTriggerKeyDown(e: React.KeyboardEvent<HTMLButtonElement>, label: string) {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setDesktopOpen(label)
      requestAnimationFrame(() => {
        dropdownRefs.current[label]?.querySelector<HTMLElement>('a')?.focus()
      })
    }
  }

  function handleDropdownKeyDown(e: React.KeyboardEvent<HTMLDivElement>, label: string) {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault()
      const dropdown = dropdownRefs.current[label]
      if (!dropdown) return
      const links = Array.from(dropdown.querySelectorAll<HTMLElement>('a'))
      const idx = links.indexOf(document.activeElement as HTMLElement)
      if (e.key === 'ArrowDown') {
        links[Math.min(idx + 1, links.length - 1)]?.focus()
      } else {
        if (idx <= 0) {
          triggerRefs.current[label]?.focus()
        } else {
          links[idx - 1]?.focus()
        }
      }
    }
  }

  return (
    <>
      <nav ref={navRef} className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.container}>
          <Link href="/" className={styles.logo} onClick={closeMobile}>
            <Image
              src="/clinIQ_new_logo.png"
              alt="clinIQ"
              height={72}
              width={240}
              style={{ height: '72px', width: 'auto' }}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className={styles.links}>
            {NAV_SECTIONS.map((section) => {
              const isOpen = desktopOpen === section.label
              const dropdownId = `nav-dropdown-${section.label.toLowerCase()}`
              return (
                <div
                  key={section.label}
                  className={styles.navItem}
                  onBlur={(e) => {
                    // Close when focus moves outside this nav item
                    if (!e.currentTarget.contains(e.relatedTarget)) {
                      if (desktopOpen === section.label) setDesktopOpen(null)
                    }
                  }}
                >
                  <button
                    ref={el => { triggerRefs.current[section.label] = el }}
                    className={styles.navTrigger}
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={isOpen}
                    aria-controls={dropdownId}
                    onClick={() => handleDesktopTriggerClick(section.label)}
                    onKeyDown={(e) => handleDesktopTriggerKeyDown(e, section.label)}
                  >
                    {section.label}
                    <ChevronIcon open={isOpen} />
                  </button>

                  <div
                    ref={el => { dropdownRefs.current[section.label] = el }}
                    id={dropdownId}
                    className={`${styles.dropdown} ${section.grouped ? (section.extraWide ? styles.dropdownExtraWide : styles.dropdownWide) : ''} ${isOpen ? styles.dropdownOpen : ''}`}
                    onKeyDown={(e) => handleDropdownKeyDown(e, section.label)}
                  >
                    {section.flat && <FlatDropdown links={section.flat} />}
                    {section.grouped && <GroupedDropdown groups={section.grouped} />}
                  </div>
                </div>
              )
            })}
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
