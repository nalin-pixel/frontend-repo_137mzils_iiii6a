import { Menu, Github, Linkedin, Mail } from 'lucide-react'
import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const items = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 backdrop-blur-xl">
          <a href="#home" className="text-white font-semibold tracking-tight">Royyan RW</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            {items.map(i => (
              <a key={i.href} href={i.href} className="hover:text-white transition">{i.label}</a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a href="mailto:royyanwidyarto02@gmail.com" className="p-2 rounded-lg border border-white/10 text-white/80 hover:text-white hover:border-white/20 transition" aria-label="Email"><Mail size={18} /></a>
            <a href="https://www.linkedin.com/in/royyan15/" target="_blank" className="p-2 rounded-lg border border-white/10 text-white/80 hover:text-white hover:border-white/20 transition" aria-label="LinkedIn" rel="noreferrer"><Linkedin size={18} /></a>
            <a href="https://github.com" target="_blank" className="p-2 rounded-lg border border-white/10 text-white/80 hover:text-white hover:border-white/20 transition" aria-label="GitHub" rel="noreferrer"><Github size={18} /></a>
          </div>
          <button className="md:hidden p-2 rounded-lg border border-white/10 text-white/80" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
            <Menu />
          </button>
        </div>
        {open && (
          <div className="md:hidden mt-2 rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur-xl px-4 py-3 text-white/80">
            <nav className="flex flex-col gap-3">
              {items.map(i => (
                <a key={i.href} href={i.href} className="hover:text-white transition" onClick={() => setOpen(false)}>{i.label}</a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
