import type { Metadata } from 'next'
import './globals.css'

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
        url: '/og-image.png',
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
    images: ['/og-image.png'],
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
    google: 'YOUR_GOOGLE_VERIFICATION_CODE',
  },
  alternates: {
    canonical: 'https://cliniqhealthcare.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
