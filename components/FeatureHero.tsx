import type { ReactNode } from 'react';
import Link from 'next/link';
import styles from './FeatureHero.module.css';

interface FeatureHeroProps {
  badge: string;
  title: ReactNode;
  subtitle: string;
}

function ArrowIcon() {
  return (
    <svg
      className={styles.btnIcon}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 10h12m-4-4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function FeatureHero({ badge, title, subtitle }: FeatureHeroProps) {
  return (
    <section className={styles.hero}>
      {/* Background: orbs + grain — from template .hero-bg */}
      <div className={styles.heroBg}>
        <div className={styles.heroOrbTeal} />
        <div className={styles.heroOrbBlue} />
        <div className={styles.heroGrain} />
      </div>

      <div className="container">
        <div className={styles.heroContent}>
          {/* Pill badge — template .hero-badge */}
          <div className={styles.heroBadge}>{badge}</div>

          <h1 className={styles.heroTitle}>{title}</h1>
          <p className={styles.heroSubtitle}>{subtitle}</p>

          <div className={styles.heroActions}>
            <Link href="/demo" className="btn-inner btn-inner-lg btn-inner-primary">
              See It In Action
              <ArrowIcon />
            </Link>
            <Link href="/#features" className="btn-inner btn-inner-lg btn-inner-ghost">
              How It Works
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
