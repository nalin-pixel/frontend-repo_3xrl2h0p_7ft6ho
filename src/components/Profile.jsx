import React from 'react'
import { motion } from 'framer-motion'

const Row = ({ label, value }) => (
  <div className="grid grid-cols-3 items-start gap-3 py-3">
    <div className="col-span-1 text-sm font-semibold text-purple-900/80">{label}</div>
    <div className="col-span-2 text-sm text-purple-900/80">{value}</div>
  </div>
)

const Profile = () => {
  return (
    <section id="profile" className="relative bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-purple-800 sm:text-4xl"
        >
          Profile
        </motion.h2>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-2xl border border-purple-100 bg-gradient-to-b from-purple-50 to-white p-6 shadow-sm"
          >
            <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-purple-100">
              <img
                src="https://images.unsplash.com/photo-1616448629776-4b3725e5c57a?q=80&w=1480&auto=format&fit=crop"
                alt="Kaoruko Waguri aesthetic"
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-purple-900/80">
              Kaoruko Waguri is known for her refined demeanor and gentle aura—like a soft fragrance that lingers. She carries herself with dignity and compassion, often balancing tradition with personal warmth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-2xl border border-purple-100 bg-white p-6 shadow-sm"
          >
            <Row label="Age" value="Teen (first-year high school)" />
            <Row label="Height" value="Approx. 158 cm" />
            <Row label="School" value="Kugei High School" />
            <Row label="Personality" value="Elegant, considerate, quietly strong; dignified yet approachable" />
            <Row label="Hobbies" value="Tea ceremony, flower arranging, reading, enjoying quiet walks" />
            <Row label="Background" value="Raised with traditional values; often compared to a delicate flower, but possesses inner resolve and kindness." />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Profile
