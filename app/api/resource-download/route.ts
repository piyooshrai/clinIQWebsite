import { NextRequest, NextResponse } from 'next/server'
import { deliverInquiry, isValidEmail } from '@/lib/inquiry-delivery'
import { attributionLines, normalizeIntakeContext } from '@/lib/intake-context'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { resourceSlug, resourceTitle, intakeContext, ...fields } = body as Record<string, unknown>
    if (!isValidEmail(fields.email)) return NextResponse.json({ error: 'A valid email is required' }, { status: 400 })

    const title = String(resourceTitle || resourceSlug || 'Resource').slice(0, 200)
    const context = normalizeIntakeContext(intakeContext, request)
    const message = [
      'New Resource Download',
      '',
      `Resource: ${title}`,
      ...Object.entries(fields).map(([key, value]) => `${key}: ${String(value).slice(0, 500)}`),
      ...attributionLines(context),
    ].join('\n').slice(0, 8000)
    const pick = (...keys: string[]) => keys.map((k) => fields[k]).find((v) => typeof v === 'string' && v.trim()) as string | undefined

    await deliverInquiry(
      {
        name: (pick('name', 'fullName', 'firstName') || fields.email).slice(0, 200),
        email: fields.email.trim().toLowerCase(),
        company: (pick('practice', 'practiceName', 'company', 'organization') || '').slice(0, 200),
        phone: (pick('phone') || '').slice(0, 80),
        message,
        ...context,
        formId: `resource:${String(resourceSlug || 'unknown')}`.slice(0, 128),
      },
      { subject: `Resource Download: ${title}`, body: message },
    )
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Resource download error:', error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
