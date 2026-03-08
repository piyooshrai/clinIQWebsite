import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'clinIQ — Clinic Operations Platform',
  description:
    'Patient flow, check-in, scheduling, RTM billing, and pre-authorization. Built for clinics that refuse to settle for broken workflows.',
  openGraph: {
    title: 'clinIQ — Clinic Operations Platform',
    description:
      'From check-in to checkout. Real-time visibility. Zero chaos.',
    type: 'website',
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
