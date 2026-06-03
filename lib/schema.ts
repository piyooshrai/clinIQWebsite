/* ────────────────────────────────────────────────────────────────────────────
   schema.ts
   Shared helpers for JSON-LD schema emission across the site.
   Centralizes the markdown-strip + FAQPage-builder pattern so every page
   uses the same logic and so we don't ship raw [text](href) into Google's
   structured-data validator.
   ──────────────────────────────────────────────────────────────────────────── */

/** Strip markdown link + bold syntax so JSON-LD answer text is plain prose. */
export function plainText(s: string): string {
  if (!s) return ''
  return s
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\s+/g, ' ')
    .trim()
}

/** Build a schema.org FAQPage entity from an array of { q, a } pairs. */
export function buildFAQSchema(
  faqs: readonly { q: string; a: string }[],
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: plainText(faq.q),
      acceptedAnswer: { '@type': 'Answer', text: plainText(faq.a) },
    })),
  }
}
