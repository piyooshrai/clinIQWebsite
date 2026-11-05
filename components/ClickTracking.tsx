'use client'

import { useEffect } from 'react'
import { trackEvent } from '@/lib/analytics'

const DEMO_PATH = /^\/(?:(?:es|ar)\/)?demo(?:[/?#]|$)/

// Names where on the page a click happened: nav, footer, or the section's component.
function locationOf(el: Element): string {
  const tagged = el.closest('[data-cta-location]')
  if (tagged) return tagged.getAttribute('data-cta-location') || 'unknown'
  if (el.closest('nav')) return 'nav'
  if (el.closest('footer')) return 'footer'
  const section = el.closest('section')
  const className = section?.className.toString().split(/\s+/)[0] ?? ''
  return className.replace(/__[A-Za-z0-9_-]+$/, '') || 'page'
}

// One listener for the whole site, so every demo button, phone link and form is measured.
export default function ClickTracking() {
  useEffect(() => {
    const startedForms = new WeakSet<HTMLFormElement>()

    function onClick(event: MouseEvent) {
      const link = (event.target as Element | null)?.closest?.('a[href]')
      if (!link) return
      const href = link.getAttribute('href') || ''
      const where = locationOf(link)
      const page = window.location.pathname
      if (href.startsWith('tel:')) {
        trackEvent('phone_click', { link_location: where, page_path: page })
      } else if (href.startsWith('mailto:')) {
        trackEvent('email_click', { link_location: where, page_path: page, email: href.slice(7) })
      } else {
        let path = href
        try { path = new URL(href, window.location.origin).pathname } catch {}
        if (DEMO_PATH.test(path)) {
          trackEvent('cta_click', {
            cta_label: (link.textContent || '').trim().slice(0, 60),
            cta_location: where,
            page_path: page,
          })
        }
      }
    }

    function onFocus(event: FocusEvent) {
      const form = (event.target as Element | null)?.closest?.('form')
      if (!form || startedForms.has(form)) return
      startedForms.add(form)
      trackEvent('form_start', {
        form_name: form.getAttribute('data-form') || form.getAttribute('aria-label') || 'form',
        page_path: window.location.pathname,
      })
    }

    document.addEventListener('click', onClick, true)
    document.addEventListener('focusin', onFocus, true)
    return () => {
      document.removeEventListener('click', onClick, true)
      document.removeEventListener('focusin', onFocus, true)
    }
  }, [])

  return null
}
