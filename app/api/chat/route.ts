import { NextResponse } from 'next/server'
import { matchIntent, type ChatMessage } from '@/lib/chat-intents'

/* ────────────────────────────────────────────────────────────────────────────
   /api/chat
   Scripted intent-matched chat responder (no LLM).
   Streams the canned reply as SSE chunks so the ChatWidget's existing
   typewriter effect keeps working with zero client changes.
   ──────────────────────────────────────────────────────────────────────────── */

const CHUNK_SIZE = 6           // characters per SSE chunk
const CHUNK_DELAY_MS = 18      // pacing between chunks (server-side feel)

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      messages?: ChatMessage[]
      personaKey?: string
      visitorName?: string
    }

    const messages = body.messages ?? []
    const visitorName = body.visitorName ?? ''

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Newest user message is the trigger; everything before it is history.
    const lastUserMessage = [...messages].reverse().find((m) => m.role === 'user')
    if (!lastUserMessage) {
      return NextResponse.json({ error: 'No user message in payload' }, { status: 400 })
    }

    const history = messages.slice(0, messages.lastIndexOf(lastUserMessage))

    const { reply } = matchIntent(lastUserMessage.content, {
      visitorName,
      history,
    })

    const encoder = new TextEncoder()

    return new Response(
      new ReadableStream({
        async start(controller) {
          try {
            // Stream the canned reply in small chunks to mimic an SSE token stream.
            for (let i = 0; i < reply.length; i += CHUNK_SIZE) {
              const piece = reply.slice(i, i + CHUNK_SIZE)
              const data = JSON.stringify({ content: piece })
              controller.enqueue(encoder.encode(`data: ${data}\n\n`))
              if (CHUNK_DELAY_MS > 0) await delay(CHUNK_DELAY_MS)
            }
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
          Connection: 'keep-alive',
        },
      },
    )
  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json({ error: 'Failed to process chat' }, { status: 500 })
  }
}
