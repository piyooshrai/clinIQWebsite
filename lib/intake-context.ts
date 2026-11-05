const campaigns = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'] as const;
// Ad-click identifiers: they mark a paid click and allow importing conversions back into the ad platform.
const clickIds = ['gclid', 'gbraid', 'wbraid', 'msclkid', 'fbclid', 'li_fat_id', 'ttclid'] as const;
const hosts = new Set(['cliniqhealthcare.com', 'www.cliniqhealthcare.com']);
const clean = (value: unknown, max = 200) => typeof value === 'string' ? value.replace(/[\u0000-\u001f<>]/g, '').trim().slice(0, max) : '';
function safeUrl(value: unknown, own = false) {
  try {
    const u = new URL(String(value));
    if (!['http:', 'https:'].includes(u.protocol) || u.username || u.password || own && !hosts.has(u.hostname)) return undefined;
    return (u.origin + u.pathname).slice(0, 2048);
  } catch { return undefined; }
}
const isOwnSite = (url?: string) => { try { return !!url && hosts.has(new URL(url).hostname); } catch { return false; } };

type Touch = { landingPage?: string; referrer?: string; firstSeenAt: string; campaign: Record<string, string>; clickId?: string; clickIdValue?: string };
const visitKey = 'cliniq-inquiry-visit-v1';
const firstTouchKey = 'cliniq-first-touch-v1';
const FIRST_TOUCH_DAYS = 90;

function readTouch(storage: Storage, key: string, maxAgeMs: number): Touch | undefined {
  try {
    const stored = JSON.parse(storage.getItem(key) || 'null');
    const at = stored && Date.parse(stored.firstSeenAt);
    if (at && at > Date.now() - maxAgeMs && at <= Date.now()) return stored;
  } catch { /* Storage can be disabled; current-page attribution still works. */ }
  return undefined;
}

function currentTouch(): Touch {
  const params = new URLSearchParams(window.location.search);
  const click = clickIds.find(k => params.get(k));
  const referrer = safeUrl(document.referrer);
  return {
    landingPage: safeUrl(window.location.href, true),
    // Moving between our own pages is not a source.
    referrer: isOwnSite(referrer) ? undefined : referrer,
    firstSeenAt: new Date().toISOString(),
    campaign: Object.fromEntries(campaigns.map(k => [k, clean(params.get(k))])),
    ...(click ? { clickId: click, clickIdValue: clean(params.get(click)) } : {}),
  };
}

export function captureIntakeContext() {
  if (typeof window === 'undefined') return {};
  let visit = readTouch(sessionStorage, visitKey, 86400000);
  if (!visit) {
    visit = currentTouch();
    try { sessionStorage.setItem(visitKey, JSON.stringify(visit)); } catch { /* Optional session context. */ }
  }
  // The very first visit is remembered for 90 days, so a lead who returns later keeps their original source.
  let firstTouch: Touch | undefined;
  try {
    firstTouch = readTouch(localStorage, firstTouchKey, FIRST_TOUCH_DAYS * 86400000);
    if (!firstTouch) { firstTouch = visit; localStorage.setItem(firstTouchKey, JSON.stringify(visit)); }
  } catch { firstTouch = visit; }
  return { ...visit, firstTouch, sourceUrl: safeUrl(window.location.href, true), browserLanguage: navigator.language,
    browserTimezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    viewportWidth: window.innerWidth, deviceType: /Mobi|Android/i.test(navigator.userAgent) ? 'mobile' : 'desktop',
    submittedAt: new Date().toISOString() };
}

