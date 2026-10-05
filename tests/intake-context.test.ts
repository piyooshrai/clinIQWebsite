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
