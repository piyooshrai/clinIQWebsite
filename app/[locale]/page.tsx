import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import Features from '@/components/Features'
import HomeProblem from '@/components/HomeProblem'
import HomeHowItWorks from '@/components/HomeHowItWorks'
import HomeOpsLayer from '@/components/HomeOpsLayer'
import HomeSpecialties from '@/components/HomeSpecialties'
import Stats from '@/components/Stats'
import Testimonial from '@/components/Testimonial'
import HomeFAQ, { HOME_FAQS } from '@/components/HomeFAQ'
import CTA from '@/components/CTA'
import FooterInner from '@/components/FooterInner'

export const metadata: Metadata = {
  title: 'Patient Flow Software | Clinic Operations Platform | clinIQ',
  description:
    "Struggling with patient flow & missed billing? clinIQ is the clinic operations software that automates check-in, RTM billing & pre-auth. Book a free demo.",
  keywords: [
    'clinic operations software',
    'patient flow software',
    'patient queue management system',
    'healthcare scheduling software',
    'RTM billing software',
    'clinic management platform',
    'digital patient check-in system',
    'pre-authorization automation',
    'clinic workflow software',
    'healthcare operations layer',
    'behavioral health clinic software',
    'urgent care management software',
  ],
  openGraph: {
    title: 'Patient Flow Software | Clinic Operations Platform | clinIQ',
    description:
      'Real-time patient queue management, digital check-in, RTM billing, and pre-authorization automation — sitting on top of your existing EHR.',
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
      email: 'info@cliniqhealthcare.com',
      telephone: '+1-720-334-7249',
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
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: HOME_FAQS.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
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
        <HomeHowItWorks />
        <HomeProblem />
        <HomeOpsLayer />
        <HomeSpecialties />
        <Stats />
        <Testimonial />
        <HomeFAQ />
        <CTA />
        <FooterInner />
      </main>
    </>
  )
}
