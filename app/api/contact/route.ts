import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses'
import { NextResponse } from 'next/server'
import { captureForgeInquiry } from '@/lib/forge-intake'

const ses = new SESClient({ region: process.env.AWS_REGION ?? 'us-east-1' })

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const {
      firstName, lastName, email, phone,
      practice, specialty, providers, interests,
      message, subject, formType,
    } = body

    let emailSubject = ''
    let emailBody = ''

    if (formType === 'demo') {
      emailSubject = `Demo Request: ${practice} (${specialty})`
      emailBody = [
        'New Demo Request',
        '',
        `Name: ${firstName} ${lastName}`,
        `Email: ${email}`,
        `Phone: ${phone || 'Not provided'}`,
        `Practice: ${practice}`,
        `Specialty: ${specialty}`,
        `Providers: ${providers}`,
        `Interests: ${Array.isArray(interests) ? interests.join(', ') : interests}`,
        `Notes: ${message || 'None'}`,
      ].join('\n')
    } else {
      emailSubject = `Contact Form: ${subject}`
      emailBody = [
        'New Contact',
        '',
        `Name: ${[firstName, lastName].filter(Boolean).join(' ')}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        `Message:\n${message}`,
      ].join('\n')
    }

    if (typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return NextResponse.json({ error: 'A valid email is required' }, { status: 400 })
    await captureForgeInquiry({ name: ([firstName, lastName].filter(v => typeof v === 'string' && v.trim()).join(' ') || String(practice || 'Website inquirer')).slice(0, 200), email: email.trim().toLowerCase(), company: String(practice || '').slice(0, 200), phone: String(phone || '').slice(0, 80), message: emailBody.slice(0, 8000), formId: String(formType || 'contact').slice(0, 128) })
    try { await ses.send(
      new SendEmailCommand({
        Source: process.env.SES_FROM_EMAIL,
        Destination: { ToAddresses: [process.env.SES_TO_EMAIL!] },
        Message: {
          Subject: { Data: emailSubject },
          Body: { Text: { Data: emailBody } },
        },
      }),
    ) } catch { console.error('Internal notification failed; inquiry safely stored in Forge') }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}
