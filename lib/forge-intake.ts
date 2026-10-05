import { createHash } from 'node:crypto';
type Inquiry = { name: string; email: string; company?: string; phone?: string; message: string; formId: string };
export async function captureForgeInquiry(input: Inquiry) {
  if (!process.env.FORGE_INGESTION_TOKEN) throw new Error('Inquiry capture is not configured');
  const submissionId = createHash('sha256').update(JSON.stringify(input) + Math.floor(Date.now() / 900000)).digest('hex');
  const response = await fetch('https://forge.the-algo.com/api/v1/leads', { method: 'POST', cache: 'no-store', redirect: 'error', signal: AbortSignal.timeout(15000), headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${process.env.FORGE_INGESTION_TOKEN}` }, body: JSON.stringify({ schemaVersion: 1, submissionId, ...input, sourceUrl: 'https://www.cliniqhealthcare.com', signals: { captcha: 'not_checked' } }) });
  if (!response.ok) throw new Error(`Inquiry capture failed (${response.status})`);
  const result = await response.json(); if (!result.accepted) throw new Error('Inquiry was not accepted');
}
