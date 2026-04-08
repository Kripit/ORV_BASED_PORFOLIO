import { useState } from 'react'
import { motion } from 'framer-motion'
import ParticleBackground from '../components/ParticleBackground'
import { portfolioData } from '../data/portfolio'

export default function About() {
  const [activeTab, setActiveTab] = useState('about')

  const tabs = [
    { id: 'about', label: '[PROFILE]', icon: '📌' },
    { id: 'fun', label: '[APPROACH]', icon: '🎯' },
    { id: 'wired', label: '[CURRENT WORK]', icon: '🛠️' }
  ]

  const tabContent = {
    about: {
      title: 'PROFILE',
      content: `${portfolioData.bio} Currently pursuing BTech CSE with Honors at KL University (2024-2028).

14+ public GitHub repositories with consistent open-source activity across AI/ML and engineering topics.`
    },
    fun: {
      title: 'WORK APPROACH',
      content: 'My process is simple: define scope, prototype quickly, validate with real usage, and refine the system for maintainability. I keep the same discipline in studies, personal interests, and project work so deadlines are met without chaos.'
    },
    wired: {
      title: 'CURRENT WORK',
      content: 'Current work includes LLM-driven automation, model experimentation (ViT/LSTM/CNN), and frontend systems that present technical work clearly. Outside work, I follow anime and manhwa, game regularly, and still keep the build-and-ship mindset intact.'
    }
  }

  return (
    <div className="relative min-h-screen pt-24 pb-20">
      <ParticleBackground variant="about" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="scenario-text text-5xl lg:text-6xl text-cyan-glow mb-4">
            PROFILE
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-cyan-glow via-gold-accent to-blood-red mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-12"
        >
          {/* Character Card - EPIC */}
          <motion.div
            className="lg:col-span-1 neon-border rounded-lg p-8 bg-navy-deep/50 backdrop-blur relative overflow-hidden"
            whileHover={{ y: -5 }}
          >
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-glow/10 via-transparent to-blood-red/10 pointer-events-none" />

            <div className="relative z-10">
              {/* Avatar */}
              <motion.div
                className="w-40 h-40 mx-auto mb-8 rounded-full border-4 border-gold-accent overflow-hidden bg-cyan-glow/20 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src="/assets/kim-dokja.jpg"
                  alt="Profile"
                  className="h-full w-full object-cover"
                />
              </motion.div>

              {/* Name & Class */}
              <div className="text-center mb-8">
                <h2 className="scenario-text text-3xl text-cyan-glow mb-2">
                  {portfolioData.name}
                </h2>
                <p className="constellation-text text-2xl text-gold-accent font-light">
                  {portfolioData.characterClass}
                </p>
                <p className="text-sm text-cyan-glow/70 mt-2">Hyderabad, India</p>
                <p className="mt-3 inline-flex rounded-full border border-cyan-glow/35 bg-cyan-glow/10 px-3 py-1 text-[11px] text-cyan-glow scenario-text">
                  {portfolioData.workStyle}
                </p>
              </div>

              {/* Main Stats */}
              <div className="space-y-6 mb-8">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="scenario-text text-cyan-glow text-sm">EXPERIENCE</span>
                    <span className="text-gold-accent font-bold">2+ YEARS</span>
                  </div>
                  <div className="h-3 bg-navy-deep border-2 border-cyan-glow rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-cyan-glow to-gold-accent w-1/3" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="scenario-text text-gold-accent text-sm">PROJECTS SHIPPED</span>
                    <span className="text-blood-red font-bold">14+</span>
                  </div>
                  <div className="h-3 bg-navy-deep border-2 border-gold-accent rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-gold-accent to-blood-red w-3/4" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="scenario-text text-blood-red text-sm">OPEN SOURCE</span>
                    <span className="text-cyan-glow font-bold">ACTIVE</span>
                  </div>
                  <div className="h-3 bg-navy-deep border-2 border-blood-red rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blood-red to-cyan-glow w-4/5" />
                  </div>
                </div>
              </div>

              {/* Constellations Sponsor List */}
              <div className="bg-dark-matter/80 border border-cyan-glow/30 rounded-lg p-5 mb-6">
                <p className="scenario-text text-cyan-glow text-xs mb-4 font-bold">
                  EXPERIENCE LEVELS
                </p>
                <div className="space-y-3">
                  {Object.entries(portfolioData.skillLevels).map(([skill, level]) => (
                    <div key={skill} className="flex items-center justify-between gap-3 rounded border border-cyan-glow/15 bg-black/20 px-3 py-2 text-xs">
                      <span className="text-gray-200">{skill}</span>
                      <span className={`scenario-text ${level === 'Beginner' ? 'text-gold-accent' : 'text-cyan-glow'}`}>{level}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 border-t border-cyan-glow/20 pt-6">
                <a
                  href={`mailto:${portfolioData.email}`}
                  className="block text-xs text-cyan-glow hover:text-gold-accent transition-all hover:translate-x-2"
                >
                  📧 {portfolioData.email}
                </a>
                <a
                  href={portfolioData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-xs text-cyan-glow hover:text-gold-accent transition-all hover:translate-x-2"
                >
                  🐙 GitHub Profile
                </a>
                {portfolioData.linkedin && (
                  <a
                    href={portfolioData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-xs text-gold-accent hover:text-cyan-glow transition-all hover:translate-x-2"
                  >
                    💼 LinkedIn
                  </a>
                )}
                <p className="text-xs text-cyan-glow/70 pt-3">📍 {portfolioData.location}</p>
              </div>
            </div>
          </motion.div>

          {/* Info Grid - Center & Right */}
          <motion.div className="lg:col-span-2 space-y-6">
            {/* Tab Buttons */}
            <div className="flex gap-3 flex-wrap">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 whitespace-nowrap scenario-text text-sm font-bold rounded transition-all ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-cyan-glow to-blood-red text-dark-matter shadow-lg shadow-blood-red/50'
                      : 'bg-navy-deep border-2 border-cyan-glow text-cyan-glow hover:border-gold-accent hover:text-gold-accent'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tab.icon} {tab.label}
                </motion.button>
              ))}
            </div>

            {/* Tab Content - ENHANCED */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="neon-border rounded-lg p-8 bg-navy-deep/50 backdrop-blur min-h-64 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-glow/5 via-transparent to-blood-red/5 pointer-events-none" />

              <div className="relative z-10">
                <h3 className="scenario-text text-cyan-glow text-2xl mb-6 flex items-center">
                  <span className="text-blood-red mr-3">▸</span>
                  {tabContent[activeTab].title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-base whitespace-pre-wrap">
                  {tabContent[activeTab].content}
                </p>
              </div>
            </motion.div>

            {/* Skills Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="scenario-text text-gold-accent text-xl mb-4 flex items-center">
                <span className="text-cyan-glow mr-2">⚡</span>
                SKILL STACK
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.entries(portfolioData.skills).map(([category, skills], i) => (
                  <motion.div
                    key={i}
                    className="neon-border bg-navy-deep/50 rounded-lg p-5 hover:border-gold-accent transition-all relative overflow-hidden group"
                    whileHover={{ scale: 1.03, y: -3 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-glow/5 to-gold-accent/5 opacity-0 group-hover:opacity-100 transition-all pointer-events-none" />

                    <p className="text-cyan-glow scenario-text font-bold mb-3 relative z-10">{category}</p>
                    <div className="space-y-2 relative z-10">
                      {skills.slice(0, 3).map((skill, j) => (
                        <p key={j} className="text-xs text-gray-300 flex items-center justify-between gap-3">
                          <span className="text-gold-accent mr-2">▸</span>
                          <span className="flex-1">{skill}</span>
                          <span className="scenario-text text-[10px] text-cyan-glow/80">{portfolioData.skillLevels[skill.split(' (')[0]] || 'Intermediate'}</span>
                        </p>
                      ))}
                    </div>
                    {skills.length > 3 && (
                      <p className="text-xs text-gold-accent/70 mt-2">+ {skills.length - 3} more</p>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
