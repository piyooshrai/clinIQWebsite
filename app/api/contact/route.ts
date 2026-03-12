import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses'
import { NextResponse } from 'next/server'

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

    await ses.send(
      new SendEmailCommand({
        Source: process.env.SES_FROM_EMAIL,
        Destination: { ToAddresses: [process.env.SES_TO_EMAIL!] },
        Message: {
          Subject: { Data: emailSubject },
          Body: { Text: { Data: emailBody } },
        },
      }),
    )

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}
