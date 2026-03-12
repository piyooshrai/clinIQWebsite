import type { Metadata } from 'next'
import NavInner from '@/components/NavInner'
import FooterInner from '@/components/FooterInner'
import ResourceHero from '@/components/ResourceHero'
import ResourcePreview from '@/components/ResourcePreview'
import ResourceForm from '@/components/ResourceForm'
import type { FormField } from '@/components/ResourceForm'

export const metadata: Metadata = {
  title: 'Pre-Auth Denial Analysis Template — clinIQ Resources',
  description:
    'Track prior authorization denial patterns by payer, procedure, and denial reason. Identify what fails and why — then fix first-pass rates systematically.',
}

const previewItems = [
  'Denial tracking worksheet — log every denial by date, payer, procedure code, denial reason, and appeal outcome',
  'Payer denial rate matrix — calculate your first-pass approval rate by payer to identify your most problematic relationships',
  'Denial reason taxonomy — 14 standardized denial categories to make pattern identification consistent across staff',
  'Procedure-level denial analysis — which CPT codes get denied most and what documentation fixes would address each',
  'Appeal success rate tracker — measure which denial reasons you win on appeal vs. which to avoid billing in the first place',
  'Monthly denial trend chart — visualize whether your overall denial rate is improving or worsening over time',
  'Staff accountability matrix — track which team members handle which payers and flag training needs',
  'Root cause action log — document process changes made in response to denial patterns and measure their impact',
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
    name: 'specialty',
    label: 'Your specialty',
    type: 'select',
    options: [
      'Orthopedics / Spine',
      'Pain Management',
      'Rheumatology',
      'Cardiology',
      'Behavioral Health',
      'Oncology',
      'Other',
    ],
    required: true,
  },
  {
    name: 'monthlyPAVolume',
    label: 'Monthly PA requests (approx.)',
    type: 'select',
    options: ['Under 25', '25–75', '75–150', '150–300', 'Over 300'],
    required: false,
  },
]

export default function PreAuthDenialAnalysisPage() {
  return (
    <>
      <NavInner />
      <main>
        <ResourceHero
          type="Template"
          title="Pre-Auth Denial Analysis Template"
          subtitle="Stop guessing why your authorizations get denied. Track denials by payer, procedure, and reason — then act on the patterns."
        />
        <ResourcePreview items={previewItems} />
        <ResourceForm
          resourceSlug="pre-auth-denial-analysis"
          resourceTitle="Pre-Auth Denial Analysis Template"
          fields={fields}
          submitLabel="Get the template"
          successMessage="Check your inbox — the denial analysis template is on its way."
        />
      </main>
      <FooterInner />
    </>
  )
}
