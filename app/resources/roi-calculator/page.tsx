import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import ResourceHero from '@/components/ResourceHero'
import ROICalculator from '@/components/ROICalculator'

export const metadata: Metadata = {
  title: 'clinIQ ROI Calculator — Resources',
  description:
    'Calculate your potential time savings, RTM revenue opportunity, and payback period based on your clinic\'s patient volume and workflows.',
}

export default function ROICalculatorPage() {
  return (
    <>
      <NavInner />
      <main>
        <ResourceHero
          type="Calculator"
          title="Calculate Your clinIQ ROI"
          subtitle="See your potential time savings, revenue opportunity, and payback period."
        />
        <ROICalculator />
      </main>
      <FooterInner />
    </>
  )
}
