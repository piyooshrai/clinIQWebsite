import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

const BASE_URL = 'https://cliniqhealthcare.com'

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

/** Read specialty slugs from both specialty JSON arrays */
function getSpecialtySlugs(): string[] {
  const cwd = process.cwd()
  const seen = new Set<string>()
  const result: string[] = []

  for (const file of ['data/specialties.json', 'data/specialties-20-value-first.json']) {
    try {
      const raw = JSON.parse(fs.readFileSync(path.join(cwd, file), 'utf8')) as Array<{ slug?: string } | string>
      for (const item of raw) {
        const slug = typeof item === 'string' ? item : item.slug
        if (slug && !seen.has(slug)) {
          seen.add(slug)
          result.push(slug)
        }
      }
    } catch {
      // skip missing file
    }
  }
  return result
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

  const features = slugsFromPrefixedFiles(path.join(cwd, 'data'), 'feature-').map(slug => ({
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

  const locations = slugsFromFiles(path.join(cwd, 'data', 'locations')).map(slug => ({
    url: `${BASE_URL}/locations/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  const blog = slugsFromDirs(path.join(cwd, 'app', 'blog')).map(slug => ({
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

  return [
    ...staticPages,
    ...features,
    ...specialties,
    ...compare,
    ...markets,
    ...locations,
    ...blog,
    ...resources,
  ]
}
