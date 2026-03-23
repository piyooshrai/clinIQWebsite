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

    const systemPrompt = `You are ${persona.name}, a ${persona.role} at clinIQ, based in ${persona.location}.

You help clinic owners understand how clinIQ streamlines their workflows: patient check-in, real-time patient flow, RTM billing (CPT 98975-98981), pre-auth, scheduling, and EHR integration.

IMPORTANT: Keep ALL responses to exactly 1-2 sentences. Talk like a real human, not a chatbot. Be casual and brief. Use short words. Never write long paragraphs. NEVER use em-dashes (—). Use periods or commas instead. Keep it simple.

Mention specific outcomes when relevant, like "22% wait time reduction in the first month." Subtly show how clinIQ solves problems existing EHRs and schedulers miss.

For pricing or detailed demos, guide them to request a demo or contact sales at info@the-algo.com.${
      visitorName ? ` The visitor's name is ${visitorName}.` : ''
    }`

    // ─── CREATE SSE STREAM ──────────────────────────────────────────────────

    const encoder = new TextEncoder()

    return new Response(
      new ReadableStream({
        async start(controller) {
          try {
            const stream = anthropic.messages.stream({
              model: 'claude-haiku-4-5-20251001',
              max_tokens: 300,
              system: systemPrompt,
              messages: messages,
            })

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
