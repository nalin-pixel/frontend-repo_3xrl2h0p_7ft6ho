import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Profile from './components/Profile'
import Gallery from './components/Gallery'
import Extras from './components/Extras'
import Contact from './components/Contact'
import CharacterList from './components/CharacterList'

function App() {
  return (
    <div className="min-h-screen bg-white text-purple-900">
      <Navbar />
      <Hero />
      <Profile />
      <Gallery />
      <Extras />
      <Contact />
      <CharacterList />

      <footer className="border-t border-purple-100 py-10">
        <div className="mx-auto max-w-6xl px-6 text-center text-xs text-purple-900/60">
          Fan-made site honoring Kaoruko Waguri. Not affiliated with the original creators.
        </div>
      </footer>
    </div>
  )
}

export default App
