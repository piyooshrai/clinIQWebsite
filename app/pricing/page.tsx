import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import PricingHero from '@/components/PricingHero'
import PricingTable from '@/components/PricingTable'

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Transparent pricing for clinIQ. Starter $449/mo, Professional $999/mo per location, Enterprise custom. RTM $15 per active patient, prior auth $8 per authorization.',
  alternates: {
    canonical: 'https://www.cliniqhealthcare.com/pricing',
    languages: { en: 'https://www.cliniqhealthcare.com/pricing', es: 'https://www.cliniqhealthcare.com/es/pricing', 'x-default': 'https://www.cliniqhealthcare.com/pricing' },
  },
  openGraph: {
    title: 'Pricing — clinIQ',
    description:
      'Transparent pricing for clinIQ. Starter $449/mo, Professional $999/mo per location, Enterprise custom. RTM $15 per active patient, prior auth $8 per authorization.',
    type: 'website',
    url: 'https://www.cliniqhealthcare.com/pricing',
    images: [{ url: '/og-pricing.png', width: 1200, height: 630, alt: 'Pricing — clinIQ' }],
  },
}

export default function PricingPage() {
  return (
    <>
      <NavInner />
      <main>
        <PricingHero
          title="Pricing"
          subtitle="Transparent. No per-transaction fees. No surprises."
        />
        <PricingTable />
      </main>
      <FooterInner />
    </>
  )
}
