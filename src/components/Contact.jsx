import { motion } from 'framer-motion'
import { Mail, Send } from 'lucide-react'

function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="container mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-bold text-white">Let’s build something</motion.h2>
        <motion.form initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6 }} onSubmit={(e) => e.preventDefault()} className="mt-8 grid md:grid-cols-3 gap-4">
          <input required placeholder="Your name" className="md:col-span-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/90 placeholder-white/40 outline-none focus:border-sky-400/40" />
          <input required type="email" placeholder="Email" className="md:col-span-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/90 placeholder-white/40 outline-none focus:border-sky-400/40" />
          <div className="md:col-span-1 flex gap-2">
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/80"><Mail size={18} /> hello@royrw.dev</div>
          </div>
          <textarea required placeholder="Tell me about your project..." rows={5} className="md:col-span-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/90 placeholder-white/40 outline-none focus:border-sky-400/40" />
          <div className="md:col-span-3">
            <button className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-6 py-3 text-white hover:bg-sky-400 transition"><Send size={18} /> Send</button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact
