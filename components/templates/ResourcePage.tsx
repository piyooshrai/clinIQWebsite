import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import ResourceHero from '@/components/ResourceHero'
import ResourceForm from '@/components/ResourceForm'
import ResourcePreview from '@/components/ResourcePreview'
import styles from './ResourcePage.module.css'

export interface ResourcePageField {
  name: string
  label: string
  type: 'email' | 'text' | 'select'
  placeholder?: string
  options?: string[]
  required?: boolean
}

export interface ResourcePageProps {
  resourceSlug: string
  title: string
  subtitle: string
  category: string
  badge?: string
  previewItems: string[]
  formFields: ResourcePageField[]
  submitLabel?: string
  successMessage?: string
  relatedResources?: { title: string; href: string; category: string }[]
}

export default function ResourcePage({
  resourceSlug,
  title,
  subtitle,
  category,
  previewItems,
  formFields,
  submitLabel = 'Download Free Resource',
  successMessage = 'Check your inbox — your resource is on its way.',
  relatedResources,
}: ResourcePageProps) {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cliniqhealthcare.com' },
      { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://cliniqhealthcare.com/resources' },
      {
        '@type': 'ListItem',
        position: 3,
        name: title,
        item: `https://cliniqhealthcare.com/resources/${resourceSlug}`,
      },
    ],
  }

  const creativeWorkSchema = {
    '@context': 'https://schema.org',
    '@type': 'DigitalDocument',
    name: title,
    description: subtitle,
    publisher: {
      '@type': 'Organization',
      name: 'clinIQ',
      url: 'https://cliniqhealthcare.com',
    },
    genre: category,
    url: `https://cliniqhealthcare.com/resources/${resourceSlug}`,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkSchema) }}
      />
      <NavInner />
      <main>
        <div className={styles.breadcrumbBar}>
          <div className="container">
            <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
              <a href="/">Home</a>
              <span aria-hidden="true">/</span>
              <a href="/resources">Resources</a>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{title}</span>
            </nav>
          </div>
        </div>
        <ResourceHero type={category} title={title} subtitle={subtitle} />
        <section className={styles.body}>
          <div className="container">
            <div className={styles.grid}>
              <div className={styles.preview}>
                <ResourcePreview items={previewItems} />
              </div>
              <div className={styles.form}>
                <ResourceForm
                  resourceSlug={resourceSlug}
                  resourceTitle={title}
                  fields={formFields}
                  submitLabel={submitLabel}
                  successMessage={successMessage}
                />
              </div>
            </div>
          </div>
        </section>
        {relatedResources && relatedResources.length > 0 && (
          <section className={styles.related}>
            <div className="container">
              <h2 className={styles.relatedHeading}>More Resources</h2>
              <ul className={styles.relatedList}>
                {relatedResources.map((r) => (
                  <li key={r.href}>
                    <a href={r.href} className={styles.relatedLink}>
                      <span className={styles.relatedCategory}>{r.category}</span>
                      <span className={styles.relatedTitle}>{r.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </main>
      <FooterInner />
    </>
  )
}
