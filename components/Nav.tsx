'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from './Nav.module.css'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoClin}>clin</span>
          <span className={styles.logoIq}>IQ</span>
        </Link>

        <div className={styles.links}>
          <Link href="#features" className={styles.link}>Features</Link>
          <Link href="#specialties" className={styles.link}>Specialties</Link>
          <Link href="#integrations" className={styles.link}>Integrations</Link>
          <Link href="#pricing" className={styles.link}>Pricing</Link>
        </div>

        <div className={styles.cta}>
          <Link href="/login" className={styles.btnGhost}>Sign In</Link>
          <Link href="/demo" className={styles.btnPrimary}>Request Demo</Link>
        </div>
      </div>
    </nav>
  )
}
