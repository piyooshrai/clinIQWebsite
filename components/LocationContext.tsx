import styles from './LocationContext.module.css'

export interface ContextPoint {
  title: string
  body: string
}

interface LocationContextProps {
  heading: string
  intro: string
  points: ContextPoint[]
}

export default function LocationContext({ heading, intro, points }: LocationContextProps) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.sectionLabel}>Market context</span>
          <h2 className={styles.sectionTitle}>{heading}</h2>
          <p className={styles.sectionIntro}>{intro}</p>
        </div>

        <div className={styles.grid}>
          {points.map((point, i) => (
            <div key={i} className={styles.card}>
              <span className={styles.cardNumber} aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className={styles.cardTitle}>{point.title}</h3>
              <p className={styles.cardBody}>{point.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
