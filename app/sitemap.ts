import { isIndexedFeatureSpecialty } from '@/lib/indexed-feature-pages'
import { SPANISH_PATHS } from '@/lib/es-pages'
import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'
import { getAllParams } from '@/lib/feature-specialty-data'
import { getAllSpecialties } from '@/lib/all-specialties'
import { isBlogSlugPublished } from '@/lib/blog-schedule'

export const revalidate = 3600

const BASE_URL = 'https://www.cliniqhealthcare.com'

/** Read JSON filenames from a directory, strip prefix+extension, return slugs */
function slugsFromPrefixedFiles(dir: string, prefix: string): string[] {
  try {
    return fs.readdirSync(dir)
      .filter(f => f.startsWith(prefix) && f.endsWith('.json'))
      .map(f => f.slice(prefix.length, -5))
  } catch {
    return []
  }
}

/** Read JSON filenames from a directory, strip extension only */
function slugsFromFiles(dir: string): string[] {
  try {
    return fs.readdirSync(dir)
      .filter(f => f.endsWith('.json'))
      .map(f => f.slice(0, -5))
  } catch {
    return []
  }
}

/** Read subdirectory names from an app/ route directory (blog posts, resources, etc.) */
function slugsFromDirs(dir: string): string[] {
  try {
    return fs.readdirSync(dir, { withFileTypes: true })
      .filter(e => e.isDirectory())
      .map(e => e.name)
      .filter(n => !n.startsWith('_') && !n.startsWith('.'))
  } catch {
    return []
  }
}

/** All specialty slugs: pillar pages, JSON specialty files and generated specialties. */
function getSpecialtySlugs(): string[] {
  return getAllSpecialties().map((s) => s.slug)
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString()
  const cwd = process.cwd()

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL,                             lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE_URL}/features`,               lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE_URL}/specialties`,            lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE_URL}/solutions`,              lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE_URL}/compare`,                lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE_URL}/locations`,              lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/blog`,                   lastModified: now, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE_URL}/resources`,              lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/pricing`,                lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/demo`,                   lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/contact`,                lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/about`,                  lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/about/the-algorithm`,    lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/about/team`,             lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/privacy`,                lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${BASE_URL}/terms`,                  lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
  ]

  const featureSlugAliases: Record<string, string> = { 'patient-check-in': 'check-in', 'pre-authorization': 'pre-auth', 'rtm-billing': 'rtm' }
  // feature-specialty-content.json holds per-specialty copy, not a feature page.
  const features = slugsFromPrefixedFiles(path.join(cwd, 'data'), 'feature-').filter(file => file !== 'specialty-content').map(file => featureSlugAliases[file] ?? file).map(slug => ({
    url: `${BASE_URL}/features/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const specialties = getSpecialtySlugs().map(slug => ({
    url: `${BASE_URL}/specialties/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const compare = slugsFromPrefixedFiles(path.join(cwd, 'data'), 'compare-').map(slug => ({
    url: `${BASE_URL}/compare/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const markets = slugsFromFiles(path.join(cwd, 'content', 'markets')).map(slug => ({
    url: `${BASE_URL}/markets/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const locationSlugs = new Set([
    ...slugsFromFiles(path.join(cwd, 'data', 'locations')),
    ...slugsFromDirs(path.join(cwd, 'app', 'locations')).filter(slug => !slug.startsWith('[')),
  ])
  const locations = Array.from(locationSlugs).map(slug => ({
    url: `${BASE_URL}/locations/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  const blog = slugsFromDirs(path.join(cwd, 'app', 'blog')).filter(slug => isBlogSlugPublished(slug)).map(slug => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const resources = slugsFromDirs(path.join(cwd, 'app', 'resources')).map(slug => ({
    url: `${BASE_URL}/resources/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // /features/[featureSlug]/[specialtySlug]: only the combinations kept in the index
  const featureSpecialty = getAllParams().filter(({ featureSlug, specialtySlug }) => isIndexedFeatureSpecialty(featureSlug, specialtySlug)).map(({ featureSlug, specialtySlug }) => ({
    url: `${BASE_URL}/features/${featureSlug}/${specialtySlug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Fully translated Spanish pages only. See lib/es-pages.ts.
  const spanish = SPANISH_PATHS.map((path) => ({
    url: path === '/' ? `${BASE_URL}/es` : `${BASE_URL}/es${path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }))

  // Arabic locale entries are intentionally NOT emitted here while ar/es content
  // is still partial on most pages. Listing them would pair them as translation alternates of
  // their English equivalents (`<xhtml:link rel="alternate" hreflang="ar">`) even
  // though the body content is mostly English, which fails Semrush / Google's
  // hreflang validation. Re-add per-page once translations are complete.

  return [
    ...staticPages,
    ...spanish,
    ...features,
    ...featureSpecialty,
    ...specialties,
    ...compare,
    ...markets,
    ...locations,
    ...blog,
    ...resources,
  ]
}
