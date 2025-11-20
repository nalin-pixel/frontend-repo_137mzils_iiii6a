import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const sceneUrl = import.meta.env.VITE_SPLINE_SCENE_URL || 'https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode'

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden" id="home">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene={sceneUrl} style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient and noise overlays - pointer events none so Spline stays interactive */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/20 to-slate-950"></div>
      <div className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-40" style={{ backgroundImage: 'radial-gradient(transparent, rgba(2,6,23,0.6))' }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-24 flex flex-col items-center text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md text-sky-200">
          <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
          Innovation storytelling
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }} className="mt-6 text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white">
          Royyan Rifki Widyarto
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }} className="mt-4 max-w-2xl text-base sm:text-lg md:text-xl text-sky-100/90">
          Affiliate Property Specialist • UI/UX Designer — crafting human-centered experiences and growth-focused campaigns.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button onClick={() => scrollTo('projects')} className="group relative rounded-xl bg-sky-500 px-6 py-3 text-white transition hover:bg-sky-400">
            <span className="relative z-10 font-medium">View Work</span>
          </button>
          <button onClick={() => scrollTo('contact')} className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-white/90 backdrop-blur-md transition hover:border-white/25 hover:bg-white/10">
            Contact Me
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
