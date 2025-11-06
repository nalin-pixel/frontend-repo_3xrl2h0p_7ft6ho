import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[80vh] w-full overflow-hidden bg-gradient-to-br from-purple-50 via-white to-purple-100">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay to improve text readability without blocking Spline */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.85),rgba(255,255,255,0.6)_40%,rgba(255,255,255,0.2)_70%,transparent_100%)]" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center sm:py-28">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-4 bg-gradient-to-r from-purple-700 to-purple-400 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl"
        >
          Kaoruko Waguri
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mx-auto max-w-2xl text-base leading-relaxed text-purple-900/80 sm:text-lg"
        >
          A gentle, dignified heroine from “The Fragrant Flower Blooms with Dignity.” This fan-made site celebrates her fragrance-like grace, quiet strength, and soft elegance.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a href="#profile" className="rounded-full bg-purple-600 px-5 py-2.5 text-white shadow-lg shadow-purple-300/40 transition hover:bg-purple-700">Profile</a>
          <a href="#gallery" className="rounded-full bg-white/80 px-5 py-2.5 text-purple-700 ring-1 ring-purple-200 backdrop-blur transition hover:bg-white">Gallery</a>
          <a href="#extras" className="rounded-full bg-white/80 px-5 py-2.5 text-purple-700 ring-1 ring-purple-200 backdrop-blur transition hover:bg-white">Trivia & More</a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
