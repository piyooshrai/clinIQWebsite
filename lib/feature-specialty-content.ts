import content from '@/data/feature-specialty-content.json'

/**
 * Hand-written content for the feature x specialty pages kept in Google's index
 * (see lib/indexed-feature-pages.ts). Replaces the generated template copy.
 */
export interface FeatureSpecialtyContent {
  metaTitle: string
  metaDescription: string
  h1: string
  subtitle: string
  problemHeading: string
  problemStatement: string
  solutionHeading: string
  solutionStatement: string
  workflow: { h2: string; intro: string; steps: { title: string; body: string }[] }
  capabilities: { h2: string; items: { title: string; body: string }[] }
  faqs: { q: string; a: string }[]
  related: { title: string; href: string }[]
}

const CONTENT = content as Record<string, FeatureSpecialtyContent>

export function getFeatureSpecialtyContent(
  featureSlug: string,
  specialtySlug: string,
): FeatureSpecialtyContent | null {
  return CONTENT[`${featureSlug}/${specialtySlug}`] ?? null
}
