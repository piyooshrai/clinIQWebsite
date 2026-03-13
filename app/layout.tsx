import type { Metadata, Viewport } from 'next'
import { Instrument_Serif } from 'next/font/google'
import './globals.css'
import GoogleAnalytics from '@/components/GoogleAnalytics'

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

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
    images: [
      {
        url: '/og-homepage.png',
        width: 1200,
        height: 630,
        alt: 'clinIQ - Clinic Operations Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'clinIQ - Clinic Operations Platform',
    description:
      'Patient check-in, RTM billing, patient flow, and pre-authorization for specialty clinics.',
    images: ['/og-homepage.png'],
    creator: '@clinaborates',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'W7O04qklGpLYj9BkwT-skx9gc5A-ZDyigBBnQ6vp5fw',
  },
  alternates: {
    canonical: 'https://cliniqhealthcare.com',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={instrumentSerif.variable}>
      <body>
        <GoogleAnalytics />
        <a href="#main-content" className="skip-link">Skip to main content</a>
        {children}
      </body>
    </html>
  )
}
