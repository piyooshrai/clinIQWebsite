import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import PricingHero from '@/components/PricingHero'
import PricingTable from '@/components/PricingTable'

export const metadata: Metadata = {
  title: 'Pricing — clinIQ',
  description:
    'Transparent pricing for clinIQ. Starter $249/mo, Professional $499/mo, Enterprise custom. No per-transaction fees.',
  alternates: { canonical: 'https://cliniqhealthcare.com/pricing' },
  openGraph: {
    title: 'Pricing — clinIQ',
    description:
      'Transparent pricing for clinIQ. Starter $249/mo, Professional $499/mo, Enterprise custom. No per-transaction fees.',
    type: 'website',
    url: 'https://cliniqhealthcare.com/pricing',
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
