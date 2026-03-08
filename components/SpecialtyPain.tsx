import styles from './SpecialtyPain.module.css'

interface SpecialtyPainProps {
  heading: string
  intro: string
  points: string[]
}

export default function SpecialtyPain({ heading, intro, points }: SpecialtyPainProps) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.sectionLabel}>The Reality</span>
          <h2 className={styles.sectionTitle}>{heading}</h2>
          <p className={styles.sectionIntro}>{intro}</p>
        </div>

        <ul className={styles.painList}>
          {points.map((point, i) => (
            <li key={i} className={styles.painItem}>
              <span className={styles.dot} aria-hidden="true" />
              <p>{point}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
