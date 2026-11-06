import styles from './MoreLocations.module.css'

type Loc = [slug: string, name: string]

const GROUPS: { region: string; items: Loc[] }[] = [
  {
    region: 'United States',
    items: [['united-states', 'All of the US'], ['atlanta', 'Atlanta'], ['chicago', 'Chicago'], ['denver', 'Denver'], ['houston', 'Houston'],
      ['los-angeles', 'Los Angeles'], ['miami', 'Miami'], ['new-york', 'New York'], ['phoenix', 'Phoenix']],
  },
  {
    region: 'United Kingdom & Ireland',
    items: [['united-kingdom', 'All of the UK'], ['london', 'London'], ['manchester', 'Manchester'], ['birmingham', 'Birmingham'],
      ['edinburgh', 'Edinburgh'], ['ireland', 'Ireland']],
  },
  {
    region: 'Canada & Australia',
    items: [['canada', 'All of Canada'], ['toronto', 'Toronto'], ['vancouver', 'Vancouver'], ['montreal', 'Montréal'], ['australia', 'Australia']],
  },
  {
    region: 'Middle East',
    items: [['uae', 'UAE'], ['dubai', 'Dubai'], ['abu-dhabi', 'Abu Dhabi'], ['saudi-arabia', 'Saudi Arabia'], ['riyadh', 'Riyadh'],
      ['jeddah', 'Jeddah'], ['dammam', 'Dammam'], ['qatar', 'Qatar'], ['kuwait', 'Kuwait'], ['bahrain', 'Bahrain'], ['oman', 'Oman'],
      ['egypt', 'Egypt'], ['jordan', 'Jordan'], ['lebanon', 'Lebanon'], ['israel', 'Israel']],
  },
  {
    region: 'Europe',
    items: [['france', 'France'], ['germany', 'Germany'], ['netherlands', 'Netherlands'], ['belgium', 'Belgium'], ['spain', 'Spain'],
      ['portugal', 'Portugal'], ['italy', 'Italy'], ['switzerland', 'Switzerland'], ['austria', 'Austria']],
  },
]

/** Cross-links between location pages, so each one is reachable from more than the /locations index. */
export default function MoreLocations({ current }: { current: string }) {
  return (
    <section className={styles.section} aria-labelledby="more-locations">
      <div className="container">
        <h2 id="more-locations" className={styles.title}>More locations</h2>
        <div className={styles.grid}>
          {GROUPS.map((g) => (
            <div key={g.region} className={styles.group}>
              <span className={styles.region}>{g.region}</span>
              <ul className={styles.list}>
                {g.items.filter(([slug]) => slug !== current).map(([slug, name]) => (
                  <li key={slug}>
                    <a href={`/locations/${slug}`}>{name}</a>
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
