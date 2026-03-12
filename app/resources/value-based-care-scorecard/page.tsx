import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import ResourceHero from '@/components/ResourceHero'
import VBCScorecard from '@/components/VBCScorecard'

export const metadata: Metadata = {
  title: 'Value-Based Care Readiness Scorecard — clinIQ Resources',
  description:
    'Score your practice across 5 VBC domains: data infrastructure, care coordination, quality measurement, patient engagement, and financial risk tolerance.',
}

export default function VBCScorecardPage() {
  return (
    <>
      <NavInner />
      <main>
        <ResourceHero
          type="Assessment"
          title="Value-Based Care Readiness Scorecard"
          subtitle="Answer 15 questions across 5 domains. Get your VBC readiness score, identify your weakest area, and see a prioritized action plan."
        />
        <VBCScorecard />
      </main>
      <FooterInner />
    </>
  )
}
