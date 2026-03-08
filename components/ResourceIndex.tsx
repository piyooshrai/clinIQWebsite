import Link from 'next/link'
import styles from './ResourceIndex.module.css'

export interface ResourceItem {
  slug: string
  type: string
  title: string
  description: string
}

interface ResourceIndexProps {
  resources: ResourceItem[]
}

const TYPE_ICONS: Record<string, React.ReactNode> = {
  Checklist: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>
  ),
  Guide: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  ),
  Calculator: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2" /><line x1="8" y1="6" x2="16" y2="6" /><line x1="8" y1="10" x2="8" y2="10" /><line x1="12" y1="10" x2="12" y2="10" /><line x1="16" y1="10" x2="16" y2="10" /><line x1="8" y1="14" x2="8" y2="14" /><line x1="12" y1="14" x2="12" y2="14" /><line x1="16" y1="14" x2="16" y2="14" /><line x1="8" y1="18" x2="16" y2="18" />
    </svg>
  ),
}

export default function ResourceIndex({ resources }: ResourceIndexProps) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {resources.map((resource) => (
            <Link key={resource.slug} href={`/resources/${resource.slug}`} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.typeBadge}>{resource.type}</span>
                <div className={styles.typeIcon} aria-hidden="true">
                  {TYPE_ICONS[resource.type]}
                </div>
              </div>
              <h2 className={styles.cardTitle}>{resource.title}</h2>
              <p className={styles.cardDesc}>{resource.description}</p>
              <span className={styles.cardCTA}>
                {resource.type === 'Calculator' ? 'Open calculator' : 'Get free access'}
                <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
