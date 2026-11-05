'use client'

import { useLocale, useTranslations } from 'next-intl'
import { usePathname } from '@/i18n/navigation'
import { useTransition } from 'react'
import { hasSpanishVersion } from '@/lib/es-pages'
import styles from './LanguageSwitcher.module.css'

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
  const locale = useLocale()
  const t = useTranslations('languageSwitcher')
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  // A full page load, so menus and forms re-render in the new language too.
  function switchLocale(nextLocale: 'en' | 'ar' | 'es') {
    const path = nextLocale === 'es' && !hasSpanishVersion(pathname) ? '/' : pathname
    const target = nextLocale === 'en' ? path : `/${nextLocale}${path === '/' ? '' : path}`
    document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=31536000; samesite=lax`
    startTransition(() => {
      window.location.assign(target + window.location.search)
    })
  }

  const btnClass = `${styles.btn} ${variant === 'inner' ? styles.btnInner : ''} ${isPending ? styles.pending : ''}`
  const options = (['en', 'es', 'ar'] as const).filter((option) => option !== locale)
  const titles = { en: t('switchToEnglish'), es: t('switchToSpanish'), ar: t('switchToArabic') }

  return (
    <div className={styles.group}>
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => switchLocale(option)}
          className={btnClass}
          title={titles[option]}
          aria-label={titles[option]}
          lang={option}
        >
          <GlobeIcon />
          <span>{option.toUpperCase()}</span>
        </button>
      ))}
    </div>
  )
}
