import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Smart Property Finder',
    desc: 'Lead-gen microsite with conversion-focused UX and analytics.',
    tags: ['Next.js', 'Tailwind', 'CRO'],
    link: '#'
  },
  {
    title: 'Agent Dashboard',
    desc: 'Role-based dashboard for affiliate performance tracking.',
    tags: ['React', 'Charts', 'UX'],
    link: '#'
  },
  {
    title: 'Mortgage Flow Redesign',
    desc: 'Funnel redesign that improved completion by 28%.',
    tags: ['UX Audit', 'Prototyping'],
    link: '#'
  }
]

function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="container mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-bold text-white">Selected Work</motion.h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a key={p.title} href={p.link} target="_blank" rel="noreferrer" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.5 }} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md hover:border-white/20 hover:bg-white/10 transition">
              <div className="flex items-start justify-between">
                <h3 className="text-white font-semibold text-lg">{p.title}</h3>
                <ExternalLink className="text-white/60 group-hover:text-white" size={18} />
              </div>
              <p className="mt-2 text-sky-100/90 text-sm">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
