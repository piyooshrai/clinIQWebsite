const campaigns = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'] as const;
const hosts = new Set(['cliniqhealthcare.com', 'www.cliniqhealthcare.com']);
const clean = (value: unknown, max = 200) => typeof value === 'string' ? value.replace(/[\u0000-\u001f<>]/g, '').trim().slice(0, max) : '';
function safeUrl(value: unknown, own = false) {
  try {
    const u = new URL(String(value));
    if (!['http:', 'https:'].includes(u.protocol) || u.username || u.password || own && !hosts.has(u.hostname)) return undefined;
    return (u.origin + u.pathname).slice(0, 2048);
  } catch { return undefined; }
}
type Visit = { landingPage?: string; referrer?: string; firstSeenAt: string; campaign: Record<string, string> };
const storageKey = 'cliniq-inquiry-visit-v1';
export function captureIntakeContext() {
  if (typeof window === 'undefined') return {};
  let visit: Visit | undefined;
  try {
    const stored = JSON.parse(sessionStorage.getItem(storageKey) || 'null');
    if (stored && Date.parse(stored.firstSeenAt) > Date.now() - 86400000 && Date.parse(stored.firstSeenAt) <= Date.now()) visit = stored;
  } catch { /* Storage can be disabled; current-page attribution still works. */ }
  if (!visit) {
    const params = new URLSearchParams(window.location.search);
    visit = { landingPage: safeUrl(window.location.href, true), referrer: safeUrl(document.referrer), firstSeenAt: new Date().toISOString(), campaign: Object.fromEntries(campaigns.map(k => [k, clean(params.get(k))])) };
    try { sessionStorage.setItem(storageKey, JSON.stringify(visit)); } catch { /* Optional session context. */ }
  }
  return { ...visit, sourceUrl: safeUrl(window.location.href, true), browserLanguage: navigator.language,
    browserTimezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    viewportWidth: window.innerWidth, deviceType: /Mobi|Android/i.test(navigator.userAgent) ? 'mobile' : 'desktop',
    submittedAt: new Date().toISOString() };
}

/** Browser context is untrusted attribution, never identity/consent evidence. */
export function normalizeIntakeContext(value: unknown, request: Request, hosted = process.env.VERCEL === '1') {
  const c = value && typeof value === 'object' && !Array.isArray(value) ? value as Record<string, unknown> : {};
  const campaign = c.campaign && typeof c.campaign === 'object' ? c.campaign as Record<string, unknown> : {};
  const header = (key: string) => { try { return hosted ? clean(decodeURIComponent(request.headers.get(key) || '')) : ''; } catch { return ''; } };
  const metadata: Record<string, string | number> = { contextVersion: 1, receivedAt: new Date().toISOString(), locationAccuracy: 'approximate', locationSource: 'vercel-ip', clientContextSource: 'browser-reported' };
  for (const [key, v] of Object.entries({ country: header('x-vercel-ip-country'), region: header('x-vercel-ip-country-region'), city: header('x-vercel-ip-city'),
    browserLanguage: clean(c.browserLanguage, 80), browserTimezone: clean(c.browserTimezone, 80), deviceType: clean(c.deviceType, 30),
    firstSeenAt: clean(c.firstSeenAt, 40), submittedAt: clean(c.submittedAt, 40) })) if (v) metadata[key] = v;
  if (typeof c.viewportWidth === 'number' && Number.isInteger(c.viewportWidth) && c.viewportWidth > 0 && c.viewportWidth < 20000) metadata.viewportWidth = c.viewportWidth;
  const utms = Object.fromEntries(campaigns.map(k => [k.replace(/_([a-z])/g, (_, l: string) => l.toUpperCase()), clean(campaign[k])]).filter(([, v]) => v));
  return { sourceUrl: safeUrl(c.sourceUrl, true) || safeUrl(request.headers.get('referer'), true) || 'https://www.cliniqhealthcare.com',
    landingPage: safeUrl(c.landingPage, true), referrer: safeUrl(c.referrer), ...utms, metadata };
}
