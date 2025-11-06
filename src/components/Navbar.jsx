import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#profile', label: 'Profile' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#extras', label: 'Trivia' },
  { href: '#contact', label: 'Contact' },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-purple-100/70 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#home" className="font-semibold text-purple-800">Kaoruko</a>

        <nav className="hidden gap-6 sm:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-purple-900/80 hover:text-purple-900">{l.label}</a>
          ))}
        </nav>

        <button className="sm:hidden" onClick={() => setOpen((o) => !o)} aria-label="Toggle Menu">
          {open ? <X className="h-6 w-6 text-purple-800" /> : <Menu className="h-6 w-6 text-purple-800" />}
        </button>
      </div>

      {open && (
        <div className="sm:hidden">
          <nav className="mx-6 mb-3 grid gap-2 rounded-xl border border-purple-100 bg-white p-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-sm text-purple-900/80 hover:bg-purple-50">{l.label}</a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
