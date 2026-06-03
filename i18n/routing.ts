import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['en', 'ar', 'es'],
  defaultLocale: 'en',
  localePrefix: 'as-needed', // English = no prefix, Arabic = /ar/, Spanish = /es/
  // Disable the automatic `Link: <...>; rel="alternate"; hreflang=...` headers
  // emitted on every page. Arabic content is partial and Spanish is a
  // placeholder, so declaring full hreflang alternates for them creates false
  // translation-pair claims that fail SEO audits. Re-enable per page via
  // explicit `alternates.languages` metadata once translations are complete.
  alternateLinks: false,
})