const AI_ASSISTANTS: [RegExp, string][] = [
  [/(^|\.)chatgpt\.com$|(^|\.)chat\.openai\.com$/, 'ChatGPT'], [/(^|\.)perplexity\.ai$/, 'Perplexity'],
  [/^gemini\.google\.com$/, 'Gemini'], [/^copilot\.microsoft\.com$/, 'Microsoft Copilot'], [/(^|\.)claude\.ai$/, 'Claude'],
];
const SEARCH: [RegExp, string][] = [
  [/(^|\.)google\.[a-z.]+$/, 'Google search'], [/(^|\.)bing\.com$/, 'Bing search'], [/(^|\.)duckduckgo\.com$/, 'DuckDuckGo search'],
  [/(^|\.)yahoo\.com$/, 'Yahoo search'], [/(^|\.)ecosia\.org$/, 'Ecosia search'], [/(^|\.)brave\.com$/, 'Brave search'],
];
const SOCIAL: [RegExp, string][] = [
  [/(^|\.)linkedin\.com$|^lnkd\.in$/, 'LinkedIn'], [/(^|\.)facebook\.com$|^fb\.me$/, 'Facebook'], [/(^|\.)instagram\.com$/, 'Instagram'],
  [/^(www\.)?x\.com$|^t\.co$|(^|\.)twitter\.com$/, 'X (Twitter)'], [/(^|\.)reddit\.com$/, 'Reddit'], [/(^|\.)youtube\.com$|^youtu\.be$/, 'YouTube'],
];
const PAID_CLICKS: Record<string, string> = {
  gclid: 'Google Ads (paid)', gbraid: 'Google Ads (paid)', wbraid: 'Google Ads (paid)', msclkid: 'Microsoft Ads (paid)',
  fbclid: 'Facebook or Instagram', li_fat_id: 'LinkedIn Ads (paid)', ttclid: 'TikTok Ads (paid)',
};

/** Plain-English answer to "how did this person find clinIQ?" */
export function describeSource(t: { referrer?: string; utmSource?: string; utmMedium?: string; utmCampaign?: string; clickId?: string }): string {
  if (t.clickId && PAID_CLICKS[t.clickId]) return PAID_CLICKS[t.clickId];
  if (t.utmSource) {
    const ai = AI_ASSISTANTS.find(([re]) => re.test(t.utmSource!.toLowerCase()));
    if (ai) return ai[1];
    return `Campaign: ${[t.utmSource, t.utmMedium].filter(Boolean).join(' / ')}${t.utmCampaign ? ` (${t.utmCampaign})` : ''}`;
  }
  if (!t.referrer) return 'Direct (typed the address, a bookmark, or the source was hidden)';
  let host = '';
  try { host = new URL(t.referrer).hostname.toLowerCase(); } catch { return 'Unknown'; }
  for (const list of [AI_ASSISTANTS, SEARCH, SOCIAL]) {
    const match = list.find(([re]) => re.test(host));
    if (match) return match[1];
  }
  return `Referral from ${host.replace(/^www\./, '')}`;
}

