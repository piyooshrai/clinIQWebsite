import type { Metadata, Viewport } from 'next'
import { Instrument_Serif } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import ChatWidget from '@/components/ChatWidget'
import '@/app/globals.css'

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const RTL_LOCALES = ['ar']

export const metadata: Metadata = {
  metadataBase: new URL('https://cliniqhealthcare.com'),
  title: {
    default: 'clinIQ - Clinic Operations Platform',
    template: '%s | clinIQ',
  },
  description:
    'Patient check-in, RTM billing, patient flow, and pre-authorization for specialty clinics. The operating system for modern clinic operations.',
  keywords: [
    'clinic management software',
    'patient check-in',
    'RTM billing',
    'remote therapeutic monitoring',
    'patient flow',
    'pre-authorization',
    'clinic operations',
    'healthcare software',
  ],
  authors: [{ name: 'The Algorithm LLC' }],
  creator: 'The Algorithm LLC',
  publisher: 'The Algorithm LLC',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cliniqhealthcare.com',
    siteName: 'clinIQ',
    title: 'clinIQ - Clinic Operations Platform',
    description:
      'Patient check-in, RTM billing, patient flow, and pre-authorization for specialty clinics.',
    images: [{ url: '/og-homepage.png', width: 1200, height: 630, alt: 'clinIQ - Clinic Operations Platform' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'clinIQ - Clinic Operations Platform',
    description: 'Patient check-in, RTM billing, patient flow, and pre-authorization for specialty clinics.',
    images: ['/og-homepage.png'],
    creator: '@clinaborates',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
  verification: { google: 'W7O04qklGpLYj9BkwT-skx9gc5A-ZDyigBBnQ6vp5fw' },
  alternates: { canonical: 'https://cliniqhealthcare.com' },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!routing.locales.includes(locale as 'en' | 'ar' | 'es')) {
    notFound()
  }

  const messages = await getMessages()
  const isRTL = RTL_LOCALES.includes(locale)

  return (
    <html lang={locale} dir={isRTL ? 'rtl' : 'ltr'} className={instrumentSerif.variable}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <GoogleAnalytics />
          <ChatWidget />
          <a href="#main-content" className="skip-link">Skip to main content</a>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
