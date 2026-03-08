import styles from './ComparisonTable.module.css'

export interface TableRow {
  feature: string
  cliniq: string
  competitor: string
  cliniqWins?: boolean   // shows teal check on clinIQ cell; defaults true
  competitorLoses?: boolean // shows muted X on competitor cell; defaults true
}

interface ComparisonTableProps {
  competitorName: string
  rows: TableRow[]
}

function CheckIcon() {
  return (
    <svg
      className={styles.iconCheck}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="8" cy="8" r="7.5" stroke="currentColor" strokeOpacity="0.25" />
      <path
        d="M5 8l2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function XIcon() {
  return (
    <svg
      className={styles.iconX}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="8" cy="8" r="7.5" stroke="currentColor" strokeOpacity="0.2" />
      <path
        d="M5.5 5.5l5 5M10.5 5.5l-5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default function ComparisonTable({ competitorName, rows }: ComparisonTableProps) {
  return (
    <section className={styles.section} id="comparison">
      <div className="container">
        <div className={styles.header}>
          <span className={styles.sectionLabel}>How we compare</span>
          <h2 className={styles.sectionTitle}>Side by side</h2>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr className={styles.theadRow}>
                <th className={styles.thFeature}>Feature</th>
                <th className={styles.thCliniq}>
                  <span className={styles.cliniqLabel}>clinIQ</span>
                </th>
                <th className={styles.thCompetitor}>{competitorName}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => {
                const cliniqWins = row.cliniqWins !== false
                const competitorLoses = row.competitorLoses !== false
                return (
                  <tr key={i} className={i % 2 === 0 ? styles.rowEven : styles.rowOdd}>
                    <td className={styles.tdFeature}>{row.feature}</td>
                    <td className={styles.tdCliniq}>
                      <span className={styles.cellInner}>
                        {cliniqWins && <CheckIcon />}
                        {row.cliniq}
                      </span>
                    </td>
                    <td className={styles.tdCompetitor}>
                      <span className={styles.cellInner}>
                        {competitorLoses && <XIcon />}
                        {row.competitor}
                      </span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
