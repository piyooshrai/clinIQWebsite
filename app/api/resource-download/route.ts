import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    // Placeholder: log the download request.
    // In production, trigger email delivery (SendGrid, Resend, etc.)
    console.log('[resource-download]', body)
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ success: false }, { status: 400 })
  }
}
