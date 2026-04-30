'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import styles from './Nav.module.css'
import LanguageSwitcher from './LanguageSwitcher'
import { trackNavClick } from '@/lib/analytics'

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
  flat?: NavLink[]
  grouped?: NavGroup[]
  extraWide?: boolean
}

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
            <Link
              key={link.href}
              href={link.href}
              className={styles.dropdownLink}
              onClick={() => trackNavClick(group.heading, link.label)}
            >
              <span className={styles.dropdownLabel}>{link.label}</span>
              {link.desc && <span className={styles.dropdownDesc}>{link.desc}</span>}
            </Link>
          ))}
          {group.viewAll && (
            <Link
              href={group.viewAll.href}
              className={styles.viewAll}
              onClick={() => trackNavClick(group.heading, group.viewAll!.label)}
            >
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
          <Link key={link.href} href={link.href} className={styles.mobileGroupLink} onClick={onClose}>
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
              <Link key={link.href} href={link.href} className={styles.mobileGroupLink} onClick={onClose}>
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
  const t = useTranslations('nav')
  const l = useTranslations('nav.links')
  const s = useTranslations('nav.sections')

  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openSection, setOpenSection] = useState<string | null>(null)
  const [desktopOpen, setDesktopOpen] = useState<string | null>(null)

  const navRef = useRef<HTMLElement>(null)
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({})
  const dropdownRefs = useRef<Record<string, HTMLDivElement | null>>({})

  // Build translated nav data inside the component
  const NAV_SECTIONS: NavSection[] = [
    {
      label: t('features'),
      extraWide: true,
      grouped: [
        {
          heading: s('visitOperations'),
          links: [
            { label: l('patientFlow'),    href: '/features/patient-flow',  desc: l('patientFlowDesc') },
            { label: l('checkIn'),        href: '/features/check-in',      desc: l('checkInDesc') },
            { label: l('schedulingLink'), href: '/features/scheduling',    desc: l('schedulingDesc') },
            { label: l('analytics'),      href: '/features/analytics',     desc: l('analyticsDesc') },
          ],
          viewAll: { label: l('allFeatures'), href: '/features' },
        },
        {
          heading: s('revenueCompliance'),
          links: [
            { label: l('rtm'),     href: '/features/rtm',      desc: l('rtmDesc') },
            { label: l('preAuth'), href: '/features/pre-auth', desc: l('preAuthDesc') },
          ],
        },
        {
          heading: s('patientEngagement'),
          links: [
            { label: l('telehealth'),          href: '/features/telehealth',           desc: l('telehealthDesc') },
            { label: l('patientSatisfaction'), href: '/features/patient-satisfaction', desc: l('patientSatisfactionDesc') },
            { label: l('secureMessaging'),     href: '/features/secure-messaging',     desc: l('secureMessagingDesc') },
            { label: l('patientApp'),          href: '/features/patient-app',          desc: l('patientAppDesc') },
          ],
        },
        {
          heading: s('remoteCare'),
          links: [
            { label: l('wearable'),    href: '/features/wearable-integration', desc: l('wearableDesc') },
            { label: l('secureFile'),  href: '/features/secure-file-exchange', desc: l('secureFileDesc') },
          ],
        },
      ],
    },
    {
      label: t('whoWeServe'),
      extraWide: true,
      grouped: [
        {
          heading: s('careSettings'),
          links: [
            { label: l('fqhc'),      href: '/markets/fqhc-community-health',       desc: l('fqhcDesc') },
            { label: l('rural'),     href: '/markets/rural-health',               desc: l('ruralDesc') },
            { label: l('concierge'), href: '/markets/concierge-dpc',              desc: l('conciergeDesc') },
            { label: l('surgery'),   href: '/markets/ambulatory-surgery-centers', desc: l('surgeryDesc') },
          ],
          viewAll: { label: l('allPracticeTypes'), href: '/solutions' },
        },
        {
          heading: s('behavioralHealth'),
          links: [
            { label: l('addictionMedicine'),   href: '/specialties/addiction-medicine', desc: l('addictionMedicineDesc') },
            { label: l('psychiatry'),          href: '/specialties/psychiatry',         desc: l('psychiatryDesc') },
            { label: l('behavioralHealthLink'),href: '/specialties/behavioral-health',  desc: l('behavioralHealthDesc') },
          ],
          viewAll: { label: l('allSpecialties'), href: '/specialties' },
        },
        {
          heading: s('painRehab'),
          links: [
            { label: l('painManagement'),  href: '/specialties/pain-management',  desc: l('painManagementDesc') },
            { label: l('physicalTherapy'), href: '/specialties/physical-therapy', desc: l('physicalTherapyDesc') },
            { label: l('chiropractic'),    href: '/specialties/chiropractic',     desc: l('chiropracticDesc') },
          ],
        },
        {
          heading: s('surgeryProcedures'),
          links: [
            { label: l('orthopedic'),    href: '/specialties/orthopedic-surgery', desc: l('orthopedicDesc') },
            { label: l('spineSurgery'),  href: '/specialties/spine-surgery',      desc: l('spineSurgeryDesc') },
            { label: l('generalSurgery'),href: '/specialties/general-surgery',    desc: l('generalSurgeryDesc') },
          ],
        },
        {
          heading: s('primarySpecialty'),
          links: [
            { label: l('primaryCare'), href: '/specialties/primary-care', desc: l('primaryCareDesc') },
            { label: l('cardiology'),  href: '/specialties/cardiology',   desc: l('cardiologyDesc') },
            { label: l('urgentCare'),  href: '/specialties/urgent-care',  desc: l('urgentCareDesc') },
          ],
        },
      ],
    },
    {
      label: t('compare'),
      extraWide: true,
      grouped: [
        {
          heading: s('patientIntake'),
          links: [
            { label: l('vsPhreesia'),  href: '/compare/phreesia',  desc: l('vsPhreesiaDesc') },
            { label: l('vsClearwave'), href: '/compare/clearwave', desc: l('vsClearwaveDesc') },
          ],
        },
        {
          heading: s('ehr'),
          links: [
            { label: l('vsAthena'),    href: '/compare/athenahealth',    desc: l('vsAthenaDesc') },
            { label: l('vsEcw'),       href: '/compare/eclinicalworks',  desc: l('vsEcwDesc') },
            { label: l('vsNextgen'),   href: '/compare/nextgen',         desc: l('vsNextgenDesc') },
            { label: l('vsAdvancedMd'),href: '/compare/advancedmd',      desc: l('vsAdvancedMdDesc') },
            { label: l('vsTebra'),     href: '/compare/tebra',           desc: l('vsTebraDesc') },
          ],
        },
        {
          heading: s('practiceManagement'),
          links: [
            { label: l('vsSimplePractice'), href: '/compare/simplepractice', desc: l('vsSimplePracticeDesc') },
          ],
          viewAll: { label: l('allComparisons'), href: '/compare' },
        },
        {
          heading: s('queueManagement'),
          links: [
            { label: l('vsQless'),    href: '/compare/qless',    desc: l('vsQlessDesc') },
            { label: 'vs Waitwhile', href: '/compare/waitwhile', desc: 'Full visit tracking' },
          ],
        },
        {
          heading: 'Workflow Type',
          links: [
            { label: 'vs EHR-Only',          href: '/compare/ehr-only',           desc: 'Add operations to any EHR' },
            { label: 'vs Generic Scheduling', href: '/compare/generic-scheduling', desc: 'Beyond the calendar' },
          ],
        },
        {
          heading: 'Manual / Legacy',
          links: [
            { label: 'vs Whiteboards',  href: '/compare/whiteboards',  desc: 'Real-time digital tracking' },
            { label: 'vs Spreadsheets', href: '/compare/spreadsheets', desc: 'Automatic vs manual' },
            { label: 'vs Paper Sign-In',href: '/compare/paper-signin', desc: 'Digital workflow' },
          ],
        },
        {
          heading: 'RTM / RPM',
          links: [
            { label: 'vs Prevounce',       href: '/compare/prevounce',       desc: 'RTM + full clinic ops' },
            { label: 'vs TimeDoc',         href: '/compare/timedoc',         desc: 'Ops layer vs CCM focus' },
            { label: 'vs Optimize Health', href: '/compare/optimize-health', desc: 'Broader than RPM' },
            { label: 'vs ChronicCareIQ',   href: '/compare/chroniccareiq',  desc: 'RTM + visit workflow' },
          ],
        },
      ],
    },
    {
      label: t('locations'),
      grouped: [
        {
          heading: s('northAmerica'),
          links: [
            { label: l('unitedStates'), href: '/locations/united-states', desc: l('unitedStatesDesc') },
            { label: l('canada'),       href: '/locations/canada',        desc: l('canadaDesc') },
          ],
          viewAll: { label: l('allLocations'), href: '/locations' },
        },
        {
          heading: s('middleEast'),
          links: [
            { label: l('uae'),          href: '/locations/uae',          desc: l('uaeDesc') },
            { label: l('saudiArabia'),  href: '/locations/saudi-arabia', desc: l('saudiArabiaDesc') },
            { label: l('qatar'),        href: '/locations/qatar',        desc: l('qatarDesc') },
          ],
        },
        {
          heading: s('uk'),
          links: [
            { label: l('unitedKingdom'), href: '/locations/united-kingdom', desc: l('unitedKingdomDesc') },
          ],
        },
      ],
    },
    {
      label: t('resources'),
      grouped: [
        {
          heading: 'Learn',
          links: [
            { label: 'Blog',                     href: '/blog',                                 desc: 'Insights & best practices' },
            { label: 'ROI Calculator',            href: '/resources/roi-calculator',            desc: 'See your savings' },
            { label: 'RTM Implementation Guide',  href: '/resources/rtm-implementation-guide', desc: 'Step-by-step RTM setup' },
          ],
          viewAll: { label: 'All Resources →', href: '/resources' },
        },
      ],
    },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
              const dropdownId = `nav-dropdown-${section.label.toLowerCase().replace(/\s+/g, '-')}`
              return (
                <div
                  key={section.label}
                  className={styles.navItem}
                  onBlur={(e) => {
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
            <a href="tel:+17203347249" className={styles.contactLink} aria-label="Call clinIQ">
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 3h3l1.5 4-2 1a8 8 0 0 0 4.5 4.5l1-2 4 1.5v3a1 1 0 0 1-1 1A12 12 0 0 1 2 4a1 1 0 0 1 1-1z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              720.334.7249
            </a>
            <a href="mailto:info@cliniqhealthcare.com" className={styles.contactLink} aria-label="Email clinIQ">
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M2 4l6 4 6-4M2 4h12v8H2V4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              info@cliniqhealthcare.com
            </a>
            <LanguageSwitcher />
            <Link href="/demo" className={`${styles.btnPrimary} ${styles.desktopOnly}`}>
              {t('requestDemo')}
            </Link>
            <button
              className={styles.hamburger}
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? t('closeMenu') : t('openMenu')}
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
              {t('requestDemo')}
            </Link>
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
