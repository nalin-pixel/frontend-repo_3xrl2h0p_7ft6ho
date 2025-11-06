import React from 'react'
import { motion } from 'framer-motion'

const characters = [
  {
    name: 'Kaoruko Waguri',
    role: 'Main heroine',
    img: 'https://images.unsplash.com/photo-1520975922284-5f5737a8d5f0?q=80&w=1480&auto=format&fit=crop',
  },
]

const CharacterList = () => {
  return (
    <section id="characters" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-purple-800 sm:text-4xl"
        >
          Character List
        </motion.h2>
        <p className="mt-2 text-sm text-purple-900/70">Built to grow — add more characters over time.</p>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {characters.map((c) => (
            <motion.a
              key={c.name}
              href="#profile"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group overflow-hidden rounded-2xl border border-purple-100 bg-white shadow-sm"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={c.img} alt={c.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <h3 className="text-base font-semibold text-purple-900">{c.name}</h3>
                <p className="text-sm text-purple-900/70">{c.role}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CharacterList
