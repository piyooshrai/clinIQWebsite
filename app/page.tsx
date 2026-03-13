import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import Features from '@/components/Features'
import Stats from '@/components/Stats'
import Testimonial from '@/components/Testimonial'
import CTA from '@/components/CTA'
import FooterInner from '@/components/FooterInner'

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
    url: 'https://cliniqhealthcare.com',
    siteName: 'clinIQ',
    type: 'website',
    images: [{ url: '/og-homepage.png', width: 1200, height: 630, alt: 'clinIQ – Clinic Operations Platform' }],
  },
  alternates: {
    canonical: 'https://cliniqhealthcare.com',
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'clinIQ',
    url: 'https://cliniqhealthcare.com',
    logo: 'https://cliniqhealthcare.com/logo.png',
    description:
      'clinIQ is a clinic operations platform providing real-time patient flow management, automated check-in, RTM billing, pre-authorization, and scheduling for medical practices.',
    sameAs: [
      'https://linkedin.com/company/cliniq',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      url: 'https://cliniqhealthcare.com/contact',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'clinIQ',
    url: 'https://cliniqhealthcare.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://cliniqhealthcare.com/search?q={search_term_string}',
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
      url: 'https://cliniqhealthcare.com/demo',
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
        <FooterInner />
      </main>
    </>
  )
}
