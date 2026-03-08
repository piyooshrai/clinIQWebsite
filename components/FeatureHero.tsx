import Link from 'next/link';
import styles from './FeatureHero.module.css';

interface FeatureHeroProps {
  badge: string;
  title: React.ReactNode;
  subtitle: string;
}

export default function FeatureHero({ badge, title, subtitle }: FeatureHeroProps) {
  return (
    <section className={styles.hero}>
      <div className={`${styles.orb} ${styles.orb1}`} />
      <div className={`${styles.orb} ${styles.orb2}`} />

      <div className={styles.container}>
        <div className={styles.badge}>
          <span className={styles.badgeLine} />
          <span className={styles.badgeText}>{badge}</span>
        </div>

        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>

        <div className={styles.cta}>
          <Link href="/demo" className="btn btn-hero btn-hero-primary">
            Request Demo
          </Link>
          <Link href="/#features" className="btn btn-hero btn-hero-secondary">
            All Features
          </Link>
        </div>
      </div>
    </section>
  );
}
