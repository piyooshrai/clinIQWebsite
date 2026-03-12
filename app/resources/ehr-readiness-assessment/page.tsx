import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import ResourceHero from '@/components/ResourceHero'
import EHRReadinessAssessment from '@/components/EHRReadinessAssessment'

export const metadata: Metadata = {
  title: 'EHR Integration Readiness Assessment — clinIQ Resources',
  description:
    'Assess your EHR environment before adding new tools. Covers API access, data quality, staff adoption, and integration complexity across 12 readiness factors.',
}

export default function EHRReadinessAssessmentPage() {
  return (
    <>
      <NavInner />
      <main>
        <ResourceHero
          type="Assessment"
          title="EHR Integration Readiness Assessment"
          subtitle="12 questions about your EHR setup. Get a readiness score and know exactly what to address before adding new tools to your stack."
        />
        <EHRReadinessAssessment />
      </main>
      <FooterInner />
    </>
  )
}
