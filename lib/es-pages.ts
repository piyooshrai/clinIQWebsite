// Pages with a complete Spanish translation. Every other path stays English
// until it is translated, so visitors never land on a half-translated page.
export const SPANISH_PATHS = ['/', '/about', '/contact', '/demo', '/pricing', '/solutions'] as const

export function hasSpanishVersion(path: string): boolean {
  const normalized = path.length > 1 ? path.replace(/\/+$/, '') : path
  return (SPANISH_PATHS as readonly string[]).includes(normalized || '/')
}
