'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './LanguageSwitcher.module.css'

// Every English path that has a corresponding /ar/ page
const ARABIC_PATHS = new Set([
  '/features/analytics',
  '/features/check-in',
  '/features/lobbyview',
  '/features/patient-flow',
  '/features/pre-auth',
  '/features/rtm',
  '/features/scheduling',
  '/locations/bahrain',
  '/locations/kuwait',
  '/locations/qatar',
  '/locations/saudi-arabia',
  '/locations/uae',
])

function GlobeIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true" className={styles.globe}>
      <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2" />
      <path d="M7 1c-1.8 2-2.8 3.8-2.8 6s1 4 2.8 6M7 1c1.8 2 2.8 3.8 2.8 6S8.8 11 7 13" stroke="currentColor" strokeWidth="1.2" />
      <path d="M1 7h12" stroke="currentColor" strokeWidth="1.2" />
      <path d="M1.5 4.5h11M1.5 9.5h11" stroke="currentColor" strokeWidth="1" strokeOpacity="0.6" />
    </svg>
  )
}

interface Props {
  variant?: 'nav' | 'inner'
}

export default function LanguageSwitcher({ variant = 'nav' }: Props) {
  const pathname = usePathname()

  // On an Arabic page — offer switch to English
  if (pathname.startsWith('/ar/') || pathname === '/ar') {
    const enPath = pathname.replace(/^\/ar/, '') || '/'
    return (
      <Link
        href={enPath}
        className={`${styles.btn} ${variant === 'inner' ? styles.btnInner : ''}`}
        title="Switch to English"
      >
        <GlobeIcon />
        <span>EN</span>
      </Link>
    )
  }

  // On an English page that has an Arabic counterpart — offer switch to Arabic
  if (ARABIC_PATHS.has(pathname)) {
    return (
      <Link
        href={`/ar${pathname}`}
        className={`${styles.btn} ${variant === 'inner' ? styles.btnInner : ''}`}
        title="Switch to Arabic"
        lang="ar"
      >
        <GlobeIcon />
        <span>AR</span>
      </Link>
    )
  }

  return null
}
