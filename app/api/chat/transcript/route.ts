import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses'
import { NextResponse } from 'next/server'

const ses = new SESClient({ region: process.env.AWS_REGION ?? 'us-east-1' })

interface Message {
  role: 'user' | 'assistant'
  content: string
}

interface TranscriptPayload {
  messages: Message[]
  visitorName: string
  visitorEmail: string
  persona: {
    name: string
    location: string
  }
  intentOverride: string
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as TranscriptPayload

    const {
      messages,
      visitorName,
      visitorEmail,
      persona,
      intentOverride,
    } = body

    // Validate required env vars
    if (!process.env.SES_FROM_EMAIL || !process.env.SES_TO_EMAIL) {
      console.error('SES email environment variables not configured')
      return NextResponse.json(
        { success: false, error: 'Email service not configured' },
        { status: 500 }
      )
    }

    // ─── BUILD EMAIL CONTENT ────────────────────────────────────────────────

    const subjectPrefix = intentOverride === 'abuse' ? '[ABUSE FLAGGED] ' : ''
    const emailSubject = `${subjectPrefix}Chat Transcript - ${visitorName || 'Anonymous'}`

    const transcriptLines = [
      `Chat Transcript`,
      ``,
      `Visitor: ${visitorName || 'Not provided'}`,
      `Email: ${visitorEmail || 'Not provided'}`,
      `Persona: ${persona.name} (${persona.location})`,
      `Intent: ${intentOverride === 'abuse' ? 'ABUSE DETECTED' : 'Normal conversation'}`,
      `Timestamp: ${new Date().toISOString()}`,
      ``,
      `─── CONVERSATION ───`,
      ``,
      ...messages.map(
        (msg) =>
          `[${msg.role.toUpperCase()}]\n${msg.content}\n`
      ),
    ]

    const emailBody = transcriptLines.join('\n')

    // ─── SEND EMAIL ─────────────────────────────────────────────────────────

    try {
      await ses.send(
        new SendEmailCommand({
          Source: process.env.SES_FROM_EMAIL,
          Destination: { ToAddresses: [process.env.SES_TO_EMAIL] },
          Message: {
            Subject: { Data: emailSubject },
            Body: { Text: { Data: emailBody } },
          },
        })
      )

      return NextResponse.json({ success: true })
    } catch (sesError) {
      console.error('SES error:', sesError)
      // Don't expose SES errors to client, just log
      return NextResponse.json({ success: false }, { status: 500 })
    }
  } catch (error) {
    console.error('Transcript API error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to save transcript' },
      { status: 500 }
    )
  }
}
