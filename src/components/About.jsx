import { motion } from 'framer-motion'

function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="container mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-bold text-white">About</motion.h2>
        <div className="mt-8 grid md:grid-cols-2 gap-10">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md text-sky-100/90 leading-relaxed">
            <p>
              I help property brands grow through strategic affiliate programs and user-centered product design. My approach blends market insight, UX thinking, and narrative-driven content to turn complex ideas into memorable stories.
            </p>
            <p className="mt-4">
              With experience across landing pages, dashboards, and mobile apps, I focus on measurable outcomes: improved conversion, stronger retention, and delightful interactions.
            </p>
          </motion.div>
          <motion.ul initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }} className="grid grid-cols-2 gap-4">
            {[
              'UX Research', 'Wireframing', 'High-fidelity UI', 'Prototyping', 'Design Systems', 'A/B Testing', 'Affiliate Funnels', 'Landing Optimization'
            ].map((skill) => (
              <li key={skill} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/90">
                {skill}
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}

export default About
