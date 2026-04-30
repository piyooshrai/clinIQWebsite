import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'
import { NextRequest, NextResponse } from 'next/server'

const intlMiddleware = createMiddleware(routing)

// Paths that stay English-only (no locale prefix handling)
const ENGLISH_ONLY = [
  '/blog',
  '/resources',
  '/privacy',
  '/terms',
  '/manifest',
  '/sitemap',
  '/api',
  '/_next',
  '/favicon',
  '/og-',
  '/team/',
  '/clinIQ_',
]

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Redirect /ar/blog/* and /ar/resources/* to English equivalents
  if (pathname.startsWith('/ar/blog') || pathname.startsWith('/ar/resources')) {
    const enPath = pathname.replace(/^\/ar/, '')
    return NextResponse.redirect(new URL(enPath, request.url))
  }

  // Skip intl middleware for English-only paths and static assets
  const isEnglishOnly = ENGLISH_ONLY.some((p) => pathname.startsWith(p))
  if (isEnglishOnly || pathname.match(/\.(png|jpg|jpeg|svg|ico|webp|woff2?)$/)) {
    return NextResponse.next()
  }

  return intlMiddleware(request)
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
