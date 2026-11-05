import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'
import { NextRequest, NextResponse } from 'next/server'
import { isHrefPublished } from './lib/blog-schedule'
import { hasSpanishVersion } from './lib/es-pages'

// The alternate-Link header behavior is now disabled at the routing config
// level (i18n/routing.ts). See that file for the reasoning.
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

const STATIC_LOCATION_PAGES = new Set([
  '/locations/abu-dhabi',
  '/locations/atlanta',
  '/locations/australia',
  '/locations/birmingham',
  '/locations/chicago',
  '/locations/dammam',
  '/locations/denver',
  '/locations/dubai',
  '/locations/edinburgh',
  '/locations/houston',
  '/locations/jeddah',
  '/locations/london',
  '/locations/los-angeles',
  '/locations/manchester',
  '/locations/miami',
  '/locations/montreal',
  '/locations/phoenix',
  '/locations/riyadh',
  '/locations/toronto',
  '/locations/vancouver',
])

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Scheduled posts stay hidden until their publish date, with no redeploy needed.
  if (!isHrefPublished(pathname)) {
    return new NextResponse('Not found', { status: 404 })
  }

  // Redirect /ar/blog/* and /ar/resources/* to English equivalents
  if (pathname.startsWith('/ar/blog') || pathname.startsWith('/ar/resources')) {
    const enPath = pathname.replace(/^\/ar/, '')
    return NextResponse.redirect(new URL(enPath, request.url))
  }

  // Spanish covers only translated pages for now. Others go to English, temporarily.
  if (pathname === '/es' || pathname.startsWith('/es/')) {
    const englishPath = pathname.slice(3) || '/'
    if (!hasSpanishVersion(englishPath)) {
      return NextResponse.redirect(new URL(englishPath, request.url), 307)
    }
  }

  // Skip intl middleware for English-only paths and static assets
  const isEnglishOnly = ENGLISH_ONLY.some((p) => pathname.startsWith(p)) || STATIC_LOCATION_PAGES.has(pathname)
  if (isEnglishOnly || pathname.match(/\.(png|jpg|jpeg|svg|ico|webp|woff2?|txt|xml|webmanifest)$/)) {
    return NextResponse.next()
  }

  // A Spanish cookie or browser must not send an untranslated page back to /es.
  const hasLocalePrefix = /^\/(en|ar|es)(\/|$)/.test(pathname)
  if (!hasLocalePrefix && !hasSpanishVersion(pathname)) {
    const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value
    const browserPrefersSpanish = /^\s*es\b/i.test(request.headers.get('accept-language') ?? '')
    if (cookieLocale === 'es' || (!cookieLocale && browserPrefersSpanish)) {
      const headers = new Headers(request.headers)
      headers.delete('cookie')
      headers.set('accept-language', 'en')
      return intlMiddleware(new NextRequest(request.url, { headers }))
    }
  }

  return intlMiddleware(request)
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
