import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['en', 'ar', 'es'],
  defaultLocale: 'en',
  localePrefix: 'as-needed', // English = no prefix, Arabic = /ar/, Spanish = /es/
})
