import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import ResourceHero from '@/components/ResourceHero'
import ResourcePreview from '@/components/ResourcePreview'
import ResourceForm from '@/components/ResourceForm'
import type { FormField } from '@/components/ResourceForm'

export const metadata: Metadata = {
  title: 'Clinic Analytics: The Metrics That Actually Matter — clinIQ Resources',
  description:
    'The 12 operational metrics every clinic operator should track weekly — benchmarks, thresholds, and what to do when they go off.',
}

const previewItems = [
  '12 key metrics with benchmarks and thresholds',
  'Daily vs weekly vs monthly reporting cadences',
  'How to calculate cost-per-visit and revenue-per-hour',
  'Bottleneck detection using flow metrics',
  'Staff productivity measurement that doesn\'t create resentment',
  'Building your first operational dashboard',
]

const fields: FormField[] = [
  {
    name: 'email',
    label: 'Work email',
    type: 'email',
    placeholder: 'you@yourclinic.com',
    required: true,
  },
  {
    name: 'role',
    label: 'Your role',
    type: 'select',
    options: ['Administrator', 'Office Manager', 'Provider', 'Front Desk', 'Other'],
    required: true,
  },
  {
    name: 'clinicSize',
    label: 'Clinic size',
    type: 'select',
    options: ['1–5 providers', '6–15 providers', '16+ providers'],
    required: true,
  },
]

export default function AnalyticsMetricsGuidePage() {
  return (
    <>
      <NavInner />
      <main>
        <ResourceHero
          type="Guide"
          title="Clinic Analytics: The Metrics That Actually Matter"
          subtitle="The 12 operational metrics every clinic operator should track weekly — and what to do when they're off."
        />
        <ResourcePreview items={previewItems} />
        <ResourceForm
          resourceSlug="analytics-metrics-guide"
          resourceTitle="Clinic Analytics: The Metrics That Actually Matter"
          fields={fields}
          submitLabel="Download Guide"
          successMessage="Check your email — your Analytics Metrics Guide is on its way."
        />
      </main>
      <FooterInner />
    </>
  )
}
