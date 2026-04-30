'use client'

import { useState, useRef, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import styles from './ChatWidget.module.css'

/* ────────────────────────────────────────────────────────────────────────────
   TYPES & DATA
   ──────────────────────────────────────────────────────────────────────────── */

interface Persona {
  key: string
  name: string
  img: string
  role: string
  location: string
  cityCode: string
  shift: 'in' | 'uk' | 'us' | 'ph'
  greeting: string
}

interface Message {
  role: 'user' | 'assistant'
  content: string
}

type ConversationPhase = 'name' | 'chat' | 'email' | 'ended'

const PERSONAS: Record<string, Persona> = {
  sarah: {
    key: 'sarah',
    name: 'Sarah Chen',
    img: '/team/Sarah_IN.jpg',
    role: 'Implementation Specialist',
    location: 'Bangalore',
    cityCode: 'BLR',
    shift: 'in',
    greeting: 'Hey there. What is your name?',
  },
  arun: {
    key: 'arun',
    name: 'Arun Patel',
    img: '/team/Arun_IN.jpg',
    role: 'Product Advisor',
    location: 'Mumbai',
    cityCode: 'BOM',
    shift: 'in',
    greeting: 'Hey there. What is your name?',
  },
  james: {
    key: 'james',
    name: 'James Wright',
    img: '/team/James_UK.jpg',
    role: 'Operations Specialist',
    location: 'London',
    cityCode: 'LDN',
    shift: 'uk',
    greeting: 'Hello. What is your name?',
  },
  emma: {
    key: 'emma',
    name: 'Emma Rodriguez',
    img: '/team/Emma_UK.jpg',
    role: 'Customer Success Manager',
    location: 'Manchester',
    cityCode: 'MCR',
    shift: 'uk',
    greeting: 'Hello. What is your name?',
  },
  michael: {
    key: 'michael',
    name: 'Michael Thompson',
    img: '/team/Michael_US.jpg',
    role: 'Sales Engineer',
    location: 'Austin',
    cityCode: 'AUS',
    shift: 'us',
    greeting: 'Hey. What is your name?',
  },
  jessica: {
    key: 'jessica',
    name: 'Jessica Lee',
    img: '/team/Jessica_US.jpg',
    role: 'Clinic Advisor',
    location: 'Denver',
    cityCode: 'DEN',
    shift: 'us',
    greeting: 'Hey. What is your name?',
  },
  marco: {
    key: 'marco',
    name: 'Marco Santos',
    img: '/team/Marco_PH.jpg',
    role: 'Implementation Lead',
    location: 'Manila',
    cityCode: 'MNL',
    shift: 'ph',
    greeting: 'Hi there. What is your name?',
  },
  ana: {
    key: 'ana',
    name: 'Ana Reyes',
    img: '/team/Ana_PH.jpg',
    role: 'Product Specialist',
    location: 'Cebu',
    cityCode: 'CEB',
    shift: 'ph',
    greeting: 'Hi there. What is your name?',
  },
}

const ABUSE_WORDS = [
  'fuck you',
  'go fuck',
  'you suck',
  'piece of shit',
  'motherfucker',
  'nigger',
  'nigga',
  'faggot',
  'chink',
  'cunt',
  'bitch',
  'stupid bot',
  'useless bot',
  'dumb bot',
  'racist',
  'sexist',
]

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/* ────────────────────────────────────────────────────────────────────────────
   HELPER FUNCTIONS
   ──────────────────────────────────────────────────────────────────────────── */

function selectPersona(): Persona {
  const now = new Date()
  const utcHour = now.getUTCHours()
  const dateIsOdd = now.getUTCDate() % 2 === 1

  let shift: 'in' | 'uk' | 'us' | 'ph'
  let useFirst: boolean

  if (utcHour >= 0 && utcHour < 6) {
    shift = 'ph'
    useFirst = dateIsOdd
  } else if (utcHour >= 6 && utcHour < 12) {
    shift = 'in'
    useFirst = dateIsOdd
  } else if (utcHour >= 12 && utcHour < 18) {
    shift = 'uk'
    useFirst = dateIsOdd
  } else {
    shift = 'us'
    useFirst = dateIsOdd
  }

  const shiftPersonas = Object.values(PERSONAS).filter((p) => p.shift === shift)
  return shiftPersonas[useFirst ? 0 : 1] || shiftPersonas[0]
}

function containsAbuse(text: string): boolean {
  const lower = text.toLowerCase()
  return ABUSE_WORDS.some((word) => lower.includes(word))
}

function validateEmail(email: string): boolean {
  if (email.length > 254) return false
  if (!EMAIL_REGEX.test(email)) return false

  const [localPart, domain] = email.split('@')
  if (!localPart || !domain) return false

  // Check for 5+ repeated consecutive chars
  if (/(.)\1{4,}/.test(localPart)) return false
  if (/(.)\1{3,}/.test(domain)) return false

  return true
}

/* ────────────────────────────────────────────────────────────────────────────
   MAIN COMPONENT
   ──────────────────────────────────────────────────────────────────────────── */

export default function ChatWidget() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [persona, setPersona] = useState<Persona | null>(null)
  const [phase, setPhase] = useState<ConversationPhase>('name')
  const [messages, setMessages] = useState<Message[]>([])
  const [visitorName, setVisitorName] = useState('')
  const [visitorEmail, setVisitorEmail] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [isStreaming, setIsStreaming] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [intentOverride, setIntentOverride] = useState('')
  const [emailError, setEmailError] = useState('')
  const [typingMessage, setTypingMessage] = useState('')
  const typeQueueRef = useRef<string>('')
  const typeTimerRef = useRef<NodeJS.Timeout | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Initialize persona on mount
  useEffect(() => {
    setPersona(selectPersona())
  }, [])

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  // Disable on /contact and /demo pages (must be after all hooks)
  if (pathname === '/contact' || pathname === '/demo') {
    return null
  }

  if (!persona) return null

  // ─── MESSAGE SUBMISSION ──────────────────────────────────────────────────

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!inputValue.trim()) return

    const userMessage = inputValue.trim()
    setInputValue('')

    // PHASE: NAME CAPTURE
    if (phase === 'name') {
      const firstName = userMessage.split(' ')[0]
      setVisitorName(firstName)
      setMessages([
        { role: 'user', content: userMessage },
      ])
      setPhase('chat')
      // Immediately fetch greeting response
      await streamResponse([
        { role: 'user', content: userMessage },
      ])
      return
    }

    // PHASE: CHAT - Check for abuse
    if (phase === 'chat') {
      if (containsAbuse(userMessage)) {
        setIntentOverride('abuse')
        setMessages((prev) => [
          ...prev,
          { role: 'user', content: userMessage },
          {
            role: 'assistant',
            content:
              'I am going to end this conversation here. If you would like to speak with clinIQ professionally, reach out at info@the-algo.com.',
          },
        ])
        setPhase('ended')

        // Capture transcript
        await captureTranscript([
          ...messages,
          { role: 'user', content: userMessage },
          {
            role: 'assistant',
            content:
              'I am going to end this conversation here. If you would like to speak with clinIQ professionally, reach out at info@the-algo.com.',
          },
        ], 'abuse')

        return
      }

      // Add user message
      setMessages((prev) => [...prev, { role: 'user', content: userMessage }])

      // Stream response
      await streamResponse([
        ...messages,
        { role: 'user', content: userMessage },
      ])

      // Check if 10 exchanges reached (20 total messages)
      const newMessageCount = messages.length + 2
      if (newMessageCount >= 20) {
        setPhase('email')
      }
    }

    // PHASE: EMAIL CAPTURE
    if (phase === 'email') {
      setEmailError('')
      if (!validateEmail(userMessage)) {
        setEmailError('Please enter a valid email address')
        return
      }

      setVisitorEmail(userMessage)
      setMessages((prev) => [
        ...prev,
        { role: 'user', content: userMessage },
        {
          role: 'assistant',
          content: `Great talking with you, ${visitorName}. Feel free to reach us at info@the-algo.com anytime to get started.`,
        },
      ])

      // Capture transcript
      await captureTranscript(
        [
          ...messages,
          { role: 'user', content: userMessage },
          {
            role: 'assistant',
            content: `Great talking with you, ${visitorName}. Feel free to reach us at info@the-algo.com anytime to get started.`,
          },
        ],
        'normal'
      )

      setPhase('ended')
    }
  }

  // ─── STREAMING RESPONSE ──────────────────────────────────────────────────

  async function streamResponse(conversationMessages: Message[]) {
    setIsStreaming(true)
    setIsTyping(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: conversationMessages,
          personaKey: persona!.key,
          visitorName,
        }),
      })

      if (!response.ok || !response.body) {
        setMessages((prev) => [
          ...prev,
          {
            role: 'assistant',
            content:
              'Sorry, something went wrong. Please try again or reach out to info@the-algo.com.',
          },
        ])
        setIsStreaming(false)
        setIsTyping(false)
        return
      }

      const reader = response.body.getReader()
      const decoder = new TextDecoder()
      let assistantMessage = ''
      let firstToken = false

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        const chunk = decoder.decode(value, { stream: true })
        const lines = chunk.split('\n')

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const data = line.slice(6)
            if (data === '[DONE]') break

            try {
              const json = JSON.parse(data)
              if (json.content) {
                if (!firstToken) {
                  setIsTyping(false)
                  firstToken = true
                }
                assistantMessage += json.content
              }
            } catch {
              // Ignore parse errors
            }
          }
        }
      }

      // Queue the message for typewriter effect
      typeQueueRef.current = assistantMessage
      setTypingMessage('')

      // Start typewriter timer: drain 2 chars every 50ms
      if (typeTimerRef.current) clearInterval(typeTimerRef.current)
      typeTimerRef.current = setInterval(() => {
        if (typeQueueRef.current.length === 0) {
          clearInterval(typeTimerRef.current!)
          typeTimerRef.current = null
          // Message is complete, add to messages
          setMessages((prev) => [
            ...prev,
            { role: 'assistant', content: assistantMessage },
          ])
          setTypingMessage('')
          return
        }
        const take = Math.min(2, typeQueueRef.current.length)
        const chars = typeQueueRef.current.slice(0, take)
        typeQueueRef.current = typeQueueRef.current.slice(take)
        setTypingMessage((prev) => prev + chars)
      }, 50)
    } catch (error) {
      console.error('Streaming error:', error)
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
            'Sorry, something went wrong. Please try again or reach out to info@the-algo.com.',
        },
      ])
    } finally {
      setIsStreaming(false)
      setIsTyping(false)
    }
  }

  // ─── TRANSCRIPT CAPTURE ──────────────────────────────────────────────────

  async function captureTranscript(
    transcript: Message[],
    override: string
  ) {
    try {
      await fetch('/api/chat/transcript', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: transcript,
          visitorName,
          visitorEmail,
          persona: {
            name: persona!.name,
            location: persona!.location,
          },
          intentOverride: override,
        }),
      })
    } catch (error) {
      console.error('Transcript capture error:', error)
    }
  }

  // ─── HANDLE CLOSE ────────────────────────────────────────────────────────

  function handleClose() {
    if (phase !== 'name' && phase !== 'ended') {
      // Auto-capture on close
      captureTranscript(messages, intentOverride)
    }
    setIsOpen(false)
  }

  // ─── PLACEHOLDER TEXT ────────────────────────────────────────────────────

  function getPlaceholder(): string {
    if (phase === 'name') return 'Your name...'
    if (phase === 'email') return 'Your email...'
    return 'Type a message...'
  }

  // ─── CURRENT SHIFT ──────────────────────────────────────────────────────

  function getCurrentShift(): 'in' | 'uk' | 'us' | 'ph' {
    const now = new Date()
    const utcHour = now.getUTCHours()
    if (utcHour >= 0 && utcHour < 6) return 'ph'
    if (utcHour >= 6 && utcHour < 12) return 'in'
    if (utcHour >= 12 && utcHour < 18) return 'uk'
    return 'us'
  }

  const currentShift = getCurrentShift()

  // ─── RENDER ──────────────────────────────────────────────────────────────

  if (!isOpen) {
    return (
      <button
        className={styles.toggleButton}
        onClick={() => setIsOpen(true)}
        aria-label="Open chat"
      >
        <div style={{ position: 'relative' }}>
          <div className={styles.toggleAvatar}>
            <Image
              src={persona.img}
              alt={persona.name}
              width={34}
              height={34}
            />
          </div>
          <div className={styles.onlineDot} />
        </div>
        <div className={styles.toggleInfo}>
          <div className={styles.toggleName}>{persona.name}</div>
          <div className={styles.toggleLocation}>{persona.cityCode}</div>
        </div>
        <div className={styles.toggleArrow}>▲</div>
      </button>
    )
  }

  return (
    <div className={styles.panel}>
      {/* HEADER */}
      <div className={styles.header}>
        <div className={styles.headerAvatar}>
          <Image
            src={persona.img}
            alt={persona.name}
            width={42}
            height={42}
          />
        </div>
        <div className={styles.headerInfo}>
          <div className={styles.headerName}>{persona.name}</div>
          <div className={styles.headerRole}>
            {persona.role} · {persona.location}
          </div>
        </div>
        <div className={styles.onlineBadge}>
          <div className={styles.onlineDotSmall} />
          online
        </div>
        <button
          className={styles.closeButton}
          onClick={handleClose}
          aria-label="Close chat"
        >
          ✕
        </button>
      </div>

      {/* FOLLOW THE SUN */}
      <div className={styles.followSunBar}>
        <div className={styles.followSunLabel}>Follow the Sun · 24/7/365</div>
        <div className={styles.shiftBadges}>
          {(['in', 'uk', 'us', 'ph'] as const).map((shift) => (
            <div
              key={shift}
              className={`${styles.shiftBadge} ${
                shift === currentShift
                  ? styles.shiftBadgeActive
                  : styles.shiftBadgeInactive
              }`}
            >
              {shift.toUpperCase()}
            </div>
          ))}
        </div>
      </div>

      {/* MESSAGES */}
      <div className={styles.messagesContainer}>
        {phase === 'name' && (
          <div className={`${styles.messageRow}`}>
            <div className={styles.messageAvatar}>
              <Image
                src={persona.img}
                alt={persona.name}
                width={26}
                height={26}
              />
            </div>
            <div className={styles.messageBubble + ' ' + styles.messageBubbleAssistant}>
              {persona.greeting}
            </div>
          </div>
        )}

        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`${styles.messageRow} ${
              msg.role === 'user' ? styles.messageRowUser : ''
            }`}
          >
            <div className={styles.messageAvatar}>
              {msg.role === 'assistant' ? (
                <Image
                  src={persona.img}
                  alt={persona.name}
                  width={26}
                  height={26}
                />
              ) : (
                visitorName.charAt(0).toUpperCase()
              )}
            </div>
            <div
              className={`${styles.messageBubble} ${
                msg.role === 'user'
                  ? styles.messageBubbleUser
                  : styles.messageBubbleAssistant
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}

        {isTyping && !typingMessage && (
          <div className={`${styles.messageRow}`}>
            <div className={styles.messageAvatar}>
              <Image
                src={persona.img}
                alt={persona.name}
                width={26}
                height={26}
              />
            </div>
            <div className={styles.typingIndicator}>
              <div className={styles.typingDot} />
              <div className={styles.typingDot} />
              <div className={styles.typingDot} />
            </div>
          </div>
        )}

        {typingMessage && (
          <div className={`${styles.messageRow}`}>
            <div className={styles.messageAvatar}>
              <Image
                src={persona.img}
                alt={persona.name}
                width={26}
                height={26}
              />
            </div>
            <div className={styles.messageBubble + ' ' + styles.messageBubbleAssistant}>
              {typingMessage}
              <span className={styles.streamingCursor} />
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* INPUT AREA */}
      {phase !== 'ended' && (
        <div className={styles.inputArea}>
          <form onSubmit={handleSubmit} className={styles.inputRow}>
            <input
              type={phase === 'email' ? 'email' : 'text'}
              className={styles.inputField}
              placeholder={getPlaceholder()}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              disabled={isStreaming || isTyping}
              autoFocus
            />
            <button
              type="submit"
              className={styles.sendButton}
              disabled={!inputValue.trim() || isStreaming || isTyping}
              aria-label="Send message"
            >
              <svg
                className={styles.sendIcon}
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 L4.13399899,1.16798481 C3.34915502,0.9108874 2.40734225,1.02149744 1.77946707,1.4927896 C0.994623095,2.12043821 0.837654326,3.20974449 1.15159189,3.99523393 L3.03521743,10.4362269 C3.03521743,10.5933243 3.19218622,10.7504217 3.50612381,10.7504217 L16.6915026,11.5359085 C16.6915026,11.5359085 17.1624089,11.5359085 17.1624089,12.0071827 C17.1624089,12.4744748 16.6915026,12.4744748 16.6915026,12.4744748 Z" />
              </svg>
            </button>
          </form>

          {emailError && (
            <div style={{ color: '#ff6b6b', fontSize: '12px' }}>
              {emailError}
            </div>
          )}

          {phase === 'chat' && messages.length >= 2 && (
            <button
              className={styles.endConversationButton}
              onClick={() => {
                captureTranscript(messages, '')
                setPhase('ended')
              }}
            >
              End conversation
            </button>
          )}
        </div>
      )}

      {/* ENDED STATE */}
      {phase === 'ended' && (
        <div className={styles.endedSection}>
          Conversation ended · info@the-algo.com
        </div>
      )}

      {/* FOOTER */}
      <div className={styles.footer}>
        clinIQ · Clinic operations · all timezones
      </div>
    </div>
  )
}
