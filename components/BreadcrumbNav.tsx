import styles from './BreadcrumbNav.module.css'

export interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[]
  baseItems?: BreadcrumbItem[]
}

export default function BreadcrumbNav({ items, baseItems }: BreadcrumbNavProps) {
  const allItems: BreadcrumbItem[] = [
    { label: 'Home', href: '/' },
    ...(baseItems ?? []),
    ...items,
  ]

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: allItems.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `https://cliniqhealthcare.com${item.href === '/' ? '' : item.href}` } : {}),
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className={styles.bar}>
        <div className="container">
          <nav aria-label="Breadcrumb" className={styles.nav}>
            {allItems.map((item, i) => {
              const isLast = i === allItems.length - 1
              return (
                <span key={i} className={styles.item}>
                  {i > 0 && <span className={styles.sep} aria-hidden="true">/</span>}
                  {item.href && !isLast ? (
                    <a href={item.href} className={styles.link}>
                      {item.label}
                    </a>
                  ) : (
                    <span
                      className={isLast ? styles.current : styles.link}
                      aria-current={isLast ? 'page' : undefined}
                    >
                      {item.label}
                    </span>
                  )}
                </span>
              )
            })}
          </nav>
        </div>
      </div>
    </>
  )
}
