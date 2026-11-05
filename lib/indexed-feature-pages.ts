/**
 * Feature x specialty pages that stay in Google's index.
 *
 * The 840 generated combinations are thin and near-identical, which can weigh on
 * how Google rates the whole site. Only combinations Google already shows people
 * stay indexed (20+ impressions in Search Console, 90 days to 2026-11-04). Every
 * other combination stays live for visitors but is marked noindex and left out of
 * the sitemap. Re-check Search Console monthly: add pages here as they gain
 * impressions, and give each one real specialty-specific content.
 */
export const INDEXED_FEATURE_SPECIALTY_PAGES = new Set([
  'scheduling/obstetrics-gynecology',
  'check-in/preventive-cardiology',
  'patient-flow/wound-care',
  'scheduling/neurology',
  'lobbyview/primary-care',
  'pre-auth/wound-care',
  'scheduling/gastroenterology',
  'check-in/behavioral-health',
  'analytics/medical-oncology',
  'lobbyview/neurology',
  'analytics/nephrology',
  'analytics/ophthalmology',
  'check-in/urgent-care',
  'scheduling/occupational-therapy',
  'analytics/radiology',
  'patient-flow/dentistry',
  'analytics/gastroenterology',
  'analytics/orthodontics',
  'scheduling/vestibular-therapy',
  'analytics/chiropractic',
  'scheduling/ophthalmology',
  'analytics/mental-health',
])

export function isIndexedFeatureSpecialty(featureSlug: string, specialtySlug: string): boolean {
  return INDEXED_FEATURE_SPECIALTY_PAGES.has(`${featureSlug}/${specialtySlug}`)
}
