import React, { useMemo, useState } from 'react'
import { motion } from 'framer-motion'

const quotes = [
  'Elegance is found in the quiet moments.',
  'Grace blooms where kindness is sown.',
  'Dignity is the fragrance of a gentle heart.',
]

const trivia = [
  'Her presence is often compared to a calming fragrance.',
  'Enjoys floral motifs and traditional arts.',
  'Tends to speak politely, but has a resolute core.',
]

const sweetGreetings = [
  'Welcome. Please, take your time and enjoy yourself.',
  'It’s a pleasure to meet you. Shall we walk together?',
  'Thank you for visiting. I hope your day is as lovely as a blooming garden.',
]

const Extras = () => {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello, I am Kaoruko. May this page feel calm and fragrant for you.' },
  ])

  const reply = useMemo(() => {
    if (!input) return ''
    const base = sweetGreetings[(input.length + messages.length) % sweetGreetings.length]
    return base
  }, [input, messages])

  const handleSend = (e) => {
    e.preventDefault()
    if (!input.trim()) return
    setMessages((m) => [...m, { role: 'user', content: input.trim() }, { role: 'assistant', content: reply }])
    setInput('')
  }

  return (
    <section id="extras" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-purple-800 sm:text-4xl"
        >
          Trivia & Quotes
        </motion.h2>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-purple-100 bg-purple-50/60 p-6"
          >
            <h3 className="text-lg font-semibold text-purple-900">Trivia</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-purple-900/80">
              {trivia.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>

            <h3 className="mt-6 text-lg font-semibold text-purple-900">Famous Quotes (fan paraphrases)</h3>
            <ul className="mt-3 space-y-2 text-sm italic text-purple-900/80">
              {quotes.map((q) => (
                <li key={q}>“{q}”</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-purple-100 bg-white p-6"
          >
            <h3 className="text-lg font-semibold text-purple-900">Kaoruko Chat (simple)</h3>
            <p className="mt-1 text-sm text-purple-900/70">A light, local greeting bot that responds with sweet, polite phrases.</p>
            <div className="mt-4 h-48 overflow-y-auto rounded-xl border border-purple-100 bg-purple-50/50 p-3 text-sm">
              {messages.map((m, idx) => (
                <div key={idx} className={`mb-2 flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] rounded-2xl px-3 py-2 ${m.role === 'user' ? 'bg-purple-600 text-white' : 'bg-white text-purple-900 ring-1 ring-purple-100'}`}>{m.content}</div>
                </div>
              ))}
            </div>
            <form onSubmit={handleSend} className="mt-3 flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Say hello to Kaoruko..."
                className="flex-1 rounded-xl border border-purple-200 bg-white px-3 py-2 text-sm text-purple-900 placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
              <button type="submit" className="rounded-xl bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700">Send</button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Extras
