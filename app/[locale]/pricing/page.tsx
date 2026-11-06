import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import PricingHero from '@/components/PricingHero'
import PricingTable from '@/components/PricingTable'
import { localizeMetadata } from '@/lib/localized-metadata'

const baseMetadata: Metadata = {
  title: 'Pricing',
  description:
    'Transparent pricing for clinIQ. Starter $449/mo, Professional $999/mo per location, Enterprise custom. RTM $15 per active patient, prior auth $8 per authorization.',
  alternates: { canonical: 'https://www.cliniqhealthcare.com/pricing' },
  openGraph: {
    title: 'Pricing — clinIQ',
    description:
      'Transparent pricing for clinIQ. Starter $449/mo, Professional $999/mo per location, Enterprise custom. RTM $15 per active patient, prior auth $8 per authorization.',
    type: 'website',
    url: 'https://www.cliniqhealthcare.com/pricing',
    images: [{ url: '/og-pricing.png', width: 1200, height: 630, alt: 'Pricing — clinIQ' }],
  },
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return localizeMetadata(baseMetadata, locale, '/pricing')
}

export default async function PricingPage() {
  const t = await getTranslations('pricing')

  return (
    <>
      <NavInner />
      <main>
        <PricingHero title={t('title')} subtitle={t('subtitle')} />
        <PricingTable />
      </main>
      <FooterInner />
    </>
  )
}
