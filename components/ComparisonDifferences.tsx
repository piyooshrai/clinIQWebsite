import type { ReactNode } from 'react'
import styles from './ComparisonDifferences.module.css'

export interface Difference {
  icon: ReactNode
  title: string
  body: string
}

interface ComparisonDifferencesProps {
  differences: [Difference, Difference, Difference]
}

export default function ComparisonDifferences({ differences }: ComparisonDifferencesProps) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.sectionLabel}>Key differences</span>
          <h2 className={styles.sectionTitle}>Where it actually matters</h2>
        </div>

        <div className={styles.grid}>
          {differences.map((diff, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.iconWrap} aria-hidden="true">
                {diff.icon}
              </div>
              <h3 className={styles.cardTitle}>{diff.title}</h3>
              <p className={styles.cardBody}>{diff.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
