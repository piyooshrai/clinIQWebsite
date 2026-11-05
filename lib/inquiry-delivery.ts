import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses'
import { captureForgeInquiry, type Inquiry } from './forge-intake'

export type Notification = { subject: string; body: string }

const ses = new SESClient({ region: process.env.AWS_REGION ?? 'us-east-1' })

async function sendNotification({ subject, body }: Notification) {
  if (!process.env.SES_FROM_EMAIL || !process.env.SES_TO_EMAIL) throw new Error('Email notification is not configured')
  await ses.send(new SendEmailCommand({
    Source: process.env.SES_FROM_EMAIL,
    Destination: { ToAddresses: [process.env.SES_TO_EMAIL] },
    Message: { Subject: { Data: subject }, Body: { Text: { Data: body } } },
  }))
}

/**
 * Sends an inquiry to Forge and to the team inbox independently. It only fails
 * when both channels fail, so one outage can never lose a lead.
 */
export async function deliverInquiry(
  inquiry: Inquiry,
  notification: Notification,
  channels: { capture: (i: Inquiry) => Promise<void>; notify: (n: Notification) => Promise<void> } = { capture: captureForgeInquiry, notify: sendNotification },
) {
  const [forge, email] = await Promise.allSettled([channels.capture(inquiry), channels.notify(notification)])
  if (forge.status === 'rejected') console.error('Forge inquiry capture failed:', forge.reason)
  if (email.status === 'rejected') console.error('Inquiry email notification failed:', email.reason)
  if (forge.status === 'rejected' && email.status === 'rejected') throw new Error('Inquiry could not be delivered')
  return { forge: forge.status === 'fulfilled', email: email.status === 'fulfilled' }
}

export const isValidEmail = (value: unknown): value is string =>
  typeof value === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())

/** Returns the names of any required fields that are blank. */
export function missingFields(body: Record<string, unknown>, required: readonly string[]) {
  return required.filter((key) => typeof body[key] !== 'string' || !(body[key] as string).trim())
}
