import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ParticleBackground from '../components/ParticleBackground'
import { portfolioData } from '../data/portfolio'

export default function Landing() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <ParticleBackground variant="home" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(127,231,255,0.14),transparent_22%),radial-gradient(circle_at_80%_14%,rgba(12,78,163,0.2),transparent_28%),radial-gradient(circle_at_50%_78%,rgba(42,167,255,0.08),transparent_35%),linear-gradient(165deg,rgba(7,16,40,0.28),transparent_42%,rgba(0,90,255,0.1))]" />

      <div className="pointer-events-none absolute left-4 top-24 h-[32rem] w-1 rounded-full bg-gradient-to-b from-cyan-glow/70 via-sky-100/30 to-transparent opacity-70 blur-[1px] md:left-10" />

      <div className="relative z-10 px-4 pb-16 pt-28 md:px-8 md:pt-32">
        <div className="mx-auto max-w-6xl">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative overflow-hidden rounded-[2rem] border border-sky-200/35 bg-[#04102e]/82 shadow-[0_0_48px_rgba(127,231,255,0.12)] backdrop-blur-md"
          >
            <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(4,16,46,0.97)_0%,rgba(4,16,46,0.9)_54%,rgba(4,16,46,0.94)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(127,231,255,0.14),transparent_20%),radial-gradient(circle_at_82%_78%,rgba(42,167,255,0.08),transparent_24%)]" />

            <div className="relative z-10 px-6 py-10 md:px-10 md:py-12 lg:px-14 lg:py-16">
              <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div className="max-w-3xl">
                  <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-sky-200/55 bg-black/35 px-4 py-2 text-xs tracking-[0.16em] text-sky-100 shadow-[0_0_16px_rgba(127,231,255,0.12)]">
                    KRISHNA MISHRA | SOFTWARE DEVELOPER
                  </div>

                  <h1 className="scenario-text leading-[0.76] tracking-[-0.05em]">
                    <span className="block text-[clamp(4.8rem,11vw,8.5rem)] text-[#e7fdff] drop-shadow-[0_0_24px_rgba(127,231,255,0.28)]">KRISHNA</span>
                    <span className="block text-[clamp(4.8rem,11vw,8.5rem)] text-[#e7fdff] drop-shadow-[0_0_24px_rgba(127,231,255,0.28)]">MISHRA</span>
                    <span className="orv-gradient-text mt-3 block text-[clamp(2.2rem,5.8vw,4.8rem)] font-black">SOFTWARE DEVELOPER</span>
                  </h1>

                  <div className="mt-8 space-y-5">
                    <p className="max-w-2xl text-lg leading-relaxed text-sky-50/96 md:text-xl lg:text-[1.35rem]">
                      I build AI products, frontend systems, and practical tools that ship cleanly and on time.
                      The work stays sharp, structured, and professional.
                    </p>

                    <div className="flex flex-wrap gap-4">
                      <Link
                        to="/about"
                        className="rounded-full border-2 border-white bg-white px-7 py-3 scenario-text text-base font-black tracking-[0.1em] text-[#04102e] shadow-[0_0_22px_rgba(255,255,255,0.24)] transition hover:-translate-y-0.5 hover:bg-sky-100 md:px-8 md:py-4 md:text-lg"
                      >
                        ABOUT ME
                      </Link>
                      <Link
                        to="/projects"
                        className="rounded-full border-2 border-sky-200 bg-[#0f58d6] px-7 py-3 scenario-text text-base font-black tracking-[0.1em] text-white shadow-[0_0_22px_rgba(127,231,255,0.2)] transition hover:-translate-y-0.5 hover:bg-[#1674ff] md:px-8 md:py-4 md:text-lg"
                      >
                        VIEW PROJECTS
                      </Link>
                    </div>

                    <p className="max-w-2xl rounded-2xl border border-sky-200/35 bg-black/30 px-5 py-4 text-sm leading-relaxed text-gray-100 backdrop-blur-sm md:text-base lg:text-lg">
                      {portfolioData.workStyle}. I prefer a small, clear scope, direct execution, and polished output over noise.
                    </p>
                  </div>

                  <div className="mt-8 grid max-w-3xl gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-sky-200/25 bg-[#07163b]/78 p-4">
                      <p className="scenario-text text-sm text-sky-100">FOCUS</p>
                      <p className="mt-2 text-base text-gray-100">AI, frontend, and automation</p>
                    </div>
                    <div className="rounded-2xl border border-sky-200/25 bg-[#07163b]/78 p-4">
                      <p className="scenario-text text-sm text-sky-100">WORK STYLE</p>
                      <p className="mt-2 text-base text-gray-100">Independent, deadline-driven</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[1.75rem] border border-sky-200/25 bg-[#030816]/72 p-5 shadow-[0_0_24px_rgba(127,231,255,0.08)] backdrop-blur-sm md:p-6">
                  <div className="overflow-hidden rounded-[1.35rem] border border-sky-200/30 bg-[#050a18] shadow-[0_0_22px_rgba(127,231,255,0.12)]">
                    <img
                      src="/assets/orv-shot-1.jpg"
                      alt="ORV inspired portrait"
                      className="h-[24rem] w-full object-cover object-[center_18%] md:h-[30rem]"
                    />
                  </div>

                  <div className="mt-5 grid gap-3 rounded-2xl border border-sky-200/20 bg-black/20 p-4">
                    <div className="flex items-center justify-between gap-4">
                      <span className="scenario-text text-sm text-sky-100">SCENE</span>
                      <span className="text-sm text-white/90 md:text-base">Single focal image, no gallery clutter</span>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <span className="scenario-text text-sm text-sky-100">ROLE</span>
                      <span className="text-sm text-white/90 md:text-base">Software Developer</span>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <span className="scenario-text text-sm text-sky-100">FOCUS</span>
                      <span className="text-sm text-white/90 md:text-base">AI + Frontend + Automation</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  )
}