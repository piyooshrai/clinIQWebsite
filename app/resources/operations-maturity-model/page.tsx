import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import ResourceHero from '@/components/ResourceHero'
import OperationsMaturityModel from '@/components/OperationsMaturityModel'

export const metadata: Metadata = {
  title: 'Clinic Operations Maturity Model — clinIQ Resources',
  description:
    'Benchmark your clinic operations across 5 domains. Get a maturity score, identify your highest-leverage improvement areas, and receive a prioritized action plan.',
}

export default function OperationsMaturityModelPage() {
  return (
    <>
      <NavInner />
      <main>
        <ResourceHero
          type="Assessment"
          title="Clinic Operations Maturity Model"
          subtitle="Score your clinic across patient access, check-in, flow management, revenue capture, and analytics. See your maturity stage and where to focus first."
        />
        <OperationsMaturityModel />
      </main>
      <FooterInner />
    </>
  )
}
