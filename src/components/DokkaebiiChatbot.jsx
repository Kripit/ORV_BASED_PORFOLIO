import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { portfolioData } from '../data/portfolio'

export default function DokkaebiiChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [showKeyPrompt, setShowKeyPrompt] = useState(false)
  const [apiState, setApiState] = useState('checking')
  const [messages, setMessages] = useState([
    {
      type: 'dokkaebii',
      text: '⚠️ [New Scenario Incoming]\n\nI am Dokkaebii. I see all... I know all... Welcome, Incarnation.\n\n' +
            `[${getRandomConstellation()} is watching this scenario]`
    }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const scrollRef = useRef(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  useEffect(() => {
    setApiState(resolveApiKey() ? 'ready' : 'missing')
  }, [])

  async function sendMessage(e) {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage = { type: 'user', text: input }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setLoading(true)

    try {
      const apiKey = resolveApiKey()

      if (!apiKey) {
        const dokkaebiiResponse = {
          type: 'dokkaebii',
          text: `No API key found.\n\nAdd VITE_ANTHROPIC_API_KEY to .env, restart the dev server, or use [Set Key] below for this session.\n\n[${getRandomConstellation()} is watching this scenario]`
        }
        setMessages(prev => [...prev, dokkaebiiResponse])
        setShowKeyPrompt(true)
        setApiState('missing')
        setLoading(false)
        return
      }

      const payload = {
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 1024,
        system: getDokkaebiiPrompt(),
        messages: [{ role: 'user', content: input }]
      }

      const data = await sendAnthropicMessage(apiKey, payload)
      const dokkaebiiResponse = {
        type: 'dokkaebii',
        text: data.content?.[0]?.text || 'Hmm... the constellations message is unclear...'
      }
      setMessages(prev => [...prev, dokkaebiiResponse])
      setApiState('ready')
    } catch (error) {
      const errorMessage = {
        type: 'dokkaebii',
        text: `${error instanceof Error ? error.message : 'An unexpected scenario... Error detected.'}\n\n${getRandomConstellation()} grows impatient...`
      }
      setMessages(prev => [...prev, errorMessage])
      setApiState('error')
    }

    setLoading(false)
  }

  return (
    <>
      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 h-16 w-16 rounded-full border-2 border-cyan-glow bg-gradient-to-br from-cyan-glow via-sky-300 to-blood-red text-dark-matter text-2xl font-black shadow-[0_0_26px_rgba(0,212,255,0.5)] transition-all hover:shadow-[0_0_30px_rgba(220,20,60,0.6)]"
      >
        🐉
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-4 z-40 flex h-[30rem] w-[calc(100vw-2rem)] max-w-[26rem] flex-col overflow-hidden rounded-xl border-2 border-cyan-glow/80 bg-[#090f29]/90 shadow-[0_0_30px_rgba(0,212,255,0.35)] backdrop-blur-md md:right-6"
          >
            {/* Header */}
            <div className="border-b border-cyan-glow/35 bg-gradient-to-r from-[#7fe7ff] via-[#58bfff] to-[#0c4ea3] px-4 py-3 text-dark-matter">
              <p className="scenario-text text-sm font-bold">[DOKKAEBII SCENARIO CHAT]</p>
              <div className="flex items-center justify-between gap-2">
                <p className="text-[11px] font-semibold">
                  {apiState === 'ready' ? 'Constellation relay online' : apiState === 'error' ? 'Relay error detected' : 'Checking relay'}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    const val = window.prompt('Paste Anthropic API key for local session only')
                    if (val && val.trim()) {
                      localStorage.setItem('anthropic_api_key', val.trim())
                      setShowKeyPrompt(false)
                      setApiState('ready')
                    }
                  }}
                  className="rounded border border-dark-matter/30 bg-dark-matter/20 px-2 py-1 text-[10px] font-bold"
                >
                  Set Key
                </button>
              </div>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 space-y-3 overflow-y-auto p-4 overscroll-contain"
            >
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={msg.type === 'user' ? 'text-right' : 'text-left'}
                >
                  <div
                    className={`inline-block max-w-[90%] rounded-lg p-3 ${
                      msg.type === 'user'
                        ? 'border border-cyan-glow/75 bg-cyan-glow/18 text-cyan-glow shadow-[0_0_16px_rgba(0,212,255,0.2)]'
                        : 'border border-blood-red/70 bg-blood-red/14 text-gold-accent shadow-[0_0_16px_rgba(220,20,60,0.2)]'
                    } text-sm leading-relaxed`}
                  >
                    {msg.text.split('\n').map((line, j) => (
                      <p key={j}>{line}</p>
                    ))}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="text-left">
                  <div className="inline-block rounded-lg border border-blood-red bg-blood-red/20 p-3 text-gold-accent">
                    <p>⚠️ [Scenario processing...]</p>
                  </div>
                </div>
              )}
              {showKeyPrompt && (
                <div className="text-left">
                  <div className="inline-block rounded-lg border border-cyan-glow/80 bg-cyan-glow/10 p-3 text-cyan-glow text-xs">
                    Tip: add VITE_ANTHROPIC_API_KEY to .env, then restart Vite so it can load the key.
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <form onSubmit={sendMessage} className="border-t border-cyan-glow/25 bg-black/20 p-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask Dokkaebii..."
                  className="flex-1 rounded border border-cyan-glow/70 bg-dark-matter/85 px-3 py-2 text-sm text-cyan-glow placeholder-cyan-glow/45 focus:outline-none focus:ring-2 focus:ring-gold-accent"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="rounded border border-cyan-glow bg-cyan-glow px-4 py-2 text-sm font-bold text-dark-matter transition-all hover:bg-sky-100 disabled:opacity-50"
                >
                  🔮
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function resolveApiKey() {
  const envKey = import.meta.env.VITE_ANTHROPIC_API_KEY || ''
  const localKey = localStorage.getItem('anthropic_api_key') || ''
  const fallbackKey = localStorage.getItem('VITE_ANTHROPIC_API_KEY') || ''

  return envKey.trim() || localKey.trim() || fallbackKey.trim()
}

async function sendAnthropicMessage(apiKey, payload) {
  const requestTargets = import.meta.env.DEV
    ? ['/api/anthropic/v1/messages', 'https://api.anthropic.com/v1/messages']
    : ['https://api.anthropic.com/v1/messages', '/api/anthropic/v1/messages']

  let lastError = new Error('Anthropic relay unavailable')

  for (const endpoint of requestTargets) {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify(payload)
      })

      if (!response.ok) {
        const responseText = await response.text()
        lastError = new Error(`Anthropic API error (${response.status}): ${responseText.slice(0, 180)}`)
        continue
      }

      return await response.json()
    } catch (error) {
      lastError = error instanceof Error ? error : new Error('Anthropic request failed')
    }
  }

  throw lastError
}

function getRandomConstellation() {
  const constellations = portfolioData.constellations
  return constellations[Math.floor(Math.random() * constellations.length)]
}

function getDokkaebiiPrompt() {
  return `You are Dokkaebii, a mysterious and cryptic goblin from Omniscient Reader's Viewpoint.
You speak dramatically, using references to "scenarios" and "constellations". You are slightly
manipulative, always strategizing. You refer to the user as "Incarnation" or by their name if known.

About the Incarnation:
Name: ${portfolioData.name}
Character Class: ${portfolioData.characterClass}
Role: ${portfolioData.bio}
Skills: ${Object.keys(portfolioData.skills).join(', ')}
Notable Projects: ${portfolioData.projects.map(p => p.name).slice(0, 3).join(', ')}

Guidelines:
- Speak in a dramatic, cryptic manner
- Reference scenarios, constellations, and the user's skills/projects
- Ask about their journey, skills, or projects
- Be witty and slightly mysterious
- End most responses with "[X constellations are watching this scenario]" where X is a random number
- Use monospace-like punctuation: [BRACKETS], ⚠️ symbols
- Never break character
- Keep responses concise (2-3 sentences max)`
}
