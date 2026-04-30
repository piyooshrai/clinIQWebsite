import type { Metadata, Viewport } from 'next'
import { Instrument_Serif } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import ChatWidget from '@/components/ChatWidget'
import './globals.css'

// English messages loaded statically — locale pages override via nested provider
import enMessages from '@/messages/en.json'

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://cliniqhealthcare.com'),
  title: { default: 'clinIQ - Clinic Operations Platform', template: '%s | clinIQ' },
  description: 'Patient check-in, RTM billing, patient flow, and pre-authorization for specialty clinics.',
  authors: [{ name: 'The Algorithm LLC' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cliniqhealthcare.com',
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={instrumentSerif.variable} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider locale="en" messages={enMessages}>
          <GoogleAnalytics />
          <ChatWidget />
          <a href="#main-content" className="skip-link">Skip to main content</a>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
