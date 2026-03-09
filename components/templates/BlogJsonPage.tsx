import type { ReactNode } from 'react'
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

// ── Inline markdown renderer ──────────────────────────────────────────────────

function renderInline(text: string): ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/)
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i}>{part.slice(2, -2)}</strong>
        }
        const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
        if (m) {
          return (
            <a key={i} href={m[2]} className={css.inlineLink}>
              {m[1]}
            </a>
          )
        }
        return part || null
      })}
    </>
  )
}

// ── Body renderer ─────────────────────────────────────────────────────────────
// Handles: bullet lists, numbered lists, bold-header + description blocks, paragraphs.

function renderBody(body: string): ReactNode[] {
  const blocks = body.split('\n\n')
  return blocks.flatMap((block, idx) => {
    const trimmed = block.trim()
    if (!trimmed) return []

    const lines = trimmed.split('\n').filter((l) => l.trim())

    // Pure bullet list (all lines start with •)
    if (lines.every((l) => l.trimStart().startsWith('•'))) {
      return [(
        <ul key={idx} className={css.bodyList}>
          {lines.map((b, j) => (
            <li key={j}>{renderInline(b.replace(/^[•\s]+/, ''))}</li>
          ))}
        </ul>
      )]
    }

    // Bold-only first line + more lines below (sub-section header block)
    const firstLine = lines[0]
    const isBoldHeader =
      firstLine.startsWith('**') && firstLine.endsWith('**') && lines.length > 1

    if (isBoldHeader) {
      const headerText = firstLine.slice(2, -2)
      const restLines = lines.slice(1)

      // Numbered list items after bold header
      if (restLines.every((l) => /^\d+\./.test(l.trim()))) {
        return [(
          <div key={idx} className={css.bodyBlock}>
            <p className={css.bodyBlockHeader}><strong>{headerText}</strong></p>
            <ol className={css.bodyOL}>
              {restLines.map((l, j) => (
                <li key={j}>{renderInline(l.replace(/^\d+\.\s*/, ''))}</li>
              ))}
            </ol>
          </div>
        )]
      }

      // Bullet items after bold header
      if (restLines.every((l) => l.trimStart().startsWith('•'))) {
        return [(
          <div key={idx} className={css.bodyBlock}>
            <p className={css.bodyBlockHeader}><strong>{headerText}</strong></p>
            <ul className={css.bodyList}>
              {restLines.map((l, j) => (
                <li key={j}>{renderInline(l.replace(/^[•\s]+/, ''))}</li>
              ))}
            </ul>
          </div>
        )]
      }

      // Regular description text after bold header
      return [(
        <div key={idx} className={css.bodyBlock}>
          <p className={css.bodyBlockHeader}><strong>{headerText}</strong></p>
          <p className={css.bodyBlockText}>{renderInline(restLines.join(' '))}</p>
        </div>
      )]
    }

    // Regular paragraph
    return [(<p key={idx} className={css.bodyP}>{renderInline(trimmed)}</p>)]
  })
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function BlogJsonPage({ data }: { data: BlogPostData }) {
  return (
    <>
      <NavInner />
      <main>

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
                  {renderBody(section.body)}
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
