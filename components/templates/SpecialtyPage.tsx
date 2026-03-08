import type { ReactNode } from 'react'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import SpecialtyHero from '@/components/SpecialtyHero'
import SpecialtyPain from '@/components/SpecialtyPain'
import SpecialtyWorkflow from '@/components/SpecialtyWorkflow'
import SpecialtyCTA from '@/components/SpecialtyCTA'
import type { WorkflowStage } from '@/components/SpecialtyWorkflow'
import styles from './SpecialtyPage.module.css'

export interface SpecialtyPageProps {
  specialty: string
  badge?: string
  title: ReactNode
  subtitle: string
  painHeading: string
  painIntro: string
  painPoints: string[]
  workflowStages: WorkflowStage[]
  ctaLabel?: string
  ctaDescription?: string
  breadcrumb?: { label: string; href: string }[]
}

export default function SpecialtyPage({
  specialty,
  badge,
  title,
  subtitle,
  painHeading,
  painIntro,
  painPoints,
  workflowStages,
  ctaLabel,
  ctaDescription,
  breadcrumb,
}: SpecialtyPageProps) {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cliniq.com' },
      { '@type': 'ListItem', position: 2, name: 'Specialties', item: 'https://cliniq.com/specialties' },
      ...(breadcrumb ?? [{ label: specialty, href: '' }]).map((b, i) => ({
        '@type': 'ListItem',
        position: i + 3,
        name: b.label,
        item: b.href ? `https://cliniq.com${b.href}` : '',
      })),
    ],
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `clinIQ for ${specialty}`,
    description: subtitle,
    provider: {
      '@type': 'Organization',
      name: 'clinIQ',
      url: 'https://cliniq.com',
    },
    serviceType: 'Healthcare Software',
    areaServed: 'US',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <NavInner />
      <main>
        {breadcrumb && (
          <div className={styles.breadcrumbBar}>
            <div className="container">
              <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
                <a href="/">Home</a>
                <span aria-hidden="true">/</span>
                <a href="/specialties">Specialties</a>
                {breadcrumb.map((b) => (
                  <span key={b.href}>
                    <span aria-hidden="true">/</span>
                    <a href={b.href}>{b.label}</a>
                  </span>
                ))}
              </nav>
            </div>
          </div>
        )}
        <SpecialtyHero badge={badge ?? specialty} title={title} subtitle={subtitle} />
        <SpecialtyPain heading={painHeading} intro={painIntro} points={painPoints} />
        <SpecialtyWorkflow stages={workflowStages} />
        <SpecialtyCTA ctaLabel={ctaLabel ?? `See clinIQ for ${specialty}`} description={ctaDescription} />
      </main>
      <FooterInner />
    </>
  )
}
