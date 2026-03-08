import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import Features from '@/components/Features'
import Stats from '@/components/Stats'
import Testimonial from '@/components/Testimonial'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'clinIQ – Clinic Operations Platform | Real-Time Patient Flow',
  description:
    'clinIQ gives clinics real-time patient flow visibility, automated check-in, RTM billing, pre-authorization, and intelligent scheduling. From check-in to checkout — zero chaos.',
  keywords: [
    'clinic operations platform',
    'patient flow software',
    'medical check-in system',
    'RTM billing software',
    'remote therapeutic monitoring',
    'clinic scheduling software',
    'real-time patient tracking',
    'pre-authorization software',
    'clinic workflow management',
    'healthcare operations',
  ],
  openGraph: {
    title: 'clinIQ – Clinic Operations Platform | Real-Time Patient Flow',
    description:
      'Real-time patient flow. Automated check-in. RTM billing. Pre-authorization. From check-in to checkout — zero chaos.',
    url: 'https://cliniq.io',
    siteName: 'clinIQ',
    type: 'website',
  },
  alternates: {
    canonical: 'https://cliniq.io',
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'clinIQ',
    url: 'https://cliniq.io',
    logo: 'https://cliniq.io/logo.png',
    description:
      'clinIQ is a clinic operations platform providing real-time patient flow management, automated check-in, RTM billing, pre-authorization, and scheduling for medical practices.',
    sameAs: [
      'https://linkedin.com/company/cliniq',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      url: 'https://cliniq.io/contact',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'clinIQ',
    url: 'https://cliniq.io',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://cliniq.io/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'clinIQ',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Web',
    description:
      'Real-time clinic operations platform for patient flow management, automated check-in, RTM billing, pre-authorization, and scheduling.',
    offers: {
      '@type': 'Offer',
      url: 'https://cliniq.io/demo',
    },
  },
]

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <Nav />
        <Hero />
        <Marquee />
        <Features />
        <Stats />
        <Testimonial />
        <CTA />
        <Footer />
      </main>
    </>
  )
}
