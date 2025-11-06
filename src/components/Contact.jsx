import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name.trim() || !message.trim()) return
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setName('')
    setMessage('')
  }

  return (
    <section id="contact" className="bg-purple-50/60 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-purple-800 sm:text-4xl"
        >
          Send a Fan Message
        </motion.h2>
        <p className="mt-2 text-sm text-purple-900/70">Share a kind note for Kaoruko. This demo stores messages locally in your session.</p>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 rounded-2xl border border-purple-100 bg-white p-6 shadow-sm"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label className="mb-1 block text-sm font-medium text-purple-900">Your Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl border border-purple-200 bg-white px-3 py-2 text-sm text-purple-900 placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-300"
                placeholder="e.g., Hana"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1 block text-sm font-medium text-purple-900">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="w-full rounded-xl border border-purple-200 bg-white px-3 py-2 text-sm text-purple-900 placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-300"
                placeholder="Write a sweet message..."
              />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-3">
            <button type="submit" className="rounded-xl bg-purple-600 px-5 py-2 text-sm font-medium text-white hover:bg-purple-700">Send</button>
            {sent && <span className="text-sm text-green-700">Message sent. Thank you!</span>}
          </div>
        </motion.form>

        <div className="mt-10 text-center text-xs text-purple-900/60">
          This is a non-official fan project dedicated with respect to the original creators.
        </div>
      </div>
    </section>
  )
}

export default Contact
