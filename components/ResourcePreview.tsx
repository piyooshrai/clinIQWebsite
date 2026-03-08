import styles from './ResourcePreview.module.css'

interface ResourcePreviewProps {
  items: string[]
}

function CheckIcon() {
  return (
    <svg className={styles.checkIcon} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="7.5" stroke="currentColor" strokeOpacity="0.2" />
      <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function DocIcon() {
  return (
    <svg className={styles.docIcon} viewBox="0 0 48 60" fill="none" aria-hidden="true">
      <rect x="1" y="1" width="46" height="58" rx="4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 18h28M10 26h28M10 34h20M10 42h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M32 1v12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function ResourcePreview({ items }: ResourcePreviewProps) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.left}>
            <span className={styles.sectionLabel}>What&rsquo;s inside</span>
            <h2 className={styles.sectionTitle}>Everything you need to act on this</h2>
            <ul className={styles.list}>
              {items.map((item, i) => (
                <li key={i} className={styles.listItem}>
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.right}>
            <div className={styles.previewCard}>
              <DocIcon />
              <p className={styles.previewLabel}>Fill the form to access</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
