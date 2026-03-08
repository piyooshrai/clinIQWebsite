import styles from './LocationFeatures.module.css'

export type FeatureKey =
  | 'patient-flow'
  | 'check-in'
  | 'rtm'
  | 'pre-auth'
  | 'scheduling'
  | 'analytics'

interface FeatureModule {
  title: string
  description: string
  icon: React.ReactNode
}

const MODULES: Record<FeatureKey, FeatureModule> = {
  'patient-flow': {
    title: 'Patient Flow',
    description:
      'Real-time stage tracking from arrival to discharge. Every staff member sees the same queue without asking.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    ),
  },
  'check-in': {
    title: 'Check-In',
    description:
      'Digital self check-in, pre-populated forms, and instant insurance verification. Minutes become seconds.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  'rtm': {
    title: 'RTM Billing',
    description:
      'Built-in CPT 98975–98981 tracking. $120–150 per eligible patient per month you may not be capturing.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  'pre-auth': {
    title: 'Pre-Authorization',
    description:
      'Smart intake forms, auto-suggest payer rules, and case tracking. Cut hours of phone trees and fax waste.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  'scheduling': {
    title: 'Scheduling',
    description:
      'Multi-provider calendar, waitlist backfill, and automated reminders. Stop losing slots to no-shows.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  'analytics': {
    title: 'Analytics',
    description:
      'Historical bottleneck patterns, wait time trends, and throughput by provider. Data you can act on.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
        <line x1="2" y1="20" x2="22" y2="20" />
      </svg>
    ),
  },
}

interface LocationFeaturesProps {
  features: FeatureKey[]
}

// React import needed for JSX in the module map above
import React from 'react'

export default function LocationFeatures({ features }: LocationFeaturesProps) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.sectionLabel}>What matters here</span>
          <h2 className={styles.sectionTitle}>The modules that move the needle</h2>
        </div>

        <div className={styles.grid}>
          {features.map((key) => {
            const mod = MODULES[key]
            return (
              <div key={key} className={styles.card}>
                <div className={styles.iconWrap} aria-hidden="true">
                  {mod.icon}
                </div>
                <h3 className={styles.cardTitle}>{mod.title}</h3>
                <p className={styles.cardBody}>{mod.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
