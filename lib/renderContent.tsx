import type { ReactNode } from 'react'

// ── Inline markdown renderer ──────────────────────────────────────────────────
// Handles **bold** and [text](href) within text.

export function renderInline(text: string, linkClass?: string): ReactNode {
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
            <a key={i} href={m[2]} className={linkClass}>
              {m[1]}
            </a>
          )
        }
        return part || null
      })}
    </>
  )
}

// ── Content renderer ──────────────────────────────────────────────────────────
// Splits on \n\n, renders bullets, "Related:" refs, and paragraphs.
// Used by PillarSpecialtyPage and JsonSpecialtyPage.

export interface ContentClasses {
  contentBlock: string
  contentP: string
  contentUL: string
  contentLI: string
  relatedRef?: string
  inlineLink?: string
}

export function renderContent(
  content: string,
  classes: ContentClasses,
): (ReactNode | null)[] {
  const blocks = content.split('\n\n')
  return blocks.map((block, idx) => {
    const trimmed = block.trim()
    if (!trimmed) return null

    const lines = trimmed.split('\n')
    const bulletLines = lines.filter((l) => l.trimStart().startsWith('•'))
    const nonBulletLines = lines.filter((l) => !l.trimStart().startsWith('•'))

    if (bulletLines.length > 0) {
      const intro = nonBulletLines.join(' ').trim()
      return (
        <div key={idx} className={classes.contentBlock}>
          {intro && (
            <p className={classes.contentP}>
              {renderInline(intro, classes.inlineLink)}
            </p>
          )}
          <ul className={classes.contentUL}>
            {bulletLines.map((b, j) => (
              <li key={j} className={classes.contentLI}>
                {renderInline(b.replace(/^[•\s]+/, ''), classes.inlineLink)}
              </li>
            ))}
          </ul>
        </div>
      )
    }

    if (classes.relatedRef && trimmed.startsWith('**Related:')) {
      return (
        <p key={idx} className={classes.relatedRef}>
          {renderInline(trimmed, classes.inlineLink)}
        </p>
      )
    }

    return (
      <p key={idx} className={classes.contentP}>
        {renderInline(trimmed, classes.inlineLink)}
      </p>
    )
  })
}

// ── Body renderer ─────────────────────────────────────────────────────────────
// Handles: bullet lists, numbered lists, bold-header + description blocks, paragraphs.
// Used by BlogJsonPage.

export interface BodyClasses {
  bodyList: string
  bodyOL: string
  bodyBlock: string
  bodyBlockHeader: string
  bodyBlockText: string
  bodyP: string
  inlineLink?: string
}

export function renderBody(body: string, classes: BodyClasses): ReactNode[] {
  const blocks = body.split('\n\n')
  return blocks.flatMap((block, idx) => {
    const trimmed = block.trim()
    if (!trimmed) return []

    const lines = trimmed.split('\n').filter((l) => l.trim())

    // Pure bullet list (all lines start with •)
    if (lines.every((l) => l.trimStart().startsWith('•'))) {
      return [
        <ul key={idx} className={classes.bodyList}>
          {lines.map((b, j) => (
            <li key={j}>{renderInline(b.replace(/^[•\s]+/, ''), classes.inlineLink)}</li>
          ))}
        </ul>,
      ]
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
        return [
          <div key={idx} className={classes.bodyBlock}>
            <p className={classes.bodyBlockHeader}>
              <strong>{headerText}</strong>
            </p>
            <ol className={classes.bodyOL}>
              {restLines.map((l, j) => (
                <li key={j}>
                  {renderInline(l.replace(/^\d+\.\s*/, ''), classes.inlineLink)}
                </li>
              ))}
            </ol>
          </div>,
        ]
      }

      // Bullet items after bold header
      if (restLines.every((l) => l.trimStart().startsWith('•'))) {
        return [
          <div key={idx} className={classes.bodyBlock}>
            <p className={classes.bodyBlockHeader}>
              <strong>{headerText}</strong>
            </p>
            <ul className={classes.bodyList}>
              {restLines.map((l, j) => (
                <li key={j}>
                  {renderInline(l.replace(/^[•\s]+/, ''), classes.inlineLink)}
                </li>
              ))}
            </ul>
          </div>,
        ]
      }

      // Regular description text after bold header
      return [
        <div key={idx} className={classes.bodyBlock}>
          <p className={classes.bodyBlockHeader}>
            <strong>{headerText}</strong>
          </p>
          <p className={classes.bodyBlockText}>
            {renderInline(restLines.join(' '), classes.inlineLink)}
          </p>
        </div>,
      ]
    }

    // Regular paragraph
    return [
      <p key={idx} className={classes.bodyP}>
        {renderInline(trimmed, classes.inlineLink)}
      </p>,
    ]
  })
}
