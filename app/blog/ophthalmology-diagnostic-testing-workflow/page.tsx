import type { Metadata } from 'next'
import data from '@/data/ophthalmology-diagnostic-testing-workflow.json'
import BlogJsonPage from '@/components/templates/BlogJsonPage'

export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  keywords: data.meta.keywords,
}

export default function OphthalmologyDiagnosticTestingWorkflowPage() {
  return <BlogJsonPage data={data} />
}
