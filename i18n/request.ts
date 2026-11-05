import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'

type Messages = { [key: string]: string | Messages }

function withFallback(base: Messages, overrides: Messages): Messages {
  const merged: Messages = { ...base }
  for (const [key, value] of Object.entries(overrides)) {
    const existing = merged[key]
    merged[key] = typeof value === 'object' && typeof existing === 'object' ? withFallback(existing, value) : value
  }
  return merged
}

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale
  if (!locale || !routing.locales.includes(locale as 'en' | 'ar' | 'es')) {
    locale = routing.defaultLocale
  }
  const english = (await import('../messages/en.json')).default as Messages
  const messages =
    locale === routing.defaultLocale
      ? english
      : withFallback(english, (await import(`../messages/${locale}.json`)).default as Messages)
  return { locale, messages }
})
