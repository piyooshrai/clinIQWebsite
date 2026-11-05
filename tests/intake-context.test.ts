import { test } from 'node:test';
import assert from 'node:assert/strict';
import { normalizeIntakeContext } from '../lib/intake-context';

test('captures bounded attribution and approximate server location without storing IPs or URL secrets', () => {
  const request = new Request('https://www.cliniqhealthcare.com/api/contact', { headers: {
    'x-vercel-ip-city': 'New%20York', 'x-vercel-ip-country-region': 'NY', 'x-vercel-ip-country': 'US', 'x-forwarded-for': '1.2.3.4',
  } });
  const result = normalizeIntakeContext({ sourceUrl: 'https://www.cliniqhealthcare.com/contact?token=secret#private', landingPage: 'https://www.cliniqhealthcare.com/features', referrer: 'https://example.com/page?token=secret',
    campaign: { utm_source: 'newsletter', utm_campaign: 'a'.repeat(1000), unexpected: 'secret' }, browserTimezone: 'America/Denver', viewportWidth: 1200, city: 'Fake city' }, request, true);
  assert.equal(result.sourceUrl, 'https://www.cliniqhealthcare.com/contact');
  assert.equal(result.referrer, 'https://example.com/page');
  assert.equal(result.metadata.city, 'New York');
  assert.equal(result.metadata.browserTimezone, 'America/Denver');
  assert.equal((result as Record<string, unknown>).utmSource, 'newsletter');
  assert.equal(String((result as Record<string, unknown>).utmCampaign).length, 200);
  assert.ok(!JSON.stringify(result).includes('secret'));
  assert.ok(!JSON.stringify(result).includes('1.2.3.4'));
});
test('rejects external submission URLs and ignores spoofed location outside hosting', () => {
  const result = normalizeIntakeContext({ sourceUrl: 'https://attacker.example/', referrer: 'javascript:alert(1)', metadata: { country: 'FAKE' }, viewportWidth: Infinity }, new Request('https://www.cliniqhealthcare.com/api/contact', { headers: { 'x-vercel-ip-country': 'XX' } }), false);
  assert.equal(result.sourceUrl, 'https://www.cliniqhealthcare.com');
  assert.equal(result.referrer, undefined);
  assert.equal(result.metadata.country, undefined);
  assert.equal(result.metadata.viewportWidth, undefined);
});

test('labels where a lead came from in plain English', async () => {
  const { describeSource } = await import('../lib/intake-context');
  assert.equal(describeSource({ referrer: 'https://www.google.com/' }), 'Google search');
  assert.equal(describeSource({ referrer: 'https://chatgpt.com/' }), 'ChatGPT');
  assert.equal(describeSource({ utmSource: 'chatgpt.com' }), 'ChatGPT');
  assert.equal(describeSource({ referrer: 'https://gemini.google.com/app' }), 'Gemini');
  assert.equal(describeSource({ referrer: 'https://www.linkedin.com/feed/' }), 'LinkedIn');
  assert.equal(describeSource({ referrer: 'https://www.google.com/', clickId: 'gclid' }), 'Google Ads (paid)');
  assert.equal(describeSource({ utmSource: 'newsletter', utmMedium: 'email', utmCampaign: 'nov' }), 'Campaign: newsletter / email (nov)');
  assert.equal(describeSource({ referrer: 'https://www.capterra.com/x' }), 'Referral from capterra.com');
  assert.match(describeSource({}), /^Direct/);
});
test('keeps the first visit and writes readable email lines with location', async () => {
  const { normalizeIntakeContext, attributionLines } = await import('../lib/intake-context');
  const request = new Request('https://www.cliniqhealthcare.com/api/contact', { headers: {
    'x-vercel-ip-city': 'Denver', 'x-vercel-ip-country-region': 'CO', 'x-vercel-ip-country': 'US', 'x-vercel-ip-postal-code': '80202',
  } });
  const ctx = normalizeIntakeContext({
    sourceUrl: 'https://www.cliniqhealthcare.com/demo', landingPage: 'https://www.cliniqhealthcare.com/pricing', referrer: 'https://www.cliniqhealthcare.com/',
    firstSeenAt: '2026-11-05T10:00:00Z', deviceType: 'mobile',
    firstTouch: { referrer: 'https://chatgpt.com/', landingPage: 'https://www.cliniqhealthcare.com/features/rtm', firstSeenAt: '2026-10-20T09:00:00Z', campaign: {} },
  }, request, true);
  assert.equal(ctx.metadata.sourceChannel, 'Direct (typed the address, a bookmark, or the source was hidden)');
  assert.equal(ctx.metadata.firstSourceChannel, 'ChatGPT');
  assert.equal(ctx.metadata.location, 'Denver, CO, United States 80202');
  const text = attributionLines(ctx).join('\n');
  assert.match(text, /First visit: 2026-10-20 via ChatGPT, landed on \/features\/rtm/);
  assert.match(text, /Location: Denver, CO, United States 80202/);
  assert.match(text, /Submitted from: \/demo/);
});
