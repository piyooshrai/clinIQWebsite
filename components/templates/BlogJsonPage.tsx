import type { Metadata } from 'next'
import { renderBody } from '@/lib/renderContent'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import BlogHero from '@/components/BlogHero'
import BlogCTA from '@/components/BlogCTA'
import css from './BlogJsonPage.module.css'

// ── Types ─────────────────────────────────────────────────────────────────────

export interface BlogPostData {
  slug: string
  category: string
  wordCount: number
  author: string
  publishDate: string // "YYYY-MM-DD"
  meta: { title: string; description: string }
  hero: { h1: string; subhead: string }
  content: readonly { h2: string; body: string }[]
  callout: { title: string; description: string; href: string; buttonLabel: string }
  relatedPosts: readonly { title: string; href: string }[]
  pillarLink: { title: string; href: string; description: string }
  cta: { headline: string; subhead: string; primaryButton: { label: string; href: string } }
}

// ── Metadata helper ───────────────────────────────────────────────────────────
// Export so each blog page.tsx can call: export const metadata = generateBlogMetadata(data)

const BASE_URL = 'https://cliniqhealthcare.com'

export function generateBlogMetadata(data: BlogPostData): Metadata {
  const url = `${BASE_URL}/blog/${data.slug}`
  return {
    title: data.meta.title,
    description: data.meta.description,
    alternates: { canonical: url },
    openGraph: {
      title: data.meta.title,
      description: data.meta.description,
      type: 'article',
      publishedTime: data.publishDate,
      url,
    },
    twitter: {
      card: 'summary_large_image',
      title: data.meta.title,
      description: data.meta.description,
    },
  }
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function formatDate(iso: string): string {
  const [year, month] = iso.split('-')
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ]
  return `${months[parseInt(month, 10) - 1]} ${year}`
}

function readTime(wordCount: number): string {
  return `${Math.ceil(wordCount / 200)} min`
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function BlogJsonPage({ data }: { data: BlogPostData }) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data.hero.h1,
    description: data.meta.description,
    datePublished: data.publishDate,
    author: { '@type': 'Person', name: data.author },
    publisher: { '@type': 'Organization', name: 'clinIQ', url: BASE_URL },
    url: `${BASE_URL}/blog/${data.slug}`,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <NavInner />
      <main id="main-content">

        {/* Hero */}
        <BlogHero
          category={data.category}
          title={data.hero.h1}
          date={formatDate(data.publishDate)}
          readTime={readTime(data.wordCount)}
        />

        {/* Back link */}
        <div className={css.backBar}>
          <div className="container">
            <a href={data.pillarLink.href} className={css.backLink}>
              <span className={css.backArrow}>←</span>
              Back to {data.pillarLink.title}
            </a>
          </div>
        </div>

        {/* Two-column: prose + sidebar */}
        <div className={css.layout}>
          <div className={css.layoutInner}>

            {/* Main content */}
            <article className={css.prose}>
              {data.content.map((section, i) => (
                <section key={i}>
                  <h2 className={css.sectionH2}>{section.h2}</h2>
                  {renderBody(section.body, {
                    bodyList: css.bodyList,
                    bodyOL: css.bodyOL,
                    bodyBlock: css.bodyBlock,
                    bodyBlockHeader: css.bodyBlockHeader,
                    bodyBlockText: css.bodyBlockText,
                    bodyP: css.bodyP,
                    inlineLink: css.inlineLink,
                  })}
                </section>
              ))}

              {/* Callout */}
              <div className={css.callout}>
                <h3 className={css.calloutTitle}>{data.callout.title}</h3>
                <p className={css.calloutDesc}>{data.callout.description}</p>
                <a href={data.callout.href} className={css.calloutBtn}>
                  {data.callout.buttonLabel}
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path
                      d="M4 10h12m-4-4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </article>

            {/* Sidebar */}
            <aside className={css.sidebar}>

              {/* Pillar link card */}
              <a href={data.pillarLink.href} className={css.pillarCard}>
                <span className={css.pillarCardLabel}>Complete Guide</span>
                <span className={css.pillarCardTitle}>{data.pillarLink.title}</span>
                <p className={css.pillarCardDesc}>{data.pillarLink.description}</p>
                <span className={css.pillarCardArrow} aria-hidden="true">→ Read the full guide</span>
              </a>

              {/* Related posts */}
              {data.relatedPosts.length > 0 && (
                <div className={css.relatedPosts}>
                  <span className={css.relatedPostsLabel}>Related Articles</span>
                  <ul className={css.relatedPostList}>
                    {data.relatedPosts.map(({ title, href }) => (
                      <li key={href}>
                        <a href={href} className={css.relatedPostLink}>{title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </aside>
          </div>
        </div>

        {/* CTA */}
        <BlogCTA
          ctaLabel={data.cta.headline}
          description={data.cta.subhead}
        />

      </main>
      <FooterInner />
    </>
  )
}
