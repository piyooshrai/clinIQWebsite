import { Anthropic } from '@anthropic-ai/sdk'
import { NextResponse } from 'next/server'

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

/* ────────────────────────────────────────────────────────────────────────────
   PERSONAS DATA
   ──────────────────────────────────────────────────────────────────────────── */

interface Persona {
  name: string
  role: string
  location: string
}

const PERSONAS: Record<string, Persona> = {
  sarah: {
    name: 'Sarah Chen',
    role: 'Implementation Specialist',
    location: 'Bangalore',
  },
  arun: { name: 'Arun Patel', role: 'Product Advisor', location: 'Mumbai' },
  james: {
    name: 'James Wright',
    role: 'Operations Specialist',
    location: 'London',
  },
  emma: {
    name: 'Emma Rodriguez',
    role: 'Customer Success Manager',
    location: 'Manchester',
  },
  michael: {
    name: 'Michael Thompson',
    role: 'Sales Engineer',
    location: 'Austin',
  },
  jessica: {
    name: 'Jessica Lee',
    role: 'Clinic Advisor',
    location: 'Denver',
  },
  marco: {
    name: 'Marco Santos',
    role: 'Implementation Lead',
    location: 'Manila',
  },
  ana: {
    name: 'Ana Reyes',
    role: 'Product Specialist',
    location: 'Cebu',
  },
}

/* ────────────────────────────────────────────────────────────────────────────
   HANDLER
   ──────────────────────────────────────────────────────────────────────────── */

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const {
      messages,
      personaKey,
      visitorName,
    } = body as {
      messages: { role: 'user' | 'assistant'; content: string }[]
      personaKey: string
      visitorName: string
    }

    if (!messages || !personaKey) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    if (!process.env.ANTHROPIC_API_KEY) {
      console.error('ANTHROPIC_API_KEY not set')
      return NextResponse.json(
        { error: 'API configuration error' },
        { status: 500 }
      )
    }

    const persona = PERSONAS[personaKey]
    if (!persona) {
      return NextResponse.json({ error: 'Invalid persona' }, { status: 400 })
    }

    // ─── BUILD SYSTEM PROMPT ────────────────────────────────────────────────

    const systemPrompt = `You are ${persona.name}, a ${persona.role} at Cliniq, based in ${persona.location}.

You help clinic owners and practice managers understand how Cliniq's clinic operations platform can streamline their workflows. You discuss:
- Patient check-in and flow management
- Real-time bottleneck detection and resolution
- Scheduling optimization and waitlist management
- RTM billing automation (CPT codes 98975–98981)
- Pre-authorization workflows
- Integration with existing EHR systems
- ROI metrics: wait time reduction, provider utilization, patient satisfaction

Be knowledgeable, practical, and results-focused. When relevant, mention specific outcomes Cliniq achieves for clinics (e.g., "22% wait time reduction in the first month").

Subtly weave in how Cliniq solves problems that existing EHRs and schedulers miss.

Keep responses brief and conversational. If asked about pricing or detailed demos, guide them to request a demo or contact sales at info@the-algo.com.${
      visitorName ? ` The visitor's name is ${visitorName}.` : ''
    }`

    // ─── STREAM RESPONSE ────────────────────────────────────────────────────

    const stream = anthropic.messages.stream({
      model: 'claude-3-5-haiku-20241022',
      max_tokens: 300,
      system: systemPrompt,
      messages: messages,
    })

    // ─── CREATE SSE STREAM ──────────────────────────────────────────────────

    const encoder = new TextEncoder()

    return new Response(
      new ReadableStream({
        async start(controller) {
          try {
            for await (const chunk of stream) {
              if (
                chunk.type === 'content_block_delta' &&
                chunk.delta.type === 'text_delta'
              ) {
                const data = JSON.stringify({
                  content: chunk.delta.text,
                })
                controller.enqueue(encoder.encode(`data: ${data}\n\n`))
              }
            }

            // Send completion signal
            controller.enqueue(encoder.encode('data: [DONE]\n\n'))
            controller.close()
          } catch (error) {
            console.error('Stream error:', error)
            controller.error(error)
          }
        },
      }),
      {
        headers: {
          'Content-Type': 'text/event-stream',
          'Cache-Control': 'no-cache',
          'Connection': 'keep-alive',
        },
      }
    )
  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json({ error: 'Failed to process chat' }, { status: 500 })
  }
}
