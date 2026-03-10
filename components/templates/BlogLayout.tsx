import type { ReactNode } from 'react'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import BlogHero from '@/components/BlogHero'
import BlogContent from '@/components/BlogContent'
import BlogCTA from '@/components/BlogCTA'
import styles from './BlogLayout.module.css'

export interface BlogLayoutProps {
  title: string
  category: string
  categorySlug: string
  slug: string
  date: string
  readTime: string
  children: ReactNode
  ctaLabel?: string
  ctaDescription?: string
}

export default function BlogLayout({
  title,
  category,
  categorySlug,
  slug,
  date,
  readTime,
  children,
  ctaLabel,
  ctaDescription,
}: BlogLayoutProps) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    datePublished: date,
    url: `https://cliniqhealthcare.com/blog/${slug}`,
    publisher: {
      '@type': 'Organization',
      name: 'clinIQ',
      logo: { '@type': 'ImageObject', url: 'https://cliniqhealthcare.com/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://cliniqhealthcare.com/blog/${slug}` },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cliniqhealthcare.com' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://cliniqhealthcare.com/blog' },
      {
        '@type': 'ListItem',
        position: 3,
        name: category,
        item: `https://cliniqhealthcare.com/blog/category/${categorySlug}`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: title,
        item: `https://cliniqhealthcare.com/blog/${slug}`,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <NavInner />
      <main>
        <div className={styles.breadcrumbBar}>
          <div className="container">
            <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
              <a href="/">Home</a>
              <span aria-hidden="true">/</span>
              <a href="/blog">Blog</a>
              <span aria-hidden="true">/</span>
              <a href={`/blog/category/${categorySlug}`}>{category}</a>
              <span aria-hidden="true">/</span>
              <span aria-current="page" className={styles.breadcrumbCurrent}>{title}</span>
            </nav>
          </div>
        </div>
        <BlogHero
          title={title}
          category={category}
          date={date}
          readTime={readTime}
        />
        <BlogContent>{children}</BlogContent>
        {ctaLabel && (
          <BlogCTA ctaLabel={ctaLabel} description={ctaDescription} />
        )}
      </main>
      <FooterInner />
    </>
  )
}
