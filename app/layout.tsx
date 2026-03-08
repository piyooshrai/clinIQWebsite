import type { Metadata } from 'next'
import { Instrument_Serif, Inter } from 'next/font/google'
import './globals.css'

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
})

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
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${inter.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
