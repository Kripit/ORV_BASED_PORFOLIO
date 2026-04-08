import { motion } from 'framer-motion'
import ParticleBackground from '../components/ParticleBackground'
import { portfolioData } from '../data/portfolio'

export default function Resume() {
  return (
    <div className="relative min-h-screen pt-24 pb-12">
      <ParticleBackground variant="resume" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="scenario-text text-4xl text-cyan-glow mb-2">
            [EXPERIENCE TIMELINE]
          </h1>
          <p className="text-gray-400 scenario-text">Experience & Education</p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="scenario-text text-2xl text-gold-accent mb-8">
            💼 PROFESSIONAL EXPERIENCE
          </h2>

          <div className="space-y-6">
            {portfolioData.experience.map((exp, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 5 }}
                className="neon-border rounded-lg p-6 bg-navy-deep/50 backdrop-blur relative pl-8 border-l-4 border-cyan-glow"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-4 top-8 w-6 h-6 bg-cyan-glow rounded-full border-4 border-dark-matter" />

                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-cyan-glow">{exp.title}</h3>
                    <p className="text-gold-accent scenario-text text-sm">{exp.company}</p>
                  </div>
                  {exp.salary && (
                    <span className="text-green-400 font-bold">{exp.salary}</span>
                  )}
                </div>

                <div className="flex gap-4 mb-4 text-xs text-gray-400">
                  <span>📅 {exp.duration}</span>
                  <span>📍 {exp.location || exp.frequency}</span>
                </div>

                <ul className="space-y-2">
                  {exp.description.map((desc, j) => (
                    <li key={j} className="text-gray-300 text-sm flex gap-3">
                      <span className="text-cyan-glow">→</span>
                      {desc}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="scenario-text text-2xl text-gold-accent mb-8">
            🎓 EDUCATION
          </h2>

          <div className="space-y-4">
            {portfolioData.education.map((edu, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 5 }}
                className="neon-border rounded-lg p-6 bg-navy-deep/50 backdrop-blur"
              >
                <h3 className="text-lg font-bold text-cyan-glow">{edu.degree}</h3>
                <p className="text-gold-accent">{edu.school}</p>
                <p className="text-gray-400 text-sm mt-2">{edu.year} • {edu.location}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Matrix */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="scenario-text text-2xl text-gold-accent mb-8">
            ⚡ TECHNICAL SKILLS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(portfolioData.skills).map(([category, skills], i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="neon-border rounded-lg p-6 bg-navy-deep/50 backdrop-blur"
              >
                <h3 className="scenario-text text-cyan-glow mb-4">{category}</h3>
                <ul className="space-y-2">
                  {skills.map((skill, j) => (
                    <li key={j} className="flex items-center justify-between gap-3 text-gray-300 text-sm">
                      <span className="text-gold-accent">▸</span>
                      <span className="flex-1">{skill}</span>
                      <span className="scenario-text text-[10px] text-cyan-glow/80">{portfolioData.skillLevels[skill.split(' (')[0]] || 'Intermediate'}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center neon-border rounded-lg p-8 bg-navy-deep/50 backdrop-blur"
        >
          <p className="scenario-text text-cyan-glow mb-4">
            [CURRENTLY OPEN TO REMOTE OPPORTUNITIES]
          </p>
          <p className="text-gray-300 mb-6">
            Open to Machine Learning Engineering, AI/ML Research, and Prompt Engineering roles
          </p>
          <p className="text-xs text-cyan-glow/70 mb-6 scenario-text">
            {portfolioData.workStyle}
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href={`mailto:${portfolioData.email}`}
              className="px-6 py-2 bg-cyan-glow text-dark-matter font-bold scenario-text hover:bg-gold-accent transition-all rounded"
            >
              📧 Contact Me
            </a>
            <a
              href={portfolioData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border-2 border-gold-accent text-gold-accent font-bold scenario-text hover:bg-gold-accent/20 transition-all rounded"
            >
              💼 LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
