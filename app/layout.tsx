import type { Metadata, Viewport } from 'next'
import { Instrument_Serif } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages, getTranslations } from 'next-intl/server'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import ClickTracking from '@/components/ClickTracking'
import ChatWidget from '@/components/ChatWidget'
import IntakeContext from '@/components/IntakeContext'
import './globals.css'

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.cliniqhealthcare.com'),
  title: { default: 'clinIQ - Clinic Operations Platform', template: '%s | clinIQ' },
  description: 'Patient check-in, RTM billing, patient flow, and pre-authorization for specialty clinics.',
  authors: [{ name: 'The Algorithm LLC' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.cliniqhealthcare.com',
    siteName: 'clinIQ',
    images: [{ url: '/og-homepage.png', width: 1200, height: 630, alt: 'clinIQ' }],
  },
  robots: { index: true, follow: true },
  verification: { google: 'W7O04qklGpLYj9BkwT-skx9gc5A-ZDyigBBnQ6vp5fw' },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale()
  const messages = await getMessages()
  const tc = await getTranslations('common')
  // Only interactive components translate in the browser. Sending just their text
  // keeps the full translation file (35KB+) out of every page's HTML.
  const clientMessages = Object.fromEntries(
    ['nav', 'languageSwitcher', 'common', 'demo', 'contactForm', 'stats']
      .filter((key) => key in messages)
      .map((key) => [key, messages[key]]),
  )

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'} className={instrumentSerif.variable} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider locale={locale} messages={clientMessages}>
          <GoogleAnalytics />
          <IntakeContext />
          <ChatWidget />
          <ClickTracking />
          <a href="#main-content" className="skip-link">{tc('skipToContent')}</a>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
