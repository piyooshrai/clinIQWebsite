import Link from 'next/link';
import styles from './NavInner.module.css';

export default function NavInner() {
  return (
    <nav className={styles.nav}>
      <div className="container">
        <div className={styles.navInner}>
          <Link href="/" className={styles.logo}>
            clin<span>IQ</span>
          </Link>

          <div className={styles.navLinks}>
            <Link href="/features/patient-flow" className={styles.navLink}>Features</Link>
            <Link href="/specialties/urgent-care" className={styles.navLink}>Specialties</Link>
            <Link href="/compare/phreesia" className={styles.navLink}>Compare</Link>
            <Link href="/blog" className={styles.navLink}>Blog</Link>
          </div>

          <div className={styles.navActions}>
            <Link href="/login" className={styles.loginLink}>Log in</Link>
            <Link href="/demo" className="btn-inner btn-inner-sm btn-inner-primary">
              Get Demo
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
