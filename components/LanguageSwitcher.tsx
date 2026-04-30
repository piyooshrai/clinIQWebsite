'use client'

import { useLocale, useTranslations } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { useTransition } from 'react'
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
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  function switchLocale(nextLocale: string) {
    // Strip current locale prefix from pathname so next-intl can re-prefix it
    let cleanPath = pathname
    if (cleanPath.startsWith(`/${locale}/`)) {
      cleanPath = cleanPath.slice(locale.length + 1)
    } else if (cleanPath === `/${locale}`) {
      cleanPath = '/'
    }

    startTransition(() => {
      const prefix = nextLocale === 'en' ? '' : `/${nextLocale}`
      router.push(`${prefix}${cleanPath || '/'}`)
    })
  }

  const btnClass = `${styles.btn} ${variant === 'inner' ? styles.btnInner : ''} ${isPending ? styles.pending : ''}`

  if (locale === 'ar') {
    return (
      <button
        onClick={() => switchLocale('en')}
        className={btnClass}
        title={t('switchToEnglish')}
        lang="en"
      >
        <GlobeIcon />
        <span>EN</span>
      </button>
    )
  }

  return (
    <button
      onClick={() => switchLocale('ar')}
      className={btnClass}
      title={t('switchToArabic')}
      lang="ar"
    >
      <GlobeIcon />
      <span>AR</span>
    </button>
  )
}
