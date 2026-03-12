import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import ResourceHero from '@/components/ResourceHero'
import RTMRevenueWorkbook from '@/components/RTMRevenueWorkbook'

export const metadata: Metadata = {
  title: 'RTM Revenue Projection Workbook — clinIQ Resources',
  description:
    'Project your RTM billing revenue by specialty, enrollment rate, and payer mix. See monthly and annual estimates across all billable CPT codes.',
}

export default function RTMRevenueWorkbookPage() {
  return (
    <>
      <NavInner />
      <main>
        <ResourceHero
          type="Calculator"
          title="RTM Revenue Projection Workbook"
          subtitle="Enter your practice size, target enrollment rate, and payer mix. See projected monthly and annual RTM revenue broken down by CPT code."
        />
        <RTMRevenueWorkbook />
      </main>
      <FooterInner />
    </>
  )
}
