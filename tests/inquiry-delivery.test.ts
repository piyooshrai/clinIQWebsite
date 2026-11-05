import { test } from 'node:test';
import assert from 'node:assert/strict';
import { deliverInquiry, isValidEmail, missingFields } from '../lib/inquiry-delivery';

const inquiry = { name: 'Test', email: 'test@example.com', message: 'Hi', formId: 'demo', sourceUrl: 'https://www.cliniqhealthcare.com/demo', metadata: {} } as unknown as Parameters<typeof deliverInquiry>[0];
const note = { subject: 's', body: 'b' };
const ok = async () => {};
const fail = async () => { throw new Error('down'); };
const quiet = async <T>(fn: () => Promise<T>) => {
  const original = console.error;
  console.error = () => {};
  try { return await fn(); } finally { console.error = original; }
};

test('reports both channels when both succeed', async () => {
  assert.deepEqual(await deliverInquiry(inquiry, note, { capture: ok, notify: ok }), { forge: true, email: true });
});

test('keeps the lead when Forge is down', async () => {
  assert.deepEqual(await quiet(() => deliverInquiry(inquiry, note, { capture: fail, notify: ok })), { forge: false, email: true });
});

test('keeps the lead when email is down', async () => {
  assert.deepEqual(await quiet(() => deliverInquiry(inquiry, note, { capture: ok, notify: fail })), { forge: true, email: false });
});

test('fails only when both channels fail', async () => {
  await assert.rejects(quiet(() => deliverInquiry(inquiry, note, { capture: fail, notify: fail })));
});

test('validates emails and required fields', () => {
  assert.equal(isValidEmail('a@b.co'), true);
  assert.equal(isValidEmail('nope'), false);
  assert.equal(isValidEmail(undefined), false);
  assert.deepEqual(missingFields({ a: 'x', b: '  ' }, ['a', 'b', 'c']), ['b', 'c']);
});
