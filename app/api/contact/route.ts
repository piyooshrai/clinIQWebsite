import { NextResponse } from 'next/server'
import { deliverInquiry, isValidEmail, missingFields } from '@/lib/inquiry-delivery'
import { normalizeIntakeContext } from '@/lib/intake-context'

const REQUIRED = {
  demo: ['firstName', 'practice', 'specialty'],
  contact: ['firstName', 'subject', 'message'],
} as const

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const {
      firstName, lastName, email, phone,
      practice, specialty, providers, interests,
      message, subject, formType,
    } = body

    if (!isValidEmail(email)) return NextResponse.json({ error: 'A valid email is required' }, { status: 400 })
    const missing = missingFields(body, formType === 'demo' ? REQUIRED.demo : REQUIRED.contact)
    if (missing.length) return NextResponse.json({ error: 'Missing required fields', fields: missing }, { status: 400 })

    let emailSubject = ''
    let emailBody = ''

    if (formType === 'demo') {
      emailSubject = `Demo Request: ${practice} (${specialty})`
      emailBody = [
        'New Demo Request',
        '',
        `Name: ${[firstName, lastName].filter(Boolean).join(' ')}`,
        `Email: ${email}`,
        `Phone: ${phone || 'Not provided'}`,
        `Practice: ${practice}`,
        `Specialty: ${specialty}`,
        `Providers: ${providers || 'Not asked'}`,
        `Interests: ${Array.isArray(interests) && interests.length ? interests.join(', ') : 'Not asked'}`,
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

    await deliverInquiry(
      {
        name: ([firstName, lastName].filter((v) => typeof v === 'string' && v.trim()).join(' ') || String(practice || 'Website inquirer')).slice(0, 200),
        email: email.trim().toLowerCase(),
        company: String(practice || '').slice(0, 200),
        phone: String(phone || '').slice(0, 80),
        message: emailBody.slice(0, 8000),
        ...normalizeIntakeContext(body.intakeContext, request),
        formId: String(formType || 'contact').slice(0, 128),
      },
      { subject: emailSubject, body: emailBody },
    )

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}