/** Browser context is untrusted attribution, never identity/consent evidence. */
export function normalizeIntakeContext(value: unknown, request: Request, hosted = process.env.VERCEL === '1') {
  const c = value && typeof value === 'object' && !Array.isArray(value) ? value as Record<string, unknown> : {};
  const campaign = c.campaign && typeof c.campaign === 'object' ? c.campaign as Record<string, unknown> : {};
  const first = c.firstTouch && typeof c.firstTouch === 'object' && !Array.isArray(c.firstTouch) ? c.firstTouch as Record<string, unknown> : {};
  const firstCampaign = first.campaign && typeof first.campaign === 'object' ? first.campaign as Record<string, unknown> : {};
  const header = (key: string) => { try { return hosted ? clean(decodeURIComponent(request.headers.get(key) || '')) : ''; } catch { return ''; } };
  const metadata: Record<string, string | number> = { contextVersion: 2, receivedAt: new Date().toISOString(), locationAccuracy: 'approximate', locationSource: 'vercel-ip', clientContextSource: 'browser-reported' };
  const clickId = (clickIds as readonly string[]).includes(String(c.clickId)) ? String(c.clickId) : '';
  const firstClickId = (clickIds as readonly string[]).includes(String(first.clickId)) ? String(first.clickId) : '';
  for (const [key, v] of Object.entries({ country: header('x-vercel-ip-country'), region: header('x-vercel-ip-country-region'), city: header('x-vercel-ip-city'),
    postalCode: header('x-vercel-ip-postal-code'), ipTimezone: header('x-vercel-ip-timezone'),
    browserLanguage: clean(c.browserLanguage, 80), browserTimezone: clean(c.browserTimezone, 80), deviceType: clean(c.deviceType, 30),
    firstSeenAt: clean(c.firstSeenAt, 40), submittedAt: clean(c.submittedAt, 40),
    clickId, clickIdValue: clickId ? clean(c.clickIdValue) : '' })) if (v) metadata[key] = v;
  if (typeof c.viewportWidth === 'number' && Number.isInteger(c.viewportWidth) && c.viewportWidth > 0 && c.viewportWidth < 20000) metadata.viewportWidth = c.viewportWidth;
  const camel = (k: string) => k.replace(/_([a-z])/g, (_, l: string) => l.toUpperCase());
  const utms = Object.fromEntries(campaigns.map(k => [camel(k), clean(campaign[k])]).filter(([, v]) => v));
  const referrer = safeUrl(c.referrer);
  const landingPage = safeUrl(c.landingPage, true);

  // First visit (up to 90 days earlier), when the browser remembered it
  const firstReferrer = safeUrl(first.referrer);
  const firstLanding = safeUrl(first.landingPage, true);
  const firstUtms = Object.fromEntries(campaigns.map(k => [camel(k), clean(firstCampaign[k])]).filter(([, v]) => v));
  const firstSeen = clean(first.firstSeenAt, 40);
  if (firstSeen) metadata.firstTouchAt = firstSeen;
  if (firstLanding) metadata.firstLandingPage = firstLanding;
  if (firstReferrer && !isOwnSite(firstReferrer)) metadata.firstReferrer = firstReferrer;
  for (const [k, v] of Object.entries(firstUtms)) metadata[`first${k[0].toUpperCase()}${k.slice(1)}`] = String(v);
  if (firstClickId) metadata.firstClickId = firstClickId;

  metadata.sourceChannel = describeSource({ referrer: isOwnSite(referrer) ? undefined : referrer, ...utms, clickId });
  if (firstSeen) metadata.firstSourceChannel = describeSource({ referrer: metadata.firstReferrer as string | undefined, ...firstUtms, clickId: firstClickId });
  const location = describeLocation(metadata);
  if (location) metadata.location = location;

  return { sourceUrl: safeUrl(c.sourceUrl, true) || safeUrl(request.headers.get('referer'), true) || 'https://www.cliniqhealthcare.com',
    landingPage, referrer, ...utms, metadata };
}

function describeLocation(m: Record<string, string | number>): string {
  let country = String(m.country || '');
  try { if (country) country = new Intl.DisplayNames(['en'], { type: 'region' }).of(country) || country; } catch { /* keep the code */ }
  const place = [m.city, m.region, country].filter(Boolean).join(', ');
  return place ? `${place}${m.postalCode ? ` ${m.postalCode}` : ''}` : '';
}

const path = (url?: unknown) => { try { return url ? new URL(String(url)).pathname : ''; } catch { return ''; } };

/** Readable lines for the inquiry email: how they found clinIQ and roughly where they are. */
export function attributionLines(ctx: ReturnType<typeof normalizeIntakeContext>): string[] {
  const m = ctx.metadata;
  const day = (iso: unknown) => String(iso || '').slice(0, 10);
  const lines = ['', 'HOW THEY FOUND CLINIQ', `Source: ${m.sourceChannel}`];
  if (ctx.referrer) lines.push(`Came from: ${ctx.referrer}`);
  if (ctx.landingPage) lines.push(`Landed on: ${path(ctx.landingPage)}`);
  lines.push(`Submitted from: ${path(ctx.sourceUrl) || '/'}`);
  const firstDiffers = m.firstTouchAt && day(m.firstTouchAt) !== day(m.firstSeenAt);
  if (firstDiffers) {
    lines.push(`First visit: ${day(m.firstTouchAt)} via ${m.firstSourceChannel}${m.firstLandingPage ? `, landed on ${path(m.firstLandingPage)}` : ''}`);
  }
  if (m.clickId) lines.push(`Ad click: ${m.clickId}`);
  lines.push('', 'LOCATION (approximate, from their internet connection)', `Location: ${m.location || 'Not available'}`);
  if (m.browserTimezone) lines.push(`Time zone: ${m.browserTimezone}`);
  lines.push(`Device: ${m.deviceType || 'unknown'}${m.browserLanguage ? `, language ${m.browserLanguage}` : ''}`);
  return lines;
}
