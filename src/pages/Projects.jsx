import { motion } from 'framer-motion'
import ParticleBackground from '../components/ParticleBackground'
import { portfolioData } from '../data/portfolio'

export default function Projects() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <div className="relative min-h-screen pt-24 pb-12">
      <ParticleBackground variant="projects" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="scenario-text text-4xl text-cyan-glow mb-4">
            [PROJECTS]
          </h1>
          <p className="text-gray-400">
            Selected engineering work across AI, ML, and product development
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {portfolioData.projects.map((project, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ scale: 1.02, y: -5 }}
              className="neon-border rounded-lg p-6 bg-navy-deep/50 backdrop-blur group hover:border-gold-accent transition-all"
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <p className="scenario-text text-cyan-glow text-sm mb-1">
                    [PROJECT #{i + 1}]
                  </p>
                  <h3 className="text-xl font-bold text-gold-accent group-hover:text-cyan-glow transition-all">
                    {project.name}
                  </h3>
                </div>
                {project.stars > 0 && (
                  <div className="text-right">
                    <p className="text-yellow-400 font-bold">★ {project.stars}</p>
                  </div>
                )}
              </div>

              {/* Difficulty and Status */}
              <div className="flex gap-4 mb-4 text-xs">
                <span className="text-gold-accent scenario-text">
                  DIFFICULTY: {project.difficulty}
                </span>
                <span className={`scenario-text ${
                  project.status === 'Completed' ? 'text-cyan-glow' : 'text-blood-red'
                }`}>
                  STATUS: {project.status}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mb-6">
                <p className="scenario-text text-cyan-glow text-xs mb-2">
                  TECH STACK:
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, j) => (
                    <span
                      key={j}
                      className="text-xs bg-cyan-glow/10 border border-cyan-glow text-cyan-glow px-3 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* GitHub Link */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-cyan-glow/20 border border-cyan-glow text-cyan-glow text-xs scenario-text hover:bg-cyan-glow hover:text-dark-matter transition-all rounded"
              >
                → VIEW REPOSITORY
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16"
        >
          <h2 className="scenario-text text-2xl text-gold-accent mb-8">
            🏆 HIGHLIGHTS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {portfolioData.achievements.map((achievement, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 5 }}
                className="bg-navy-deep/50 border-l-4 border-gold-accent p-6 rounded"
              >
                <h4 className="text-cyan-glow font-bold mb-2">{achievement.title}</h4>
                <p className="text-gray-300 text-sm">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
