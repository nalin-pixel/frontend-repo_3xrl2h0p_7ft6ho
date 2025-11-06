import React from 'react'
import { motion } from 'framer-motion'

const images = [
  'https://images.unsplash.com/photo-1509043759401-136742328bb3?q=80&w=1480&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1491396023581-4344e51fec5c?q=80&w=1480&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1520975922284-5f5737a8d5f0?q=80&w=1480&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?q=80&w=1480&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1480&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1480&auto=format&fit=crop',
]

const Gallery = () => {
  return (
    <section id="gallery" className="bg-purple-50/60 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-purple-800 sm:text-4xl"
        >
          Gallery
        </motion.h2>
        <p className="mt-2 text-sm text-purple-900/70">A curated blend of screenshots and soft fanart aesthetics.</p>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {images.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-xl border border-purple-100 bg-white"
            >
              <img src={src} alt={`Kaoruko fan image ${i + 1}`} className="h-36 w-full object-cover sm:h-48" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-purple-900/10 to-transparent opacity-0 transition group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
