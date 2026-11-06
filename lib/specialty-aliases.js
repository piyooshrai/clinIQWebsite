/**
 * Duplicate specialty pages merged into one URL (November 2026).
 * Search Console showed the kept page had the signal (ENT), or, where neither
 * had impressions, the kept page has the stronger hand-written content.
 * Used by next.config.js redirects, the sitemap and every specialty link.
 */
const SPECIALTY_ALIASES = {
  obgyn: 'ob-gyn',
  'obstetrics-gynecology': 'ob-gyn',
  'allergy-immunology': 'allergy',
  'ent-otolaryngology': 'ent',
}

/** The canonical slug for a specialty page. */
function canonicalSpecialtySlug(slug) {
  return SPECIALTY_ALIASES[slug] || slug
}

/** The href for a specialty page, following merges. */
function specialtyHref(slug) {
  return `/specialties/${canonicalSpecialtySlug(slug)}`
}

module.exports = { SPECIALTY_ALIASES, canonicalSpecialtySlug, specialtyHref }
