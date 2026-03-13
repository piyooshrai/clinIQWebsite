/**
 * Analytics utilities — fire GA4 custom events throughout the app.
 * All functions are safe to call server-side (they no-op if window is undefined).
 *
 * GA4 event reference: https://developers.google.com/analytics/devguides/collection/ga4/reference/events
 */

type EventParams = Record<string, string | number | boolean>

/** Fire a raw GA4 event. All other helpers call this. */
export function trackEvent(action: string, params?: EventParams) {
  if (typeof window === 'undefined' || !window.gtag) return
  window.gtag('event', action, params ?? {})
}

/**
 * CTA / button click — use on any primary action button.
 * Shows up in GA4 as event: cta_click
 * Dimensions: cta_label, cta_location (page path or section name)
 */
export function trackCTA(label: string, location: string) {
  trackEvent('cta_click', { cta_label: label, cta_location: location })
}

/**
 * Form submission — fires when a form is successfully submitted.
 * Shows up in GA4 as event: form_submit
 * Dimensions: form_name, [any extra params e.g. resource_slug, specialty]
 */
export function trackFormSubmit(formName: string, extra?: EventParams) {
  trackEvent('form_submit', { form_name: formName, ...extra })
}

/**
 * Navigation click — fires when a user clicks a nav dropdown link.
 * Shows up in GA4 as event: nav_click
 * Dimensions: nav_section (e.g. "Features"), nav_label (e.g. "Patient Flow")
 */
export function trackNavClick(section: string, label: string) {
  trackEvent('nav_click', { nav_section: section, nav_label: label })
}

/**
 * Resource gating — fires when a resource page form is shown (impression).
 * Shows up in GA4 as event: resource_gate_view
 * Dimension: resource_slug
 */
export function trackResourceView(slug: string) {
  trackEvent('resource_gate_view', { resource_slug: slug })
}

/**
 * Resource unlock — fires when a gated resource is successfully unlocked.
 * Shows up in GA4 as event: resource_unlock
 * Dimensions: resource_slug, specialty/role (from form fields)
 */
export function trackResourceUnlock(slug: string, extra?: EventParams) {
  trackEvent('resource_unlock', { resource_slug: slug, ...extra })
}

/**
 * Demo request submitted.
 * Shows up in GA4 as event: demo_request
 * Dimensions: specialty, providers
 */
export function trackDemoRequest(specialty: string, providers: string) {
  trackEvent('demo_request', { specialty, providers })
}

/**
 * Contact form submitted.
 * Shows up in GA4 as event: contact_submit
 * Dimension: subject
 */
export function trackContactSubmit(subject: string) {
  trackEvent('contact_submit', { subject })
}
