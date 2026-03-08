'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './Nav.module.css';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoClin}>clin</span>
          <span className={styles.logoIq}>IQ</span>
        </Link>

        <div className={styles.navLinks}>
          <Link href="#features" className={styles.navLink}>Features</Link>
          <Link href="#specialties" className={styles.navLink}>Specialties</Link>
          <Link href="#integrations" className={styles.navLink}>Integrations</Link>
          <Link href="#pricing" className={styles.navLink}>Pricing</Link>
        </div>

        <div className={styles.navCta}>
          <Link href="/login" className="btn btn-ghost">Sign In</Link>
          <Link href="/demo" className="btn btn-primary">Request Demo</Link>
        </div>
      </div>
    </nav>
  );
}
