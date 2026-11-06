import { getAllSpecialties } from '@/lib/all-specialties'
import styles from './SpecialtyDirectory.module.css'

/** A–Z list linking every specialty page, so none is reachable only from the sitemap. */
export default function SpecialtyDirectory() {
  const all = getAllSpecialties().sort((a, b) => a.name.localeCompare(b.name))
  const groups = new Map<string, typeof all>()
  for (const s of all) {
    const letter = s.name.charAt(0).toUpperCase()
    groups.set(letter, [...(groups.get(letter) ?? []), s])
  }

  return (
    <section className={styles.section} aria-labelledby="specialty-directory">
      <div className="container">
        <h2 id="specialty-directory" className={styles.title}>Specialties A–Z</h2>
        <p className={styles.intro}>
          Every specialty clinIQ supports, with the workflows, billing and prior authorization details for each.
        </p>
        <div className={styles.grid}>
          {Array.from(groups.entries()).map(([letter, items]) => (
            <div key={letter} className={styles.group}>
              <span className={styles.letter}>{letter}</span>
              <ul className={styles.list}>
                {items.map((s) => (
                  <li key={s.slug}>
                    <a href={`/specialties/${s.slug}`}>{s.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
