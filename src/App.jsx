import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Navigation from './components/Navigation'
import DokkaebiiChatbot from './components/DokkaebiiChatbot'
import Landing from './pages/Landing'
import About from './pages/About'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import Konami from './utils/konami'

function App() {
  const [activated, setActivated] = useState(false)

  useEffect(() => {
    new Konami(() => {
      setActivated(true)
      setTimeout(() => setActivated(false), 3000)
    })
  }, [])

  return (
    <Router>
      <div className="min-h-screen bg-transparent text-white overflow-x-hidden">
        <Navigation />

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="pointer-events-none fixed right-3 top-16 z-40 max-w-[16rem] rounded-2xl border border-sky-200/60 bg-[#0f58d6]/90 px-4 py-3 text-white shadow-[0_0_24px_rgba(127,231,255,0.22)] backdrop-blur md:right-4 md:top-20 md:max-w-[18rem]"
        >
          <p className="scenario-text text-[11px] tracking-[0.2em] text-sky-100/80">SECRETIVE PLOTTER</p>
          <p className="mt-1 text-sm font-semibold leading-snug">Secretive Plotter is watching.</p>
        </motion.div>

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>

        <DokkaebiiChatbot />

        {activated && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/90 z-[9999] pointer-events-none">
            <div className="text-center animate-glow">
              <h1 className="scenario-text text-6xl mb-4">⚠️ EMERGENCY SCENARIO ACTIVATED ⚠️</h1>
              <p className="text-2xl text-cyan-glow">Dokkaebii has chosen you...</p>
            </div>
          </div>
        )}
      </div>
    </Router>
  )
}

export default App